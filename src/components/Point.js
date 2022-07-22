import React, { useState } from 'react';
import { Tooltip } from 'react-tippy';
import Modal from './Modal';

const Point = ({ x, y, title, subtitle, img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div onClick={openModal}>
        <Tooltip
          className={`absolute rounded-full p-1 bg-blue-700 opacity-80 hover:bg-blue-500 hover:cursor-pointer hover:p-1.5 hover:scale-100 ease-out duration-300 z-50`}
          position='top'
          style={{
            top: `${y}px`,
            left: `${x}px`,
          }}
          animation={'fade'}
          html={
            <div className='bg-black opacity-60 px-3 py-2 rounded-md'>
              <div className='text-white font-bold text-base w-3/6'>
                {title}
              </div>
            </div>
          }
        />
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}
        subtitle={subtitle}
        img={img}
      />
    </>
  );
};

export default Point;
