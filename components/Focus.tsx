import { focusAreas } from "@/data/site";
import { cn } from "@/lib/cn";
import { SectionHeading } from "./SectionHeading";

export function Focus() {
  return (
    <section
      id="focus"
      aria-labelledby="focus-title"
      className="page-container section-y flex flex-col gap-9 border-t border-line"
    >
      <div className="grid items-end gap-7 md:grid-cols-2">
        {/* Heading first on mobile; the design swaps it to the right column on larger screens. */}
        <SectionHeading id="focus-title" label="02 — WHAT WE DO" className="md:order-2">
          Hands-on sessions on <strong className="font-bold">Google Cloud and AI.</strong>
        </SectionHeading>
        <p className="text-[17px] leading-[1.55] text-pretty text-fg-muted">
          Our meetups mix talks from practitioners with workshops you can follow along on your laptop. Bring a
          question, leave with something built.
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area) => (
          <li
            key={area.title}
            className={cn(
              "flex min-h-[190px] flex-col justify-between gap-5 rounded-[20px] p-6 text-ink",
              area.className,
            )}
          >
            <span className="font-mono text-xs tracking-[.06em]">{area.tag}</span>
            <div className="flex flex-col gap-2">
              <h3 className="text-[22px] leading-[1.15] font-bold">{area.title}</h3>
              <p className="text-[15px] leading-[1.45] text-[#333]">{area.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
