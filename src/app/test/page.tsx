export default function Home() {
  return (
    <div className='min-h-screen bg-white p-8'>
      {/* Font Sizes Test */}
      <section className='mb-16'>
        <h2 className='border-dark mb-6 border-b-2 pb-2 text-2xl font-bold'>
          Font Sizes (Bebas Neue)
        </h2>
        <div className='space-y-4'>
          <div>
            <span className='block text-xs text-gray-500'>text-display</span>
            <p className='text-display font-bebas text-dark'>Display Heading</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h1</span>
            <p className='text-h1 font-bebas text-dark'>Heading 1</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h2</span>
            <p className='text-h2 font-bebas text-dark'>Heading 2</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h3</span>
            <p className='text-h3 font-bebas text-dark'>Heading 3</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h4</span>
            <p className='text-h4 font-bebas text-dark'>Heading 4</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h5</span>
            <p className='text-h5 font-bebas text-dark'>Heading 5</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h6</span>
            <p className='text-h6 font-bebas text-dark'>Heading 6</p>
          </div>
        </div>
      </section>

      {/* Font Sizes Test - Poppins */}
      <section className='mb-16'>
        <h2 className='border-dark mb-6 border-b-2 pb-2 text-2xl font-bold'>
          Font Sizes (Poppins)
        </h2>
        <div className='space-y-4'>
          <div>
            <span className='block text-xs text-gray-500'>text-h1</span>
            <p className='text-h1 font-poppins text-dark'>Heading 1</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h2</span>
            <p className='text-h2 font-poppins text-dark'>Heading 2</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h3</span>
            <p className='text-h3 font-poppins text-dark'>Heading 3</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h4</span>
            <p className='text-h4 font-poppins text-dark'>Heading 4</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h5</span>
            <p className='text-h5 font-poppins text-dark'>Heading 5</p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>text-h6</span>
            <p className='text-h6 font-poppins text-dark'>Heading 6</p>
          </div>
        </div>
      </section>

      {/* Font Families Test */}
      <section className='mb-16'>
        <h2 className='border-dark mb-6 border-b-2 pb-2 text-2xl font-bold'>
          Font Families
        </h2>
        <div className='space-y-4'>
          <div>
            <span className='block text-xs text-gray-500'>font-bebas</span>
            <p className='text-h3 font-bebas text-dark'>
              Bebas Neue - Bold & Impactful
            </p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>font-poppins</span>
            <p className='font-poppins text-dark text-lg'>
              Poppins - Clean & Modern Typography
            </p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>
              font-sans (default Poppins)
            </span>
            <p className='text-dark font-sans text-lg'>
              Sans Serif - Default Body Text
            </p>
          </div>
        </div>
      </section>

      {/* Colors Test */}
      <section className='mb-16'>
        <h2 className='border-dark mb-6 border-b-2 pb-2 text-2xl font-bold'>
          Custom Colors
        </h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div>
            <div className='bg-light mb-2 h-32 rounded-lg border-2 border-gray-200'></div>
            <p className='font-semibold'>Light (#E5E0D2)</p>
            <p className='text-sm text-gray-600'>bg-light / text-light</p>
          </div>
          <div>
            <div className='bg-accent mb-2 h-32 rounded-lg border-2 border-gray-200'></div>
            <p className='font-semibold'>Accent (#A88E6B)</p>
            <p className='text-sm text-gray-600'>bg-accent / text-accent</p>
          </div>
          <div>
            <div className='bg-dark mb-2 h-32 rounded-lg border-2 border-gray-200'></div>
            <p className='font-semibold'>Dark (#171717)</p>
            <p className='text-sm text-gray-600'>bg-dark / text-dark</p>
          </div>
        </div>
      </section>

      {/* Color + Font Combinations */}
      <section className='mb-16'>
        <h2 className='border-dark mb-6 border-b-2 pb-2 text-2xl font-bold'>
          Color & Font Combinations
        </h2>
        <div className='space-y-6'>
          <div className='bg-light rounded-lg p-6'>
            <h3 className='text-h2 font-bebas text-dark mb-2'>Dark on Cream</h3>
            <p className='font-poppins text-dark text-base'>
              Perfect for hero sections and primary content areas.
            </p>
          </div>

          <div className='bg-dark rounded-lg p-6'>
            <h3 className='text-h2 font-bebas text-light mb-2'>
              Cream on Dark
            </h3>
            <p className='font-poppins text-light text-base'>
              High contrast for impactful statements and CTAs.
            </p>
          </div>

          <div className='bg-accent rounded-lg p-6'>
            <h3 className='text-h2 font-bebas text-dark mb-2'>Dark on Gold</h3>
            <p className='font-poppins text-dark text-base'>
              Warm and inviting for featured sections.
            </p>
          </div>

          <div className='border-accent rounded-lg border-2 bg-white p-6'>
            <h3 className='text-h2 font-bebas text-accent mb-2'>
              Gold Accents
            </h3>
            <p className='font-poppins text-dark text-base'>
              Subtle elegance with accent highlights on white.
            </p>
          </div>
        </div>
      </section>

      {/* Letter Spacing Test */}
      <section className='mb-16'>
        <h2 className='border-dark mb-6 border-b-2 pb-2 text-2xl font-bold'>
          Letter Spacing
        </h2>
        <div className='space-y-4'>
          <div>
            <span className='block text-xs text-gray-500'>
              tracking-tightish (-0.01em)
            </span>
            <p className='text-h3 font-bebas text-dark tracking-tightish'>
              Slightly Tighter Spacing
            </p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>
              tracking-tighter2 (-0.02em)
            </span>
            <p className='text-h3 font-bebas text-dark tracking-tighter2'>
              Tighter Spacing for Impact
            </p>
          </div>
          <div>
            <span className='block text-xs text-gray-500'>
              normal (default)
            </span>
            <p className='text-h3 font-bebas text-dark'>
              Normal Letter Spacing
            </p>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className='section mb-16'>
        <h2 className='border-dark mb-6 border-b-2 pb-2 text-2xl font-bold'>
          Real-world Examples
        </h2>

        {/* Hero Section Example */}
        <div className='mb-8'>
          <h3 className='mb-3 text-xl font-semibold text-gray-700'>
            Hero Section
          </h3>
          <div className='bg-light rounded-lg p-12'>
            <h1 className='text-h1 font-bebas text-dark tracking-tightish mb-4'>
              More Than Just Construction
            </h1>
            <p className='font-poppins text-dark mb-6 max-w-2xl text-lg'>
              Combining modular and panelized methods for faster timelines,
              higher quality, and a smoother experience.
            </p>
            <button className='bg-accent text-dark font-poppins hover:bg-secondary rounded-lg px-8 py-3 font-semibold transition-colors'>
              Get Started
            </button>
          </div>
        </div>

        {/* Feature Card Example */}
        <div className='mb-8'>
          <h3 className='mb-3 text-xl font-semibold text-gray-700'>
            Feature Card
          </h3>
          <div className='border-light rounded-lg border-2 bg-white p-8'>
            <h3 className='text-h3 font-bebas text-accent tracking-tightish mb-3'>
              Modular Construction
            </h3>
            <p className='font-poppins text-dark mb-4 text-base leading-relaxed'>
              Build faster with precision-engineered modules manufactured in
              controlled environments. Our modular approach reduces construction
              time by up to 50% while maintaining superior quality standards.
            </p>
            <a
              href='#'
              className='text-accent font-poppins tracking-tightish hover:text-secondary font-medium transition-colors'
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Dark CTA Section */}
        <div className='mb-8'>
          <h3 className='mb-3 text-xl font-semibold text-gray-700'>
            Call-to-Action Section
          </h3>
          <div className='bg-dark rounded-lg p-12 text-center'>
            <h2 className='text-h2 font-bebas text-light tracking-tighter2 mb-4'>
              Ready to Build Your Future?
            </h2>
            <p className='font-poppins text-light tracking-tightish mx-auto mb-6 max-w-xl text-lg'>
              Partner with us for innovative construction solutions that deliver
              exceptional results on time and within budget.
            </p>
            <button className='bg-accent text-dark font-poppins hover:bg-light rounded-lg px-10 py-4 font-bold transition-colors'>
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className='mb-8'>
          <h3 className='mb-3 text-xl font-semibold text-gray-700'>
            Statistics Section
          </h3>
          <div className='bg-accent rounded-lg p-10'>
            <div className='grid grid-cols-1 gap-8 text-center md:grid-cols-3'>
              <div>
                <div className='text-h1 font-bebas text-dark tracking-tighter2 mb-2'>
                  500+
                </div>
                <p className='font-poppins text-dark text-base font-medium'>
                  Projects Completed
                </p>
              </div>
              <div>
                <div className='text-h1 font-bebas text-dark tracking-tighter2 mb-2'>
                  98%
                </div>
                <p className='font-poppins text-dark text-base font-medium'>
                  Client Satisfaction
                </p>
              </div>
              <div>
                <div className='text-h1 font-bebas text-dark tracking-tighter2 mb-2'>
                  25+
                </div>
                <p className='font-poppins text-dark text-base font-medium'>
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Example */}
        <div className='mb-8'>
          <h3 className='mb-3 text-xl font-semibold text-gray-700'>
            Testimonial Card
          </h3>
          <div className='bg-light border-accent rounded-lg border-l-4 p-8'>
            <p className='font-poppins text-dark tracking-tightish mb-4 text-lg italic'>
              &quot;The team delivered our commercial project 3 months ahead of
              schedule without compromising quality. Their modular approach was
              a game-changer for our business.&quot;{' '}
            </p>
            <div>
              <p className='text-h5 font-bebas text-dark tracking-tightish'>
                Sarah Mitchell
              </p>
              <p className='font-poppins text-accent text-sm font-medium'>
                CEO, Mitchell Enterprises
              </p>
            </div>
          </div>
        </div>

        {/* Service List Example */}
        <div className='mb-8'>
          <h3 className='mb-3 text-xl font-semibold text-gray-700'>
            Services List
          </h3>
          <div className='border-dark rounded-lg border-2 bg-white p-8'>
            <h3 className='text-h3 font-bebas text-dark tracking-tightish mb-6'>
              Our Services
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <span className='text-accent font-bebas text-h4 mr-3'>01</span>
                <div>
                  <h4 className='text-h5 font-bebas text-dark tracking-tightish'>
                    Modular Construction
                  </h4>
                  <p className='font-poppins text-base text-gray-600'>
                    Precision-built modules for faster project completion
                  </p>
                </div>
              </li>
              <li className='flex items-start'>
                <span className='text-accent font-bebas text-h4 mr-3'>02</span>
                <div>
                  <h4 className='text-h5 font-bebas text-dark tracking-tightish'>
                    Panelized Systems
                  </h4>
                  <p className='font-poppins text-base text-gray-600'>
                    Advanced panel technology for superior efficiency
                  </p>
                </div>
              </li>
              <li className='flex items-start'>
                <span className='text-accent font-bebas text-h4 mr-3'>03</span>
                <div>
                  <h4 className='text-h5 font-bebas text-dark tracking-tightish'>
                    Project Management
                  </h4>
                  <p className='font-poppins text-base text-gray-600'>
                    End-to-end oversight ensuring quality and timeline adherence
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Button Test Section */}
      <section className='section-padding bg-light'>
        <div className='container-padding'>
          <h2 className='text-h2 font-bebas text-dark mb-8'>Button Styles</h2>

          {/* Button Sizes */}
          <div className='mb-12'>
            <h3 className='text-h4 font-bebas text-dark mb-4'>Sizes</h3>
            <div className='mb-6 flex flex-wrap gap-4'>
              <button className='btn btn-primary btn-sm'>Small Button</button>
              <button className='btn btn-primary btn-md'>Medium Button</button>
              <button className='btn btn-primary btn-lg'>Large Button</button>
            </div>
          </div>

          {/* Button Variants */}
          <div className='mb-12'>
            <h3 className='text-h4 font-bebas text-dark mb-4'>Variants</h3>
            <div className='mb-6 flex flex-wrap gap-4'>
              <button className='btn btn-primary btn-md'>Primary</button>
              <button className='btn btn-secondary btn-md'>Secondary</button>
              <button className='btn btn-outline btn-md'>Outline</button>
            </div>
          </div>

          {/* Hover Effects */}
          <div className='mb-12'>
            <h3 className='text-h4 font-bebas text-dark mb-4'>Hover Effects</h3>
            <div className='mb-6 flex flex-wrap gap-4'>
              <button className='btn btn-primary btn-md btn-hover-lift'>
                Lift on Hover
              </button>
              <button className='btn btn-primary btn-md btn-hover-scale'>
                Scale on Hover
              </button>
            </div>
          </div>

          {/* With Icons */}
          <div className='mb-12'>
            <h3 className='text-h4 font-bebas text-dark mb-4'>With Icons</h3>
            <div className='mb-6 flex flex-wrap gap-4'>
              <button className='btn btn-primary btn-md btn-icon'>
                <span>Get Started</span>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </button>
              <button className='btn btn-outline btn-md btn-icon'>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
                <span>Add Item</span>
              </button>
            </div>
          </div>

          {/* Responsive Spacing Test */}
          <div className='rounded-lg bg-white p-6'>
            <h3 className='text-h4 font-bebas text-dark mb-4'>
              Responsive Spacing
            </h3>
            <div className='space-y-4'>
              <div className='rounded bg-gray-100 p-4'>
                <p className='font-poppins'>
                  This section has responsive padding (check on different screen
                  sizes):
                </p>
                <div className='section-padding bg-accent/10 mt-4 rounded'>
                  <p className='font-poppins'>Section with .section-padding</p>
                </div>
              </div>
              <div className='rounded bg-gray-100 p-4'>
                <p className='font-poppins'>
                  This container has responsive padding:
                </p>
                <div className='container-padding bg-dark/10 mt-4 rounded'>
                  <p className='font-poppins'>
                    Container with .container-padding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
