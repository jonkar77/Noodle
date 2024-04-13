import Image from 'next/image';
import Link from 'next/link';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href='/'>
          <div className='flex flex-row font-semibold'>
            <div className='text-red-500 text-[34px]'>N</div>
            <div className='text-yellow-500 text-[34px]'>O</div>
            <div className='text-blue-500 text-[34px]'>O</div>
            <div className='text-red-800 text-[34px]'>D</div>
            <div className='text-yellow-800 text-[34px]'>L</div>
            <div className='text-blue-800 text-[34px]'>E</div>
          </div>

        </Link>
        <div className='flex-1'>
          <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-2'>
          <RiSettings3Line className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
          <TbGridDots className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
        </div>
        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2'>
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
