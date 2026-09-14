import { site } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

export function JoinCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="page-container pb-[clamp(56px,8vw,104px)]">
      <div className="grid items-center gap-8 rounded-[28px] bg-google-blue p-[clamp(28px,5vw,60px)] text-white md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
        <div className="flex flex-col gap-3.5">
          <SectionHeading id="contact-title" label="06 — STAY IN THE LOOP" labelClassName="text-cyan-pale" className="gap-3.5">
            Never miss a <strong className="font-bold">meetup.</strong>
          </SectionHeading>
          <p className="text-base leading-normal text-pretty text-blue-pale">
            Join the chapter on Bevy to get event invites.
          </p>
          <p className="text-base leading-normal text-pretty text-blue-pale">
            Want to speak, partner or host a meetup? Write to{" "}
            <a href={`mailto:${site.email}`} className="break-all text-white underline underline-offset-2">
              {site.email}
            </a>{" "}
            — we read every message.
          </p>
        </div>
        <ButtonLink href={site.bevyUrl} variant="light" size="lg" className="w-full sm:w-auto">
          Join on Bevy
        </ButtonLink>
      </div>
    </section>
  );
}
