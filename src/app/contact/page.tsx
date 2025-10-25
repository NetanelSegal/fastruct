export default function Contact() {
  return (
    <section className='py-16'>
      <div className='container max-w-6xl'>
        <h2 className='mb-2 text-2xl font-semibold md:text-3xl'>Contact</h2>
        <form className='grid max-w-xl gap-4'>
          <input className='rounded-lg border p-3' placeholder='Name' />
          <input
            className='rounded-lg border p-3'
            type='email'
            placeholder='Email'
          />
          <textarea
            className='rounded-lg border p-3'
            placeholder='Message'
            rows={5}
          />
          <button className='rounded-xl border px-4 py-2'>Send</button>
        </form>
      </div>
    </section>
  );
}
