'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: INavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const classes = clsx(
    'hover:opacity-80 transition-all',
    isActive ? 'text-accent underline' : 'text-light',
  );

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

export default NavLink;
