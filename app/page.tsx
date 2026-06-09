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
            MEDICAL FACILITY & COMMERCIAL CLEANING
          </p>

          <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Professional Cleaning Services Throughout North Carolina
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-gray-100">
            MK Top Cleans provides dependable janitorial and commercial cleaning
            services for medical offices, clinics, hospitals, professional
            buildings, and commercial facilities.
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
            [
              "Medical Facility Cleaning",
              "Detail-focused cleaning for clinics, exam rooms, waiting areas, healthcare offices, and medical facilities.",
            ],
            [
              "Hospital & Healthcare Support",
              "Reliable cleaning support for healthcare environments that require consistency and attention to detail.",
            ],
            [
              "Office Cleaning",
              "Daily, weekly, and customized cleaning for professional offices and business buildings.",
            ],
            [
              "Floor Care",
              "Stripping, waxing, buffing, and regular floor maintenance for commercial properties.",
            ],
            [
              "Janitorial Services",
              "Dependable routine cleaning for offices, schools, churches, and commercial facilities.",
            ],
            [
              "Restroom & Common Areas",
              "Detailed restroom sanitation, trash removal, lobby cleaning, hallways, and break room maintenance.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <h4 className="mb-3 text-xl font-black">{title}</h4>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-black tracking-widest text-[#13294B]">
              ABOUT MK TOP CLEANS
            </p>

            <h3 className="mb-4 text-3xl font-black">
              Trusted Commercial Cleaning Since 2001
            </h3>

            <p className="mb-4 text-gray-700">
              MK Top Cleans began serving commercial clients in Nashville,
              Tennessee in 2001 and has grown into a trusted provider of
              professional cleaning and facility maintenance services throughout
              North Carolina.
            </p>

            <p className="mb-4 text-gray-700">
              With the capability to manage more than{" "}
              <strong>2 million square feet</strong> of commercial space, our
              team delivers reliable, detail-oriented cleaning solutions for
              healthcare facilities, medical offices, educational institutions,
              corporate buildings, and large-scale commercial properties.
            </p>

            <p className="mb-4 text-gray-700">
              Our experience includes servicing and supporting facilities
              associated with respected organizations such as{" "}
              <strong>UNC Health</strong>, <strong>WakeMed</strong>,{" "}
              <strong>Duke Health</strong>, <strong>HP</strong>,<strong>BB&T</strong>, and other
              leading businesses and institutions.
            </p>

            <p className="text-gray-700">
              We understand that medical and professional environments demand
              the highest standards of cleanliness, safety, and consistency. Our
              mission is simple: keep your building clean, safe, and ready for
              employees, patients, customers, and visitors.
            </p>
          </div>

          <div className="rounded-3xl bg-[#13294B] p-8 text-white">
            <h4 className="mb-6 text-2xl font-black">By The Numbers</h4>

            <div className="space-y-5">
              <div>
                <p className="text-4xl font-black">2,000,000+</p>
                <p className="text-gray-200">Square Feet Managed</p>
              </div>

              <div>
                <p className="text-4xl font-black">2001</p>
                <p className="text-gray-200">Serving Clients Since</p>
              </div>

              <div>
                <p className="text-4xl font-black">20+ Years</p>
                <p className="text-gray-200">
                  Commercial Cleaning Experience
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/20 pt-6">
              <h5 className="mb-3 text-xl font-black">Service Areas</h5>
              <p>
                Serving Raleigh, Durham, Greensboro, Fayetteville, Wilson,
                Greenville and commercial clients throughout North Carolina.
              </p>
              <p className="mt-6 font-bold">Phone: 919-671-0248</p>
              <p className="font-bold">Email: sales@mktopcleans.com</p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-3xl font-black">Request a Quote</h3>
            <p className="text-gray-700">
              Tell us about your building and cleaning needs. We will contact
              you to discuss service options for your facility.
            </p>
          </div>

          <form className="rounded-2xl border bg-white p-6 shadow-sm">
            <input className="mb-4 w-full border p-3" placeholder="Name" />
            <input className="mb-4 w-full border p-3" placeholder="Email" />
            <input className="mb-4 w-full border p-3" placeholder="Phone" />
            <input
              className="mb-4 w-full border p-3"
              placeholder="Facility Type"
            />
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

  <footer id="contact" className="bg-[#13294B] px-6 py-12 text-white">
  <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">

    <div>
      <h3 className="text-2xl font-black">MK Top Cleans</h3>
      <p className="mt-2 text-gray-300">
        Professional Cleaning Services
      </p>

      <p className="mt-6 font-semibold">
        Phone: 919-671-0248
      </p>

      <p className="font-semibold">
        Email: sales@mktopcleans.com
      </p>
    </div>

    <div>
      <h4 className="mb-4 text-xl font-black">
        Business Hours
      </h4>

      <p>Monday - Friday</p>
      <p>9:00 AM - 5:00 PM</p>

      <p className="mt-4 text-sm text-gray-300">
        Scheduled after-hours service available.
      </p>
    </div>

    <div>
      <h4 className="mb-4 text-xl font-black">
        Emergency Contact
      </h4>

      <p className="font-semibold">
        24/7 Emergency Response
      </p>

      <p className="mt-2">
        Phone: 919-671-0248
      </p>

      <p className="mt-4 text-sm text-gray-300">
        Available for urgent facility cleaning,
        water incidents, and emergency service requests.
      </p>
    </div>

  </div>

  <div className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-6 text-center text-sm text-gray-300">
    © {new Date().getFullYear()} MK Top Cleans. All Rights Reserved.
  </div>
</footer>
    </main>
  );
}