import Reveal from "./Reveal";
import { asset } from "@/lib/asset";

type Service = {
  num: string;
  name: string;
  description: string;
  outcome: string;
  duration: string;
  price: string;
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    num: "01",
    name: "Full Body Massage",
    description:
      "A full sixty-minute session — back, neck, shoulders, glutes, legs, arms — with warm oil. Medium pressure unless you ask otherwise. The signature service and the one most people walk in for.",
    outcome: "For: the long week, the stiff neck, the bad chair at work.",
    duration: "60 min",
    price: "From $50",
    image: "/images/service-relax-01.jpg",
    alt: "Quiet treatment room with a folded ivory linen towel set out on a cedar massage table",
  },
  {
    num: "02",
    name: "Foot Massage",
    description:
      "A heated recliner, an Epsom-salt soak, hot towel, warm oil. Targeted pressure through the arch and the reflex points along the heel. Most clients close their eyes inside the first ten minutes.",
    outcome: "For: nurses, servers, parents, anyone who has been on their feet.",
    duration: "60 min",
    price: "Call for current rate",
    image: "/images/service-foot-04.jpg",
    alt: "An empty heated leather recliner with footrest extended and a folded ivory linen towel ready",
  },
  {
    num: "03",
    name: "Shiatsu",
    description:
      "Slow-loaded thumb and palm pressure along the body's energy lines, with rocking and gentle stretching. Closer to acupressure than oil massage. We pick the depth together at the ten-minute mark.",
    outcome: "For: chronic knots, athletes, people who lift things for a living.",
    duration: "60 min",
    price: "Call for current rate",
    image: "/images/service-deep-02.jpg",
    alt: "An amber bottle of warm oil and a wooden thumb-pressure tool on a worn cedar surface",
  },
  {
    num: "04",
    name: "Couples Massage",
    description:
      "Two practitioners, one quiet room, side-by-side tables. Same warm towels, same hour. The couples room books up before the rest of the studio — calling ahead is the difference between a yes and a maybe.",
    outcome: "For: anniversaries, post-flight, the rare night you both have free.",
    duration: "60 min · per pair",
    price: "Call for current rate",
    image: "/images/service-stone-03.jpg",
    alt: "Smooth dark basalt river stones arranged on folded ivory linen — warming before the session",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-cream py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <Reveal>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow">The menu</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2
                id="services-heading"
                className="display text-[40px] leading-[1.02] md:text-[64px]"
              >
                Four services.
                <br />
                <span className="italic font-light text-ink-soft">
                  No memberships, no add-on traps,
                </span>
                <br />
                no upsell at the door.
              </h2>
              <p className="mt-8 max-w-[58ch] text-[17px] text-ink-soft">
                Most people walk in for one of these. Calling ahead helps,
                especially for the couples room. New clients get $10 off their
                first massage — say so when you call.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-20 flex flex-col">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={s.num}>
                <article className={`grid grid-cols-12 items-center gap-6 border-t border-hairline py-14 md:gap-10 md:py-20 ${reverse ? "md:[direction:rtl]" : ""}`}>
                  <div className="col-span-12 md:col-span-6 md:[direction:ltr]">
                    <div role="img" aria-label={s.alt} className="img-placeholder relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]"
                      style={{ backgroundImage: `url(${asset(s.image)})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  </div>
                  <div className="col-span-12 md:col-span-6 md:[direction:ltr]">
                    <div className="flex items-baseline gap-6">
                      <span className="display text-[18px] text-mid">{s.num}</span>
                      <span className="h-px flex-1 bg-hairline" />
                    </div>
                    <h3 className="display mt-6 text-[34px] leading-[1.05] md:text-[48px]">{s.name}</h3>
                    <p className="mt-5 max-w-[44ch] text-[17px] text-ink-soft">{s.description}</p>
                    <p className="mt-5 max-w-[44ch] text-[14px] italic text-mid">{s.outcome}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-ink">
                      <span className="display text-[24px] text-ink">{s.price}</span>
                      <span className="text-mid">·</span>
                      <span className="text-mid">{s.duration}</span>
                      <a href="#booking" className="ml-auto link-underline tracking-[0.02em]">Book this →</a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <p className="mt-14 max-w-[60ch] text-[14px] text-mid">
            New clients get $10 off the first massage. Cash and card both
            accepted. Tipping is appreciated but never required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
