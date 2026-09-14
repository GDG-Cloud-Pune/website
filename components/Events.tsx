import { events, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";
import { SmartLink } from "./SmartLink";

export function Events() {
  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="page-container section-y flex flex-col gap-8 border-t border-line"
    >
      <div className="flex flex-wrap items-end justify-between gap-5">
        <SectionHeading id="events-title" label="03 — EVENTS">
          Recent <strong className="font-bold">highlights.</strong>
        </SectionHeading>
        <ButtonLink href={site.upcomingEventsUrl} variant="outline" size="sm" className="w-full sm:w-auto">
          Upcoming events on Bevy
        </ButtonLink>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <li key={event.url} className="flex">
            <SmartLink
              href={event.url}
              className="flex min-h-[210px] w-full flex-col gap-5 rounded-[20px] border border-line bg-surface p-[22px] text-fg transition-colors hover:border-cyan"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[13px] text-cyan">{event.date}</span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-[5px] font-mono text-[11px] tracking-[.06em] text-ink",
                    event.kindClassName,
                  )}
                >
                  {event.kind}
                </span>
              </div>
              <h3 className="text-[21px] leading-[1.2] font-bold text-pretty">{event.title}</h3>
              <p className="mt-auto text-sm leading-[1.45] text-fg-subtle">{event.host}</p>
            </SmartLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
