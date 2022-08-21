const express = require("express");
const app = express();
const PORT = 5000;
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const uploadRoute = require("./routes/upload");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

//ビルド用
app.use(express.static(path.join(__dirname, '../frontend/build')));

//DB接続
mongoose.connect(
    process.env.MONGOURL
).then(() => { console.log("DBと接続中") }).catch((err) => console.log(err));

//ミドルウェア
app.use("/images", express.static(path.join(__dirname, "public/images")))
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/upload", uploadRoute);


app.get("/", (req, res) => {
    console.log("サーバーが起動しました");
    res.send("hello express");
});
app.listen(PORT, () => console.log("サーバーが起動しました"));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`listening on *:${PORT}`);
// })