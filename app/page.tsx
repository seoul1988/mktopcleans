export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#13294B]">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black">MK Top Cleans</h1>
            <p className="text-xs font-bold tracking-widest text-gray-500">
              PROFESSIONAL CLEANING SERVICES
            </p>
          </div>

          <nav className="hidden gap-6 text-sm font-bold md:flex">
            <a href="#">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT</a>
            <a href="#quote">REQUEST QUOTE</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <a
            href="tel:9196710248"
            className="rounded-full bg-[#13294B] px-5 py-2 text-sm font-bold text-white"
          >
            Call 919-671-0248
          </a>
        </div>
      </header>

      <section className="relative bg-[#13294B]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-35" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 text-white">
          <p className="mb-3 text-sm font-bold tracking-widest">
            MEDICAL FACILITY CLEANING
          </p>
          <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Reliable Cleaning for Medical Offices & Commercial Buildings
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-gray-100">
            MK Top Cleans provides dependable janitorial and commercial cleaning
            services for medical offices, clinics, professional offices, and
            business facilities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="rounded-full bg-white px-7 py-3 text-center font-black text-[#13294B]"
            >
              Request a Quote
            </a>
            <a
              href="tel:9196710248"
              className="rounded-full border border-white px-7 py-3 text-center font-black text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="mb-8 text-3xl font-black">Our Services</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Medical Office Cleaning", "Cleaning for clinics, exam rooms, waiting areas, and healthcare offices."],
            ["Office Cleaning", "Daily, weekly, and customized cleaning for professional offices."],
            ["Floor Care", "Stripping, waxing, buffing, and regular floor maintenance."],
            ["Janitorial Services", "Dependable routine cleaning for commercial properties."],
            ["Restroom Cleaning", "Detailed restroom sanitation and supply area cleaning."],
            ["Trash & Common Areas", "Lobby, hallway, break room, and common area maintenance."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-xl font-black">{title}</h4>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-3xl font-black">
              Professional Cleaning You Can Count On
            </h3>
            <p className="mb-4 text-gray-700">
              MK Top Cleans serves businesses that need reliable, detailed, and
              consistent cleaning. We understand that medical and professional
              facilities require extra attention to detail.
            </p>
            <p className="text-gray-700">
              Our goal is simple: keep your building clean, safe, and ready for
              employees, patients, and visitors.
            </p>
          </div>

          <div className="rounded-3xl bg-[#13294B] p-8 text-white">
            <h4 className="mb-4 text-2xl font-black">Service Areas</h4>
            <p>Raleigh • Cary • Apex • Durham • Morrisville • Wake Forest</p>
            <p className="mt-6 font-bold">Phone: 919-671-0248</p>
            <p className="font-bold">Email: sales@mktopcleans.com</p>
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-3xl font-black">Request a Quote</h3>
            <p className="text-gray-700">
              Tell us about your building and cleaning needs. We will contact you
              to discuss service options.
            </p>
          </div>

          <form className="rounded-2xl border bg-white p-6 shadow-sm">
            <input className="mb-4 w-full border p-3" placeholder="Name" />
            <input className="mb-4 w-full border p-3" placeholder="Email" />
            <input className="mb-4 w-full border p-3" placeholder="Phone" />
            <input className="mb-4 w-full border p-3" placeholder="Facility Type" />
            <textarea
              className="mb-4 h-32 w-full border p-3"
              placeholder="Message"
            />
            <a
              href="mailto:sales@mktopcleans.com"
              className="block rounded-full bg-[#13294B] px-6 py-3 text-center font-black text-white"
            >
              Send Request
            </a>
          </form>
        </div>
      </section>

      <footer id="contact" className="bg-[#13294B] px-6 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-2xl font-black">MK Top Cleans</h3>
          <p className="mt-2">Professional Cleaning Services</p>
          <p className="mt-4">Phone: 919-671-0248</p>
          <p>Email: sales@mktopcleans.com</p>
        </div>
      </footer>
    </main>
  );
}