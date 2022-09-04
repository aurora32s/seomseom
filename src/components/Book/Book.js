/** @format */

import React, { Component, useState } from 'react';
import '../../resource/css/Book.css';
import modern from '../../resource/images/modern.jpeg';
import kotlin from '../../resource/images/kotlin.jpeg';
import androidDevelop from '../../resource/images/android_develop.png';
import androidLecture from '../../resource/images/android_lecture.png';
import reactBook from '../../resource/images/react_book.jpeg';
import optimize from '../../resource/images/optimize.jpeg';
import cleanCode from '../../resource/images/cleancode.jpeg';
import star from '../../resource/images/star_yello.png';
import nonStar from '../../resource/images/star_black.png';
import section from '../../resource/images/section.png';
import woowa from '../../resource/images/woowahan_tech.png';

// type
// 0: android, 1: front-end, 2: 공통
function Book(props) {
	const [curIndex, setCurIndex] = useState(0);
	const [data, setData] = useState([
		{
			title: '우아한 테크캠프 5기',
			img: woowa,
			content:
				'프론트엔드 개발자에서 안드로이드 개발자로 이직할 수 있는 전환점이 되었던 우아한 테크캠프 5기! 😆' +
				'새로운 기술에 대해서 배울 수 있었고, 더 나아가 팀 프로젝트를 통해 github를 적절히 사용하는 방벙과 ' +
				'PR 코드 리뷰 경험을 쌓을 수 있었던 뜻깊은 경험이었습니다.',
			hover: false,
			type: 0,
			rate: 5,
			complete: true,
		},
		{
			title: '모던 자바스크립트 Deep Dive',
			img: modern,
			content:
				'자바스크립트를 이용한 프로그램을 개발하는 개발자라면 반드시 한번 읽어보기를 추천하는 이론서입니다.😆 ' +
				'책 두께가 상당하지만 일단 책을 다 읽으면 자바스크립 언어에 대한 자신감이 이전과는 비교도 되지 않을 것입니다. ' +
				'기본이 되는 자바스크립트의 문법(호이스팅, 클로저 등)과 동작 환경을 구성하는 방법(렉시컬 환경)에 대해서도 ' +
				'학습할 수 있습니다. 이 뿐만 아니라, 프론트엔드 개발자라면 꼭 알아야 하는 HTML 언어와 브라우저에서 화면이 그려' +
				'지는 방법과 순서에 대해서도 공부할 수 있습니다.',
			hover: false,
			type: 1,
			rate: 5,
			complete: true,
		},
		{
			title: 'Kotlin In Action',
			img: kotlin,
			content:
				'코틀린 언어에 대해서 심도있게 공부해보고 싶다면 이 책을 추천합니다. 실제 코틀린 언어를 만든 개발자 분' +
				'들이 집필한 책이여서 자세히 설명되어 있으며 설명도 아주 쉽게 되어 있어 기본에서부터 심화까지 ' +
				'공부할 수 있습니다. 단, 자바 언어를 알고 있다는 전체하에 작성된 내용들이 많아 자바 언어에 대해 ' +
				'모르시는 분에게는 비추천합니다.',
			hover: false,
			type: 0,
			rate: 5,
			complete: true,
		},
		{
			title: '안드로이드 개발자 공식 문서',
			img: androidDevelop,
			content:
				'안드로이드 개발자라면 반드시 읽어보거나 참조해야 하는 안드로이드 사이트의 개발자 Document 입니다.' +
				'안드로이드에서 지원하는 여러 기능들에 대해서 자세히 설명되어 있으며, deprecated된 내용이라거나 새로 추가된 내용' +
				'에 대해서 확인할 수 있습니다. 단, 한글 번역보다는 영어 원문으로 읽어보는 것을 추천합니다. 가끔 번역이 이상하게 ' +
				'된 부분이 있어서 이해하기 힘든 부분들이 있습니다.😢',
			hover: false,
			type: 0,
			rate: 4,
			complete: false,
		},
		{
			title: '리액트 프로그래밍 정석',
			img: reactBook,
			content: '추추 업로드 예정입니다.😌',
			hover: false,
			type: 1,
			rate: 0,
			complete: false,
		},
		{
			title:
				'30개 프로젝트로 배우는 Android 앱 개발 with Kotlin',
			img: androidLecture,
			content:
				'안드로이드의 다양한 기능들에 대해 알아보고, 직접 프로그래밍 해보고 싶다면 강력 추천하는 강의 입니다. ' +
				'간단한 것에서 부터 MotionLayout, Coroutine, Test Unit 등의 처음보는 기능도 경험해 볼 수 있었습니다. ' +
				'또한, MVP / MVVM 방식의 프로그램을 만들어봄으로써 각 개발방식에 대한 이해도를 높이고 실제로 적용해볼 수 있습니다.' +
				'마지막으로는 실제로 구글 플레이 스토어에 배포도 해볼 수 있습니다.',
			hover: false,
			type: 0,
			rate: 5,
			complete: true,
		},
		{
			title: '웹 성능 최적화 기법',
			img: optimize,
			content: '추추 업로드 예정입니다.😌',
			hover: false,
			type: 1,
			rate: 0,
			complete: false,
		},
		{
			title: 'Clean Code',
			img: cleanCode,
			content: '추추 업로드 예정입니다.😌',
			hover: false,
			type: 2,
			rate: 0,
			complete: false,
		},
		{
			title:
				'The RED : 효과적인 비동기처리를 위한 Kotlin Coroutines & Flow 마스터 by 김용욱',
			img: section,
			content:
				'안드로이드를 공부해보면서 알게 된 Coroutine!' +
				'하지만 혼자 공부하기에는 정확한 동작 방식이 이해가 되지 않아, 강의를 듣게 되었습니다. 😊 ' +
				'첫 강의부터 많은 것을 가르쳐 주시지만, 딥한 내용이 많아 따로 별도의 공부를 하면서 같이 수강하고 있습니다.' +
				'공부하려고 강의를 신청했지만 또 다른 공부할 것이 생겨버렸습니다. 🔥🔥🔥🔥🔥',
			hover: false,
			type: 0,
			rate: 3,
			complete: false,
		},
	]);

	const onHandleCategory = (index) => setCurIndex(index);

	const onHandleMouseEnter = (index) => {
		const tmp = [...data];
		tmp[index].hover = true;
		setData(tmp);
	};
	const onHandleMouseLeave = (index) => {
		const tmp = [...data];
		tmp[index].hover = false;
		setData(tmp);
	};

	const categories = ['Android', 'Front-End', 'Common'];
	return (
		<div className='book-container'>
			<ul className='category-container'>
				{categories.map((category, index) => (
					<li
						className={
							index == curIndex
								? 'category-item active'
								: 'category-item'
						}
						key={index}
						onClick={() => onHandleCategory(index)}>
						{category}
					</li>
				))}
			</ul>
			<ul className='book-list'>
				{data
					.filter((x) => x.type == curIndex)
					.map((book, index) => (
						<li className='book-item'>
							<img
								className='book-img'
								src={book.img}
								alt={book.title}
							/>
							<div className='book-info'>
								<strong className='book-title'>
									{book.title}
								</strong>
								<li className='rate-container'>
									{[...Array(book.rate)].map((index) => (
										<img
											className='rate'
											src={star}
											key={index}
										/>
									))}
									{[...Array(5 - book.rate)].map(
										(index) => (
											<img
												className='no-rate'
												src={nonStar}
												key={index}
											/>
										)
									)}
								</li>
								<li className='book-state'>
									<span
										className={
											book.complete
												? ' complete'
												: ' reading'
										}>
										{book.complete ? '완료😚' : '읽는 중😆'}
									</span>
								</li>
								<li className='book-desc'>
									{book.content}
								</li>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
}

export default Book;
