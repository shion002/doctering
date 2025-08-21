enum MainCategory {
  HEAD = "head",
  CHEST = "chest",
  DIGESTIVE = "digestive",
  ORTHOPEDICS = "orthopedics",
  SKIN = "skin",
  MENTALITY = "mentality",
}

enum SubCategory {
  HEAD = "subHead",
  FACE = "subFace",
  NECK = "subNeck",
  CHEST = "subChest",
  RESPIRATION = "subRespiration",
  ABDOMEN = "subAbdomen",
  DIGESTION = "subDigestion",
  DEFECATION = "subDefecation",
  WAIST = "subWaist",
  LEG = "subLeg",
  HAND = "subHand",
  FOOT = "subFoot",
  SKIN = "subSkin",
  ETC = "subEtc",
  MENTALITY = "subMentality",
  NERVE = "subNerve",
  URINARY = "subUinary",
  OBSTETRICS = "subObstetrics",
}

enum SymptomCategory {
  STABBING_HEADACHE = "찌르듯 아파요",
  TIGHT_HEADACHE = "땡기듯 아파요",
  HEAVY_HEAD = "전체적으로 무거워요",
  ONE_SIDE_HEADACHE = "한쪽만 아파요",
  DIZZY = "어지러워요",
  BLURRED_VISION = "눈이 침침해요",
  MEMORY_ISSUE = "기억이 잘 안 나요",

  RED_EYES = "눈이 충혈되었어요",
  WATERY_EYES = "눈물이 자주 나요",
  STUFFY_NOSE = "코가 막혀요",
  RUNNY_NOSE = "코에서 콧물이 나와요",
  MOUTH_PAIN = "입 주변이 아파요",
  MOUTH_ULCER = "입안이 헐었어요",
  JAW_PAIN = "턱이 아파요",
  FACE_SWELLING_RASH = "얼굴이 붓거나 발진이 있어요",

  NECK_PAIN = "목이 아파요",
  STIFF_NECK = "목이 뻣뻣해요",
  DIFFICULTY_TURNING_NECK = "목을 돌리기 힘들어요",
  NECK_LUMP = "목에 혹이 만져져요",
  SWOLLEN_NECK_FEVER = "목이 붓거나 열이 있어요",

  CHEST_TIGHTNESS = "가슴이 답답해요",
  PALPITATIONS = "심장이 두근거려요",
  CHEST_PAIN = "가슴이 아파요",
  SHORTNESS_OF_BREATH = "숨쉬기 힘들어요",
  CHEST_PRESSURE = "가슴에 압박감이 있어요",

  COUGH = "기침이 나요",
  PHLEGM = "가래가 끼어요",
  BREATHLESSNESS = "숨이 차요",
  WHEEZING = "호흡 시 쌕쌕거려요",
  ITCHY_THROAT = "목이 간질거려요",

  ABDOMINAL_PAIN = "복통이 있어요",
  BLOATING = "속이 더부룩해요",
  HEARTBURN = "속쓰림이 있어요",
  ABDOMINAL_DISTENSION = "복부가 팽창된 느낌이에요",
  DIARRHEA_PAIN = "배가 아프면서 설사가 나요",

  INDIGESTION = "소화가 잘 안돼요",
  POSTMEAL_DISCOMFORT = "식후에 속이 불편해요",
  FREQUENT_BELCHING = "트림이 자주 나와요",
  NAUSEA = "속이 메스꺼워요",
  LOSS_OF_APPETITE = "식욕이 없어요",

  CONSTIPATION = "변비가 있어요",
  DIARRHEA = "설사를 해요",
  PAINFUL_DEFECATION = "배변 시 통증이 있어요",
  BLOODY_STOOL = "혈변이 나와요",
  INCOMPLETE_DEFECATION = "배변 후에도 잔변감이 있어요",

  BACK_PAIN = "허리가 아파요",
  STIFF_BACK = "허리가 뻣뻣해요",
  CANNOT_BEND_BACK = "허리를 숙이기 힘들어요",
  LEG_RADIATING_PAIN = "허리에서 다리로 통증이 내려가요",
  SHARP_BACK_PAIN = "허리에 찌릿한 느낌이 있어요",

