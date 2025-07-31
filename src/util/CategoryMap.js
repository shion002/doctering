var MainCategory;
(function (MainCategory) {
    MainCategory["HEAD"] = "head";
    MainCategory["CHEST"] = "chest";
    MainCategory["DIGESTIVE"] = "digestive";
    MainCategory["ORTHOPEDICS"] = "orthopedics";
    MainCategory["SKIN"] = "skin";
    MainCategory["MENTALITY"] = "mentality";
})(MainCategory || (MainCategory = {}));
var SubCategory;
(function (SubCategory) {
    SubCategory["HEAD"] = "subHead";
    SubCategory["FACE"] = "subFace";
    SubCategory["NECK"] = "subNeck";
    SubCategory["CHEST"] = "subChest";
    SubCategory["RESPIRATION"] = "subRespiration";
    SubCategory["ABDOMEN"] = "subAbdomen";
    SubCategory["DIGESTION"] = "subDigestion";
    SubCategory["DEFECATION"] = "subDefecation";
    SubCategory["WAIST"] = "subWaist";
    SubCategory["LEG"] = "subLeg";
    SubCategory["HAND"] = "subHand";
    SubCategory["FOOT"] = "subFoot";
    SubCategory["SKIN"] = "subSkin";
    SubCategory["ETC"] = "subEtc";
    SubCategory["MENTALITY"] = "subMentality";
    SubCategory["NERVE"] = "subNerve";
    SubCategory["URINARY"] = "subUinary";
    SubCategory["OBSTETRICS"] = "subObstetrics";
})(SubCategory || (SubCategory = {}));
var SymptomCategory;
(function (SymptomCategory) {
    SymptomCategory["STABBING_HEADACHE"] = "\uCC0C\uB974\uB4EF \uC544\uD30C\uC694";
    SymptomCategory["TIGHT_HEADACHE"] = "\uB561\uAE30\uB4EF \uC544\uD30C\uC694";
    SymptomCategory["HEAVY_HEAD"] = "\uC804\uCCB4\uC801\uC73C\uB85C \uBB34\uAC70\uC6CC\uC694";
    SymptomCategory["ONE_SIDE_HEADACHE"] = "\uD55C\uCABD\uB9CC \uC544\uD30C\uC694";
    SymptomCategory["DIZZY"] = "\uC5B4\uC9C0\uB7EC\uC6CC\uC694";
    SymptomCategory["BLURRED_VISION"] = "\uB208\uC774 \uCE68\uCE68\uD574\uC694";
    SymptomCategory["MEMORY_ISSUE"] = "\uAE30\uC5B5\uC774 \uC798 \uC548 \uB098\uC694";
    SymptomCategory["RED_EYES"] = "\uB208\uC774 \uCDA9\uD608\uB418\uC5C8\uC5B4\uC694";
    SymptomCategory["WATERY_EYES"] = "\uB208\uBB3C\uC774 \uC790\uC8FC \uB098\uC694";
    SymptomCategory["STUFFY_NOSE"] = "\uCF54\uAC00 \uB9C9\uD600\uC694";
    SymptomCategory["RUNNY_NOSE"] = "\uCF54\uC5D0\uC11C \uCF67\uBB3C\uC774 \uB098\uC640\uC694";
    SymptomCategory["MOUTH_PAIN"] = "\uC785 \uC8FC\uBCC0\uC774 \uC544\uD30C\uC694";
    SymptomCategory["MOUTH_ULCER"] = "\uC785\uC548\uC774 \uD5D0\uC5C8\uC5B4\uC694";
    SymptomCategory["JAW_PAIN"] = "\uD131\uC774 \uC544\uD30C\uC694";
    SymptomCategory["FACE_SWELLING_RASH"] = "\uC5BC\uAD74\uC774 \uBD93\uAC70\uB098 \uBC1C\uC9C4\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["NECK_PAIN"] = "\uBAA9\uC774 \uC544\uD30C\uC694";
    SymptomCategory["STIFF_NECK"] = "\uBAA9\uC774 \uBEE3\uBEE3\uD574\uC694";
    SymptomCategory["DIFFICULTY_TURNING_NECK"] = "\uBAA9\uC744 \uB3CC\uB9AC\uAE30 \uD798\uB4E4\uC5B4\uC694";
    SymptomCategory["NECK_LUMP"] = "\uBAA9\uC5D0 \uD639\uC774 \uB9CC\uC838\uC838\uC694";
    SymptomCategory["SWOLLEN_NECK_FEVER"] = "\uBAA9\uC774 \uBD93\uAC70\uB098 \uC5F4\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["CHEST_TIGHTNESS"] = "\uAC00\uC2B4\uC774 \uB2F5\uB2F5\uD574\uC694";
    SymptomCategory["PALPITATIONS"] = "\uC2EC\uC7A5\uC774 \uB450\uADFC\uAC70\uB824\uC694";
    SymptomCategory["CHEST_PAIN"] = "\uAC00\uC2B4\uC774 \uC544\uD30C\uC694";
    SymptomCategory["SHORTNESS_OF_BREATH"] = "\uC228\uC26C\uAE30 \uD798\uB4E4\uC5B4\uC694";
    SymptomCategory["CHEST_PRESSURE"] = "\uAC00\uC2B4\uC5D0 \uC555\uBC15\uAC10\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["COUGH"] = "\uAE30\uCE68\uC774 \uB098\uC694";
    SymptomCategory["PHLEGM"] = "\uAC00\uB798\uAC00 \uB07C\uC5B4\uC694";
    SymptomCategory["BREATHLESSNESS"] = "\uC228\uC774 \uCC28\uC694";
    SymptomCategory["WHEEZING"] = "\uD638\uD761 \uC2DC \uC315\uC315\uAC70\uB824\uC694";
    SymptomCategory["ITCHY_THROAT"] = "\uBAA9\uC774 \uAC04\uC9C8\uAC70\uB824\uC694";
    SymptomCategory["ABDOMINAL_PAIN"] = "\uBCF5\uD1B5\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["BLOATING"] = "\uC18D\uC774 \uB354\uBD80\uB8E9\uD574\uC694";
    SymptomCategory["HEARTBURN"] = "\uC18D\uC4F0\uB9BC\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["ABDOMINAL_DISTENSION"] = "\uBCF5\uBD80\uAC00 \uD33D\uCC3D\uB41C \uB290\uB08C\uC774\uC5D0\uC694";
    SymptomCategory["DIARRHEA_PAIN"] = "\uBC30\uAC00 \uC544\uD504\uBA74\uC11C \uC124\uC0AC\uAC00 \uB098\uC694";
    SymptomCategory["INDIGESTION"] = "\uC18C\uD654\uAC00 \uC798 \uC548\uB3FC\uC694";
    SymptomCategory["POSTMEAL_DISCOMFORT"] = "\uC2DD\uD6C4\uC5D0 \uC18D\uC774 \uBD88\uD3B8\uD574\uC694";
    SymptomCategory["FREQUENT_BELCHING"] = "\uD2B8\uB9BC\uC774 \uC790\uC8FC \uB098\uC640\uC694";
    SymptomCategory["NAUSEA"] = "\uC18D\uC774 \uBA54\uC2A4\uAEBC\uC6CC\uC694";
    SymptomCategory["LOSS_OF_APPETITE"] = "\uC2DD\uC695\uC774 \uC5C6\uC5B4\uC694";
    SymptomCategory["CONSTIPATION"] = "\uBCC0\uBE44\uAC00 \uC788\uC5B4\uC694";
    SymptomCategory["DIARRHEA"] = "\uC124\uC0AC\uB97C \uD574\uC694";
    SymptomCategory["PAINFUL_DEFECATION"] = "\uBC30\uBCC0 \uC2DC \uD1B5\uC99D\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["BLOODY_STOOL"] = "\uD608\uBCC0\uC774 \uB098\uC640\uC694";
    SymptomCategory["INCOMPLETE_DEFECATION"] = "\uBC30\uBCC0 \uD6C4\uC5D0\uB3C4 \uC794\uBCC0\uAC10\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["BACK_PAIN"] = "\uD5C8\uB9AC\uAC00 \uC544\uD30C\uC694";
    SymptomCategory["STIFF_BACK"] = "\uD5C8\uB9AC\uAC00 \uBEE3\uBEE3\uD574\uC694";
    SymptomCategory["CANNOT_BEND_BACK"] = "\uD5C8\uB9AC\uB97C \uC219\uC774\uAE30 \uD798\uB4E4\uC5B4\uC694";
    SymptomCategory["LEG_RADIATING_PAIN"] = "\uD5C8\uB9AC\uC5D0\uC11C \uB2E4\uB9AC\uB85C \uD1B5\uC99D\uC774 \uB0B4\uB824\uAC00\uC694";
    SymptomCategory["SHARP_BACK_PAIN"] = "\uD5C8\uB9AC\uC5D0 \uCC0C\uB9BF\uD55C \uB290\uB08C\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["NUMB_LEGS"] = "\uB2E4\uB9AC\uAC00 \uC800\uB824\uC694";
    SymptomCategory["WEAK_LEGS"] = "\uB2E4\uB9AC\uC5D0 \uD798\uC774 \uC5C6\uC5B4\uC694";
    SymptomCategory["KNEE_PAIN"] = "\uBB34\uB98E\uC774 \uC544\uD30C\uC694";
    SymptomCategory["CALF_SWELLING_PAIN"] = "\uC885\uC544\uB9AC\uAC00 \uBD93\uAC70\uB098 \uC544\uD30C\uC694";
    SymptomCategory["HEAVY_LEGS"] = "\uB2E4\uB9AC\uAC00 \uBD93\uACE0 \uBB34\uAC70\uC6CC\uC694";
    SymptomCategory["NUMB_HANDS"] = "\uC190\uC774 \uC800\uB824\uC694";
    SymptomCategory["WRIST_PAIN"] = "\uC190\uBAA9\uC774 \uC544\uD30C\uC694";
    SymptomCategory["STIFF_FINGERS"] = "\uC190\uAC00\uB77D\uC774 \uAD73\uC5B4\uC694";
    SymptomCategory["WEAK_HANDS"] = "\uC190\uC5D0 \uD798\uC774 \uC5C6\uC5B4\uC694";
    SymptomCategory["SWOLLEN_HANDS"] = "\uC190\uC774 \uBD93\uAC70\uB098 \uC5F4\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["NUMB_FEET"] = "\uBC1C\uC774 \uC800\uB824\uC694";
    SymptomCategory["ANKLE_PAIN"] = "\uBC1C\uBAA9\uC774 \uC544\uD30C\uC694";
    SymptomCategory["FOOT_PAIN"] = "\uBC1C\uBC14\uB2E5\uC5D0 \uD1B5\uC99D\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["SWOLLEN_FEET"] = "\uBC1C\uC774 \uBD93\uAC70\uB098 \uC5F4\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["NUMBNESS_FEET"] = "\uBC1C\uC5D0 \uAC10\uAC01\uC774 \uB454\uD574\uC694";
    SymptomCategory["ITCHY_SKIN"] = "\uAC00\uB824\uC6C0\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["RASH"] = "\uBC1C\uC9C4\uC774 \uC0DD\uACBC\uC5B4\uC694";
    SymptomCategory["DRY_SKIN"] = "\uD53C\uBD80\uAC00 \uAC74\uC870\uD574\uC694";
    SymptomCategory["RED_SPOTS"] = "\uD53C\uBD80\uC5D0 \uBD89\uC740 \uBC18\uC810\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["PEELING_SKIN"] = "\uD53C\uBD80\uAC00 \uBC97\uACA8\uC838\uC694";
    SymptomCategory["FATIGUE"] = "\uC804\uC2E0 \uD53C\uB85C\uAC10\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["WEIGHT_CHANGE"] = "\uCCB4\uC911\uC774 \uAE09\uACA9\uD788 \uBCC0\uD588\uC5B4\uC694";
    SymptomCategory["PERSISTENT_FEVER"] = "\uC5F4\uC774 \uC9C0\uC18D\uB3FC\uC694";
    SymptomCategory["APPETITE_LOSS"] = "\uC2DD\uC695\uC774 \uAC10\uC18C\uD588\uC5B4\uC694";
    SymptomCategory["UNKNOWN_PAIN"] = "\uC6D0\uC778\uC744 \uC54C \uC218 \uC5C6\uB294 \uD1B5\uC99D\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["ANXIETY"] = "\uBD88\uC548\uAC10\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["PSYCHOSOMATIC_PAIN"] = "\uBAB8\uC5D0 \uC774\uC0C1\uC774 \uC5C6\uB294\uB370 \uC544\uD30C\uC694";
    SymptomCategory["DEPRESSION"] = "\uC6B0\uC6B8\uD55C \uAE30\uBD84\uC774 \uB4E4\uC5B4\uC694";
    SymptomCategory["SLEEP_DISORDER"] = "\uC218\uBA74\uC5D0 \uBB38\uC81C\uAC00 \uC788\uC5B4\uC694";
    SymptomCategory["LOW_CONCENTRATION"] = "\uC9D1\uC911\uB825\uC774 \uB5A8\uC5B4\uC838\uC694";
    SymptomCategory["MEMORY_LOSS"] = "\uAE30\uC5B5\uB825\uC774 \uAC10\uD1F4\uD588\uC5B4\uC694";
    SymptomCategory["FREQUENT_URINATION"] = "\uC18C\uBCC0\uC774 \uC790\uC8FC \uB9C8\uB824\uC6CC\uC694";
    SymptomCategory["PAINFUL_URINATION"] = "\uC18C\uBCC0\uC744 \uBCFC \uB54C \uD1B5\uC99D\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["CLOUDY_URINE"] = "\uC18C\uBCC0 \uC0C9\uC774 \uD0C1\uD574\uC694";
    SymptomCategory["URGENCY"] = "\uC18C\uBCC0\uC744 \uCC38\uAE30 \uC5B4\uB824\uC6CC\uC694";
    SymptomCategory["BLOODY_URINE"] = "\uC18C\uBCC0\uC5D0 \uD53C\uAC00 \uC11E\uC5EC \uB098\uC640\uC694";
    SymptomCategory["IRREGULAR_PERIOD"] = "\uC0DD\uB9AC \uC8FC\uAE30\uAC00 \uBD88\uADDC\uCE59\uD574\uC694";
    SymptomCategory["MENSTRUAL_PAIN"] = "\uC0DD\uB9AC\uD1B5\uC774 \uC2EC\uD574\uC694";
    SymptomCategory["HEAVY_DISCHARGE"] = "\uC9C8 \uBD84\uBE44\uBB3C\uC774 \uB9CE\uC544\uC694";
    SymptomCategory["VAGINAL_ITCH_PAIN"] = "\uC9C8 \uAC00\uB824\uC6C0\uC774\uB098 \uD1B5\uC99D\uC774 \uC788\uC5B4\uC694";
    SymptomCategory["POSTMENOPAUSAL_BLEEDING"] = "\uD3D0\uACBD \uD6C4 \uCD9C\uD608\uC774 \uC788\uC5B4\uC694";
})(SymptomCategory || (SymptomCategory = {}));
export const CategoryMap = {
    1: [
        { title: "머리/얼굴/목", value: MainCategory.HEAD },
        { title: "가슴/호흡기", value: MainCategory.CHEST },
        { title: "배/소화/배변", value: MainCategory.DIGESTIVE },
        { title: "허리/다리/손/발", value: MainCategory.ORTHOPEDICS },
        { title: "피부/기타", value: MainCategory.SKIN },
        { title: "정신/신경/비뇨기/산부인과", value: MainCategory.MENTALITY },
    ],
    2: {
        [MainCategory.HEAD]: [
            { title: "머리", value: SubCategory.HEAD },
            { title: "얼굴", value: SubCategory.FACE },
            { title: "목", value: SubCategory.NECK },
        ],
        [MainCategory.CHEST]: [
            { title: "가슴", value: SubCategory.CHEST },
            { title: "호흡기", value: SubCategory.RESPIRATION },
        ],
        [MainCategory.DIGESTIVE]: [
            { title: "배", value: SubCategory.ABDOMEN },
            { title: "소화", value: SubCategory.DIGESTION },
            { title: "배변", value: SubCategory.DEFECATION },
        ],
        [MainCategory.ORTHOPEDICS]: [
            { title: "허리", value: SubCategory.WAIST },
            { title: "다리", value: SubCategory.LEG },
            { title: "손", value: SubCategory.HAND },
            { title: "발", value: SubCategory.FOOT },
        ],
        [MainCategory.SKIN]: [
            { title: "피부", value: SubCategory.SKIN },
            { title: "기타", value: SubCategory.ETC },
        ],
        [MainCategory.MENTALITY]: [
            { title: "정신", value: SubCategory.MENTALITY },
            { title: "신경", value: SubCategory.NERVE },
            { title: "비뇨기", value: SubCategory.URINARY },
            { title: "산부인과", value: SubCategory.OBSTETRICS },
        ],
    },
    3: {
        [SubCategory.HEAD]: [
            { title: "찌르듯 아파요", value: SymptomCategory.STABBING_HEADACHE },
            { title: "땡기듯 아파요", value: SymptomCategory.TIGHT_HEADACHE },
            { title: "전체적으로 무거워요", value: SymptomCategory.HEAVY_HEAD },
            { title: "한쪽만 아파요", value: SymptomCategory.ONE_SIDE_HEADACHE },
            { title: "어지러워요", value: SymptomCategory.DIZZY },
            { title: "눈이 침침해요", value: SymptomCategory.BLURRED_VISION },
            { title: "기억이 잘 안 나요", value: SymptomCategory.MEMORY_ISSUE },
        ],
        [SubCategory.FACE]: [
            { title: "눈이 충혈되었어요", value: SymptomCategory.RED_EYES },
            { title: "눈물이 자주 나요", value: SymptomCategory.WATERY_EYES },
            { title: "코가 막혀요", value: SymptomCategory.STUFFY_NOSE },
            { title: "코에서 콧물이 나와요", value: SymptomCategory.RUNNY_NOSE },
            { title: "입 주변이 아파요", value: SymptomCategory.MOUTH_PAIN },
            { title: "입안이 헐었어요", value: SymptomCategory.MOUTH_ULCER },
            { title: "턱이 아파요", value: SymptomCategory.JAW_PAIN },
            {
                title: "얼굴이 붓거나 발진이 있어요",
                value: SymptomCategory.FACE_SWELLING_RASH,
            },
        ],
        [SubCategory.NECK]: [
            { title: "목이 아파요", value: SymptomCategory.NECK_PAIN },
            { title: "목이 뻣뻣해요", value: SymptomCategory.STIFF_NECK },
            {
                title: "목을 돌리기 힘들어요",
                value: SymptomCategory.DIFFICULTY_TURNING_NECK,
            },
            { title: "목에 혹이 만져져요", value: SymptomCategory.NECK_LUMP },
            {
                title: "목이 붓거나 열이 있어요",
                value: SymptomCategory.SWOLLEN_NECK_FEVER,
            },
        ],
        [SubCategory.CHEST]: [
            { title: "가슴이 답답해요", value: SymptomCategory.CHEST_TIGHTNESS },
            { title: "심장이 두근거려요", value: SymptomCategory.PALPITATIONS },
            { title: "가슴이 아파요", value: SymptomCategory.CHEST_PAIN },
            {
                title: "숨쉬기 힘들어요",
                value: SymptomCategory.SHORTNESS_OF_BREATH,
            },
            {
                title: "가슴에 압박감이 있어요",
                value: SymptomCategory.CHEST_PRESSURE,
            },
        ],
        [SubCategory.RESPIRATION]: [
            { title: "기침이 나요", value: SymptomCategory.COUGH },
            { title: "가래가 끼어요", value: SymptomCategory.PHLEGM },
            { title: "숨이 차요", value: SymptomCategory.BREATHLESSNESS },
            { title: "호흡 시 쌕쌕거려요", value: SymptomCategory.WHEEZING },
            { title: "목이 간질거려요", value: SymptomCategory.ITCHY_THROAT },
        ],
        [SubCategory.ABDOMEN]: [
            { title: "복통이 있어요", value: SymptomCategory.ABDOMINAL_PAIN },
            { title: "속이 더부룩해요", value: SymptomCategory.BLOATING },
            { title: "속쓰림이 있어요", value: SymptomCategory.HEARTBURN },
            {
                title: "복부가 팽창된 느낌이에요",
                value: SymptomCategory.ABDOMINAL_DISTENSION,
            },
            {
                title: "배가 아프면서 설사가 나요",
                value: SymptomCategory.DIARRHEA_PAIN,
            },
        ],
        [SubCategory.DIGESTION]: [
            { title: "소화가 잘 안돼요", value: SymptomCategory.INDIGESTION },
            {
                title: "식후에 속이 불편해요",
                value: SymptomCategory.POSTMEAL_DISCOMFORT,
            },
            {
                title: "트림이 자주 나와요",
                value: SymptomCategory.FREQUENT_BELCHING,
            },
            { title: "속이 메스꺼워요", value: SymptomCategory.NAUSEA },
            { title: "식욕이 없어요", value: SymptomCategory.LOSS_OF_APPETITE },
        ],
        [SubCategory.DEFECATION]: [
            { title: "변비가 있어요", value: SymptomCategory.CONSTIPATION },
            { title: "설사를 해요", value: SymptomCategory.DIARRHEA },
            {
                title: "배변 시 통증이 있어요",
                value: SymptomCategory.PAINFUL_DEFECATION,
            },
            { title: "혈변이 나와요", value: SymptomCategory.BLOODY_STOOL },
            {
                title: "배변 후에도 잔변감이 있어요",
                value: SymptomCategory.INCOMPLETE_DEFECATION,
            },
        ],
        [SubCategory.WAIST]: [
            { title: "허리가 아파요", value: SymptomCategory.BACK_PAIN },
            { title: "허리가 뻣뻣해요", value: SymptomCategory.STIFF_BACK },
            {
                title: "허리를 숙이기 힘들어요",
                value: SymptomCategory.CANNOT_BEND_BACK,
            },
            {
                title: "허리에서 다리로 통증이 내려가요",
                value: SymptomCategory.LEG_RADIATING_PAIN,
            },
            {
                title: "허리에 찌릿한 느낌이 있어요",
                value: SymptomCategory.SHARP_BACK_PAIN,
            },
        ],
        [SubCategory.LEG]: [
            { title: "다리가 저려요", value: SymptomCategory.NUMB_LEGS },
            { title: "다리에 힘이 없어요", value: SymptomCategory.WEAK_LEGS },
            { title: "무릎이 아파요", value: SymptomCategory.KNEE_PAIN },
            {
                title: "종아리가 붓거나 아파요",
                value: SymptomCategory.CALF_SWELLING_PAIN,
            },
            { title: "다리가 붓고 무거워요", value: SymptomCategory.HEAVY_LEGS },
        ],
        [SubCategory.HAND]: [
            { title: "손이 저려요", value: SymptomCategory.NUMB_HANDS },
            { title: "손목이 아파요", value: SymptomCategory.WRIST_PAIN },
            { title: "손가락이 굳어요", value: SymptomCategory.STIFF_FINGERS },
            { title: "손에 힘이 없어요", value: SymptomCategory.WEAK_HANDS },
            {
                title: "손이 붓거나 열이 있어요",
                value: SymptomCategory.SWOLLEN_HANDS,
            },
        ],
        [SubCategory.FOOT]: [
            { title: "발이 저려요", value: SymptomCategory.NUMB_FEET },
            { title: "발목이 아파요", value: SymptomCategory.ANKLE_PAIN },
            { title: "발바닥에 통증이 있어요", value: SymptomCategory.FOOT_PAIN },
            {
                title: "발이 붓거나 열이 있어요",
                value: SymptomCategory.SWOLLEN_FEET,
            },
            { title: "발에 감각이 둔해요", value: SymptomCategory.NUMBNESS_FEET },
        ],
        [SubCategory.SKIN]: [
            { title: "가려움이 있어요", value: SymptomCategory.ITCHY_SKIN },
            { title: "발진이 생겼어요", value: SymptomCategory.RASH },
            { title: "피부가 건조해요", value: SymptomCategory.DRY_SKIN },
            {
                title: "피부에 붉은 반점이 있어요",
                value: SymptomCategory.RED_SPOTS,
            },
            { title: "피부가 벗겨져요", value: SymptomCategory.PEELING_SKIN },
        ],
        [SubCategory.ETC]: [
            { title: "전신 피로감이 있어요", value: SymptomCategory.FATIGUE },
            {
                title: "체중이 급격히 변했어요",
                value: SymptomCategory.WEIGHT_CHANGE,
            },
            { title: "열이 지속돼요", value: SymptomCategory.PERSISTENT_FEVER },
            { title: "식욕이 감소했어요", value: SymptomCategory.APPETITE_LOSS },
            {
                title: "원인을 알 수 없는 통증이 있어요",
                value: SymptomCategory.UNKNOWN_PAIN,
            },
        ],
        [SubCategory.MENTALITY]: [
            { title: "불안감이 있어요", value: SymptomCategory.ANXIETY },
            {
                title: "몸에 이상이 없는데 아파요",
                value: SymptomCategory.PSYCHOSOMATIC_PAIN,
            },
            { title: "우울한 기분이 들어요", value: SymptomCategory.DEPRESSION },
            {
                title: "수면에 문제가 있어요",
                value: SymptomCategory.SLEEP_DISORDER,
            },
            {
                title: "집중력이 떨어져요",
                value: SymptomCategory.LOW_CONCENTRATION,
            },
            { title: "기억력이 감퇴했어요", value: SymptomCategory.MEMORY_LOSS },
        ],
        [SubCategory.URINARY]: [
            {
                title: "소변이 자주 마려워요",
                value: SymptomCategory.FREQUENT_URINATION,
            },
            {
                title: "소변을 볼 때 통증이 있어요",
                value: SymptomCategory.PAINFUL_URINATION,
            },
            { title: "소변 색이 탁해요", value: SymptomCategory.CLOUDY_URINE },
            { title: "소변을 참기 어려워요", value: SymptomCategory.URGENCY },
            {
                title: "소변에 피가 섞여 나와요",
                value: SymptomCategory.BLOODY_URINE,
            },
        ],
        [SubCategory.OBSTETRICS]: [
            {
                title: "생리 주기가 불규칙해요",
                value: SymptomCategory.IRREGULAR_PERIOD,
            },
            { title: "생리통이 심해요", value: SymptomCategory.MENSTRUAL_PAIN },
            { title: "질 분비물이 많아요", value: SymptomCategory.HEAVY_DISCHARGE },
            {
                title: "질 가려움이나 통증이 있어요",
                value: SymptomCategory.VAGINAL_ITCH_PAIN,
            },
            {
                title: "폐경 후 출혈이 있어요",
                value: SymptomCategory.POSTMENOPAUSAL_BLEEDING,
            },
        ],
    },
    4: {
        [SymptomCategory.STABBING_HEADACHE]: [
            {
                disease: ["편두통", "군발두통", "삼차신경통"],
                measures: [
                    "조용하고 어두운 곳에서 휴식",
                    "이마나 목 뒤에 찬 찜질 적용",
                    "진통제 복용 (의사 지시에 따라)",
                ],
                department: ["신경과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.TIGHT_HEADACHE]: [
            {
                disease: ["긴장성 두통", "경추성 두통", "후두 신경통"],
                measures: [
                    "목과 어깨 스트레칭",
                    "온찜질",
                    "충분한 수면",
                    "장시간 화면 사용 제한",
                ],
                department: ["신경과", "재활의학과", "정형외과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.HEAVY_HEAD]: [
            {
                disease: ["고혈압성 두통", "뇌압 상승"],
                measures: [
                    "혈압 측정",
                    "카페인 섭취 제한",
                    "수면 패턴 조절",
                    "필요 시 의료기관 방문(특히 고혈압 있을 경우)",
                ],
                department: ["신경과", "내과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.ONE_SIDE_HEADACHE]: [
            {
                disease: ["편두통", "군발두통"],
                measures: ["조용한 환경에서 휴식", "찬찜질", "진통제 복용(필요 시)"],
                department: ["신경과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.DIZZY]: [
            {
                disease: ["이석증", "메니에르병", "저혈압"],
                measures: [
                    "안정된 자세로 휴식",
                    "수분 섭취",
                    "급격한 자세 변화 피하기",
                    "눈 감고 벽 기대기 등 낙상 예방",
                ],
                department: ["이비인후과", "신경과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.BLURRED_VISION]: [
            {
                disease: ["안구건조증", "백내장", "녹내장"],
                measures: [
                    "인공눈물 사용",
                    "눈 휴식",
                    "정기적인 안과 검진",
                    "화면 밝기 조절 및 자외선 차단",
                    "급격한 시력저하 시 병원 방문",
                ],
                department: ["안과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.MEMORY_ISSUE]: [
            {
                disease: ["경도인지장애", "알츠하이머병"],
                measures: [
                    "메모 습관",
                    "규칙적인 생활",
                    "전문의 상담",
                    "두뇌 훈련 게임 및 운동 병행",
                    "증상 반복될 경우 병원 방문",
                ],
                department: ["신경과", "정신건강의학과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.RED_EYES]: [
            {
                disease: ["결막염", "안구건조증"],
                measures: ["인공눈물 사용", "손 씻기", "눈 비비지 않기"],
                department: ["안과"],
                serverity: "낮음",
                recommendVisit: false,
            },
        ],
        [SymptomCategory.WATERY_EYES]: [
            {
                disease: ["안구건조증", "눈물샘 이상"],
                measures: ["인공눈물 사용", "바람이나 건조한 환경 피하기"],
                department: ["안과"],
                serverity: "낮음",
                recommendVisit: false,
            },
        ],
        [SymptomCategory.STUFFY_NOSE]: [
            {
                disease: ["비염", "부비동염"],
                measures: ["온찜질", "생리식염수 코세척"],
                department: ["이비인후과"],
                serverity: "낮음",
                recommendVisit: false,
            },
        ],
        [SymptomCategory.RUNNY_NOSE]: [
            {
                disease: ["감기", "알레르기성 비염"],
                measures: ["수분 섭취", "알레르기 유발 요인 피하기"],
                department: ["이비인후과"],
                serverity: "낮음",
                recommendVisit: false,
            },
        ],
        [SymptomCategory.MOUTH_PAIN]: [
            {
                disease: ["구순염", "헤르페스"],
                measures: ["보습제 사용", "자극적인 음식 피하기"],
                department: ["피부과", "치과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.MOUTH_ULCER]: [
            {
                disease: ["구내염", "비타민 부족"],
                measures: ["구강 청결 유지", "비타민 섭취"],
                department: ["치과", "내과"],
                serverity: "낮음",
                recommendVisit: false,
            },
        ],
        [SymptomCategory.JAW_PAIN]: [
            {
                disease: ["턱관절 장애", "치과 질환"],
                measures: ["딱딱한 음식 피하기", "온찜질"],
                department: ["치과", "이비인후과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.FACE_SWELLING_RASH]: [
            {
                disease: ["알레르기 반응", "피부염"],
                measures: ["알레르기 유발 요인 피하기", "저자극성 보습제 사용"],
                department: ["피부과", "알레르기내과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.NECK_PAIN]: [
            {
                disease: ["경추염좌", "인후염"],
                measures: ["목 휴식", "온찜질", "진통제 복용"],
                department: ["재활의학과", "이비인후과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.STIFF_NECK]: [
            {
                disease: ["경추염좌", "수막염"],
                measures: ["온찜질", "스트레칭", "고열 동반 시 의료기관 방문"],
                department: ["신경과", "재활의학과"],
                serverity: "높음",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.DIFFICULTY_TURNING_NECK]: [
            {
                disease: ["경추염좌", "디스크"],
                measures: ["목 고정", "무리한 움직임 피하기"],
                department: ["정형외과", "재활의학과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.NECK_LUMP]: [
            {
                disease: ["림프절염", "갑상선 결절"],
                measures: ["혹의 변화 관찰", "전문의 상담"],
                department: ["내분비내과", "이비인후과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.SWOLLEN_NECK_FEVER]: [
            {
                disease: ["편도염", "인후염"],
                measures: ["수분 섭취", "휴식", "해열제 복용"],
                department: ["이비인후과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.CHEST_TIGHTNESS]: [
            {
                disease: ["협심증", "공황장애", "천식"],
                measures: [
                    "안정된 자세로 휴식",
                    "깊게 호흡하기",
                    "지속되거나 악화되면 즉시 병원 방문",
                ],
                department: ["심장내과", "호흡기내과", "정신건강의학과"],
                serverity: "높음",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.PALPITATIONS]: [
            {
                disease: ["부정맥", "불안장애", "갑상선 기능 이상"],
                measures: [
                    "안정 취하기",
                    "카페인 섭취 줄이기",
                    "증상 반복 시 병원 진료",
                ],
                department: ["내과", "내분비내과", "정신건강의학과"],
                serverity: "중간",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.CHEST_PAIN]: [
            {
                disease: ["심근경색", "협심증", "역류성 식도염"],
                measures: [
                    "즉시 휴식",
                    "심한 통증 시 119 또는 응급실 방문",
                    "자주 발생하면 정밀 검사 필요",
                ],
                department: ["심장내과", "소화기내과"],
                serverity: "높음",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.SHORTNESS_OF_BREATH]: [
            {
                disease: ["폐렴", "심부전", "천식"],
                measures: [
                    "좌위 자세로 안정 취하기",
                    "산소 공급 가능 시 도움 받기",
                    "호흡 곤란 지속 시 즉시 병원 방문",
                ],
                department: ["호흡기내과", "심장내과"],
                serverity: "높음",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.CHEST_PRESSURE]: [
            {
                disease: ["협심증", "심근경색", "과호흡 증후군"],
                measures: [
                    "활동 중단 후 휴식",
                    "호흡 조절",
                    "30분 이상 지속 시 응급실 방문",
                ],
                department: ["심장내과", "호흡기내과"],
                serverity: "높음",
                recommendVisit: true,
            },
        ],
        [SymptomCategory.COUGH]: [
            {
                disease: ["감기", "기관지염", "폐렴", "천식"],
                measures: [
                    "따뜻한 물 자주 마시기",
                    "실내 습도 유지",
                    "자극적인 음식 피하기",
                ],
            },
        ],
        [SymptomCategory.PHLEGM]: [
            {
                disease: ["급성 기관지염", "만성 폐쇄성 폐질환(COPD)", "폐렴"],
                measures: [
                    "수분 충분히 섭취",
                    "가래 배출을 돕는 자세(고개 약간 숙이고 기침)",
                ],
            },
        ],
        [SymptomCategory.SHORTNESS_OF_BREATH]: [
            {
                disease: ["심부전", "천식", "폐렴", "폐색전증"],
                measures: [
                    "편한 자세(상체를 세워 앉기)",
                    "문 열고 환기",
                    "필요시 즉시 119",
                ],
            },
        ],
        [SymptomCategory.WHEEZING]: [
            {
                disease: ["천식", "기관지염", "알레르기 반응"],
                measures: [
                    "자극 제거",
                    "손쉬운 호흡 자세 유지",
                    "이전 흡입기 있으면 사용",
                ],
            },
        ],
        [SymptomCategory.ITCHY_THROAT]: [
            {
                disease: ["인후염", "알레르기성 비염", "감기 초기"],
                measures: ["미지근한 물 자주 마시기", "말 줄이기", "실내 공기 정화"],
            },
        ],
        [SymptomCategory.ABDOMINAL_PAIN]: [
            {
                disease: ["급성 위염", "장염", "소화성 궤양", "맹장염"],
                measures: ["금식 후 물 섭취", "복부 찜질", "통증 지속 시 병원 방문"],
            },
        ],
        [SymptomCategory.BLOATING]: [
            {
                disease: ["소화불량", "기능성 소화 장애", "위장 운동 저하"],
                measures: ["가볍게 걷기", "따뜻한 차 섭취(생강차 등)", "과식 피하기"],
            },
        ],
        [SymptomCategory.HEARTBURN]: [
            {
                disease: ["위식도 역류 질환(GERD)", "위염", "소화성 궤양"],
                measures: ["누운 자세 피하기", "자극적인 음식 피하기", "제산제 복용"],
            },
        ],
        [SymptomCategory.ABDOMINAL_DISTENSION]: [
            {
                disease: ["과민성 대장증후군", "장내 가스", "변비"],
                measures: ["따뜻한 물 마시기", "복부 마사지", "가벼운 운동"],
            },
        ],
        [SymptomCategory.DIARRHEA_PAIN]: [
            {
                disease: ["급성 장염", "식중독", "바이러스 감염"],
                measures: ["탈수 방지를 위해 수분/전해질 보충", "자극적인 음식 금지"],
            },
        ],
        [SymptomCategory.INDIGESTION]: [
            {
                disease: ["위장 장애", "위 마비", "기능성 소화불량"],
                measures: ["소량씩 자주 식사", "식후 바로 눕지 않기", "가벼운 산책"],
            },
        ],
        [SymptomCategory.POSTMEAL_DISCOMFORT]: [
            {
                disease: ["위염", "담낭 질환", "위식도 역류"],
                measures: ["기름진 음식 줄이기", "식사량 조절", "소화제 복용 고려"],
            },
        ],
        [SymptomCategory.FREQUENT_BELCHING]: [
            {
                disease: ["기능성 소화불량", "공기 삼킴증", "위산과다"],
                measures: ["가스가 많이 나오는 음식 피하기(탄산음료 등)"],
            },
        ],
        [SymptomCategory.NAUSEA]: [
            {
                disease: ["위염", "임신 초기", "간 질환"],
                measures: ["생강차 섭취", "기름진 음식 피하기", "증상 지속 시 진료"],
            },
        ],
        [SymptomCategory.LOSS_OF_APPETITE]: [
            {
                disease: ["감기", "소화기 질환", "간 기능 이상", "우울증"],
                measures: ["수분 섭취 유지", "가벼운 유동식 섭취", "장기화되면 진료"],
            },
        ],
        [SymptomCategory.CONSTIPATION]: [
            {
                disease: ["기능성 변비", "과민성 대장증후군", "대장 운동 저하"],
                measures: ["수분·섬유질 섭취 증가", "규칙적인 배변 습관 들이기"],
            },
        ],
        [SymptomCategory.DIARRHEA]: [
            {
                disease: ["급성 장염", "식중독", "크론병"],
                measures: [
                    "수분 보충",
                    "금식 또는 부드러운 식사",
                    "지사제 복용은 신중히",
                ],
            },
        ],
        [SymptomCategory.PAINFUL_DEFECATION]: [
            {
                disease: ["치질", "항문 열상", "직장염"],
                measures: [
                    "좌욕",
                    "변을 부드럽게 만드는 식단 유지",
                    "자극적인 음식 피하기",
                ],
            },
        ],
        [SymptomCategory.BLOODY_STOOL]: [
            {
                disease: ["치질", "대장폴립", "궤양성 대장염"],
                measures: [
                    "혈변 지속 시 병원 방문",
                    "섬유질 섭취 늘리기",
                    "과도한 힘주기 피하기",
                ],
            },
        ],
        [SymptomCategory.INCOMPLETE_DEFECATION]: [
            {
                disease: ["과민성 대장증후군", "직장출구 폐쇄증"],
                measures: ["배변 시간 충분히 확보", "식이 섬유 섭취 늘리기"],
            },
        ],
        [SymptomCategory.BACK_PAIN]: [
            {
                disease: ["요추염좌", "추간판 탈출증", "근육통"],
                measures: ["잠시 안정", "허리 스트레칭", "온찜질"],
            },
        ],
        [SymptomCategory.STIFF_BACK]: [
            {
                disease: ["강직성 척추염", "근육 긴장", "디스크 초기 증상"],
                measures: ["가벼운 운동", "자세 교정", "증상 지속 시 영상 검사 필요"],
            },
        ],
        [SymptomCategory.CANNOT_BEND_BACK]: [
            {
                disease: ["요추염좌", "척추관 협착증"],
                measures: ["무거운 물건 피하기", "찜질 요법", "자세 주의"],
            },
        ],
        [SymptomCategory.LEG_RADIATING_PAIN]: [
            {
                disease: ["좌골신경통", "디스크"],
                measures: ["무리한 움직임 제한", "누워서 다리 높이기", "냉찜질"],
            },
        ],
        [SymptomCategory.SHARP_BACK_PAIN]: [
            {
                disease: ["척추 신경 눌림", "디스크"],
                measures: ["갑작스러운 움직임 피하기", "통증 부위 압박 피하기"],
            },
        ],
        [SymptomCategory.NUMB_LEGS]: [
            {
                disease: ["좌골신경통", "허리디스크", "당뇨병성 신경병증"],
                measures: [
                    "누워서 다리 올리기",
                    "무리한 활동 중단",
                    "통증 지속 시 신경과 진료",
                ],
            },
        ],
        [SymptomCategory.WEAK_LEGS]: [
            {
                disease: ["신경근병증", "뇌졸중", "근육 위축"],
                measures: [
                    "안정 취하기",
                    "넘어지지 않도록 주의",
                    "증상 심하면 응급실 방문",
                ],
            },
        ],
        [SymptomCategory.KNEE_PAIN]: [
            {
                disease: ["관절염", "반월상연골 손상", "활액막염"],
                measures: ["냉찜질", "휴식", "무릎 보호대 착용"],
            },
        ],
        [SymptomCategory.CALF_SWELLING_PAIN]: [
            {
                disease: ["하지정맥류", "혈전증(DVT)", "근육 염좌"],
                measures: ["다리 높이기", "압박스타킹 착용", "심한 경우 내과 진료"],
            },
        ],
        [SymptomCategory.HEAVY_LEGS]: [
            {
                disease: ["심부정맥 혈전증", "심부전", "신장 문제"],
                measures: [
                    "수분 섭취 조절",
                    "다리 올려놓고 휴식",
                    "붓기 지속 시 검사 필요",
                ],
            },
        ],
        [SymptomCategory.NUMB_HANDS]: [
            {
                disease: ["손목터널증후군", "경추 디스크", "말초신경염"],
                measures: ["손목 쉬게 하기", "스트레칭", "자극 피하기"],
            },
        ],
        [SymptomCategory.WRIST_PAIN]: [
            {
                disease: ["건초염", "관절염", "손목 염좌"],
                measures: ["냉찜질", "손목 보호대 사용", "반복 동작 자제"],
            },
        ],
        [SymptomCategory.STIFF_FINGERS]: [
            {
                disease: ["류마티스 관절염", "방아쇠 수지", "디지털 건염"],
                measures: [
                    "따뜻한 찜질",
                    "손가락 스트레칭",
                    "증상 심하면 정형외과 진료",
                ],
            },
        ],
        [SymptomCategory.WEAK_HANDS]: [
            {
                disease: ["말초신경 병변", "근육 약화", "중추신경계 문제"],
                measures: ["무거운 물건 들지 않기", "손 사용 줄이기"],
            },
        ],
        [SymptomCategory.SWOLLEN_HANDS]: [
            {
                disease: ["감염성 관절염", "류마티스 질환", "알레르기 반응"],
                measures: ["냉찜질", "손 높게 들기", "증상 지속 시 진료"],
            },
        ],
        [SymptomCategory.NUMB_FEET]: [
            {
                disease: ["당뇨병성 말초신경병증", "추간판 탈출증", "혈액순환 장애"],
                measures: ["발 마사지", "발을 따뜻하게 하기", "운동 후 휴식"],
            },
        ],
        [SymptomCategory.ANKLE_PAIN]: [
            {
                disease: ["염좌", "인대 손상", "관절염"],
                measures: ["냉찜질", "압박붕대", "안정을 취하기"],
            },
        ],
        [SymptomCategory.FOOT_PAIN]: [
            {
                disease: ["족저근막염", "피로 골절", "무지외반증"],
                measures: ["푹신한 신발 착용", "발 마사지", "과도한 활동 자제"],
            },
        ],
        [SymptomCategory.SWOLLEN_FEET]: [
            {
                disease: ["염좌", "통풍", "감염"],
                measures: ["냉찜질", "다리 높이기", "소염진통제 복용 고려"],
            },
        ],
        [SymptomCategory.NUMBNESS_FEET]: [
            {
                disease: ["말초신경병증", "혈액순환 장애", "요추 신경병증"],
                measures: ["발 자극 피하고 보호", "당뇨 환자는 특히 주의"],
            },
        ],
        [SymptomCategory.ITCHY_SKIN]: [
            {
                disease: ["아토피 피부염", "접촉성 피부염", "두드러기"],
                measures: ["시원한 물로 씻기", "보습제 사용", "자극 피하기"],
            },
        ],
        [SymptomCategory.RASH]: [
            {
                disease: ["알레르기성 피부염", "바이러스 감염", "열성 발진"],
                measures: ["청결 유지", "긁지 않기", "필요시 항히스타민 복용"],
            },
        ],
        [SymptomCategory.DRY_SKIN]: [
            {
                disease: ["건성 피부염", "건선", "갑상선 기능저하증"],
                measures: ["보습제 자주 바르기", "뜨거운 물 샤워 피하기"],
            },
        ],
        [SymptomCategory.RED_SPOTS]: [
            {
                disease: ["알레르기 반응", "바이러스성 발진", "혈소판 감소증"],
                measures: ["자극 피하기", "반점 번지면 피부과 방문"],
            },
        ],
        [SymptomCategory.PEELING_SKIN]: [
            {
                disease: ["무좀", "건선", "피부염"],
                measures: ["보습제 사용", "피부 긁지 않기", "증상 지속 시 전문의 상담"],
            },
        ],
        [SymptomCategory.ANXIETY]: [
            {
                disease: ["불안장애", "공황장애", "스트레스 장애"],
                measures: ["깊은 호흡", "명상", "충분한 수면 확보"],
            },
        ],
        [SymptomCategory.PSYCHOSOMATIC_PAIN]: [
            {
                disease: ["섬유근육통", "신경병증성 통증", "우울증", "불안장애"],
                measures: [
                    "통증 일지를 작성하여 패턴 파악",
                    "가벼운 스트레칭과 운동 시도",
                    "심리적 스트레스 관리 (명상, 상담 등)",
                    "필요시 통증 클리닉 또는 정신건강의학과 상담",
                ],
            },
        ],
        [SymptomCategory.DEPRESSION]: [
            {
                disease: ["우울증", "계절성 정서장애", "만성 피로"],
                measures: [
                    "햇빛 보기",
                    "가까운 사람과 대화",
                    "일정한 수면/생활 습관 유지",
                ],
            },
        ],
        [SymptomCategory.SLEEP_DISORDER]: [
            {
                disease: ["불면증", "수면무호흡증", "불안장애"],
                measures: ["카페인 섭취 줄이기", "일정한 수면시간 유지"],
            },
        ],
        [SymptomCategory.LOW_CONCENTRATION]: [
            {
                disease: ["주의력 결핍장애", "불면", "우울증"],
                measures: ["충분한 휴식", "계획적 활동", "스마트폰 사용 줄이기"],
            },
        ],
        [SymptomCategory.MEMORY_LOSS]: [
            {
                disease: ["치매 초기", "우울증", "수면 부족"],
                measures: [
                    "두뇌 자극 활동(퍼즐, 독서 등)",
                    "충분한 수면",
                    "병원 상담 필요",
                ],
            },
        ],
        [SymptomCategory.FREQUENT_URINATION]: [
            {
                disease: ["방광염", "과민성 방광", "당뇨"],
                measures: [
                    "수분 조절",
                    "카페인 음료 줄이기",
                    "증상 지속 시 비뇨기과 방문",
                ],
            },
        ],
        [SymptomCategory.PAINFUL_URINATION]: [
            {
                disease: ["요로감염", "방광염", "요도염"],
                measures: ["물 많이 마시기", "따뜻한 물찜질", "심할 경우 항생제 필요"],
            },
        ],
        [SymptomCategory.CLOUDY_URINE]: [
            {
                disease: ["요로감염", "탈수", "신장결석"],
                measures: [
                    "수분 섭취 늘리기",
                    "비타민 복용 확인",
                    "소변 색 지속 시 검사",
                ],
            },
        ],
        [SymptomCategory.URGENCY]: [
            {
                disease: ["과민성 방광", "방광염", "전립선 문제"],
                measures: ["화장실 위치 파악", "자극적인 음식 피하기"],
            },
        ],
        [SymptomCategory.BLOODY_URINE]: [
            {
                disease: ["방광염", "신장결석", "방광암"],
                measures: ["즉시 비뇨기과 진료", "물 충분히 마시기"],
            },
        ],
        [SymptomCategory.IRREGULAR_PERIOD]: [
            {
                disease: ["다낭성난소증후군", "갑상선 이상", "스트레스"],
                measures: ["수면/식사 패턴 조절", "체중 변화 관리"],
            },
        ],
        [SymptomCategory.MENSTRUAL_PAIN]: [
            {
                disease: ["자궁내막증", "자궁근종", "원발성 생리통"],
                measures: ["따뜻한 찜질", "진통제 복용 가능"],
            },
        ],
        [SymptomCategory.HEAVY_DISCHARGE]: [
            {
                disease: ["질염(칸디다, 트리코모나스)", "성병"],
                measures: ["질 세정제 과다 사용 자제", "면 속옷 착용", "산부인과 진료"],
            },
        ],
        [SymptomCategory.VAGINAL_ITCH_PAIN]: [
            {
                disease: ["질염", "성병", "피부염"],
                measures: ["청결 유지", "자극 피하기", "전문 진료 필요"],
            },
        ],
        [SymptomCategory.POSTMENOPAUSAL_BLEEDING]: [
            {
                disease: ["자궁내막증식증", "자궁암", "호르몬 이상"],
                measures: ["즉시 산부인과 진료 필요"],
            },
        ],
        [SymptomCategory.FATIGUE]: [
            {
                disease: ["만성 피로 증후군", "빈혈", "갑상선 기능 저하"],
                measures: ["휴식", "규칙적 수면", "심하면 내과 진료"],
            },
        ],
        [SymptomCategory.WEIGHT_CHANGE]: [
            {
                disease: ["갑상선 이상", "당뇨", "암", "식이장애"],
                measures: ["식사 기록 확인", "운동량 점검", "내분비 검사 필요"],
            },
        ],
        [SymptomCategory.PERSISTENT_FEVER]: [
            {
                disease: ["감염", "폐렴", "결핵", "암"],
                measures: ["해열제 복용", "수분 보충", "3일 이상 지속되면 내과 진료"],
            },
        ],
        [SymptomCategory.APPETITE_LOSS]: [
            {
                disease: ["위염", "간질환", "우울증", "암"],
                measures: ["부드러운 음식 섭취", "휴식", "소화제 복용 고려"],
            },
        ],
        [SymptomCategory.UNKNOWN_PAIN]: [
            {
                disease: ["섬유근육통", "신경병증", "정신적 스트레스"],
                measures: ["진통제 복용", "스트레칭", "필요시 통증 클리닉 진료"],
            },
        ],
    },
};
