import React, { Component, useState } from 'react';
import '../../resource/css/Skill.css';
import kotlin from '../../resource/images/kotlin.png';
import retrofit from '../../resource/images/retrofit.png';
import glide from '../../resource/images/glide.png';
import room from '../../resource/images/room.png';
import exoplayer from '../../resource/images/exoplayer.png';
import camerax from '../../resource/images/camera.png';
import viewPager2 from '../../resource/images/viewpager2.gif';
import openMenu from '../../resource/images/open-menu.png';
import firebase from '../../resource/images/firebase.webp';
import motion from '../../resource/images/motion.png';
import koin from '../../resource/images/koin.jpeg';
import navigation from '../../resource/images/navigation.png';
import javascript from '../../resource/images/javascript.png';
import vue from '../../resource/images/vue.png';
import vuex from '../../resource/images/vuex.png';
import vuetify from '../../resource/images/vuetify.png';
import react from '../../resource/images/react.webp';
import redux from '../../resource/images/redux.png';
import axios from '../../resource/images/axios.png';
import node from '../../resource/images/node.jpeg';
import mysql from '../../resource/images/mysql.webp';
import mongoose from '../../resource/images/mongoose.png';
import socket from '../../resource/images/socket.png';
import compose from '../../resource/images/componse.png';
import androidStudio from '../../resource/images/androidStudio.png';
import vscode from '../../resource/images/vscode.png';
import sourcetree from '../../resource/images/sourcetree.png';
import postman from '../../resource/images/postman.png';
import gitlab from '../../resource/images/gitlab.png';
import github from '../../resource/images/github.png';
import jenkins from '../../resource/images/jenkins.png';
import docker from '../../resource/images/docker.webp';
import hilt from '../../resource/images/hilt.png';

import {
	DownOutlined,
	UpOutlined,
} from '@ant-design/icons';

