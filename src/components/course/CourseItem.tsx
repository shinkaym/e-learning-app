import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconClock, IconEye, IconStar } from '../icons';
import { ICourse } from '@/database/course.model';

const CourseItem = ({ data }: { data: ICourse }) => {
  const courseInfo = [
    {
      title: data.views,
      icon: (className?: string) => <IconEye className={className}></IconEye>,
    },
    {
      title: data.rating[0],
      icon: (className?: string) => <IconStar className={className}></IconStar>,
    },
    {
      title: '25h30',
      icon: (className?: string) => <IconClock className={className}></IconClock>,
    },
  ];
  
  return (
    <div className='bg-white border-r-gray-200 p-4 rounded-2xl dark:bg-grayDarker dark:border-opacity-10'>
      <Link href={`/course/${data.slug}`} className='block h-[200px] relative'>
        <Image
          src='https://images.unsplash.com/photo-1522204538344-922f76ecc041?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          width={300}
          height={200}
          className='w-full h-full object-cover rounded'
          sizes='@media (min-width: 640px) 300px, 100vw'
          priority
        />
        {/* <span className='inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-green-500 text-xs'>
          New
        </span> */}
      </Link>
      <div className='pt-4'>
        <h3 className='font-bold text-lg mb-3'>{data.title}</h3>
        <div className='flex items-center gap-3 mb-5 text-xs text-gray-500 dark:text-grayDark'>
          {courseInfo.map((item, index) => (
            <div className='flex items-center gap-1' key={index}>
              {item.icon('size-4')}
              <span>{item.title}</span>
            </div>
          ))}
          <span className='font-semibold text-primary ml-auto text-base'>{data.price}</span>
        </div>
        <Link
          href={`/course/${data.slug}`}
          className='flex items-center justify-center w-full mt-10 rounded-lg text-white font-semibold bg-primary h-12'
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
