import React from 'react';
import useResizeObserver from 'use-resize-observer';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Point from './Point';
import { places } from '../data';

const Image = ({ handleMouseMove }) => {
  const { ref, width, height } = useResizeObserver();
  const valueY = (width * 100) / 1920;
  const finalY = (156 * valueY) / 100;
  const valueX = (height * 100) / 602.1;
  const finalX = (640 * valueX) / 100;

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

          {/* {arrows.map((arrow) => {
            const valueY = (width * 100) / 1920;
            const finalY = (arrow.y * valueY) / 100;
            const valueX = (height * 100) / 602.1;
            const finalX = (arrow.x * valueX) / 100;
            return (
              <HiArrowNarrowDown
                className='absolute text-white font-black text-4xl text-shadow-modal z-50'
                style={{ top: `${finalY}px`, left: `${finalX}px` }}
              />
            );
          })} */}
          {/* <div className='flex flex-col items-center'>
            <h1 className='text-white font-black text-xs text-shadow-modal pb-4'>
              Carretera hacia Callqui y Totoral
            </h1>

          </div>
          <div className='absolute top-[148px] left-[1688px] flex flex-col items-center'>
            <h1 className='text-white font-black text-xs text-shadow-modal pb-4'>
              Carretera hacia Pueblo Libre
            </h1>
          </div> */}
          <img
            className='w-full myContent'
            src='https://res.cloudinary.com/eparionad/image/upload/v1658513894/Pukaqaqa/panoramica_psdifo.jpg'
            alt=''
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Image;
