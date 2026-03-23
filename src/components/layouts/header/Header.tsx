import Link from "next/link";
import type { NavItem } from "@/features/Home/types/home.types";
import styles from './Header.module.scss';

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function Header({ navItems }: SiteHeaderProps) {
  return (
    <header className={`${styles.headerContainer} border-b border-sky-200 bg-white`}>
      <div className="bg-sky-900 text-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6 sm:text-sm">
          <p>Giao nhanh nội thành trong ngày</p>
          <p>Hotline: 0901 234 567</p>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="text-xl font-extrabold text-sky-900">TB SEAFOOD</div>
        <nav className="hidden items-center gap-5 text-sm text-zinc-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} className="hover:text-sky-700" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto flex w-full max-w-6xl gap-3 px-4 pb-4 sm:px-6">
        <input
          type="text"
          placeholder="Tìm tôm, cua, cá..."
          className="w-full rounded-lg border border-sky-300 bg-white px-4 py-2 text-sm outline-none ring-sky-300 placeholder:text-zinc-400 focus:ring-2"
        />
        <button className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800">
          Tìm
        </button>
      </div>
    </header>
  );
}
