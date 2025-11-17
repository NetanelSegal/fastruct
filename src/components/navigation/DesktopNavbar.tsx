'use client';

import Link from 'next/link';
import { ENABLED_ROUTES } from '@/lib/routes';
import NavLink from './NavLink';
import { Button } from '../Button';

const DesktopNavbar = () => {
  return (
    <nav className='flex items-center gap-6'>
      {ENABLED_ROUTES.map((route) =>
        route.isButton ? (
          <Link href={route.href} key={route.href}>
            <Button variant='primary' size='md' hoverTransition='lift'>
              {route.title}
            </Button>
          </Link>
        ) : (
          <NavLink key={route.href} href={route.href}>
            {route.title}
          </NavLink>
        )
      )}
    </nav>
  );
};

export default DesktopNavbar;
