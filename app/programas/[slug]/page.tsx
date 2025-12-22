import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROGRAMAS } from "@/data/programas";
import ModuleTop from "@/components/ModuleTop";
import LandingForm from "@/components/LandingForm";
import { INFO_GENERAL } from "@/data/general";

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
        />
        <div className="bg-[#212844]/50 backdrop-blur-lg px-2 py-20">
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
                    <h1 className="text-5xl text-white">{programa.title}</h1>
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
                    <LandingForm />
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
                  <p className="text-black">
                    {programa.descripcionLarga}
                  </p>
                )}
            </div>
            <div>
                <div className="bg-white p-5 grid gap-y-2">
                    <h2 className="text-2xl text-black font-bold">¿Por qué estudiar este programa?</h2>
                    {programa.porqueEstudiar.length > 0 &&(
                      <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                        {programa.porqueEstudiar.map((beneficio, index) =>  (
                          <li>
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

    <ModuleBeneficios />

    <ModulePInscripcion />

    <ModuleFinanciacion />

    <ModuleFooter />
    </>
  );
}
