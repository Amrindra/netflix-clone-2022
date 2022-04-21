import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // When component is mount is when the UI show on screen
  useEffect(() => {
    const handleScroll = () => {
      //window is a screen that we see on the screen
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    //addEventListener to listen to scroll event and then run handleScroll function
    window.addEventListener('scroll', handleScroll);

    return () => {
      //Clean up addEventListener after running by calling removeEventListener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    //when we scroll the addEventListener function will be triggered and change the background color
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden  md:flex  space-x-4">
          <li className="header-link">Home</li>
          <li className="header-link">TV Shows</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline ">Kids</p>
        <BellIcon className="h-6 w-6 " />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
