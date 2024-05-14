import { Template, TemplateType } from "./types";

export const syncTemplates: Template[] = [
  {
    id: "1",
    type: TemplateType.NoteBox,
    title: "60초 자기소개 Time !",
    x: 200,
    y: 50,
    fill: "#FFF0C8",
  },
  {
    id: "2",
    type: TemplateType.NoteBox,
    title: "제 강점과 약점은요,",
    x: 200,
    y: 300,
    fill: "#C8FFD1",
  },
  {
    id: "3",
    type: TemplateType.NoteBox,
    title: "이것만은 부탁해요!",
    x: 200,
    y: 550,
    fill: "#C8F5FF",
  },
  {
    id: "10",
    type: TemplateType.GuideTextBox,
    title:
      "무슨 말이라도 좋아요 ! 팀원들이 서로를 잘 알고 편안한 감정을 가질 수록 팀 전체의 문제 해결 능력이 향상된다는 연구 결과가 있어요😃",
    x: 240,
    y: 0,
  },
  {
    id: "11",
    type: TemplateType.GuideTextBox,
    title:
      "사람은 모든 면에서 완벽할 수 없어요. 부끄러워하지 않아도 괜찮아요 ! 서로의 강점과 약점을 공유하는 시간을 가져봐요😉",
    x: 200,
    y: 250,
  },
  {
    id: "12",
    type: TemplateType.GuideTextBox,
    title:
      "프로젝트를 시작하기 앞서, 팀원들에게 이것만은 솔직하게 부탁하고 싶어요!",
    x: 200,
    y: 500,
  },
  {
    id: "200",
    type: TemplateType.GuideTextBox,
    title: "프로젝트 내 개인목표",
    x: 225,
    y: 1000,
    width: 800,
    height: 25,
    font: 18,
    fontWeight: "bold",
    fill: "none",
  },
  {
    id: "201",
    type: TemplateType.GuideTextBox,
    title:
      "프로젝트를 통해 얻어가고 싶은 목표를 적어주세요 ! \n우리는 각자 프로젝트에서 얻어가고자 하는 목표가 다를 수 있고, 이 점을 서로 존중하고 이해해줘야 해요☺️",
    x: 200,
    y: 1025,
    width: 800,
    height: 50,
    fontWeight: "light",
    fill: "none",
  },
  {
    id: "202",
    type: TemplateType.NoteBox,
    title: "이것만은 부탁해요!",
    x: 200,
    y: 1100,
    width: 800,
    height: 200,
    fill: "#C8F5FF",
  },
  {
    id: "203",
    type: TemplateType.GuideTextBox,
    title: "프로젝트 내 팀목표",
    x: 225,
    y: 1300,
    width: 800,
    height: 25,
    font: 18,
    fontWeight: "bold",
  },
  {
    id: "204",
    type: TemplateType.GuideTextBox,
    title:
      "각자 다른 목표를 가지고 있어도, 우리는 결국 합의된 하나의 목표를 바라봐야해요.\n모두의 개인 목표를 토대로 우리 팀의 목표는 이걸로 하면 어떨까? 하는 의견을 자유롭게 적어주세요 !",
    x: 200,
    y: 1325,
    width: 800,
    height: 50,
    fontWeight: "light",
  },
  {
    id: "205",
    type: TemplateType.NoteBox,
    title: "이것만은 부탁해요!",
    x: 200,
    y: 1400,
    width: 800,
    height: 200,
    fill: "#C8F5FF",
  },
  {
    id: "206",
    type: TemplateType.GuideTextBox,
    title: "한 문장으로 팀의 목표를 정의해주세요!",
    x: 200,
    y: 1600,
    width: 800,
    height: 50,
    font: 20,
    fontWeight: "bold",
  },
  {
    id: "207",
    type: TemplateType.InputFormBox,
    title: "한 문장으로 팀의 목표를 정의해주세요!",
    x: 200,
    y: 1650,
    width: 800,
    height: 50,
    font: 20,
    fontWeight: "bold",
    value: "",
  },
  {
    id: "300",
    type: TemplateType.ThirdStepProb,
    title: "+",
    x: 200,
    y: 2050,
    width: 200,
    height: 200,
    fill: "#F5F5F5",
    value: 0,
  },
  {
    id: "400",
    type: TemplateType.GuideTextBox,
    title:
      "여기서 페르소나란 특정 문제에 공감하고 실제로 겪고 있는 가상의 인물을 의미해요 !\n인물의 나이, 성별, 배경(직업, 학력 등), 특징, 목표와 동기, 겪고 있는 어려움 등 떠오르는 문제 고객을 설정해주세요 !\n각자 작성한 페르소나를 공유하고, 의견을 교환해봐요 !\n이를 통해 여러 시각을 반영한 완성도 높은 페르소나를 구축할 수 있고, 이를 바탕으로 문제를 여러 관점에서 바라보고, 공감할 수 있어요 !",
    x: 75,
    y: 3020,
    width: 800,
    height: 200,
  },
  {
    id: "401",
    type: TemplateType.PersonaBox,
    title: "PersonaBox",
    x: 100,
    y: 3150,
    width: 300,
    height: 250,
    value: "add",
  },
  {
    id: "500",
    type: TemplateType.GuideTextBox,
    title:
      "이전 단계에서 함께 페르소나를 작성하고 공유하면서 문제 상황에 대해 더욱 깊게 공감할 수 있었습니다.\n이제 그 공감을 바탕으로 근본적인 문제를 찾아낼 시간이에요 !\n이전 단계에서 우리가 탐구한 페르소나를 떠올리며, 각 문제 상황에서 나타나는 근본적인 문제를 찾아보세요.\n2분 동안 떠오르는 근본 문제들을 명확하고 간결한 문장으로 작성하여 공유해주세요 !\n공유된 근본 문제들을 하나씩 읽어보고, 그중 흥미롭거나 해결이 시급한 문제 최대 5가지를 골라서 우측 key WHAT에 옮겨주세요 !!",
    x: 75,
    y: 4020,
    width: 800,
    height: 200,
  },
  {
    id: "600",
    type: TemplateType.GuideTextBox,
    title:
      "좋은 서비스는 명확한 존재 이유를 가지고 있어요.\nWHAT 단계에서 작성해주신 문제점들이 ‘왜’ 일어났을까요? \n여러분 머릿속에 떠오르는 다양한 원인들을 메모지를 활용해 적어주세요!\n다양한 원인들이 작성 될수록 가장 중요한 원인이 잘 보일거에요",
    x: 75,
    y: 5020,
    width: 800,
    height: 200,
  },
  {
    id: "700",
    type: TemplateType.GuideTextBox,
    title: "도움말을 참고해 우리 서비스를 구체화해봐요!",
    x: 75,
    y: 6020,
    width: 800,
    height: 50,
  },
  {
    id: "801",
    type: TemplateType.GuideTextBox,
    title: "Target: 우리 서비스의 핵심 타겟은?",
    x: 100,
    y: 7025,
    width: 800,
    height: 50,
    fontWeight: "bold",
    font: 20,
    fill: "none",
  },
  {
    id: "802",
    type: TemplateType.NoteBox,
    title: "",
    x: 150,
    y: 7075,
    width: 400,
    height: 150,
    fill: "#C8F5FF",
  },
  {
    id: "803",
    type: TemplateType.GuideTextBox,
    title: "Pain Points: 해결하고자 하는 근본 문제와 원인은?",
    x: 100,
    y: 7250,
    width: 800,
    height: 50,
    font: 20,
    fontWeight: "bold",
  },
  {
    id: "804",
    type: TemplateType.NoteBox,
    title: "",
    x: 150,
    y: 7300,
    width: 400,
    height: 150,
    fill: "#C8F5FF",
  },
  {
    id: "805",
    type: TemplateType.GuideTextBox,
    title: "Value: 우리 서비스가 제공하고자 하는 솔루션과 가치는?",
    x: 100,
    y: 7475,
    width: 400,
    height: 50,
    font: 20,
    fontWeight: "bold",
  },
  {
    id: "806",
    type: TemplateType.NoteBox,
    title: "",
    x: 150,
    y: 7525,
    width: 400,
    height: 150,
    fill: "#C8F5FF",
  },
  {
    id: "807",
    type: TemplateType.GuideTextBox,
    title: "Target",
    x: 725,
    y: 7025,
    width: 800,
    height: 50,
    fontWeight: "bold",
    font: 20,
    fill: "none",
  },
  {
    id: "808",
    type: TemplateType.InputFormBox,
    title: "우리 서비스의 주 타겟은",
    x: 600,
    y: 7125,
    width: 400,
    height: 50,
    font: 20,
    fontWeight: "bold",
    value: "",
  },
  {
    id: "809",
    type: TemplateType.GuideTextBox,
    title: "Pain Points",
    x: 725,
    y: 7250,
    width: 800,
    height: 50,
    font: 20,
    fontWeight: "bold",
  },
  {
    id: "810",
    type: TemplateType.InputFormBox,
    title: "우리가 해결할 pain point는",
    x: 600,
    y: 7350,
    width: 400,
    height: 50,
    font: 20,
    fontWeight: "bold",
    value: "",
  },
  {
    id: "811",
    type: TemplateType.GuideTextBox,
    title: "Value",
    x: 725,
    y: 7475,
    width: 800,
    height: 50,
    font: 20,
    fontWeight: "bold",
  },
  {
    id: "812",
    type: TemplateType.InputFormBox,
    title: "우리 서비스가 제공하는 가치는",
    x: 600,
    y: 7575,
    width: 400,
    height: 50,
    font: 20,
    fontWeight: "bold",
    value: "",
  },
  {
    id: "900",
    type: TemplateType.GuideTextBox,
    title:
      "Stakeholders란 이해관계자를 의미해요. \n 좌측 상단 도움말을 확인하고, 설명과 예시 이미지를 참고해서 \n우리 서비스가 가질 영향력을 생각해보고 그려보는 시간을 가져봅시다.",
    x: 75,
    y: 8020,
    width: 800,
    height: 300,
  },
  {
    id: "1000",
    type: TemplateType.GuideTextBox,
    title:
      "여러분은 서비스의 감독이, 싱크대는 작가가 되어 대본을 작성 해볼거에요. \n만들어진 우리의 서비스를 어떻게 이용하게 될까요?  \n좌측 상단 도움말을 참고해 누가 어떠한 행동을 하는지,  그 행동 시에 우리 서비스가 무엇을 해주는지, 행동의 결과가 어떻게 되는지 작성해주세요.  \n여러분이 자세히 작성해주신 내용을 토대로, 싱크대가 어떤 단위의 서비스가 있는지를 나타내는 Epic을, \n각 서비스에서 유저가 취할 수 있는 액션인 유저스토리를 ‘대본’으로 제공해드릴게요!",
    x: 75,
    y: 9020,
    width: 800,
    height: 300,
  },
  {
    id: "1001",
    type: TemplateType.GuideTextBox,
    title: "시나리오 1",
    x: 100,
    y: 9150,
    width: 400,
    height: 50,
    font: 20,
    fontWeight: "bold",
  },
  {
    id: "1002",
    type: TemplateType.InputFormBox,
    title: "시나리오를 작성해주세요",
    x: 100,
    y: 9200,
    width: 500,
    height: 50,
    font: 20,
    fontWeight: "bold",
    value: "",
  },
  {
    id: "1003",
    type: TemplateType.GuideTextBox,
    title: "시나리오 2",
    x: 100,
    y: 9300,
    width: 400,
    height: 50,
    font: 20,
    fontWeight: "bold",
  },
  {
    id: "1004",
    type: TemplateType.InputFormBox,
    title: "시나리오를 작성해주세요",
    x: 100,
    y: 9350,
    width: 500,
    height: 50,
    font: 20,
    fontWeight: "bold",
    value: "",
  },
  {
    id: "1005",
    type: TemplateType.GuideTextBox,
    title: "시나리오 3",
    x: 100,
    y: 9450,
    width: 400,
    height: 50,
    font: 20,
    fontWeight: "bold",
  },
  {
    id: "1006",
    type: TemplateType.InputFormBox,
    title: "시나리오를 작성해주세요",
    x: 100,
    y: 9500,
    width: 500,
    height: 50,
    font: 20,
    fontWeight: "bold",
    value: "",
  },
  {
    id: "1100",
    type: TemplateType.GuideTextBox,
    title:
      "앞선 단계에서 제공된 시나리오로 만든 Epic과 유저스토리에요. \nEpic은 큰 단위의 작업이고, 유저스토리는 유저가 취할 수 있는 액션이에요. \n싱크대가 제공한 Epic과 유저스토리를 수정하고 보완해주세요!",
    x: 75,
    y: 10020,
    width: 800,
    height: 300,
  },
  {
    id: "1200",
    type: TemplateType.GuideTextBox,
    title:
      " 우리 서비스에는 어떠한 페이지들이 있을까요? \n또 각 페이지들은 어떤 기능들을 가지고 있을까요? \n좌측 상단 도움말을 눌러 예시 이미지를 참고해 여러분 서비스의 Tree를 그려주세요!",
    x: 75,
    y: 11020,
    width: 800,
    height: 300,
  },
];
