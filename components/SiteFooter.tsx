import Image from "next/image";
import { footerChapterLinks, footerProgramLinks, site, type NavLink } from "@/data/site";
import { ColorBars } from "./ColorBars";
import { SmartLink } from "./SmartLink";
import { SocialLinks } from "./SocialLinks";

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="flex flex-col gap-2.5 text-sm">
      <h2 className="font-mono text-xs tracking-[.06em] text-fg-faint">{title}</h2>
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <SmartLink
              href={link.href}
              className="inline-block py-1 text-fg-muted transition-colors hover:text-white"
            >
              {link.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="page-container flex flex-col gap-9 border-t border-line pt-12 pb-7">
      <div className="grid grid-cols-2 items-start gap-x-6 gap-y-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-8">
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <Image
            src="/gdg-cloud-pune-logo.png"
            alt="Google Developer Groups Cloud Pune"
            width={1684}
            height={195}
            sizes="250px"
            className="h-7 w-auto self-start"
          />
          <p className="max-w-[36ch] text-sm leading-normal text-pretty text-fg-subtle">
            A Google Developer Group for cloud and AI developers in Pune, India.
          </p>
          <SocialLinks />
          <a
            href={`mailto:${site.email}`}
            className="self-start font-mono text-[13px] text-fg-muted transition-colors hover:text-cyan"
          >
            {site.email}
          </a>
        </div>
        <FooterColumn title="CHAPTER" links={footerChapterLinks} />
        <FooterColumn title="PROGRAM" links={footerProgramLinks} />
      </div>

      <ColorBars className="gap-1.5" barClassName="h-1 flex-1" />

      <div className="flex flex-col gap-3.5">
        <p className="max-w-[90ch] text-[13px] leading-[1.55] text-pretty text-fg-subtle">
          Disclaimer: GDG Cloud Pune is an independent group; our activities and the opinions expressed here should in
          no way be linked to Google, the corporation. To learn more about the GDG program, visit{" "}
          <SmartLink href={site.gdgProgramUrl} className="link-inline">
            developers.google.com/community/gdg
          </SmartLink>
          . All attendees, speakers, sponsors and volunteers are required to follow the Google Developer Community
          Guidelines.
        </p>
        <span className="font-mono text-xs text-fg-faint">© {new Date().getFullYear()} GDG Cloud Pune</span>
      </div>
    </footer>
  );
}
