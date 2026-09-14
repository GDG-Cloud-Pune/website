import Image from "next/image";
import { organizers } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { SmartLink } from "./SmartLink";

export function Organizers() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="page-container section-y grid items-start gap-9 border-t border-line md:grid-cols-2"
    >
      <SectionHeading id="team-title" label="04 — ORGANIZERS">
        The people <strong className="font-bold">behind the meetups.</strong>
      </SectionHeading>

      <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
        {organizers.map((person) => (
          <li key={person.url} className="flex">
            {/* Horizontal card on phones and md, stacked card where columns are wide enough. */}
            <SmartLink
              href={person.url}
              className="flex w-full items-center gap-4 rounded-[20px] border border-line bg-surface p-5 text-fg transition-colors hover:border-cyan sm:flex-col sm:items-start sm:gap-[18px] sm:p-[22px] md:flex-row md:items-center xl:flex-col xl:items-start"
            >
              <Image
                src={person.image}
                alt={`Photo of ${person.name}`}
                width={176}
                height={176}
                sizes="88px"
                className="size-16 shrink-0 rounded-full border-2 border-google-blue bg-line object-cover sm:size-[88px]"
              />
              <div className="flex flex-col gap-1">
                <strong className="text-xl font-bold">{person.name}</strong>
                <span className="font-mono text-xs tracking-[.04em] text-fg-subtle">{person.role}</span>
              </div>
            </SmartLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
