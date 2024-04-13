import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        <div className='flex flex-row font-semibold'>
          <div className='text-red-500 text-[74px]'>N</div>
          <div className='text-yellow-500 text-[74px]'>O</div>
          <div className='text-blue-500 text-[74px]'>O</div>
          <div className='text-red-800 text-[74px]'>D</div>
          <div className='text-yellow-800 text-[74px]'>L</div>
          <div className='text-blue-800 text-[74px]'>E</div>
        </div>


        <HomeSearch />
      </div>
    </>
  );
}
