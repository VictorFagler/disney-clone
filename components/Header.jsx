import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 items-center flex justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="/disneylogo.png"
          alt="Disney logo"
          width={120}
          height={100}
          priority
          className="cursor-pointer invert-0 dark:invert"
          style={{ width: "auto", height: "auto" }} 
        />
      </Link>

      <div className="flex space-x-2 items-center">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
