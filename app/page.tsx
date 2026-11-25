import Image from "next/image";
import { CoffeePourMenu } from "@/components/ui/coffee-pour-menu";
import { address, drinks, hours, instagram, pastries, shop } from "./content";

const nav = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#shop", label: "Shop" },
  { href: "#visit", label: "Visit" },
];

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-heading text-sm font-semibold tracking-[0.2em] uppercase ${className}`}>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-sorriso-navy focus:px-4 focus:py-2 focus:text-sorriso-beige"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-sorriso-navy/10 bg-sorriso-beige/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2" aria-label="Sorriso, back to top">
            <Image src="/sorriso/sorriso-mark-2.svg" alt="" width={40} height={40} className="rounded-md" />
            <span className="font-heading text-xl font-extrabold tracking-[0.12em] text-sorriso-red">SORRISO</span>
          </a>
          <nav aria-label="Main">
            <ul className="hidden gap-1 sm:flex">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-200 hover:bg-sorriso-navy hover:text-sorriso-beige"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#visit"
            className="inline-flex min-h-11 items-center rounded-full bg-sorriso-red px-5 font-semibold text-sorriso-beige transition-colors duration-200 hover:bg-sorriso-navy"
          >
            Visit us
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:pt-16 md:pb-24">
            <div>
              <Eyebrow className="text-sorriso-blue">Portuguese espresso · Porto</Eyebrow>
              {/* TODO: confirm headline and intro copy with the client */}
              <h1 className="mt-5 font-heading text-[44px] leading-[0.98] font-extrabold tracking-[-0.02em] text-sorriso-navy sm:text-7xl">
                A smile in <span className="text-sorriso-red">every cup.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-sorriso-navy/85">
                Sorriso means smile. We pour honest Portuguese coffee, bake
                pastéis every morning and keep a seat warm for you, just off the
                river in Porto.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="inline-flex min-h-12 items-center rounded-full bg-sorriso-navy px-6 font-semibold text-sorriso-beige transition-colors duration-200 hover:bg-sorriso-red"
                >
                  See the menu
                </a>
                <a
                  href="#visit"
                  className="inline-flex min-h-12 items-center rounded-full border-2 border-sorriso-navy px-6 font-semibold transition-colors duration-200 hover:bg-sorriso-navy hover:text-sorriso-beige"
                >
                  Find us
                </a>
              </div>

              {/* Hours visible up front */}
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-3 border-t-2 border-sorriso-navy pt-5 text-sm">
                {hours.map((h) => (
                  <div key={h.days}>
                    <dt className="font-semibold">{h.days}</dt>
                    <dd className="text-sorriso-navy/80">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <div className="grid grid-cols-2 gap-3">
                <Image
                  src="/sorriso/sorriso-mark-3.svg"
                  alt="The Sorriso mark: a smiling gentleman wearing a steaming coffee cup as a hat"
                  width={400}
                  height={400}
                  priority
                  className="float col-span-2 aspect-square w-full rounded-[28px] object-cover"
                />
                <Image
                  src="/sorriso/sorriso-rooster-2.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="aspect-square w-full rounded-[22px] bg-sorriso-sky object-contain p-4"
                />
                <Image
                  src="/sorriso/sorriso-mark-4.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="aspect-square w-full rounded-[22px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="scroll-mt-16 bg-sorriso-navy text-sorriso-beige">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
            <div className="order-2 md:order-1">
              <Eyebrow className="text-sorriso-sky">Our story</Eyebrow>
              {/* TODO: replace with the real Sorriso story */}
              <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">Bom dia, Porto.</h2>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-sorriso-beige/90">
                Every morning starts the same way here: a bica at the counter, a
                quick hello, a reason to smile before the day begins. Our
                rooster nods to the Galo de Barcelos, the old Portuguese symbol
                of good luck and honesty. We think coffee should have both.
              </p>
              <p className="mt-4 max-w-prose text-lg leading-relaxed text-sorriso-beige/90">
                Beans roasted for espresso, milk steamed properly, pastries from
                the oven, not the freezer. Nothing fancy. Just done well.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/sorriso/sorriso-mug.jpg"
                alt="A blue Sorriso mug with two roosters sharing coffee"
                width={900}
                height={720}
                className="w-full rounded-[28px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="scroll-mt-16 bg-sorriso-sky">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="max-w-xl">
              <Eyebrow className="text-sorriso-navy">The menu</Eyebrow>
              <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
                Pick a coffee. Watch it pour.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-sorriso-navy/85">
                The Porto classics, the way locals order them.
              </p>
            </div>
            <div className="mt-10">
              <CoffeePourMenu items={drinks} defaultValue="meia-de-leite" className="bg-sorriso-sky p-0 sm:p-0" />
            </div>

            <ul className="mt-12 grid gap-3 sm:grid-cols-3">
              {pastries.map((p) => (
                <li key={p.name} className="rounded-[22px] bg-sorriso-beige p-6">
                  <p className="font-heading text-xl font-extrabold">{p.name}</p>
                  <p className="mt-1 text-sorriso-navy/80">{p.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Shop: bento */}
        <section id="shop" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Eyebrow className="text-sorriso-blue">Take it home</Eyebrow>
                <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
                  Beans, cups <span className="text-sorriso-red">&amp;</span> small smiles.
                </h2>
              </div>
              <p className="max-w-xs text-sorriso-navy/80">Available at the counter. Online shop coming soon.</p>
            </div>

            <ul className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
              {shop.map((item) => {
                const span =
                  item.size === "tall"
                    ? "row-span-2"
                    : item.size === "wide"
                      ? "col-span-2"
                      : "";
                const dark = item.bg === "bg-sorriso-blue";
                return (
                  <li
                    key={item.name}
                    className={`group relative overflow-hidden rounded-[24px] ${item.bg} ${span}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className={`${"cover" in item && item.cover ? "object-cover" : "object-contain p-6 pb-20"} transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
                    />
                    <div
                      className={`absolute inset-x-3 bottom-3 rounded-2xl px-4 py-3 ${dark ? "bg-sorriso-beige text-sorriso-navy" : "bg-sorriso-navy text-sorriso-beige"}`}
                    >
                      <p className="font-heading font-bold leading-tight">{item.name}</p>
                      <p className="text-sm opacity-85">{item.note}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="scroll-mt-16 bg-sorriso-red text-sorriso-beige">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_auto] md:py-28">
            <div>
              <Eyebrow className="text-sorriso-beige">Come say olá</Eyebrow>
              <h2 className="mt-4 font-heading text-5xl leading-[0.95] font-extrabold tracking-[-0.02em] sm:text-7xl">
                Pull up a chair.
              </h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <address className="text-lg leading-relaxed not-italic">
                  <span className="font-semibold">Sorriso</span>
                  <br />
                  {address.line1}
                  <br />
                  {address.line2}
                </address>
                <dl className="grid gap-1 text-lg">
                  {hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-6 border-b border-sorriso-beige/40 py-1">
                      <dt>{h.days}</dt>
                      <dd className="font-semibold">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <a
                href={address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex min-h-12 items-center rounded-full bg-sorriso-beige px-6 font-semibold text-sorriso-red transition-colors duration-200 hover:bg-sorriso-navy hover:text-sorriso-beige"
              >
                Open in Maps
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <Image
              src="/sorriso/sorriso-rooster-3.svg"
              alt=""
              width={320}
              height={320}
              className="mx-auto w-56 rounded-[28px] bg-sorriso-beige p-6 md:w-80"
            />
          </div>
        </section>
      </main>

      {/* Footer with rooster band */}
      <footer className="bg-sorriso-navy text-sorriso-beige">
        <div className="marquee overflow-hidden border-b border-sorriso-beige/15 py-6" aria-hidden="true">
          <div className="marquee-track flex w-max gap-6">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ["rooster-1", "mark-1", "rooster-4", "mark-3", "rooster-2", "mark-2", "rooster-3", "mark-4"].map((n, i) => (
                <Image
                  key={`${k}-${i}`}
                  src={`/sorriso/sorriso-${n}.svg`}
                  alt=""
                  width={96}
                  height={96}
                  className={`h-24 w-24 shrink-0 rounded-2xl object-cover ${n.startsWith("rooster") ? "bg-sorriso-sky object-contain p-2" : ""}`}
                />
              )),
            )}
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Image src="/sorriso/sorriso-hero-2.svg" alt="Sorriso, Portuguese Espresso" width={280} height={145} />
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
              >
                Instagram<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-8 text-sm text-sorriso-beige/70 sm:px-6">
          © {new Date().getFullYear()} Sorriso · Porto. Brand identity by Rafaela Studio.
        </p>
      </footer>
    </>
  );
}
