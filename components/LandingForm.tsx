"use client";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

import React from "react";
import InitIntlTel from "@/components/InitIntlTel";

export default function LandingForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    // 👉 valida HTML5
    if (!form.checkValidity()) {
        form.reportValidity(); // muestra mensajes nativos
        return;
    }

    // ✅ 2. Limpia el formulario
    form.reset();

    // (opcional) asegura que el checkbox quede marcado otra vez
    const politicas = form.querySelector<HTMLInputElement>(
        "#form-field-politicas"
    );
    if (politicas) politicas.checked = true;
    
    // Aquí puedes hacer tu POST si quieres (opcional)
    // const res = await fetch("/api/lead", { method: "POST" });

    setTimeout(() => {
        window.location.href = "https://tecmd.edu.co/pagina-gracias-registro/";
    }, 1000);
    // Redirección
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
                            value="Programación de Software"
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
