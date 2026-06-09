export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#172033]">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-700">
            Professional Cleaning Services
          </p>

          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">
            MK Top Cleans
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-gray-700">
            Reliable commercial cleaning for offices, medical facilities,
            churches, schools, and business buildings.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:sales@mktopcleans.com"
              className="rounded-full bg-[#172033] px-6 py-3 text-center font-bold text-white"
            >
              Request a Quote
            </a>

            <a
              href="tel:+19190000000"
              className="rounded-full border border-[#172033] px-6 py-3 text-center font-bold"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-5 px-6 pb-16 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-black">Office Cleaning</h2>
          <p className="text-gray-700">
            Daily, weekly, and customized cleaning for professional offices.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-black">Medical Facilities</h2>
          <p className="text-gray-700">
            Detail-focused cleaning for clinics and healthcare buildings.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-black">Floor Care</h2>
          <p className="text-gray-700">
            Stripping, waxing, buffing, and floor maintenance services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-[#172033] p-8 text-white">
          <h2 className="mb-3 text-3xl font-black">Contact Us</h2>
          <p className="mb-2">Email: sales@mktopcleans.com</p>
          <p>Serving commercial clients with dependable cleaning solutions.</p>
        </div>
      </section>
    </main>
  );
}