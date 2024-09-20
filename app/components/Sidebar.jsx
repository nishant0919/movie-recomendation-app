// components/Sidebar.js
"use client"; // Add this if you're using hooks

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, TrendingUp, Film, Tag, CheckCircle } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Trending', href: '/trending', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Movies', href: '/movies', icon: <Film className="w-5 h-5" /> },
    { name: 'Genre', href: '/genre', icon: <Tag className="w-5 h-5" /> },
    { name: 'WatchList', href: '/bucket-list', icon: <CheckCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="w-[5rem] h-[92vh]  bg-[#111217] text-white shadow-lg flex flex-col">
      <div className="flex-grow">
        <ul className="flex flex-col items-center p-4">
          {menuItems.map((item) => (
            <li key={item.name} className="flex flex-col items-center p-2 my-4 transition-colors duration-200 relative">
              <Link href={item.href} className="flex flex-col items-center">
                <span className={`${pathname === item.href ? 'text-red-500' : 'text-white'}`}>
                  {item.icon}
                </span>
                {pathname === item.href ? (
                  <span className="mt-1 text-sm"></span>
                ) : (
                  <span className="mt-1 text-sm">{item.name}</span>
                )}
              </Link>
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
