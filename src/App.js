import { useState } from 'react';
import Image from './components/Image';

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCoords({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div className='flex flex-col h-screen justify-center bg-black'>
      <div className='pl-3 pb-3'>
        <h1 className='text-red-600 font-black text-2xl'>Panorámica 2</h1>
        <p className='text-white font-extrabold text-xl sm:w-2/5 2xl:w-full'>
          Labores mineras en el aŕea del pórfido principal del Proyecto Pukaqaqa
        </p>
        {/* <div className='text-white'>
          <span>Position x: </span>
          {coords.x}
        </div>
        <div className='text-white'>
          <span>Position y: </span>
          {coords.y}
        </div> */}
      </div>
      <Image handleMouseMove={handleMouseMove} />
      <div className='flex justify-end pt-3 pr-3'>
        <img
          className='w-1/12'
          src='https://res.cloudinary.com/eparionad/image/upload/v1658112780/Pukaqaqa/logo_arcoiris_NEGATIVO_zdefiw.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default App;
