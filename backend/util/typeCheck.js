const typeModel = require("./typeModel");
const typeCheck = (text) => {

    //記号の除去
    const scrapedText = deletesymbol(text);


    const chitsuokaType = {
        regExp: '(膣|ちつ|チツ)(岡|おか|オカ)',
        type: "膣岡",
        point: 1
    }
    const checkTypes = typeModel.allTypeMaps();

    const checkResult = checkTypes.find((typeMap) => {
        const regExpObj = new RegExp(typeMap.regExp);
        return regExpObj.test(scrapedText);
    })

    const noneType = {
        type: "none",
        point: 0
    }
    if (checkResult) {
        return checkResult;
    } else {
        return noneType;
    }
}

const deletesymbol = (text) => {
    const symbols = [" ", "!", "?", "　", "！", "？"];
    symbols.forEach((symbol) => {
        text = text.replaceAll(symbol, "");
    });
    return text;
}

module.exports = typeCheck;