  NUMB_LEGS = "다리가 저려요",
  WEAK_LEGS = "다리에 힘이 없어요",
  KNEE_PAIN = "무릎이 아파요",
  CALF_SWELLING_PAIN = "종아리가 붓거나 아파요",
  HEAVY_LEGS = "다리가 붓고 무거워요",

  NUMB_HANDS = "손이 저려요",
  WRIST_PAIN = "손목이 아파요",
  STIFF_FINGERS = "손가락이 굳어요",
  WEAK_HANDS = "손에 힘이 없어요",
  SWOLLEN_HANDS = "손이 붓거나 열이 있어요",

  NUMB_FEET = "발이 저려요",
  ANKLE_PAIN = "발목이 아파요",
  FOOT_PAIN = "발바닥에 통증이 있어요",
  SWOLLEN_FEET = "발이 붓거나 열이 있어요",
  NUMBNESS_FEET = "발에 감각이 둔해요",

  ITCHY_SKIN = "가려움이 있어요",
  RASH = "발진이 생겼어요",
  DRY_SKIN = "피부가 건조해요",
  RED_SPOTS = "피부에 붉은 반점이 있어요",
  PEELING_SKIN = "피부가 벗겨져요",

  FATIGUE = "전신 피로감이 있어요",
  WEIGHT_CHANGE = "체중이 급격히 변했어요",
  PERSISTENT_FEVER = "열이 지속돼요",
  APPETITE_LOSS = "식욕이 감소했어요",
  UNKNOWN_PAIN = "원인을 알 수 없는 통증이 있어요",

  ANXIETY = "불안감이 있어요",
  PSYCHOSOMATIC_PAIN = "몸에 이상이 없는데 아파요",
  DEPRESSION = "우울한 기분이 들어요",
  SLEEP_DISORDER = "수면에 문제가 있어요",
  LOW_CONCENTRATION = "집중력이 떨어져요",
  MEMORY_LOSS = "기억력이 감퇴했어요",

  FREQUENT_URINATION = "소변이 자주 마려워요",
  PAINFUL_URINATION = "소변을 볼 때 통증이 있어요",
  CLOUDY_URINE = "소변 색이 탁해요",
  URGENCY = "소변을 참기 어려워요",
  BLOODY_URINE = "소변에 피가 섞여 나와요",

