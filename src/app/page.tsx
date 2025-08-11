"use client";
import { HeroSection } from "@/app/hero-section";
import { FeaturedFleet } from "@/components/featured-fleet";
import { WhyUs } from "@/components/why-us";
import { ServiceHighlights } from "@/components/service-highlights";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import Script from "next/script";
import { FaqHighlights } from "@/components/faq-highlights";

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.medinarentcarmedan.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.medinarentcarmedan.com/armada?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <HeroSection />
      <WhyUs />
      <FeaturedFleet />
      <ServiceHighlights />
      <Testimonials />
      <FaqHighlights />
      <CTASection />
    </>
  );
}
