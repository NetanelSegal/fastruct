import Link from 'next/link';
import FastructLogo from './FastructLogo';
import { Button } from './Button';
import NavLink from './NavLink';

export default function Navbar() {
  return (
    <header className='container-padding bg-dark flex items-center justify-between gap-4 border-b py-4'>
      <Link href='/'>
        <FastructLogo color='light' height='40' />
      </Link>
      <nav className='flex items-center gap-6'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/technical'>Technical</NavLink>
        <Link href='/contact'>
          <Button variant='primary' size='md' hoverTransition='lift'>
            Call us
          </Button>
        </Link>
      </nav>
    </header>
  );
}
