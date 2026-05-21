"use client";

import Link from "next/link";
import { useEffect } from "react";

type PermanentRedirectPageProps = {
  destination: string;
};

/** Client redirect for static export (pairs with noindex + canonical in metadata). */
export default function PermanentRedirectPage({ destination }: PermanentRedirectPageProps) {
  useEffect(() => {
    window.location.replace(destination);
  }, [destination]);

  const path = destination.replace(/^https?:\/\/[^/]+/, "") || destination;

  return (
    <main className="min-h-[40vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-muted-foreground mb-4">This page has moved.</p>
      <Link href={path} className="text-primary font-medium hover:underline">
        Continue to the updated page
      </Link>
    </main>
  );
}
