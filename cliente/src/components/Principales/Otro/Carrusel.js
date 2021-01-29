import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import Recamara from '../../../images/recamara.jpg'
import Hotel from '../../../images/hotel.jpg'
import Alberca from '../../../images/alberca.jpg'
import Restaurante from '../../../images/restaurnate.jpg'
 
const items = [
  {
    src: Recamara,
    altText: 'Recamara',
    caption: 'Contamos Con Diferentes Tipos de Recamaras'
  },
  {
    src: Hotel,
    altText: 'Hotel Casino',
    caption: ''
  },
  {
    src: Alberca,
    altText: 'Alberca',
    caption: ''
  },
  {
    src: Restaurante,
    altText: 'Restaurante',
    caption: 'Contamos con servicio de restaurante'
  }
];

const Carrusel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.altText}
      >
        <img src={item.src} alt={item.altText} className="fotos"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Carrusel;