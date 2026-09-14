import { site } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { CloudIcon } from "./CloudIcon";
import { ColorBars } from "./ColorBars";

export function CcdBanner() {
  return (
    <section id="ccd" aria-labelledby="ccd-title" className="page-container pb-[clamp(56px,8vw,104px)]">
      <div className="flex flex-col gap-8 rounded-[28px] border border-line bg-surface p-[clamp(24px,5vw,60px)]">
        <div aria-hidden="true" className="flex items-center justify-between gap-4">
          <CloudIcon className="w-14 sm:w-[72px]" />
          <span className="rounded-full bg-fg px-4 py-1 text-lg font-semibold text-ink sm:px-5 sm:text-xl">2026</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="flex flex-col items-start gap-5">
            <h2
              id="ccd-title"
              className="text-[clamp(2.25rem,7vw,4.5rem)] leading-[1.02] font-bold tracking-[-.02em] text-balance"
            >
              Cloud Community Day<span className="sr-only"> Pune 2026</span>
            </h2>
            <span
              aria-hidden="true"
              className="rounded-full border-2 border-fg px-4 py-1 text-lg font-semibold sm:px-5 sm:text-xl"
            >
              Pune
            </span>
            <ColorBars
              className="gap-2.5"
              barClassName="h-2.5 w-[52px] outline-2 outline-offset-0 outline-fg sm:w-[72px]"
            />
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <p className="text-[clamp(2.75rem,10vw,5.5rem)] leading-none font-bold tracking-[-.03em] text-google-yellow">
              Coming soon
            </p>
            <ButtonLink href={site.ccdUrl} variant="yellow" size="lg" className="w-full sm:w-auto">
              Join the waitlist <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
