import React, { Component } from 'react';
import './Project.css';
import { useNavigate } from 'react-router-dom';
import option from '../../../resource/images/option.png';
import gaia from '../../../resource/images/gaia.jpeg';
import gabashu from '../../../resource/images/gabashu.png';
import woowaGithub from '../../../resource/images/woowa_github.png';
import woowaAccount from '../../../resource/images/woowa_account.png';
import woowaBanchan from '../../../resource/images/woowa_banchan.png';

const data = [
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
	},
	{
		title: '가봤슈',
		img: gabashu,
		skills: ['Javascript', 'React', 'Redux', 'axios'],
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
	},
];
export default function Project() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/project');
	};
	return (
		<div className='project'>
			<div className='title'>
				<strong>Project</strong>
			</div>
			<div className='flex'>
				<div className='project_container'>
					{data.map((skill, index) => (
						<div className='project_item' key={index}>
							<img src={skill.img} alt={skill.title} />
							<strong className='project_title'>
								{skill.title}
							</strong>
							<div className='chip_container'>
								{skill.skills.map((s, i) => (
									<div className='chip' key={i}>
										{s}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='flex'>
				<img className='option' src={option} />
				<br />
			</div>
			<button
				className='button'
				onClick={() => handleClick()}>
				더보기
			</button>
		</div>
	);
}
