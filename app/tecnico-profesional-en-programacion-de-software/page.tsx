// app/tecnico-profesional-en-operaciones-de-comercio-electronico/page.tsx
import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { INFO_GENERAL } from "@/data/general";
import { PROGRAMAS } from "@/data/programas";

import ModuleSubsidio from "@/components/ModuleSubsidio";
import ModulePInscripcion from "@/components/ModulePInscripcion";
import ModuleFinanciacion from "@/components/ModuleFinanciacion";
import ModuleFooter from "@/components/ModuleFooter";
import ModuleBeneficios from "@/components/ModuleBeneficios";
import ModuleTop from "@/components/ModuleTop";

import LandingForm from "@/components/LandingForm";

export const metadata: Metadata = {
  title: "Técnico Profesional en Programación de Software",
  description: "Desarrolla código, resuelve problemas y lidera en la transformación social a través del software.",
  openGraph: {
    title: "Técnico Profesional en Programación de Software | TecMD",
    description:
      "Inscríbete en el Técnico Profesional en Programación de Software. Educación práctica, enfoque laboral y acompañamiento permanente.",
    url: "https://tecmd.vercel.app/tecnico-profesional-en-programacion-de-software",
    siteName: "TecMD",
    images: [
      {
        url: "https://tecmd.vercel.app/public/images/Tecnico-Profesional-en-Programacion-de-Software.webp",
        width: 1200,
        height: 630,
        alt: "Técnico Profesional en Programación de Software - TecMD",
      },
    ],
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Técnico Profesional en Programación de Software | TecMD",
    description:
      "Estudia programación de software con enfoque práctico y laboral. Inscripciones abiertas.",
    images: ["https://tecmd.vercel.app/public/images/Tecnico-Profesional-en-Programacion-de-Software.webp"],
  },
};

