import React from 'react';

import {Slideshow, Slide} from '../src/components/SlideShow';

import "../src/pages/static/assets/scss/main.scss";

import { FaAngleRight } from "react-icons/fa";

import { Link } from "react-router-dom";


const ImgSlider = require.context('./pages/static/assets/img/index/slider')

const Slide1= () => {
	return (
		<>
			<div className='box'>
				<p className='slidertext'>Banca en Línea</p>
				<div className='linea'/>
				<p className='parrafo'>
					Simplificamos la forma de administrar tus cuentas, abre tu cuente y disfruta de muchos beneficios
				</p>
				<div className='slider-button'>
				<Link to='/accounts' className='view-more'>
					<span className='view-text'>Ver más</span>
					<FaAngleRight />
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