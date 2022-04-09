import gaia from "../../resource/images/gaia.jpeg";

const projects = [
  {
    title: "Gaia Project",
    img: gaia,
    skills: [
      "Android",
      "Java",
      "Node.js",
      "Picasso",
      "Window Manager",
      "Background Service",
      "MySQL",
      "volley",
    ],
    link: "https://github.com/Mintsushi/Gaia-Project",
    description:
      "사용자의 위치를 기반으로 날씨 데이터를 받아와 어플리케이션 환경에 적용하" +
      "는 게임 어플리케이션입니다. 어플리케이션 내부는 현실세계의 실내, 어플리케" +
      "이션이 종료되고 백그라운드 서비스로 실행되고 외부는 현실세계에서 실외에 해당됩니다.\n" +
      "실제 식물을 키울 때와 마찬가지로 실내에 있으면 식물의 HP가 증가하고, 실외에 있는 경우, " +
      "HP가 감소하는 형식으로 진행됩니다.\n 어플리케이션이 종료된 이후에도 서비스가 계속 실행" +
      "되기 때문에 식물 객체의 데이터를 변경할 수 있습니다. 어플리케이션이 종료된 이후 화면에 " +
      "식물을 그려주기 위해 WindowManager를 사용하였으며, ON/OFF 기능 또한 추가하였습니다.",
  },
];

export default projects;
