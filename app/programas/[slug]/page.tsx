import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROGRAMAS } from "@/data/programas";
import ModuleTop from "@/components/ModuleTop";

import LandingFormClient from "@/components/LandingFormClient";

import { INFO_GENERAL } from "@/data/general";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import ModuleSubsidio from "@/components/ModuleSubsidio";
import ModulePInscripcion from "@/components/ModulePInscripcion";
import ModuleFinanciacion from "@/components/ModuleFinanciacion";
import ModuleFooter from "@/components/ModuleFooter";
import ModuleBeneficios from "@/components/ModuleBeneficios";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROGRAMAS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const programa = PROGRAMAS.find((p) => p.slug === slug);

  if (!programa) {
    return {
      title: "Programa no encontrado | TecMD",
      description: "El programa que buscas no existe.",
    };
  }

  return {
    title: `${programa.title} | TecMD`,
    description: programa.description,
    openGraph: {
      title: `${programa.title} | TecMD`,
      description: programa.description,
      url: `/programas/${programa.slug}`,
      images: [
        {
          url: programa.heroImage,
          width: 1200,
          height: 630,
          alt: programa.title,
        },
      ],
      type: "website",
      siteName: "TecMD",
      locale: "es_CO",
    },
  };
}

export default async function ProgramaPage({ params }: Props) {
  const { slug } = await params;

  const programa = PROGRAMAS.find((p) => p.slug === slug);
  if (!programa) notFound();

  return (
    <>

    <ModuleTop />

    <div className="bg-[#212844] relative overflow-hidden">
        {/* ✅ Imagen real para LCP */}
        <Image
            src={programa.heroImage}
            alt="Técnico Profesional en Programación de Software"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            fetchPriority="high"
        />
        <div className="bg-[#212844]/75 backdrop-blur-lg px-2 py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="grid gap-y-4 content-center">
                <div>
                    <Image
                        src="/logos/logos-TEC-MD-yellow_pq.png"   // ruta relativa a /public
                        alt={programa.title}
                        width={160}            // ancho real de la imagen
                        height={95.41}            // alto real de la imagen
                        priority                // solo si es imagen principal above the fold
                    />
                </div>
                <div>
                    <h1 className="text-5xl text-white pb-3">{programa.title}</h1>
                    <p className="text-base text-white">{programa.description}</p>
                </div>
                <div className="flex gap-2">
                  {programa.periodos && (
                    <p className="text-sm rounded-xl px-2 py-1 border border-white text-white">
                      {programa.periodos} Periodos académicos
                    </p>
                  )}

                  {programa.creditos && (
                    <p className="text-sm rounded-xl px-2 py-1 border border-white text-white">
                      {programa.creditos} Créditos
                    </p>
                  )}
                    
                  {programa.modalidad && (
                    <p className="text-sm rounded-xl px-2 py-1 border border-white text-white">
                      {programa.modalidad}
                    </p>
                  )}
                    
                </div>
                <p className="text-white text-lg">
                    {INFO_GENERAL.precioMEN.formatted} <span className="text-sm">Precio Ministerio de Educación Nacional (MEN)</span>
                </p>
                <p className="text-[#D5A202]">
                    Matrícula con subsidio: <span className="text-2xl text-white">{INFO_GENERAL.matriculaSubsidio.formatted}</span>    
                </p>
                <div>
                    {programa.codigoSNIES && (
                      <p className="text-sm text-white">
                        Código SNIES: {programa.codigoSNIES}
                      </p>
                    )}

                    {programa.resolucion && (
                      <p className="text-sm text-white">
                        {programa.resolucion}
                      </p>
                    )}

                    {programa.vigenciaRegistro && (
                      <p className="text-sm text-white">
                        {programa.vigenciaRegistro}
                      </p>
                    )}
                    
                </div>
            </div>
            <div id="formContact">
                <div className="bg-[#293551] p-10 shadow-md rounded-lg grid gap-y-4">
                    <p className="text-lg text-white text-center font-bold">Solicita más información</p>
                    <LandingFormClient 
                      programaTitle={programa.title} 
                    />
                </div>
            </div>
        </div>

        </div>
    </div>

    <div className="bg-[#F5F5F5] px-2 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="grid gap-y-2 content-center">
                {programa.tituloDescripcion && (
                  <h2 className="text-2xl text-black font-bold">
                    {programa.tituloDescripcion}
                  </h2>
                )}
                {programa.descripcionLarga && (
                  <p 
                    className="text-black" 
                    dangerouslySetInnerHTML={{
                    __html: programa.descripcionLarga,
                    }}
                  />
                )}
            </div>
            <div>
                <div className="bg-white p-5 grid gap-y-2">
                    <h2 className="text-2xl text-black font-bold">¿Por qué estudiar este programa?</h2>
                    {programa.porqueEstudiar.length > 0 &&(
                      <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                        {programa.porqueEstudiar.map((beneficio, index) =>  (
                          <li key={index}>
                            {beneficio}
                          </li>
                        ))}
                      </ul>  
                    )}
                </div>
            </div>
        </div>
    </div>

    <ModuleSubsidio />

    <div className="bg-[#FFFFFF] px-2 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="content-center grid gap-y-2">
                <h2 className="text-2xl text-black font-bold">¿Qué lograrás con esta formación?</h2>
                {programa.queLograras.length > 0 &&(
                  <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                    {programa.queLograras.map((logro, index) =>(
                      <li key={index}>
                        {logro}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="text-black">
                    <b>¡No te quedes atrás en la era digital!</b>
                </p>
                <div>
                    <Button className="min-h-[44px] px-4 py-3 text-lg my-2 bg-[#1A3C69] text-white">
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
                    {programa.lograrasDescripcion && (
                      <p className="text-black text-sm">
                        {programa.lograrasDescripcion}
                      </p>
                    )}
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
                {programa.trabajaComo.length > 0 &&(
                  <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                    {programa.trabajaComo.map((trabajo, index) =>(
                      <li key={index}>
                        {trabajo}
                      </li>
                    ))}
                  </ul>
                )}

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
                    <Button className="min-h-[44px] px-4 py-3 text-lg my-2 bg-[#1A3C69] text-white">
                        <Link href="#formContact">
                            Más información
                        </Link>
                    </Button>
                    <Button className="min-h-[44px] px-4 py-3 text-lg my-2" variant="outline">
                        <a 
                        download={"TecMD "+programa.title+".pdf"}
                        href={programa.planEstudio}
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
