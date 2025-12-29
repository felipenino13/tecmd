import Image from "next/image"

export default function ModuleFooter(){
    return(
        <>
        <div className="bg-[#0F192A] px-2 py-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 gap-y-10">
                <div className="flex justify-center">
                    <Image
                    src="/logos/logos-TEC-MD-yellow_pq.webp"   // ruta relativa a /public
                    alt="Estudiantes del programa técnico profesional en operaciones de comercio electrónico"
                    width={140}            // ancho real de la imagen
                    height={83.49}            // alto real de la imagen
                    priority                // solo si es imagen principal above the fold
                    />
                </div>
            </div>
        </div>
        </>
    )
}