const tab = [
	'Android',
	'Front-End',
	'Back-End',
	'Tool&Other',
];
const skills = [
	[
		// android
		{
			title: 'kotlin',
			content: [
				'Kotlin 기반의 안드로이드 어플리케이션을 개발할 수 있습니다.',
				'수신 객체 지정 람다 함수와 확장 함수 등을 적극적으로 활용할 수 있습니다.',
				'기능별로 소스를 모듈화해서 관리할 수 있습니다.',
			],
			img: kotlin,
		},
		{
			title: 'Clean Architecture',
			content: [
				'클릭 아키텍처에 맞게 패키지를 구성할 수 있습니다.',
				'(presentation <-> domain <-> data) layer를 구성하여 개발을 진행할 수 있습니다.',
				'각 layer에서의 역할분담을 확실히 구분지어 개발할 수 있습니다.',
				'MutableLiveData와 Coroutine의 Flow를 사용하여 MVVM 방식의 어플리케이션을 개발할 수 있습니다.',
			],
			img: openMenu,
		},
		{
			title: 'retrofit2',
			content: [
				'retrofit을 사용하여 서버와 통신할 수 있습니다.',
				'서버에서 받아온 데이터를 관리하는 Response 객체와 실제 화면에 보여지는 Model를 따로 두어 독립적으로 관리하였습니다.',
			],
			img: retrofit,
		},
		{
			title: 'glide',
			content: [
				'glide를 사용하여 서버로부터 이미지를 받아와 화면에 보여줄 수 있습니다',
				'glide를 사용하여 이미지를 UI 기획에 맞게 변형할 수 있습니다.',
			],
			img: glide,
		},
		{
			title: 'room',
			content: [
				'로컬 DB에 데이터를 저장해서 사용할 수 있습니다.',
				'서버에서 받아온 데이터를 관리하는 Entity 객체와 실제 화면에 보여지는 Model를 따로 두어 독립적으로 관리하였습니다.',
			],
			img: room,
		},
		{
			title: 'ExoPlayer',
			content: [
				'영상 및 음성 리소스를 관리하는데 사용하였습니다.',
				'해당 기능으로 유투브 클론 어플리케이션을 제작해보았습니다.',
			],
			img: exoplayer,
		},
		{
			title: 'Jetpack Compose',
			content: [
				'Jetpack Compose를 이용하여 기초적인 UI를 구성할 수 있습니다.',
				'GDG Korea에서 주최하는 Jetpack Compose CodeLab에 참가하여 알게되었습니다',
				'간단한 가계부 어플리케이션을 100% Compose로 만들어보았습니다.😊',
			],
			img: compose,
		},
		{
			title: 'MotionLayout',
			content: [
				'MotionLayout을 구성하고, 사용자의 동작에 따라 레이아웃이 동적으로 움직이도록 구현할 수 있습니다.',
				'유투브와 OTT 앱 클론 어플리케이션을 만들어 볼 때 사용해 보았습니다.',
			],
			img: motion,
		},
		{
			title: 'Kotlin Coroutine',
			content: [
				'비동기적으로 작동해야 할 필요가 있을 때, thread가 아닌 Coroutine을 사용하여 구현할 수 있습니다.',
				'네트워크 요청, DB 요청 등의 기능에 주로 사용하였습니다.',
				'또한, Reactive한 어플리케이션 구현을 위해 Coroutine flow를 활용할 수 있습니다. 😆👍🏻',
			],
			img: kotlin,
		},
		{
			title: 'Hilt',
			content: [
				'Hilt를 사용하여 DI를 구성할 수 있습니다.',
				'Android 공식 문서를 통해 사용 방법과 원리에 대해 공부해보았고, 이를 통해 적절한 scope로 개발할 수 있습니다.',
				'우아한 테크캠프에서 첫 사용을 시작해 이후 프로젝트에서 적극적으로 활용하였습니다. 🔥',
			],
			img: hilt,
		},
		{
			title: 'Jetpack Navigation',
			content: [
				'Navigation을 설게하고, 각 페이지별로 Fragment를 생성하여 하나의 Activity 만으로 어플리케이션을 구성할 수 있습니다.',
				'미리 정의해둔 action을 통해 Fragment별 이동을 구현하고 데이터를 주고 받을 수 있습니다.',
			],
			img: navigation,
		},
	],
	[
		// front end
		{
			title: 'Javascript',
			content: [
				'ES6 문법을 활용하여 프로그램을 구현할 수 있습니다.',
				'Vanilla JS로 웹 페이지를 구현할 수 있습니다.',
				'각 기능별로 적절히 모율화하여 프로젝트를 구조적으로 관리할 수 있습니다.',
			],
			img: javascript,
		},
		{
			title: 'React JS',
			content: [
				'React JS 라이브러리를 사용하여 웹 페이지를 개발할 수 있습니다.',
				'Component의 생명주기를 이해하고, 이를 활용하여 코드를 구현할 수 있습니다.',
				'팀 프로젝트를 통해 100% React로 웹 페이지를 개발해보았습니다. 🍿',
			],
			img: react,
		},
		{
			title: 'Redux',
			content: [
				'Component별로 동기화가 필요한 상태를 관리할 수 있습니다.',
				'상태가 변경되는 이력을 로그를 통해 파악할 수 있습니다.',
			],
			img: redux,
		},
		{
			title: 'Vue.js',
			content: [
				'Vue.js 프레임워크 기반의 소규모 웹 페이지를 개발할 수 있습니다.',
				'프레임워크의 생명주기를 이해하고, 이를 활용하여 코드를 구성할 수 있습니다.',
				'기능별, 화면별로 Component를 구성하여 코드의 재활용성을 높이도록 구현하는데 노력을 기울이고 있습니다.',
			],
			img: vue,
		},
		{
			title: 'Vuex',
			content: [
				'Vuex를 사용하여 Component별로 동기화가 필요한 상태를 관리할 수 있습니다.',
				'상태의 localStorage, SessionStorage를 적절히 활용하여 원하는 기능을 구현할 수 있습니다.',
			],
			img: vuex,
		},
		{
			title: 'Vuetify',
			content: [
				'Vuetify를 활용하여 빠르게 UI를 구성하고, 적절하게 커스터마이징 할 수 있습니다.',
			],
			img: vuetify,
		},
		{
			title: 'Axios',
			content: [
				'해당 라이브러리를 통해 서버와 통신할 수 있습니다.',
				'await/aysnc를 활용하여 비동기적으로 사용할 수 있습니다.',
				'보안을 위해 암호화를 할 때는 crypto-js와 bcrypt 라이브러리를 사용해 보았습니다.',
			],
			img: axios,
		},
	],
	[
		// Back end
		{
			title: 'Node.js',
			content: [
				'Node.js, express를 사용하여 간단한 서버를 구축할 수 있습니다.',
				'데이터베이스와 연동하여 사용자의 데이타를 관리하고 응답으로 보내줄 수 있습니다.',
			],
			img: node,
		},
		{
			title: 'MySQL',
			content: [
				'간단한 데이터베이스를 설계하고 구축할 수 있습니다.',
				'조금 복잡한 SQL문을 작성할 수 있습니다.',
			],
			img: mysql,
		},
		{
			title: 'MongoDB',
			content: [
				'주로 mongoose를 이용하여 node.js에서 사용해 보았습니다.',
				'간단한 데이터베이스를 설계하고 구축할 수 있습니다.',
			],
			img: mongoose,
		},
		{
			title: 'Socket',
			content: [
				'트래픽이 적은 실시간 메세지 서비스를 개발할 때 사용해보았습니다.',
			],
			img: socket,
		},
	],
	[
		// Back end
		{ title: 'Android Studio', img: androidStudio },
		{ title: 'Visual Studio Code', img: vscode },
		{ title: 'Source Tree', img: sourcetree },
		{ title: 'Post Man', img: postman },
		{ title: 'GitLab', img: gitlab },
		{ title: 'GitHub', img: github },
		{ title: 'Jenkins', img: jenkins },
		{ title: 'Docker', img: docker },
	],
];
function Skill() {
	const [curTabIndex, setTabIndex] = useState(0);
	const [curItemIndex, setItemIndex] = useState(0);

	const handleTabIndex = (index) => {
		setTabIndex(index);
		setItemIndex(0);
	};
	const handleItemIndex = (index) => {
		if (curItemIndex == index) {
			setItemIndex(-1);
		} else {
			setItemIndex(index);
		}
	};

	return (
		<div className='skill'>
			<div className='tab-container'>
				{tab.map((t, index) => (
					<div
						className={
							index == curTabIndex
								? 'tab-item select'
								: 'tab-item'
						}
						key={index}
						onClick={() => handleTabIndex(index)}>
						{t}
					</div>
				))}
			</div>
			<div className='divider' />
			<ul>
				{skills[curTabIndex].map((skill, index) => (
					<li
						className={
							curItemIndex == index
								? 'skill-item active'
								: 'skill-item'
						}
						key={index}
						onClick={() => handleItemIndex(index)}>
						<div className='skill-simple-content'>
							<img src={skill.img} alt={skill.title} />
							<span className='skill-title'>
								{skill.title}
							</span>
						</div>
						{curItemIndex == index ? (
							<UpOutlined className='skill-btn' />
						) : (
							<DownOutlined className='skill-btn' />
						)}
						{skill.content ? (
							<div className='skill-content'>
								{skill.content.map((c, i) => (
									<li>- {c}</li>
								))}
							</div>
						) : (
							''
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Skill;
