import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        {/* <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          alt='Google Logo'
          width={300}
          height={100}
          priority
          style={{ width: 'auto' }}
        /> */}
        <div className='flex justify-center text-[84px] font-medium'>
          <div className='text-red-600 text-purple-700'>N</div>
          <div  className='text-yellow-500'>o</div>
          <div className='text-green-600'>o</div>
          <div  className='text-red-600'>d</div>
          <div className='text-yellow-500'>l</div>
          <div  className='text-green-600'>e</div>
        </div>
        <HomeSearch />
      </div>
    </>
  );
}