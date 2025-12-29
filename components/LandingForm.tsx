"use client";
import {
  Field,
  FieldLabel,
} from "@/components/ui/field";

import "intl-tel-input/build/css/intlTelInput.css";
/*import { Spinner } from "@/components/ui/spinner"*/

import InitIntlTel from "@/components/InitIntlTel";

import React, { useEffect, useRef, useState } from "react";

type LandingFormProps = {
  programaTitle: string;
};

type UTMs = Record<string, string>;

async function hashSHA256(texto: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(texto);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function LandingForm({ programaTitle }: LandingFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [utmParams, setUtmParams] = useState<UTMs>({});
  const [userIP, setUserIP] = useState("");
  const [countryIP, setCountryIP] = useState("");
  const [stateIP, setStateIP] = useState("");
  const [ciudadIP, setCiudadIP] = useState("");
  const [ispIP, setIspIP] = useState("");
  const [userAgent, setUserAgent] = useState("");

  // ✅ 1) Capturar UTMs + UserAgent + IP/Geo una sola vez
  useEffect(() => {
    // UTMs
    const urlParams = new URLSearchParams(window.location.search);
    const obj: UTMs = {};
    urlParams.forEach((value, key) => (obj[key] = value));
    setUtmParams(obj);

    // User agent
    setUserAgent(navigator.userAgent);

    // IP + IPInfo (ojo: requiere que ipinfo permita CORS sin token; si falla, igual seguimos)
    (async () => {
      try {
        const ipRes = await fetch("https://api64.ipify.org?format=json");
        const ipJson = await ipRes.json();
        const ip = ipJson.ip;
        setUserIP(ip);

        const infoRes = await fetch(`https://ipinfo.io/${ip}/json`);
        const infoJson = await infoRes.json();

        setCountryIP(infoJson.country || "");
        setStateIP(infoJson.region || "");
        setCiudadIP(infoJson.city || "");
        setIspIP(infoJson.org || "");
      } catch (err) {
        // No bloqueamos el flujo si falla
        console.warn("No se pudo obtener IP/Geo:", err);
      }
    })();
  }, []);

  // ✅ 2) Submit: validar HTML + capturar valores + push dataLayer + reset + redirect
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Validación nativa HTML5
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);

    // ⚠️ IMPORTANTE:
    // En tu form tienes nombres mezclados: "form-fields[name]" vs "form_fields[apellidos]" etc.
    // Aquí pongo ambas posibilidades para que no se te rompa.
    const get = (keyA: string, keyB?: string) => {
      const v =
        (fd.get(keyA) as string | null) ??
        (keyB ? ((fd.get(keyB) as string | null) ?? "") : "");
      return (v || "").toString().trim();
    };

    const data = {
      name: get("form_fields[name]", "form-fields[name]"),
      lastName: get("form_fields[apellidos]", "form_fields[apellidos]"),
      phone: get("form_fields[celular]"),
      email: get("email", "form_fields[email]"), // tu email es name="email"
      program: get("form_fields[programa]"),
      documentType: get("form_fields[TipoDeDocumento]"),
      documento: get("form_fields[NumeroIdentificacion]"),
      medioContacto: get("form_fields[MedioContacto]"),
      financiacion: get("form_fields[financiacion]"),
    };

    // Validación “dura” como en tu script
    if (
      !data.name ||
      !data.lastName ||
      !data.phone ||
      !data.email ||
      !data.program ||
      !data.documentType ||
      !data.documento ||
      !data.medioContacto ||
      !data.financiacion
    ) {
      return;
    }

    // Hash para Meta (como tu script)
    const [nombreHash, apellidoHash, telefonoHash, emailHash] =
      await Promise.all([
        hashSHA256(data.name),
        hashSHA256(data.lastName),
        hashSHA256(data.phone),
        hashSHA256(data.email),
      ]);

    // dataLayer push
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "formSubmission",
      nombre: data.name,
      apellido: data.lastName,
      telefono: data.phone,
      email: data.email,
      programa: data.program,
      documentType: data.documentType,
      documento: data.documento,
      medioContacto: data.medioContacto,
      financiacion: data.financiacion,

      // UTMs
      utm_campaign: utmParams.utm_campaign,
      utm_content: utmParams.utm_content,
      utm_device: utmParams.utm_device,
      utm_matchtype: utmParams.utm_matchtype,
      utm_medium: utmParams.utm_medium,
      utm_source: utmParams.utm_source,
      utm_term: utmParams.utm_term,
      Code_Id: utmParams.Code_Id,
      adposition: utmParams.adposition,
      creative_id: utmParams.creative_id,
      network: utmParams.network,

      // IP / navegador
      formIp: userIP,
      formNavegador: userAgent,
      formCountryIP: countryIP,
      formStateIP: stateIP,
      formCiudadIP: ciudadIP,
      formIspIP: ispIP,

      // Si tienes esto en localStorage/memory, aquí lo conectas
      // leadsource: usuarioRecuperado?.leadSourceMemory,

      // Hashes
      nombreMeta: nombreHash,
      apellidoMeta: apellidoHash,
      telefonoMeta: telefonoHash,
      emailMeta: emailHash,
    });

    // Limpiar form antes de redirigir
    form.reset();

    // Si quieres que quede marcado:
    const politicas = form.querySelector<HTMLInputElement>("#form-field-politicas");
    if (politicas) politicas.checked = true;

    // Redirect (deja un pequeño delay para que GTM alcance a leer el push)
    setTimeout(() => {
      window.location.href = "https://tecmd.edu.co/pagina-gracias-registro/";
    }, 600);
  };

  return (
    <form id="formLanding" name="formGeneral" aria-label="formGeneral" onSubmit={handleSubmit}>
        {<div>
            <div className="grid gap-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <Field>
                        <FieldLabel className="text-white" htmlFor="form-field-name">
                            Nombre(s)*
                        </FieldLabel>
                        <input
                            name="form-fields[name]"
                            id="form-field-name"
                            type="text"
                            placeholder="Nombres"
                            required
                            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                        />
                    </Field>
                    <Field>
                        <FieldLabel className="text-white" htmlFor="form-field-apellidos">
                            Apellido(s)*
                        </FieldLabel>
                        <input 
                            name="form_fields[apellidos]"
                            type="text" 
                            id="form-field-apellidos"
                            placeholder="Apellidos"
                            required
                            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                        />
                    </Field>
                </div>
                <div className="grid grid-cols-1 gap-x-4">
                    <Field>
                        <FieldLabel className="text-white" htmlFor="form-field-celular">
                            Teléfono Celular*
                        </FieldLabel>
                        <input
                            name="form_fields[celular]"
                            id="form-field-celular"
                            placeholder="310 2345678"
                            required
                            type="tel"
                            maxLength={10}
                            inputMode="tel"
                            autoComplete="tel"
                            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                        />
                        <InitIntlTel />
                    </Field>

                </div>
                <div className="grid grid-cols-1 gap-x-4">
                    <Field>
                        <FieldLabel 
                            className="text-white" 
                            htmlFor="email"
                        >
                            Email*
                        </FieldLabel>
                        <input 
                            type="email" 
                            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]" 
                            name="email"
                            id="email"
                            placeholder="email@dominio.com"
                            required
                        />
                    </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <Field>
                        <FieldLabel className="text-white" htmlFor="form-field-TipoDeDocumento">
                            Tipo de documento
                        </FieldLabel>
                        <select id="form-field-TipoDeDocumento" name="form_fields[TipoDeDocumento]" className="bg-white file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]">
                            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                            <option value="Cédula de extranjería">Cédula de extranjería</option>
                            <option value="Permiso de Protección Temporal">Permiso de Protección Temporal</option>
                        </select>
                    </Field>
                    <Field>
                        <FieldLabel className="text-white" htmlFor="form-field-NumeroIdentificacion">
                            Número de identificación*
                        </FieldLabel>
                        <input 
                            id="form-field-NumeroIdentificacion"
                            name="form_fields[NumeroIdentificacion]"
                            placeholder="1012345678"
                            required
                            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                            maxLength={10}
                        />
                    </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <Field className="hidden">
                        <FieldLabel className="text-white" htmlFor="form-field-programa">
                            Programa de interes
                        </FieldLabel>
                        <input
                            name="form_fields[programa]"
                            type="hidden"
                            id="form-field-programa"
                            value={programaTitle}
                        />
                    </Field>
                    <Field className="hidden">
                        <FieldLabel className="text-white" htmlFor="form-field-MedioContacto">
                            Medio de contacto
                        </FieldLabel>
                        <input
                            name="form_fields[MedioContacto]"
                            type="hidden"
                            id="form-field-MedioContacto"
                            value="whatsapp"
                        />
                    </Field>
                    <Field className="hidden">
                        <FieldLabel className="text-white" htmlFor="form-field-financiacion">
                            Necesitas financiacion
                        </FieldLabel>
                        <input
                            name="form_fields[financiacion]"
                            type="hidden"
                            id="form-field-financiacion"
                            value="Tal vez"
                        />
                    </Field>
                    <Field className="hidden">
                        <input
                            type="checkbox"
                            id="form-field-politicas"
                            name="form_fields[politicas]"
                            defaultChecked
                        />
                        <label htmlFor="form-field-politicas">Accept terms and conditions</label>
                    </Field>

                </div>
                <button 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 has-[>svg]:px-3 min-h-[44px] px-4 py-3 text-lg my-1 bg-[#ffc316] hover:bg-[#ffcf45] text-black hover:text-black"
                    type="submit"
                    id="buttonbunji"
                >
                    Solicitar información
                </button>
                <div>
                    <p className="text-xs text-center text-white">
                        Al hacer click en ‘Solicito Información’, autorizo ser contactado para 
                        recibir información sobre mi inscripción y programas educativos. Nos 
                        comprometemos a no utilizar su información de contacto para enviar spam.&ensp;
                        <a className="text-[#ffc316] underline"
                        download="Politica Tratamiento Informacion.pdf"
                        href="pdfs/Politica_Tratamiento_Informacion.pdf"
                        > 
                        Consulta nuestras Políticas.
                        </a>
                    </p>
                </div>
            </div>
        </div>}
    </form>
  );
}
