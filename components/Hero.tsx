import { site } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { CloudIcon } from "./CloudIcon";
import { ColorBars } from "./ColorBars";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="page-container grid items-center gap-12 pt-[clamp(48px,8vw,112px)] pb-[clamp(48px,7vw,96px)] lg:grid-cols-2 lg:gap-10"
    >
      <div className="flex flex-col gap-[22px]">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border-[1.5px] border-fg px-3 py-1.5 font-mono text-xs tracking-[.06em]">
            PUNE
          </span>
          <span className="rounded-full bg-fg px-3 py-1.5 font-mono text-xs font-semibold tracking-[.06em] text-ink">
            2026
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-[clamp(2.5rem,9vw,4.25rem)] leading-[1.02] font-bold tracking-[-.02em] text-pretty lg:text-[clamp(3.5rem,6.5vw,5rem)]"
        >
          Build with the <span className="text-cyan">cloud</span> community of Pune.
        </h1>

        <ColorBars className="gap-2" barClassName="h-2 w-[60px]" />

        <p className="max-w-[54ch] text-base leading-normal text-pretty text-fg-muted sm:text-[clamp(17px,1.5vw,20px)]">
          GDG Cloud Pune is a local Google Developer Group where 4,000+ developers, students and cloud practitioners
          meet to learn Google Cloud and AI — together, in person and online. Everyone is welcome, from first-timers to
          seasoned architects.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href={site.bevyUrl} size="lg">
            Become a member
          </ButtonLink>
          <ButtonLink href="#events" variant="outline" size="lg">
            See our events
          </ButtonLink>
        </div>
      </div>

      {/* Decorative cloud: small and after the CTAs on mobile, large on the right from lg. */}
      <div aria-hidden="true" className="relative mx-auto w-[180px] sm:w-[240px] lg:w-full lg:max-w-[380px]">
        <div className="pointer-events-none absolute -inset-[12%] animate-cloud-glow rounded-full bg-[radial-gradient(circle,rgba(66,133,244,.35),rgba(66,133,244,0)_70%)]" />
        <CloudIcon animated className="relative w-full drop-shadow-[0_24px_60px_rgba(66,133,244,.35)]" />
        <span className="absolute top-[18%] -left-[14%] h-1.5 w-[18px] animate-[cloud-drift_7s_ease-in-out_infinite] rounded-full bg-google-green" />
        <span className="absolute top-[30%] -right-[12%] h-1.5 w-[26px] animate-[cloud-drift_9s_ease-in-out_infinite_reverse] rounded-full bg-google-yellow" />
        <span className="absolute right-[4%] bottom-[10%] h-1.5 w-3.5 animate-[cloud-drift_8s_ease-in-out_1s_infinite] rounded-full bg-google-red" />
      </div>
    </section>
  );
}