  IRREGULAR_PERIOD = "생리 주기가 불규칙해요",
  MENSTRUAL_PAIN = "생리통이 심해요",
  HEAVY_DISCHARGE = "질 분비물이 많아요",
  VAGINAL_ITCH_PAIN = "질 가려움이나 통증이 있어요",
  POSTMENOPAUSAL_BLEEDING = "폐경 후 출혈이 있어요",
}

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
        department: ["내과", "심장내과", "호흡기내과", "정신건강의학과"],
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
        department: ["내과", "심장내과", "소화기내과"],
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
        department: ["내과", "호흡기내과", "심장내과"],
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
        department: ["내과", "심장내과", "호흡기내과"],
        serverity: "높음",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.COUGH]: [
      {
        disease: ["급성 기관지염", "폐렴", "천식"],
        measures: ["수분 섭취", "가습기 사용", "휴식"],
        department: ["내과", "호흡기내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.PHLEGM]: [
      {
        disease: ["기관지염", "폐렴", "만성 폐쇄성 폐질환(COPD)"],
        measures: ["수분 섭취", "따뜻한 차 마시기", "가벼운 기침으로 배출"],
        department: ["내과", "호흡기내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.BREATHLESSNESS]: [
      {
        disease: ["천식", "폐렴", "심부전"],
        measures: ["안정을 취하기", "호흡을 가다듬기", "심한 경우 119 연락"],
        department: ["내과", "호흡기내과", "심장내과"],
        serverity: "높음",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.WHEEZING]: [
      {
        disease: ["천식", "기관지 협착", "알레르기 반응"],
        measures: [
          "진정 상태 유지",
          "알레르기 유발 요인 회피",
          "필요 시 흡입제 사용",
        ],
        department: ["호흡기내과", "알레르기내과"],
        serverity: "높음",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.ITCHY_THROAT]: [
      {
        disease: ["알레르기성 비염", "인후염", "급성 상기도 감염"],
        measures: ["수분 섭취", "가습기 사용", "목캔디나 꿀차 섭취"],
        department: ["이비인후과", "내과"],
        serverity: "낮음",
        recommendVisit: false,
      },
    ],
    [SymptomCategory.ABDOMINAL_PAIN]: [
      {
        disease: ["소화불량", "위염", "과민성 대장 증후군"],
        measures: ["소화 잘되는 음식 섭취", "휴식", "수분 섭취"],
        department: ["내과", "소화기내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.BLOATING]: [
      {
        disease: ["소화불량", "위장관 가스", "과민성 대장 증후군"],
        measures: ["탄산음료 피하기", "가벼운 산책", "소량씩 자주 식사"],
        department: ["내과", "소화기내과"],
        serverity: "경미",
        recommendVisit: false,
      },
    ],

    [SymptomCategory.HEARTBURN]: [
      {
        disease: ["역류성 식도염", "위염"],
        measures: [
          "자극적인 음식 피하기",
          "식후 바로 눕지 않기",
          "제산제 복용",
        ],
        department: ["내과", "소화기내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.ABDOMINAL_DISTENSION]: [
      {
        disease: ["장내 가스", "소화불량", "변비"],
        measures: ["수분 섭취", "식이섬유 섭취", "가벼운 운동"],
        department: ["내과", "소화기내과"],
        serverity: "경미",
        recommendVisit: false,
      },
    ],

    [SymptomCategory.DIARRHEA_PAIN]: [
      {
        disease: ["장염", "세균성 설사", "과민성 대장 증후군"],
        measures: ["수분·전해질 보충", "기름진 음식 피하기", "휴식"],
        department: ["내과", "소화기내과"],
        serverity: "심각",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.INDIGESTION]: [
      {
        disease: ["소화불량", "위염"],
        measures: ["소량씩 자주 식사", "기름진 음식 피하기", "소화제 복용"],
        department: ["내과", "소화기내과"],
        serverity: "경증",
        recommendVisit: false,
      },
    ],

    [SymptomCategory.POSTMEAL_DISCOMFORT]: [
      {
        disease: ["기능성 소화불량", "위염"],
        measures: ["과식 피하기", "카페인·알코올 제한", "소화제 복용"],
        department: ["내과", "소화기내과"],
        serverity: "경증",
        recommendVisit: false,
      },
    ],

    [SymptomCategory.FREQUENT_BELCHING]: [
      {
        disease: ["기능성 소화불량", "위식도역류질환(GERD)"],
        measures: ["탄산음료 피하기", "천천히 식사하기", "식후 눕지 않기"],
        department: ["내과", "소화기내과"],
        serverity: "경증",
        recommendVisit: false,
      },
    ],

    [SymptomCategory.NAUSEA]: [
      {
        disease: ["위염", "위식도역류질환(GERD)", "소화불량"],
        measures: ["자극적인 음식 피하기", "소량씩 자주 식사", "진토제 복용"],
        department: ["내과", "소화기내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.LOSS_OF_APPETITE]: [
      {
        disease: ["위염", "소화불량", "간질환", "우울증"],
        measures: ["소량씩 균형 잡힌 식사", "충분한 수면", "스트레스 관리"],
        department: ["내과", "소화기내과", "정신건강의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.CONSTIPATION]: [
      {
        disease: ["기능성 변비", "과민성 대장 증후군", "대장암 초기"],
        measures: ["수분 섭취 증가", "식이섬유 섭취", "규칙적인 운동"],
        department: ["내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.DIARRHEA]: [
      {
        disease: ["급성 장염", "식중독", "과민성 대장 증후군"],
        measures: ["수분 보충", "전해질 보충", "자극적인 음식 피하기"],
        department: ["내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.PAINFUL_DEFECATION]: [
      {
        disease: ["치질", "항문열상", "직장염"],
        measures: ["온수 좌욕", "변비 예방 식단", "진통제 사용"],
        department: ["외과", "항문외과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.BLOODY_STOOL]: [
      {
        disease: ["치질", "대장 용종", "대장암"],
        measures: ["즉시 병원 방문", "출혈량 확인", "섬유소 섭취"],
        department: ["내과", "외과"],
        serverity: "심각",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.INCOMPLETE_DEFECATION]: [
      {
        disease: ["과민성 대장 증후군", "직장탈", "대장 운동 저하"],
        measures: ["식이섬유 섭취", "수분 보충", "규칙적인 배변 습관"],
        department: ["내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.BACK_PAIN]: [
      {
        disease: ["요추 염좌", "퇴행성 요추 질환", "근막통증증후군"],
        measures: ["안정 및 휴식", "온찜질", "진통제 복용"],
        department: ["재활의학과", "정형외과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.STIFF_BACK]: [
      {
        disease: ["근육 긴장", "척추관 협착증 초기", "퇴행성 척추질환"],
        measures: ["스트레칭", "가벼운 운동", "온찜질"],
        department: ["재활의학과"],
        serverity: "경미",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.CANNOT_BEND_BACK]: [
      {
        disease: ["요추 추간판 탈출증(디스크)", "요추염좌", "척추관 협착증"],
        measures: ["과도한 움직임 피하기", "휴식", "통증 심하면 진료 필요"],
        department: ["정형외과", "재활의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.LEG_RADIATING_PAIN]: [
      {
        disease: ["요추 추간판 탈출증(디스크)", "좌골신경통"],
        measures: ["무거운 물건 피하기", "진통제 사용", "휴식"],
        department: ["신경외과", "정형외과"],
        serverity: "심각",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.SHARP_BACK_PAIN]: [
      {
        disease: ["요추 디스크", "척추 압박 골절", "급성 요추염좌"],
        measures: ["즉시 안정", "통증 조절", "심하면 응급실 방문"],
        department: ["정형외과", "신경외과"],
        serverity: "심각",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.NUMB_LEGS]: [
      {
        disease: ["좌골신경통", "말초신경 손상", "요추 디스크"],
        measures: ["휴식 및 자세 조절", "스트레칭", "증상 지속 시 진료"],
        department: ["정형외과", "신경외과", "재활의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.WEAK_LEGS]: [
      {
        disease: ["근위약", "신경근 질환", "요추 디스크"],
        measures: ["가벼운 운동", "근력 강화", "증상 반복 시 진료"],
        department: ["재활의학과", "정형외과", "신경외과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.KNEE_PAIN]: [
      {
        disease: ["퇴행성 무릎관절염", "슬관절 염좌", "반월상연골 손상"],
        measures: ["휴식", "온찜질", "진통제 복용"],
        department: ["정형외과", "재활의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.CALF_SWELLING_PAIN]: [
      {
        disease: ["심부정맥 혈전증(DVT)", "근육염좌", "혈액순환 문제"],
        measures: ["다리 올리기", "냉찜질", "심하면 즉시 진료"],
        department: ["내과", "정형외과", "재활의학과"],
        serverity: "심각",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.HEAVY_LEGS]: [
      {
        disease: ["정맥류", "부종", "혈액순환 저하"],
        measures: ["다리 올리기", "압박 스타킹 착용", "가벼운 운동"],
        department: ["내과", "재활의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.NUMB_HANDS]: [
      {
        disease: ["수근관 증후군", "말초신경 손상", "경추 디스크"],
        measures: ["손목 스트레칭", "휴식", "증상 지속 시 진료"],
        department: ["재활의학과", "정형외과", "신경과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.WRIST_PAIN]: [
      {
        disease: ["손목 염좌", "건초염", "수근관 증후군"],
        measures: ["휴식", "온찜질", "보조기 착용"],
        department: ["재활의학과", "정형외과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.STIFF_FINGERS]: [
      {
        disease: ["손가락 관절염", "강직성 건초염", "류마티스 관절염 초기"],
        measures: ["스트레칭", "손가락 운동", "온찜질"],
        department: ["재활의학과", "정형외과", "류마티스내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.WEAK_HANDS]: [
      {
        disease: ["근위약", "말초신경 손상", "수근관 증후군"],
        measures: ["가벼운 근력 운동", "휴식", "증상 지속 시 진료"],
        department: ["재활의학과", "정형외과", "신경과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.SWOLLEN_HANDS]: [
      {
        disease: ["손 관절염", "염증성 질환", "순환 문제"],
        measures: ["냉찜질", "손 올리기", "증상 지속 시 진료"],
        department: ["재활의학과", "정형외과", "내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],
    [SymptomCategory.NUMB_FEET]: [
      {
        disease: ["말초신경 손상", "당뇨병성 신경병증", "좌골신경통"],
        measures: ["발 스트레칭", "휴식", "증상 지속 시 진료"],
        department: ["재활의학과", "신경과", "정형외과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.ANKLE_PAIN]: [
      {
        disease: ["발목 염좌", "관절염", "힘줄염"],
        measures: ["휴식", "냉/온찜질", "보조기 착용"],
        department: ["재활의학과", "정형외과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.FOOT_PAIN]: [
      {
        disease: ["족저근막염", "발바닥 근육 염증", "관절염"],
        measures: ["스트레칭", "온찜질", "증상 지속 시 진료"],
        department: ["재활의학과", "정형외과", "내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.SWOLLEN_FEET]: [
      {
        disease: ["순환 문제", "염증성 질환", "심부정맥 혈전증"],
        measures: ["발 올리기", "냉찜질", "증상 지속 시 진료"],
        department: ["재활의학과", "내과", "정형외과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.NUMBNESS_FEET]: [
      {
        disease: ["말초신경 손상", "당뇨병성 신경병증", "좌골신경통"],
        measures: ["발 스트레칭", "휴식", "증상 지속 시 진료"],
        department: ["재활의학과", "신경과", "정형외과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.ITCHY_SKIN]: [
      {
        disease: ["접촉성 피부염", "알레르기 반응", "건조 피부"],
        measures: ["보습제 사용", "긁지 않기", "알레르기 유발 요인 피하기"],
        department: ["피부과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.RASH]: [
      {
        disease: ["두드러기", "접촉성 피부염", "약물 반응"],
        measures: ["보습제 사용", "증상 관찰", "심한 경우 병원 방문"],
        department: ["피부과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.DRY_SKIN]: [
      {
        disease: ["건조 피부", "아토피 피부염"],
        measures: ["보습제 사용", "자극적인 화학물질 피하기"],
        department: ["피부과"],
        serverity: "낮음",
        recommendVisit: false,
      },
    ],

    [SymptomCategory.RED_SPOTS]: [
      {
        disease: ["발진", "알레르기 반응", "피부염"],
        measures: ["보습제 사용", "증상 관찰", "증상 지속 시 병원 방문"],
        department: ["피부과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.PEELING_SKIN]: [
      {
        disease: ["피부 건조", "손상된 피부", "각질 과다"],
        measures: [
          "보습제 사용",
          "자극적인 제품 사용 금지",
          "증상 지속 시 병원 방문",
        ],
        department: ["피부과"],
        serverity: "낮음",
        recommendVisit: false,
      },
    ],

    [SymptomCategory.ANXIETY]: [
      {
        disease: ["불안장애", "스트레스 반응"],
        measures: [
          "심호흡 및 이완 훈련",
          "규칙적인 생활",
          "스트레스 요인 관리",
        ],
        department: ["정신건강의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.PSYCHOSOMATIC_PAIN]: [
      {
        disease: ["신체화장애", "심인성 통증"],
        measures: ["심리 상담", "규칙적인 생활", "증상 기록 및 관찰"],
        department: ["정신건강의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.DEPRESSION]: [
      {
        disease: ["우울증", "기분장애"],
        measures: ["심리 상담", "규칙적인 운동", "충분한 수면"],
        department: ["정신건강의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.SLEEP_DISORDER]: [
      {
        disease: ["불면증", "수면장애"],
        measures: ["수면 환경 개선", "취침 루틴 유지", "카페인 및 자극제 제한"],
        department: ["정신건강의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.LOW_CONCENTRATION]: [
      {
        disease: ["주의력 결핍", "스트레스 영향"],
        measures: ["규칙적인 생활", "집중력 훈련", "휴식과 명상 병행"],
        department: ["정신건강의학과", "신경과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.MEMORY_LOSS]: [
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

    [SymptomCategory.FREQUENT_URINATION]: [
      {
        disease: ["요로감염", "당뇨병", "전립선 질환"],
        measures: ["수분 섭취 증가", "배뇨 기록", "증상 지속 시 병원 방문"],
        department: ["내과", "비뇨의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.PAINFUL_URINATION]: [
      {
        disease: ["요로감염", "방광염", "전립선염"],
        measures: ["수분 섭취", "따뜻한 찜질", "증상 지속 시 전문의 상담"],
        department: ["내과", "비뇨의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.CLOUDY_URINE]: [
      {
        disease: ["요로감염", "신장 결석"],
        measures: ["수분 섭취", "소변 상태 관찰", "증상 지속 시 병원 방문"],
        department: ["내과", "비뇨의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.URGENCY]: [
      {
        disease: ["과민성 방광", "요로감염", "전립선 질환"],
        measures: ["배뇨 습관 기록", "증상 조절", "증상 지속 시 전문의 상담"],
        department: ["내과", "비뇨의학과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.BLOODY_URINE]: [
      {
        disease: ["요로결석", "요로감염", "방광암 가능성"],
        measures: ["소변 색 관찰", "수분 섭취", "즉시 전문의 상담 권장"],
        department: ["내과", "비뇨의학과"],
        serverity: "높음",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.IRREGULAR_PERIOD]: [
      {
        disease: ["호르몬 불균형", "배란 이상", "다낭성 난소 증후군(PCOS)"],
        measures: [
          "생리 주기 기록",
          "규칙적인 생활",
          "증상 지속 시 전문의 상담",
        ],
        department: ["산부인과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.MENSTRUAL_PAIN]: [
      {
        disease: ["월경통", "자궁내막증", "자궁근종 가능성"],
        measures: ["진통제 사용", "온찜질", "생활 습관 관리"],
        department: ["산부인과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.HEAVY_DISCHARGE]: [
      {
        disease: ["세균성 질염", "칸디다 질염", "호르몬 이상"],
        measures: ["질 세정 관리", "증상 관찰", "증상 지속 시 전문의 상담"],
        department: ["산부인과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.VAGINAL_ITCH_PAIN]: [
      {
        disease: ["세균성 질염", "칸디다 질염", "외음부 피부염"],
        measures: ["청결 유지", "자극 피하기", "증상 지속 시 병원 방문"],
        department: ["산부인과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.POSTMENOPAUSAL_BLEEDING]: [
      {
        disease: ["자궁내막 이상", "자궁 용종", "자궁암 가능성"],
        measures: ["즉시 전문의 상담", "출혈 기록", "정기 검진"],
        department: ["산부인과"],
        serverity: "높음",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.FATIGUE]: [
      {
        disease: ["만성 피로증후군", "빈혈", "갑상선 기능 저하"],
        measures: [
          "충분한 휴식",
          "균형 잡힌 식사",
          "수분 섭취",
          "증상 지속 시 병원 방문",
        ],
        department: ["내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.WEIGHT_CHANGE]: [
      {
        disease: ["내분비 질환", "대사 이상", "영양 불균형"],
        measures: [
          "체중 기록",
          "규칙적인 식사와 운동",
          "증상 지속 시 전문의 상담",
        ],
        department: ["내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.PERSISTENT_FEVER]: [
      {
        disease: ["감염성 질환", "자가면역 질환", "내부 염증"],
        measures: ["수분 섭취", "휴식", "체온 기록", "증상 지속 시 병원 방문"],
        department: ["내과"],
        serverity: "높음",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.APPETITE_LOSS]: [
      {
        disease: ["소화기 질환", "내분비 이상", "정신적 스트레스"],
        measures: ["소량씩 자주 식사", "수분 섭취", "증상 지속 시 전문의 상담"],
        department: ["내과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],

    [SymptomCategory.UNKNOWN_PAIN]: [
      {
        disease: ["원인 불명 통증", "신경계 이상", "내과적 질환"],
        measures: ["증상 기록", "휴식 및 안정", "지속 시 전문의 상담"],
        department: ["내과", "신경과"],
        serverity: "중간",
        recommendVisit: true,
      },
    ],
  },
} as const;
