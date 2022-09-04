import React, { Component } from 'react';
import './Skill.css';
import ReactApexChart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';
import android from '../../../resource/images/android.png';
import vue from '../../../resource/images/vue.png';
import react from '../../../resource/images/react.webp';
import option from '../../../resource/images/option.png';

const data = [
	{
		id: 'android',
		icon: android,
		series: [60],
		color: '#ffad5f',
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
			},
			colors: ['#ffad5f'],
			plotOptions: {
				radialBar: {
					hollow: {
						size: '70%',
					},
				},
			},
			labels: ['Android'],
		},
	},
	{
		id: 'react',
		icon: react,
		series: [30],
		color: '#ffc800',
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
			},
			colors: ['#ffc800'],
			plotOptions: {
				radialBar: {
					hollow: {
						size: '70%',
					},
				},
			},
			labels: ['React JS'],
		},
	},
	{
		id: 'vue',
		icon: vue,
		series: [10],
		color: '#d8534e',
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
			},
			colors: ['#d8534e'],
			plotOptions: {
				radialBar: {
					hollow: {
						size: '70%',
					},
				},
			},
			labels: ['Vue.js'],
		},
	},
];
export default function Skill() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/skill');
	};

	return (
		<div>
			<div className='skill'>
				<div className='title'>
					<strong>Skill</strong>
				</div>
				<div className='main_container'>
					<span className='main'>주요 기술</span>
					<div className='skill_container'>
						{data.map((skill, index) => (
							<div className='skill_item' key={index}>
								{index == 0 ? (
									<div className='divider' />
								) : (
									''
								)}
								<div>
									<img src={skill.icon} />
									<span>{skill.id}</span>
								</div>
								<ReactApexChart
									options={skill.options}
									series={skill.series}
									type='radialBar'
									height={170}
									width={170}
								/>
								<div className='divider' />
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
		</div>
	);
}
