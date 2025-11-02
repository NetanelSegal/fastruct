import { ROUTES } from '@/lib/routes';
import FastructLogo from './FastructLogo';
import Link from 'next/link';
import { Section } from './Section';
import { Button } from './Button';

const LetsBuildTogetherCTA = () => {
  return (
    <div className='flex flex-col gap-2 text-center'>
      <h2 className='text-h2 font-bebas text-light'>
        Let&apos;s build together
      </h2>
      <p className='text-h6 text-light'>
        Have a project in mind? Let&apos;s talk about how we can bring it to
        life.
      </p>
      <Link href='/contact'>
        <Button variant='primary' size='lg' hoverTransition='lift'>
          Get in Touch
        </Button>
      </Link>
    </div>
  );
};

const FooterLinksAndContact = () => {
  const footerLinks = ROUTES.filter((route) => !route.isButton);
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <div>
        <h3 className='font-semibold'>Company</h3>
        <ul className='mt-4 space-y-2'>
          {footerLinks.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className='hover:text-accent transition-colors'>
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Information */}
      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold'>Contact</h3>
        <ul className='mt-4 space-y-2 text-sm'>
          <li>123 Main Street</li>
          <li>Anytown, USA 12345</li>
          <li className='pt-2'>
            <a
              href='mailto:contact@fastruct.com'
              className='hover:text-accent transition-colors'>
              contact@fastruct.com
            </a>
          </li>
          <li>
            <a
              href='tel:+1234567890'
              className='hover:text-accent transition-colors'>
              (123) 456-7890
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h3 className='font-semibold'>Follow Us</h3>
        <ul className='mt-4 space-y-2'>
          <li>
            <a href='#' className='hover:text-accent transition-colors'>
              LinkedIn
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-accent transition-colors'>
              Facebook
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-accent transition-colors'>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='bg-dark text-white'>
      <Section className='flex flex-col gap-6'>
        <LetsBuildTogetherCTA />
        <div className='section-padding'>
          <div className='flex flex-col items-start gap-8 md:flex-row md:justify-between'>
            <FastructLogo color='white' height='60' />
            <FooterLinksAndContact />
          </div>
          <div className='border-cream/20 mt-12 border-t pt-8 text-center text-sm opacity-70'>
            © {new Date().getFullYear()} FastStruct. All rights reserved.
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
