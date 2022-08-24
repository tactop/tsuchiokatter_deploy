const allTypeModels = [
    {
        genre: "土岡",
        genreDisp: "土岡",
        typeMaps: [
            {
                type: "膣岡",
                typeDisp: "膣岡",
                regExp: '(膣|ちつ|チツ)(岡|おか|オカ)',
                point: 3
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
            {
                type: "晴れのち捨て犬",
                typeDisp: "晴れのち捨て犬",
                regExp: '(はれ|晴れ)(のち|後)(すて|捨て)(いぬ|イヌ|犬)',
                point: 1
            },
            {
                type: "映画の話をドガチャガ",
                typeDisp: "映画の話をドガチャガ",
                regExp: '(映画の話を|)ドガチャガ',
                point: 3
            },

        ]
    }, {
        genre: "ぐんぴぃ",
        genreDisp: "ぐんぴぃ",
        typeMaps: [
            {
                type: "体くん",
                typeDisp: "体くん",
                regExp: '(からだ|体)(くん|君)',
                point: -1
            }, {
                type: "平成近親相姦男",
                typeDisp: "平成近親相姦男",
                regExp: '平成近親相姦男',
                point: -3
            }, {
                type: "ちんみぃ",
                typeDisp: "ちんみぃ",
                regExp: 'ちんみ(い|ぃ)',
                point: -1
            }, {
                type: "ミスター・ノービン",
                typeDisp: "ミスター・ノービン",
                regExp: 'ミスター(・|)ノービン',
                point: -1
            }, {
                type: "オナニーメッセンジャー",
                typeDisp: "オナニーメッセンジャー",
                regExp: 'オ(○|〇|ナ)ニーメッセンジャー',
                point: -1
            }, {
                type: "雌鶏知らず",
                typeDisp: "雌鶏知らず",
                regExp: '雌鶏知らず',
                point: -1
            },

        ]
    }, {
        genre: "春とヒコーキ",
        genreDisp: "春とヒコーキ",
        typeMaps: [
            {
                type: "ボグゥ",
                typeDisp: "ボグゥ",
                regExp: '(胸|)(ぼぐう|ぼぐぅ|ボグウ|ボグゥ)',
                point: -1
            }, {
                type: "槙原行雄の憂鬱",
                typeDisp: "槙原行雄の憂鬱",
                regExp: '槙原行雄(の憂鬱|)',
                point: -1
            }, {
                type: "猿の祈り",
                typeDisp: "猿の祈り",
                regExp: '猿の祈り',
                point: -1
            },
        ]
    }, {
        genre: "バキ童チャンネル",
        genreDisp: "バキ童チャンネル",
        typeMaps: [
            {
                type: "急いては事を我慢汁",
                typeDisp: "急いては事を我慢汁",
                regExp: '(せいて|急いて)は(こと|事)を(我慢汁|我〇汁|我○汁)',
                point: -5
            }, {
                type: "クランティーオゥ",
                typeDisp: "クランティーオゥ",
                regExp: 'クランティー(オ|オゥ)',
                point: -5
            }, {
                type: "ブラジルから突き上げたい",
                typeDisp: "ブラジルから突き上げたい",
                regExp: 'ブラジルから(つ|突)き(あ|上)げたい',
                point: -5
            }, {
                type: "肉襦袢 ゲブ美",
                typeDisp: "肉襦袢 ゲブ美",
                regExp: '肉(じゅばん|襦袢)(でぶ|デブ|げぶ|ゲブ)(み|美)',
                point: -5
            }
        ]
    }, {
        genre: "青学落研",
        genreDisp: "青学落研",
        typeMaps: [
            {
                type: "愚美",
                typeDisp: "愚美",
                regExp: '愚美',
                point: 2
            }, {
                type: "ホラ軍人",
                typeDisp: "ホラ軍人",
                regExp: '(ほら|ホラ)軍人',
                point: 2
            }, {
                type: "犬好き人間カピバラ君の7日間",
                typeDisp: "犬好き人間カピバラ君の7日間",
                regExp: '(いぬ|イヌ|犬)好き人間カピバラ(くん|君)の(7|７|七)日間',
                point: 2
            }, {
                type: "シュキョです",
                typeDisp: "シュキョです",
                regExp: 'シュキョ(です|)',
                point: 2
            },
        ]
    }, {
        genre: "フリー素材",
        genreDisp: "フリー素材",
        typeMaps: [
            {
                type: "誠に遺憾です",
                typeDisp: "誠に遺憾です",
                regExp: '(誠|まこと)に(遺憾|いかん)です',
                point: -3
            },   {
                type: "国鉄のにおいがムンムンするから",
                typeDisp: "国鉄のにおいがムンムンするから",
                regExp: '国鉄の(におい|臭い|匂い)が(むんむん|ムンムン)する(から|)',
                point: -3
            },{
                type: "世間は許してくれませんよ",
                typeDisp: "世間は許してくれませんよ",
                regExp: '(それはちょっと|)世間は(ゆる|許)してく.{3,6}んよ',
                point: -3
            },
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