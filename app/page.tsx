// app/page.tsx
import Link from "next/link";
import Image from "next/image";


export const metadata = {
  title: "Inicio TECMD",
  description: "Landing de TECMD en Next.js",
};

export default function Home() {
  return (
    <>
      <div className="bg-[#212844] p-2 z-20">
          <div className="max-w-5xl mx-auto">
            <Image
                src="/logos/logos-TEC-MD-yellow_pq.png"   // ruta relativa a /public
                alt="Estudiantes del programa técnico profesional en operaciones de comercio electrónico"
                width={160}            // ancho real de la imagen
                height={95.41}            // alto real de la imagen
                priority                // solo si es imagen principal above the fold
             />
            <h1 className="text-white">Programas TECMD</h1>
          </div>
      </div>
      <div className="bg-[#212844] p-2 z-20 pb-20">
        <div className="max-w-5xl mx-auto">
          <Link className="text-[#ffc316] underline" href="/tecnico-profesional-en-programacion-de-software">
            Técnico Profesional en Programación de Software
          </Link>
        </div>
      </div>
    </>
  );
}
