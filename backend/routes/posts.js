const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const typeCheck = require("../util/typeCheck");

// router.get("/", (req, res) => {
//     res.send("posts router");
// });


//ポスト投稿
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    const desc = req.body.desc;
    if (!desc) {
        return res.status(404).json({ msg: "内容がありません。" });
    }
    //タイプ判定
    const type = typeCheck(desc);
    if (type.type == "none") {
        return res.status(404).json({ msg: "その投稿はできません。" });
    }
    try {
        //ユーザー情報取得
        const user = await User.findById(req.body.userId);
        //ポイント不足判定
        if (user.point + type.point < 0) {
            return res.status(404).json({ msg: "ポイントが不足しています。" });
        }
        //ポスト投稿
        newPost.type = type.type;
        const savedPost = await newPost.save();
        //ユーザー実績更新
        if (!user.achived.includes(type.type)) {
            await user.updateOne({
                $push: {
                    achived: type.type
                }
            });
        }
        //ポイント更新
        await user.updateOne({
            point: user.point + type.point
        });
        return res.status(200).json(savedPost);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
//ポスト情報更新
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({
                $set: req.body,
            })
            return res.status(200).json("投稿が更新されました");
        } else {
            return res.status(403).json("他のユーザーの投稿は編集できません");
        }
    } catch (error) {
        return res.status(403).json(error);
    }

});

//ポスト削除
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            return res.status(200).json("投稿が削除されました");
        } else {
            return res.status(403).json("他のユーザーの投稿は削除できません");
        }
    } catch (error) {
        return res.status(403).json(error);
    }
});

//ポスト取得
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);

    } catch (error) {
        return res.status(403).json(error);
    }
});

//いいね
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        //console.log(post);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({
                $push: {
                    likes: req.body.userId
                }
            });
            return res.status(200).json("いいねされました");
        } else {
            await post.updateOne({
                $pull: {
                    likes: req.body.userId
                }
            });
            return res.status(200).json("いいね解除しました");
        }
    } catch (error) {
        return res.status(403).json(error);
    }
});
//プロフィール用タイムライン取得
router.get("/profile/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        // console.log(user.username);
        const userPosts = await Post.find({ userId: user._id });
        return res.status(200).json(userPosts);
    } catch (error) {
        return res.status(500).json(error);
    }
});
// //タイムライン取得
// router.get("/timeline/:userId", async (req, res) => {
//     try {
//         const currentUser = await User.findById(req.params.userId);
//         //console.log(currentUser.username);
//         const userPosts = await Post.find({ userId: currentUser._id });
//         //フォロー中の投稿をすべて取得
//         const friendPosts = await Promise.all(
//             currentUser.followings.map((friendId) => {
//                 return Post.find({ userId: friendId });
//             })
//         );
//         return res.status(200).json(userPosts.concat(...friendPosts));
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// });
//タイムライン取得(100件取得)
router.get("/timeline/all", async (req, res) => {
    try {
        // const userPosts = await Post.find(query, {}, { sort: { createdAt: -1 }, limit: 2 }, function (err, data) {
        //     if (err) {
        //         console.log(err);
        //     }
        //     // res.render('index', {data: data});
        // });
        const userPosts = await Post.find().sort({ createdAt: -1 }).limit(50);
        return res.status(200).json(userPosts);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

module.exports = router;
