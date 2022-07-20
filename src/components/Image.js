import React from 'react';
import useResizeObserver from 'use-resize-observer';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Point from './Point';
import { places } from '../data';

const Image = ({ handleMouseMove }) => {
  const { ref, width, height } = useResizeObserver();
  const valueY = (width * 100) / 1920;
  const finalY = (285 * valueY) / 100;
  const valueX = (height * 100) / 602.1;
  const finalX = (300 * valueX) / 100;

  return (
    <div
      className='relative self-center'
      onMouseMove={handleMouseMove}
      ref={ref}
    >
      <TransformWrapper>
        <TransformComponent>
          {places.map((place) => {
            const valueY = (width * 100) / 1920;
            const finalY = (place.y * valueY) / 100;
            const valueX = (height * 100) / 602.1;
            const finalX = (place.x * valueX) / 100;
            return (
              <Point
                x={finalX}
                y={finalY}
                title={place.title}
                subtitle={place.subtitle}
                img={place.img}
              />
            );
          })}
          {/* <Point x={finalX} y={finalY} title={'probando'} /> */}
          <img
            className='w-full myContent'
            src='https://res.cloudinary.com/eparionad/image/upload/v1658245818/Pukaqaqa/panoramica_kacwde.jpg'
            alt=''
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Image;
