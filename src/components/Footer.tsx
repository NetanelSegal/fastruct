export default function Footer() {
  return (
    <footer className='border-t text-sm'>
      <div className='container flex flex-col gap-2 py-6'>
        <div>
          © {new Date().getFullYear()} FastStruct. All rights reserved.
        </div>
        <div className='opacity-70'>
          Modular + Panelized construction, done right.
        </div>
      </div>
    </footer>
  );
}
