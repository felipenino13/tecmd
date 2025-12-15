"use client";

import { useEffect, useRef } from "react";

type Props = { name?: string };

export default function IntlPhoneInput({ name = "phone_e164" }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const hiddenRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<any>(null);

  useEffect(() => {
    let destroyed = false;

    (async () => {
      if (!inputRef.current) return;

      const mod = await import("intl-tel-input");
      if (destroyed) return;

      const intlTelInput = (mod as any).default as any;

      itiRef.current = intlTelInput(inputRef.current, {
        // ✅ Auto placeholder según país
        formatAsYouType: true,
        strictMode: true,
        separateDialCode: true,
        initialCountry: "co",
        preferredCountries: ["us", "co", "mx"],
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@23.7.3/build/js/intlTelInput.min.js",
        
      });

      const sync = () => {
        const e164 = itiRef.current?.getNumber?.() ?? "";
        if (hiddenRef.current) hiddenRef.current.value = e164;
      };

      inputRef.current.addEventListener("blur", sync);
      inputRef.current.addEventListener("keyup", sync);
      inputRef.current.addEventListener("change", sync);
      sync();
    })();

    return () => {
      destroyed = true;
      try {
        itiRef.current?.destroy();
      } catch {}
    };
  }, []);

  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-white">Phone</label>

      <input
        ref={inputRef}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
        
        id="phonelocal"
      />

    </div>
  );
}
