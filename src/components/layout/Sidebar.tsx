'use client';

import { menuItems } from '@/constants';
import React from 'react';
import { TMenuItem } from '@/types';
import { ActiveLink } from '../common';
import { useAuth, UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../common/ModeToggle';
import Link from 'next/link';
import { IconUsers } from '@/components/icons';

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div className="hidden p-5 border-r borderDarkMode bgDarkMode lg:flex flex-col fixed top-0 left-0 bottom-0 w-[300px]">
      <Link
        href="/"
        className="font-bold text-2xl inline-flex items-center gap-2 mb-5 h-10 self-start pl-3"
      >
        <span className="size-10 rounded-lg flex items-center justify-center text-lg text-primary bgDarkMode border borderDarkMode">
          U
        </span>
        <span>Ucademy</span>
      </Link>
      <ul className='flex flex-col gap-2'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} url={item.url} title={item.title} icon={item.icon} />
        ))}
      </ul>
      <div className='mt-auto flex items-center justify-end gap-5'>
        <ModeToggle></ModeToggle>
        {!userId ? (
          <Link
            href='/sign-in'
            className='size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1'
          >
            <IconUsers />
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
};

export function MenuItem({ url = "/", title = "", icon, onlyIcon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {onlyIcon ? null : title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
