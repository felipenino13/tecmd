import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ModuleSubsidio() {
    return(
        <>
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
                    <h2 className="text-2xl text-black font-bold">¿Te interesa nuestro Subsidio del 45%?</h2>
                    <p className="text-black">
                        ¡Todos nuestros programas cuentan con subsidio para que estudies 
                        fácilmente el programa que quieres! Estamos comprometidos con la 
                        educación superior de calidad en Colombia y creemos en que todas 
                        las personas pueden acceder a ella.
                    </p>
                    <div>
                        <Button className="min-h-[44px] px-4 py-3 text-lg my-2">
                            <Link href="#formContact">
                                Accede a este subsidio
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    
}