import React, { Component, useState } from 'react';
import '../../resource/css/Project.css';
import projects from './ProjectConfig';
import {
	LeftOutlined,
	RightOutlined,
} from '@ant-design/icons';

function Project() {
	const [curIndex, setCurIndex] = useState(0);

	const onClickProjectItem = (index) => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
		setCurIndex(index);
	};

	return (
		<div className='project'>
			<div className='indexing'>
				<strong>
					{curIndex + 1} / {projects.length}
				</strong>
			</div>
			<div className='project-container'>
				<img
					className='project-img'
					src={projects[curIndex].img}
				/>
				<ul className='project-info'>
					<li className='project-item name'>
						<div className='project-content'>
							{projects[curIndex].title}
						</div>
					</li>
					<li className='project-item link'>
						<div className='project-title'>링크</div>
						<a
							className='project-content'
							href={projects[curIndex].link}>
							{projects[curIndex].link}
						</a>
					</li>
					{projects[curIndex].download && (
						<li className='project-item link'>
							<div className='project-title'>앱 설치</div>
							<a
								className='project-content'
								href={projects[curIndex].download}>
								{projects[curIndex].download}
							</a>
						</li>
					)}
					{projects[curIndex].redraw && (
						<li className='project-item link'>
							<div className='project-title'>회고록</div>
							<a
								className='project-content'
								href={projects[curIndex].redraw}>
								{projects[curIndex].redraw}
							</a>
						</li>
					)}
					{projects[curIndex].video && (
						<li className='project-item link'>
							<div className='project-title'>영상</div>
							<a
								className='project-content'
								href={projects[curIndex].video}>
								{projects[curIndex].video}
							</a>
						</li>
					)}
					<li className='project-item skills'>
						<div className='project-title'>사용기술</div>
						<div className='project-content'>
							{projects[curIndex].skills.map(
								(skill, index) => (
									<div className='chip' key={index}>
										{skill}
									</div>
								)
							)}
						</div>
					</li>
					<li className='project-item'>
						<div className='project-title'>설명</div>
						<div className='project-content'>
							{projects[curIndex].description}
						</div>
					</li>
				</ul>
			</div>
			<div className='project-list'>
				<div className='left-arrow'>
					<LeftOutlined />
				</div>
				{projects.map((skill, index) => (
					<div
						className={
							index == curIndex
								? 'project_item selected'
								: 'project_item'
						}
						key={index}
						onClick={() => onClickProjectItem(index)}>
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
				<div className='right-arrow'>
					<RightOutlined />
				</div>
			</div>
		</div>
	);
}

export default Project;
