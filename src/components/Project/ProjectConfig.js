import gaia from '../../resource/images/gaia.jpeg';
import gabashu from '../../resource/images/gabashu.png';
import woowaGithub from '../../resource/images/woowa_github.png';
import woowaAccount from '../../resource/images/woowa_account.png';
import woowaBanchan from '../../resource/images/woowa_banchan.png';

const projects = [
	{
		title: 'Gaia Project',
		img: gaia,
		skills: [
			'Android',
			'Java',
			'Node.js',
			'Picasso',
			'Window Manager',
			'Background Service',
			'MySQL',
			'volley',
		],
		link: 'https://github.com/Mintsushi/Gaia-Project',
		description:
			'사용자의 위치를 기반으로 날씨 데이터를 받아와 어플리케이션 환경에 적용하' +
			'는 게임 어플리케이션입니다. \n 어플리케이션 내부는 현실세계의 실내, 어플리케' +
			'이션이 종료되고 백그라운드 서비스로 실행되고 외부는 현실세계에서 실외에 해당됩니다.\n' +
			'실제 식물을 키울 때와 마찬가지로 실내에 있으면 식물의 HP가 증가하고, 실외에 있는 경우, ' +
			'HP가 감소하는 형식으로 진행됩니다.\n 어플리케이션이 종료된 이후에도 서비스가 계속 실행' +
			'되기 때문에 식물 객체의 데이터를 변경할 수 있습니다. 어플리케이션이 종료된 이후 화면에 ' +
			'식물을 그려주기 위해 WindowManager를 사용하였으며, ON/OFF 기능 또한 추가하였습니다.',
	},
	{
		title: '가봤슈',
		img: gabashu,
		skills: ['Javascript', 'React', 'Redux', 'axios'],
		link: 'https://www.gabatshu.xyz/',
		redraw: 'https://rien-atelier.tistory.com/92',
		description:
			'프로그래머스 데브코스에서 진행한 첫! 팀프로젝트입니다.🔥\n' +
			'총 5명이서 하나의 서비스를 개발함에 있어, 역할분담과 일정 관리에 있어서 어떻게 진행해야할지 몰랐지만,\n' +
			'팀원분들과 기획단계에서부터 많은 이야기를 나누고 프로젝트를 진행하는 중에도 카톡을 이용해 바로바로 진행상황과 어려움 점을 공유하면서 성공적으로 프로젝트를 끝낼 수 있었습니다. 🤗 \n' +
			'결과 모두가 만족할 수 있는 서비스를 만들 수 있었고, 이론으로만 배우던 기술을 직접 사용해 볼 수 있었어요.\n' +
			'제가 지금까지 해왔던 팀 프로젝트 중 가장 성공적이고, 가장 재미있게 진행했던 프로젝트였어요!! ',
	},
	{
		title: 'GitHub 이슈 관리 및 Repo 검색 App',
		skills: [
			'Android',
			'Kotlin',
			'Retrofit2',
			'Coroutine',
			'Paging3',
		],
		img: woowaGithub,
		link: 'https://github.com/woowa-techcamp-2022/android-repo-08',
		redraw:
			'https://rien-atelier.tistory.com/103?category=1031748',
		video: 'https://youtu.be/Qips4aqABtg',
		description:
			'내 개발인생 첫 페어프로그래밍을 해보았던 프로젝트였어요! 🛠\n' +
			'아쉬운 점이 있다면 팀원분과 저 모두 페어프로그래밍이 처음이었기 때문에, 초반에는 서로 완전 분리되어 있는 부분을 담당하여 개발을 진행하다 마지막에 남은 한 페이지를 함께 개발하는 방식으로 ' +
			'진행을 하게 되었습니다. 이러다 보니, 초반에 서로의 패키지 구성이 동일하지 않아 이를 맞추는데 더 많은 시간을 들이게 되었습니다. 😭\n' +
			'이 경험을 기반으로 다음 프로젝트에서는 꼭 초반에 페어프로그래밍을 통해 프로젝트의 틀을 맞추고 나서 개발을 진행하기로 생각하게 되었어요. 😌👍🏻\n' +
			'또한 페어프로그래밍 뿐만 아니라 github 문서 관리에 있어서도 많은 것을 경험할 수 있었던 기회였어요. 바로 Issue와 PR, 그리고 코드리뷰에 대해서입니다.\n' +
			'물론 이전에도 버전 관리를 위해 Github를 사용하기는 하였지만, 이번처럼 각 구현사항에 대해 Issue를 만들고 그에 따라 PR을 만들어 팀원과 공유해본 것은 처음이었습니다.ㅎㅎ \n' +
			'때문에 코드리뷰도 최대한 제가 생각하는 점을 적극적으로 말씀해드리고, 이에 대한 팀원분의 피드백을 적극적으로 반영하여 코드를 개선할 수 있도록 노력하였어요. 🤗\n' +
			'기술적인 발전도 눈에 띄게 보였지만, 팀원으로서의 능력이 크게 발전할 수 있었던 프로젝트였습니다!! 🎉',
	},
	{
		title: '가계부 App',
		skills: [
			'Android',
			'Kotlin',
			'Jetpack Compose(100%)',
			'SQLiteOpenHelper',
			'Coroutine',
		],
		img: woowaAccount,
		link: 'https://github.com/woowa-techcamp-2022/android-accountbook-12',
		download:
			'https://appdistribution.firebase.dev/i/8baca58f568b3dcd',
		video: 'https://youtu.be/8Lg9pxtQJCg',
		description:
			'XML이 아닌 100% Compose로 UI를 만든 프로젝트입니다. 🤗 \n' +
			'이전의 React에서 component들을 관리하던 경험을 살려 최대한 Atomic하게 component들을 재활용할 수 있도록 구성하려 노력하였습니다! 🔥\n' +
			'확실히 제가 가장 관심있는 UI가 중점인 프로젝트여서 그런지 우테캠에서 진행한 프로젝트 중 가장 재미있게 참여할 수 있었어요. 😆\n' +
			'이 덕분인지 기본 기능에 더해 추가적으로 있으면 좋을 듯한 몇 가지 기능들을 구현해 보는 여유로움도 가질 수 있었습니다.ㅎㅎ\n' +
			'또한 이전 프로젝트에서 배운 github의 Issue와 PR 관리 등을 개인 프로젝트여도 꾸준히 수행하였고, 이는 이후에 다시 한번 코드를 분석할 때 많은 도움이 되었습니다. \n' +
			'이번 프로젝트는 firebase에서 앱을 실행해 볼 수 있도록 하였으니, 참고 부탁드립니다. 😌',
	},
	{
		title: '반찬 주문 App',
		skills: [
			'Android',
			'Kotlin',
			'Room',
			'Retrofit2',
			'Multi type Recyclerview',
			'AlarmManager',
			'WorkManager',
			'TimerTask',
			'Coroutine',
		],
		img: woowaBanchan,
		link: 'https://github.com/woowa-techcamp-2022/android-banchan-05',
		download:
			'https://appdistribution.firebase.dev/i/9a30a905cb3be351',
		video: 'https://youtu.be/D6EFpRY79vs',
		description:
			'힘들다면 함들었고 재밌다면 재미있었던 우테캠에서의 마지막 프로젝트였습니다.\n' +
			'이전 팀 프로젝트에서 다짐한대로 프로젝트 초반에 팀원과 함께 데이터 modeling을 진행하고 프로젝트 구조를 기획하여 함께 구축해내갔습니다. 그 덕분에 이후에 개별적으로 맡은 부분을 개발해 나가는 중에도 일관성 있는 구조를 유지할 수 있었습니다. 😀👍🏻\n' +
			'이번 프로젝트에서는 2가지의 목표를 세우고 진행하였어요. 첫 째는 이전에는 부족했던 코드 리뷰를 꼼꼼히 수행하여 이를 통해 마치 한 사람이 짠 것과 같은 코드를 구현해보고 싶었고, 두 번째는 새로운 기술의 동작 원리를 알고 사용해보는 것이었습니다!\n' +
			'처음에는 코드리뷰와 기술 공부에 힘을 쏟다 보니, 다음 팀들에 비해서 시간이 많이 지체되었고 이 때문에 점점 마음이 조급해져만 갔어요. 😭 하지만 꾸준히 진행해보니 시간이 지날수록 코드리뷰의 개수가 점차 줄어들고, ' +
			'새로운 기술을 사용함에 있어서도 빠르게 적용해나가는 저의 모습을 볼 수 있었어요. ☺️ \n' +
			'결과적으로 기본 요구사항을 모두 구현하고, 더 나아가 UI/UX적으로도 만족스러운 어플리케이션을 개발할 수 있었습니다.\n' +
			'아쉬운 점이 있다면 일정이 촉박해지면서 팀원과 함께 스크럼과 스프린트 회의를 주기적으로 진행하지 못한 점에 대해 반성합니다. 😭',
	},
];

export default projects;
