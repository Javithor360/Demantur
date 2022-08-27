import React, {useRef, useEffect, useCallback} from 'react';
import { BsChevronLeft } from "react-icons/bs";
import {BsChevronRight } from "react-icons/bs";
import styled from 'styled-components';



const Slideshow = ({
		children,
		controles = false,
		autoplay = false,
		velocidad="200",
		intervalo="5000"
	}) => {
	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);

	const siguiente = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if(slideshow.current.children.length > 0){
			console.log('first')
			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener('transitionend', transicion);
			}

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener('transitionend', transicion);

		}
	}, [velocidad]);
	
	// const anterior = () => {
	// 	console.log('Anterior');
	// 	if(slideshow.current.children.length > 0){
	// 		// Obtenemos el ultimo elemento del slideshow.
	// 		const index = slideshow.current.children.length - 1;
	// 		const ultimoElemento = slideshow.current.children[index];
	// 		slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
	// 		slideshow.current.style.transition = 'none';
	// 		const tamañoSlide = slideshow.current.children[0].offsetWidth;
	// 		slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
	// 		setTimeout(() => {
	// 			slideshow.current.style.transition = `${velocidad}ms ease-out all`;
	// 			slideshow.current.style.transform = `translateX(0)`;
	// 		}, 30);
	// 	}
	// }

	useEffect(() => {
		if(autoplay){
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);
	
			// // Eliminamos los intervalos
			// slideshow.current.addEventListener('mouseenter', () => {
			// 	clearInterval(intervaloSlideshow.current);
			// });
		}
	}, [autoplay, intervalo, siguiente]);

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={slideshow}>
				{children}
			</ContenedorSlideshow>
			{controles && <Controles>
				{/* <Boton onClick={anterior}>
					<FlechaIzquierda />
				</Boton> */}
				<Boton derecho onClick={siguiente}>
					{/* <BsChevronRight /> */}
				</Boton>
			</Controles>}
		</ContenedorPrincipal>
	);
}

const ContenedorPrincipal = styled.div`
	position: relative;		
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
	position: relative;
`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	position: relative;
	img {
		width: 100vw;
		height: 35rem;
		object-fit: cover; 
		object-position: center 10%;
		transform: translateX(calc(-2vw + 20%))
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 3.12rem;
	height: 100%;
	text-align: center;
	position: absolute;
	path {
		filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
	}

	${props => props.derecho ? 'right: 0' : 'left: 0'}
`;
 
export {Slideshow, Slide};