export default function TecnicoProfesionalPage() {
  return (
    <>
    <ModuleTop />

    <div className="bg-[#212844] relative overflow-hidden">
        {/* ✅ Imagen real para LCP */}
        <Image
            src="/images/Tecnico-Profesional-en-Programacion-de-Software.webp"
            alt="Técnico Profesional en Programación de Software"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
        />
        <div className="bg-[#212844]/50 backdrop-blur-lg px-2 py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="grid gap-y-4 content-center">
                <div>
                    <Image
                        src="/logos/logos-TEC-MD-yellow_pq.png"   // ruta relativa a /public
                        alt="Estudiantes del programa técnico profesional en operaciones de comercio electrónico"
                        width={160}            // ancho real de la imagen
                        height={95.41}            // alto real de la imagen
                        priority                // solo si es imagen principal above the fold
                    />
                </div>
                <div>
                    <h1 className="text-5xl text-white">Técnico Profesional en Programación de Software</h1>
                    <p className="text-base text-white">Desarrolla código, resuelve problemas y lidera en la transformación social a través del software</p>
                </div>
                <div className="flex gap-2">
                    <p className="text-sm rounded-xl px-2 py-1 border border-white text-white">4 Periodos académicos</p>
                    <p className="text-sm rounded-xl px-2 py-1 border border-white text-white">65 Créditos</p>
                    <p className="text-sm rounded-xl px-2 py-1 border border-white text-white">100% Virtual</p>
                </div>
                <p className="text-white text-lg">
                    {INFO_GENERAL.precioMEN.formatted} <span className="text-sm">Precio Ministerio de Educación Nacional (MEN)</span>
                </p>
                <p className="text-[#D5A202]">
                    Matrícula con subsidio: <span className="text-2xl text-white">{INFO_GENERAL.matriculaSubsidio.formatted}</span>    
                </p>
                <div>
                    <p className="text-sm text-white">
                        Código SNIES: 116692<br></br>
                        Resolución Registro calificado 000631 – 01/25/2024<br></br>
                        Vigencia Registro Calificado 7 años
                    </p>
                </div>
            </div>
            <div id="formContact">
                <div className="bg-[#293551] p-10 shadow-md rounded-lg grid gap-y-4">
                    <p className="text-lg text-white text-center font-bold">Solicita más información</p>
                    <LandingForm 
                        programaTitle= "Programación de Software"
                    />
                </div>
            </div>
        </div>

        </div>
    </div>

    <div className="bg-[#F5F5F5] px-2 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="grid gap-y-2">
                <h2 className="text-2xl text-black font-bold">El futuro es digital, Conviértete Técnico Profesional en Programación de Software</h2>
                <p className="text-black">
                    El mundo está en constante evolución, el programa <b>Técnico Profesional en Programación 
                    de Software</b> te prepara para desarrollar aplicaciones y sistemas eficientes, optimizar 
                    procesos y mejorar la operatividad en distintos entornos. Aprenderás a programar, probar 
                    y mantener software con metodologías y herramientas actualizadas, respondiendo a la 
                    creciente demanda de soluciones tecnológicas innovadoras.
                </p>
            </div>
            <div>
                <div className="bg-white p-5 grid gap-y-2">
                    <h2 className="text-2xl text-black font-bold">¿Por qué estudiar este programa?</h2>
                    <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                        <li>
                            Alta demanda en el mercado laboral debido a la digitalización y automatización.
                        </li>
                        <li>
                            Oportunidad de desarrollar aplicaciones funcionales y adaptables a diversas plataformas.
                        </li>
                        <li>
                            Acceso a conocimientos actualizados sobre tendencias y tecnologías en el desarrollo de software.
                        </li>
                        <li>
                            Posibilidad de crecimiento profesional en distintos sectores de la industria tecnológica.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <ModuleSubsidio />

    <div className="bg-[#FFFFFF] px-2 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="content-center grid gap-y-2">
                <h2 className="text-2xl text-black font-bold">¿Qué lograrás con esta formación?</h2>
                    <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                        <li>
                            Escribir código eficiente y estructurado para diferentes aplicaciones.
                        </li>
                        <li>
                            Realizar pruebas de software y corregir errores para mejorar su rendimiento.
                        </li>
                        <li>
                            Aplicar metodologías y herramientas de desarrollo bajo estándares de calidad.
                        </li>
                        <li>
                            Desarrollar soluciones tecnológicas innovadoras para distintos contextos.
                        </li>
                        <li>
                            Demostrar liderazgo, ética y compromiso en entornos académicos y laborales.
                        </li>
                    </ul>
                <p className="text-black">
                    <b>¡No te quedes atrás en la era digital!</b>
                </p>
                <div>
                    <Button className="min-h-[44px] px-4 py-3 text-lg my-2">
                        <Link href="#formContact">
                            Solicita más información
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="relative">
                <div>
                    <Image
                    src="/images/student-tecmd.jpg"   // ruta relativa a /public
                    alt="Estudiantes del programa técnico profesional en operaciones de comercio electrónico"
                    width={560}            // ancho real de la imagen
                    height={300}            // alto real de la imagen
                    />
                </div>
                <div className="absolute bottom-0 left-0 m-5 p-5 max-w-2xs grid gap-y-2 bg-white/50 backdrop-blur-md">
                    <p className="text-black text-sm">
                        Conviértete en Técnico Profesional en Programación de Software 
                        y prepárate para una carrera llena de oportunidades.
                    </p>
                    <p className="text-black text-sm">
                        <b>¡Inscríbete ahora y toma una decisión inTECligente para 
                        asegurar tu futuro!</b>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-[#FFC316] px-2 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10 bg-[#FFFFFF]">
            <div className="bg-[url(/images/tp-operaiones-shoftware.webp)] bg-center aspect-[16/9]">

            </div>
            <div className="content-center grid gap-y-2 p-10">
                <h2 className="text-2xl text-black font-bold">Podrás desempeñarte como:</h2>
                <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                        <li>
                            Desarrollador de aplicaciones móviles.
                        </li>
                        <li>
                            Desarrollador web.
                        </li>
                        <li>
                            Tester de software.
                        </li>
                        <li>
                            Consultor de tecnología de la información.
                        </li>
                        <li>
                            Consultor de tecnología de la información.
                        </li>
                        <li>
                            Ingeniero de software.
                        </li>
                        <li>
                            Emprendedor en el sector tecnológico.
                        </li>
                </ul>
            </div>
        </div>
    </div>

    <ModuleBeneficios />

    <ModulePInscripcion />

    <ModuleFinanciacion />

    <div className="bg-[#FFCB29] px-2 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="content-center grid gap-y-2">
                <h2 className="text-2xl text-black font-bold">Plan de estudios</h2>
                <p className="text-black">
                    ¡Descubre todo lo que tenemos preparado para ti! Accede a una guía 
                    completa que te ayudará a conocer el contenido y la estructura de 
                    tu formación. <strong>¡No pierdas la oportunidad de empezar a planificar 
                    tu camino hacia el éxito!</strong>
                </p>
                <div className="flex gap-2">
                    <Button className="min-h-[44px] px-4 py-3 text-lg my-2">
                        <Link href="#formContact">
                            Más información
                        </Link>
                    </Button>
                    <Button className="min-h-[44px] px-4 py-3 text-lg my-2" variant="outline">
                        <a 
                        download="TecMD Programación-de-Software.pdf"
                        href="pdfs/FLYER-ACADEMICO-2024-Programación-de-Software.pdf"
                        >
                            Plan de estudios
                        </a>
                    </Button>
                </div>
            </div>
            <div>
                <Image
                src="/images/Buho-circulo.png"   // ruta relativa a /public
                alt="Estudiantes del programa técnico profesional en operaciones de comercio electrónico"
                width={500}            // ancho real de la imagen
                height={300}            // alto real de la imagen
                /> 
            </div>
        </div>
    </div>

    <ModuleFooter />

    </>
  );
}
