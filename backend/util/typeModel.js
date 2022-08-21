const allTypeModels = [
    {
        genre: "土岡",
        genreDisp: "土岡",
        typeMaps: [
            {
                type: "膣岡",
                typeDisp: "膣岡",
                regExp: '(膣|ちつ|チツ)(岡|おか|オカ)',
                point: 1
            }, {
                type: "月窒岡",
                typeDisp: "月窒岡",
                regExp: '月窒(岡|おか|オカ)',
                point: 1
            }, {
                type: "ヴァギ岡",
                typeDisp: "ヴァギ岡",
                regExp: 'ヴァギ(岡|おか|オカ)',
                point: 1
            },

        ]
    }, {
        genre: "ぐんぴぃ",
        genreDisp: "ぐんぴぃ",
        typeMaps: [
            {
                type: "誠に遺憾です",
                typeDisp: "誠に遺憾です",
                regExp: '(誠|まこと)に(遺憾|いかん)です',
                point: -3
            }

        ]
    },
]

const allTypeMaps = () => {
    const allTypeMapsArray = [];
    allTypeModels.map((genre) => {
        allTypeMapsArray.push(...genre.typeMaps);
    });
    return allTypeMapsArray;
}

const createAchivedTypeList = (achievedList) => {
    const achivedLists = [];
    allTypeModels.map((genre) => {
        const numInGenre = genre.typeMaps.length;

        //達成したジャンルのtypeDispのみの配列を作成。ここもう少し上手く書きたい
        const achivedListInGenre = genre.typeMaps.map((typeMap) => {
            if (achievedList.includes(typeMap.type)) {
                return typeMap.typeDisp;
            }
        }).filter(a => a);//nullを除去
        const genreMap = {
            genreDisp: genre.genreDisp,
            numInGenre: numInGenre,
            achievedNumInGenre: achivedListInGenre.length,
            achievedListInGenre: achivedListInGenre
        }
        achivedLists.push(genreMap);
    });
    return achivedLists;
}
module.exports = { allTypeMaps, createAchivedTypeList };