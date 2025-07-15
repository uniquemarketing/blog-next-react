"use client";

import clsx from "clsx";
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = clsx(
    "bg-slate-900 text-slate-100 rounded-lg overflow-hidden",
    "flex flex-col mb-8",
    "sm:flex-row sm:flex-wrap",
    !isOpen && "h-10",
    !isOpen && "overflow-hidden",
    "sm:overflow-visible sm:h-auto"
  );
  const linkClasses = clsx(
    "[&>svg]:w-4 [&>svg]:h-4 px-4",
    "flex items-center justify-start gap-2",
    "transition hover:bg-slate-800",
    "h-10 shrink-0"
  );
  const openCloseBtnClasses = clsx(linkClasses, "text-blue-200 sm:hidden");
  return (
    <nav className={navClasses}>
      <button
        onClick={() => setIsOpen((s) => !s)}
        className={openCloseBtnClasses}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>
      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Post
      </Link>
      <Link className={linkClasses} href="/admin/post">
        <PlusIcon />
        Criar Post
      </Link>
    </nav>
  );
}
