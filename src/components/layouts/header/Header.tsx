import Link from "next/link";
import type { NavItem } from "@/features/Home/types/home.types";
import styles from './Header.module.scss';

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function Header({ navItems }: SiteHeaderProps) {
  return (
    <header className={`${styles.headerContainer} border-y border-gray-500 bg-slate-800`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="text-xl font-extrabold text-sky-900">JBSV</div>
        <nav className="hidden items-center gap-5 text-sm text-zinc-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} className="hover:text-sky-700" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
