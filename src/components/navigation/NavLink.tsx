'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavLinkProps {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}

const NavLink = ({ href, children, onNavigate }: INavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const classes = clsx(
    'hover:opacity-80 transition-all font-semibold',
    isActive ? 'text-accent underline' : 'text-light '
  );

  return (
    <Link href={href} className={classes} onClick={onNavigate}>
      {children}
    </Link>
  );
};

export default NavLink;
