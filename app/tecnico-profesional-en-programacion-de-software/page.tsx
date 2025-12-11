// app/tecnico-profesional-en-operaciones-de-comercio-electronico/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Técnico Profesional en Operaciones de Comercio Electrónico",
  description: "Programa Técnico Profesional en Operaciones de Comercio Electrónico.",
};

export default function TecnicoProfesionalPage() {
  return (
    <>
    <div className="bg-[#FFCB29] p-2">
        <div className="max-w-5xl mx-auto">
            <p className="text-black text-center text-sm">Toma una decisión inTECligente. <strong>Inscríbete hoy y empieza a construir tu futuro</strong></p>
        </div>
    </div>

    <div className="bg-[#212844] px-2 py-20">
        <div className="max-w-5xl mx-auto">
            <Image
                src="/logos/logos-TEC-MD-yellow_pq.png"   // ruta relativa a /public
                alt="Estudiantes del programa técnico profesional en operaciones de comercio electrónico"
                width={160}            // ancho real de la imagen
                height={300}            // alto real de la imagen
                priority                // solo si es imagen principal above the fold
            />
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="grid gap-y-4">
                <div>
                    <h1 className="text-5xl text-white">Técnico Profesional en Programación de Software</h1>
                    <p className="text-base text-white">Desarrolla código, resuelve problemas y lidera en la transformación social a través del software</p>
                </div>
                <div className="flex gap-2">
                    <p className="text-sm rounded-xl px-2 py-1 border border-white text-white">4 Periodos académicos</p>
                    <p className="text-sm rounded-xl px-2 py-1 border border-white text-white">65 Créditos</p>
                    <p className="text-sm rounded-xl px-2 py-1 border border-white text-white">100% Virtual</p>
                </div>
                <p className="text-white">
                    $2.560.000 Precio Ministerio de Educación Nacional (MEN)
                </p>
                <p className="text-[#D5A202]">
                    Matrícula con subsidio: <span className="text-2xl text-white">$1.417.000</span>    
                </p>
                <div>
                    <p className="text-sm text-white">
                        Código SNIES: 116692<br></br>
                        Resolución Registro calificado 000631 – 01/25/2024<br></br>
                        Vigencia Registro Calificado 7 años
                    </p>
                </div>
            </div>
            <div>
                <div className="bg-[#293551] p-10 shadow-md rounded-lg">
                    <p className="text-lg text-white text-center">Solicita más información</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
