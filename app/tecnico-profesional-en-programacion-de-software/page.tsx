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

    <div className="bg-[#F5F5F5] px-2 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="grid gap-y-2">
                <h2 className="text-xl text-black">El futuro es digital, Conviértete Técnico Profesional en Programación de Software</h2>
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
                    <h2 className="text-xl text-black">¿Por qué estudiar este programa?</h2>
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

    <div className="bg-[#FFC316] px-2 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="grid gap-y-2">
                <Image
                src="/images/TecMD-45subsidio.webp"   // ruta relativa a /public
                alt="Estudiantes del programa técnico profesional en operaciones de comercio electrónico"
                width={560}            // ancho real de la imagen
                height={300}            // alto real de la imagen
                />
            </div>
            <div className="grid gap-y-2 content-center">
                <h2 className="text-xl text-black">¿Te interesa nuestro Subsidio del 45%?</h2>
                <p className="text-black">
                    ¡Todos nuestros programas cuentan con subsidio para que estudies 
                    fácilmente el programa que quieres! Estamos comprometidos con la 
                    educación superior de calidad en Colombia y creemos en que todas 
                    las personas pueden acceder a ella.
                </p>
            </div>
        </div>
    </div>

    <div className="bg-[#FFFFFF] px-2 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div className="content-center grid gap-y-2">
                <h2 className="text-xl text-black">¿Qué lograrás con esta formación?</h2>
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
                <div className="absolute bottom-0 left-0 bg-white m-5 p-5 max-w-2xs grid gap-y-2">
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
    </>
  );
}
