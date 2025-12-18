"use client";

import { useEffect } from "react";

export default function WhatsAppDataLayer() {
  useEffect(() => {
    const observerWa = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        // Checkbox consentimiento
        const checkbox = document.querySelector<HTMLInputElement>(
          "input[name='privacy_data[consent]']"
        );
        if (checkbox) checkbox.checked = true;

        // Formulario WhatsApp RD
        const formWa = document.querySelector<HTMLFormElement>(
          ".rdstation-popup-js-form-identifier"
        );

        if (!formWa) return;

        console.log("Form encontrado :) WhatsApp");

        // Evitar doble listener
        if ((formWa as any).dataset.listenerAdded) return;

        (formWa as any).dataset.listenerAdded = "true";
        observerWa.disconnect(); // ya lo encontramos

        // SUBMIT
        formWa.addEventListener("submit", (event) => {
          event.preventDefault();

          if (!formWa.checkValidity()) {
            formWa.reportValidity();
            console.log("Validación HTML falló (WhatsApp)");
            return;
          }

          const formDataWa = new FormData(formWa);

          const dataWa = {
            name: (formDataWa.get("name") as string)?.trim() ?? "",
            lastname:
              (formDataWa.get("cf_apellido") as string)?.trim() ?? "",
            phone:
              (formDataWa.get("mobile_phone") as string)?.trim() ?? "",
            email: (formDataWa.get("email") as string)?.trim() ?? "",
            ciudad:
              (formDataWa.get("cf_selecciona_tu_ciudad") as string)?.trim() ??
              "",
            documento:
              (formDataWa.get("cf_numero_de_documento2") as string)?.trim() ??
              "",
            program:
              (formDataWa.get(
                "cf_programa_tecnico_profesional_de_interes"
              ) as string)?.trim() ?? "",
          };

          // Validación dura
          if (
            !dataWa.name ||
            !dataWa.lastname ||
            !dataWa.phone ||
            !dataWa.email ||
            !dataWa.ciudad ||
            !dataWa.documento ||
            !dataWa.program
          ) {
            alert("Por favor, completa todos los campos.");
            return;
          }

          // 🔥 dataLayer push
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: "formWhatsapp",
            nombre: dataWa.name,
            apellido: dataWa.lastname,
            telefono: dataWa.phone,
            email: dataWa.email,
            ciudad: dataWa.ciudad,
            documento: dataWa.documento,
            programa: dataWa.program,
          });

          console.log("Información de Whatsapp enviada al dataLayer");
        });

        // Logs de interacción (opcional)
        const inputs = formWa.querySelectorAll("input");
        inputs.forEach((input) => {
          input.addEventListener("click", () => {
            console.log("Interacción WhatsApp detectada");
          });
        });
      });
    });

    observerWa.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observerWa.disconnect();
  }, []);

  return null; // No renderiza nada
}
