"use client";

import { useEffect } from "react";

export default function InitIntlTel() {
  useEffect(() => {
    let iti: any;

    const init = async () => {
      const input = document.querySelector<HTMLInputElement>("#phone");
      const hidden = document.querySelector<HTMLInputElement>("#phone_e164");

      if (!input) return;

      const mod = await import("intl-tel-input");
      const intlTelInput = (mod as any).default as any;

      iti = intlTelInput(input, {
        formatAsYouType: true,
        separateDialCode: true,
        initialCountry: "auto",
        strictMode: true,
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@23.7.3/build/js/utils.js",
        geoIpLookup: (callback: (countryCode: string) => void) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback((data?.country_code || "us").toLowerCase()))
            .catch(() => callback("us"));
        },
      });

      const sync = () => {
        const e164 = iti?.getNumber?.() ?? "";
        if (hidden) hidden.value = e164;
      };

      input.addEventListener("blur", sync);
      input.addEventListener("keyup", sync);
      input.addEventListener("change", sync);
      sync();
    };

    init();

    return () => {
      try {
        iti?.destroy?.();
      } catch {}
    };
  }, []);

  return null; // no renderiza nada
}
