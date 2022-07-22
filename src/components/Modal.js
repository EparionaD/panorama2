import React from 'react';
import ReactDOM from 'react-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const Modal = ({ img, title, subtitle, isOpen, closeModal }) => {
  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && 'is-open'} rounded-lg`}>
      <div className='modal-container'>
        <div className='modal-position max-w-prose rounded-lg'>
          <button
            className='absolute top-1 right-2 text-white text-lg font-black hover:text-blue-900 hover:shadow-lg hover:shadow-blue-900 z-50'
            onClick={closeModal}
          >
            X
          </button>
          <div className='flex flex-col absolute top-3 left-3 z-40'>
            {title.startsWith('PLAT') ? (
              <div>
                <h1 className=' text-white font-black text-lg text-shadow-modal'>
                  {title}
                </h1>
                <h1 className=' text-white font-black text-lg text-shadow-modal'>
                  {subtitle}
                </h1>
              </div>
            ) : (
              <h1 className=' text-white font-black text-lg text-shadow-modal w-7/12'>
                {subtitle}
              </h1>
            )}
          </div>
          <TransformWrapper wrapperClass={'rounded-lg'}>
            <TransformComponent contentClass={'rounded-lg'}>
              <img className='rounded-lg' src={img} alt='' />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </article>,
    document.getElementById('modal')
  );
};

export default Modal;
