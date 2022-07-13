import React from 'react';
import AlbumBackground from './images/img_8.png';
import Stars from './images/stars.svg';

import img1 from './images/img_1.png';
import img2 from './images/img_2.png';
import img3 from './images/img_3.png';
import img4 from './images/img_4.png';
import img5 from './images/img_5.png';
import img6 from './images/img_6.png';
import img7 from './images/img_7.png';
import logo from './images/logo.svg';
import Comment from './Comment';
import GiftComponent from './GiftComponent';

const HomePage = () => {
  return (
    <main className='container mx-auto my-6 relative grid grid-cols-1 md:grid-cols-feed gap-x-4 xl:gap-x-36 md:gap-x-8 md:grid-rows-feedRow md:gap-y-14'>
      <section className='order-1'>
        <img className='h-96 w-full object-cover' src={AlbumBackground} alt='' />
        <img className='absolute top-0 right-4 md:left-0 md:-top-2' src={logo} alt='logo' />
        <section className='mx-4 md:mx-0'>
          <div className='-mt-14 md:mt-4 flex justify-between mb-4'>
            <h1 className='text-4xl mr-4'>Ancient greek history</h1>
            <GiftComponent />
          </div>
          <img className='my-6 rounded-sm' src={Stars} alt='score stars' />
          <p className='text-base text-gray-400'>
            Roughly three centuries after the Late Bronze Age collapse of Mycenaean Greece, Greek urban poleis began to
            form in the 8th century BC, ushering in the Archaic period and colonization of the Mediterranean Basin.
          </p>
        </section>
      </section>

      <section className='mx-4 md:mx-0 md:mx-0 order-2 row-span-2'>
        <h3 className='mt-10 mb-6 text-3xl'>Similar videos</h3>
        <div className='flex flex-col m-auto p-auto'>
          <div className='flex overflow-x-scroll pb-10 hide-scroll-bar md:pb-0'>
            <div className='flex flex-nowrap gap-x-3 md:flex-col md:space-y-6'>
              <div className='inline-block'>
                <div className='cardItem'>
                  <img className='w-full h-40' alt='image1' src={img1} />
                  <h4 className='text-base mt-4 md:mt-1'>Ancient Greece pt 1: Statues</h4>
                </div>
              </div>
              <div className='inline-block'>
                <div className='cardItem'>
                  <img className='w-full h-40' alt='image1' src={img2} />
                  <h4 className='text-base mt-4 md:mt-1'>Ancient Greece pt 2: Architecture</h4>
                </div>
              </div>
              <div className='inline-block'>
                <div className='cardItem'>
                  <img className='w-full h-40' alt='image1' src={img3} />
                  <h4 className='text-base mt-4 md:mt-1'>Ancient Greece pt 3: Monuments</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex gap-12 flex-col mx-4 md:mx-0 order-2'>
        <Comment imgSrc={img4} date='07 June 2022' />
        <Comment imgSrc={img4} date='06 June 2022' />
        <Comment imgSrc={img5} date='02 June 2022' />
        <Comment imgSrc={img6} date='04 May 2022' />
        <Comment imgSrc={img7} date='07 April 2022' />
      </section>
    </main>
  );
};

export default HomePage;
