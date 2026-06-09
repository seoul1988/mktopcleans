import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#13294B]">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center">
            <Image
              src="/mk-logo.png"
              alt="MK Top Cleans"
              width={320}
              height={140}
              priority
              className="h-14 w-auto md:h-16"
            />
          </a>

          <nav className="hidden gap-6 text-sm font-black md:flex">
            <a href="#">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT</a>
            <a href="#quote">REQUEST QUOTE</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <a
            href="tel:9196710248"
            className="rounded-full bg-[#0B3A75] px-5 py-2 text-sm font-black text-white shadow"
          >
            Call 919-671-0248
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#13294B]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B35] via-[#13294B]/85 to-[#13294B]/20" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 text-white">
          <div className="max-w-3xl">
            

            <p className="mb-4 text-sm font-black tracking-[0.25em] text-[#7DD3FC]">
              MEDICAL FACILITY & COMMERCIAL CLEANING
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Professional Cleaning Services Throughout North Carolina
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              Reliable cleaning for medical offices, clinics, hospitals,
              professional buildings, schools, churches, and commercial
              facilities.
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
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center text-sm font-black tracking-widest text-[#0B3A75]">
          OUR SERVICES
        </p>

        <h2 className="mb-10 text-center text-3xl font-black md:text-4xl">
          Cleaning Solutions for Professional Facilities
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              "🏥",
              "Medical Facility Cleaning",
              "Clinics, exam rooms, waiting areas, healthcare offices, and medical facilities.",
            ],
            [
              "🧼",
              "Hospital & Healthcare Support",
              "Reliable cleaning support for healthcare environments requiring consistency.",
            ],
            [
              "🏢",
              "Office Cleaning",
              "Daily, weekly, and customized cleaning for professional offices and buildings.",
            ],
            [
              "✨",
              "Floor Care",
              "Stripping, waxing, buffing, and regular commercial floor maintenance.",
            ],
            [
              "🧹",
              "Janitorial Services",
              "Routine cleaning for offices, schools, churches, and commercial facilities.",
            ],
            [
              "🚻",
              "Restroom & Common Areas",
              "Restroom sanitation, trash removal, lobbies, hallways, and break rooms.",
            ],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-4xl">{icon}</div>
              <h3 className="mb-3 text-xl font-black">{title}</h3>
              <p className="leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#F4F8FC]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-black tracking-widest text-[#0B3A75]">
              ABOUT MK TOP CLEANS
            </p>

            <h2 className="mb-5 text-3xl font-black md:text-4xl">
              Trusted Commercial Cleaning Since 2001
            </h2>

            <div className="space-y-4 leading-8 text-slate-700">
              <p>
                MK Top Cleans began serving commercial clients in Nashville,
                Tennessee in 2001 and has grown into a trusted provider of
                professional cleaning and facility maintenance services
                throughout North Carolina.
              </p>

              <p>
                With the capability to manage more than{" "}
                <strong>2 million square feet</strong> of commercial space, our
                team delivers reliable, detail-oriented cleaning solutions for
                healthcare facilities, medical offices, educational institutions,
                corporate buildings, and large-scale commercial properties.
              </p>

              <p>
                Our experience includes servicing and supporting facilities
                associated with respected organizations such as{" "}
                <strong>UNC Health</strong>, <strong>WakeMed</strong>,{" "}
                <strong>Duke Health</strong>, <strong>HP</strong>, and other
                leading businesses and institutions.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#13294B] p-8 text-white shadow-xl">
            <h3 className="mb-6 text-2xl font-black">By The Numbers</h3>

            <div className="space-y-6">
              <div>
                <p className="text-4xl font-black text-[#7DD3FC]">2,000,000+</p>
                <p>Square Feet Managed</p>
              </div>

              <div>
                <p className="text-4xl font-black text-[#7DD3FC]">2001</p>
                <p>Serving Clients Since</p>
              </div>

              <div>
                <p className="text-4xl font-black text-[#7DD3FC]">20+ Years</p>
                <p>Commercial Cleaning Experience</p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/20 pt-6">
              <h4 className="mb-3 text-xl font-black">Service Areas</h4>
              <p>
                Raleigh, Durham, Greensboro, Fayetteville, Wilson, Greenville
                and commercial clients throughout North Carolina.
              </p>
              <p className="mt-6 font-bold">Phone: 919-671-0248</p>
              <p className="font-bold">Email: sales@mktopcleans.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A75] px-6 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">
              Need Reliable Cleaning for Your Facility?
            </h2>
            <p className="mt-2 text-slate-200">
              Request a free quote for medical, office, and commercial cleaning.
            </p>
          </div>

          <a
            href="#quote"
            className="rounded-full bg-white px-8 py-3 font-black text-[#13294B]"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-black tracking-widest text-[#0B3A75]">
              REQUEST A QUOTE
            </p>
            <h2 className="mb-4 text-3xl font-black md:text-4xl">
              Let’s Talk About Your Building
            </h2>
            <p className="leading-8 text-slate-700">
              Tell us about your facility, square footage, service schedule, and
              cleaning needs. We will contact you to discuss the best service
              option for your location.
            </p>
          </div>

          <form className="rounded-3xl border bg-white p-7 shadow-xl">
            <input className="mb-4 w-full rounded-lg border p-3" placeholder="Name" />
            <input className="mb-4 w-full rounded-lg border p-3" placeholder="Email" />
            <input className="mb-4 w-full rounded-lg border p-3" placeholder="Phone" />
            <input
              className="mb-4 w-full rounded-lg border p-3"
              placeholder="Facility Type"
            />
            <textarea
              className="mb-4 h-32 w-full rounded-lg border p-3"
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
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/mk-logo.png"
              alt="MK Top Cleans"
              width={260}
              height={90}
              className="mb-5 h-16 w-auto rounded-lg bg-white p-2"
            />
            <p className="text-slate-300">Professional Cleaning Services</p>
            <p className="mt-6 font-semibold">Phone: 919-671-0248</p>
            <p className="font-semibold">Email: sales@mktopcleans.com</p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-black">Business Hours</h3>
            <p>Monday - Friday</p>
            <p>9:00 AM - 5:00 PM</p>
            <p className="mt-4 text-sm text-slate-300">
              Scheduled after-hours service available.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-black">Emergency Contact</h3>
            <p className="font-semibold">24/7 Emergency Response</p>
            <p className="mt-2">Phone: 919-671-0248</p>
            <p className="mt-4 text-sm text-slate-300">
              Available for urgent facility cleaning, water incidents, and
              emergency service requests.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/20 pt-6 text-center text-sm text-slate-300">
          © {new Date().getFullYear()} MK Top Cleans. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}