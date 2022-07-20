import React from 'react';

import {Slideshow, Slide} from '../src/components/SlideShow';
// Translation
import { useTranslation } from "react-i18next";

import "../src/pages/static/assets/scss/main.scss";

import { FaAngleRight } from "react-icons/fa";

import { Link } from "react-router-dom";


const ImgSlider = require.context('./pages/static/assets/img/index/slider')

const Slide1= () => {
	const {t} = useTranslation();
	return (
		<>
			<div className='box'>
				<p className='slidertext'>{t('index.slider.title')}</p>
				<div className='linea'/>
				<p className='parrafo'>
					{t('index.slider.desc')}
				</p>
				<div className='slider-button'>
					<Link to='/accounts' className='slider-link'>
						<span className='view-text'>
						{t('index.read_more')}
						</span>
						<FaAngleRight className='slider-icon'/>
					</Link>
				</div>
			</div>
			
			<main className='slider-container'>
				<Slideshow controles={true} autoplay={true} velocidad="600" intervalo="8000">
					<Slide>
							<img src={ImgSlider(`./slider-image-1.jpg`)} alt=""/>
					</Slide>
					<Slide>
							<img src={ImgSlider(`./slider-image-2.jpg`)} alt=""/>
					</Slide>
					<Slide>
							<img src={ImgSlider(`./slider-image-3.jpg`)} alt=""/>
					</Slide>
					<Slide>
							<img src={ImgSlider(`./slider-image-4.jpg`)} alt=""/>
					</Slide>
				</Slideshow>	
			</main>
		</>
	);
}

export default Slide1;