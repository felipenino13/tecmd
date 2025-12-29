"use client";

import dynamic from "next/dynamic";

const LandingForm = dynamic(() => import("./LandingForm"), {
  ssr: false,
  loading: () => null,
});

export default function LandingFormClient({ programaTitle }: { programaTitle: string }) {
  return <LandingForm programaTitle={programaTitle} />;
}
