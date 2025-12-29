import { Button } from "./ui/button";
import Link from "next/link";

export default function ModulePInscripcion (){
    return(
        <>
            <div className="bg-[#F5F5F5] px-2 py-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
                    <h2 className="text-2xl text-black text-center font-bold">Conoce nuestro proceso de inscripción</h2>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-x-5 gap-y-10">
                    <div className="bg-[#FFFFFF] p-4 grid gap-y-4 content-start">
                        <div className="flex aspect-[1/1] bg-[#FFCB29] max-w-[40] rounded-[100] content-center">
                            <p className="text-2xl text-white text-center w-full m-auto">1</p>
                        </div>
                        <p className="text-black">Diligencia el formulario</p>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 grid gap-y-4 content-start">
                        <div className="flex aspect-[1/1] bg-[#FF2C2C] max-w-[40] rounded-[100] content-center">
                            <p className="text-2xl text-white text-center w-full m-auto">2</p>
                        </div>
                        <p className="text-black">Reúne estos documentos:</p>
                        <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                                <li>
                                    Fotocopia de tu documento de identidad.
                                </li>
                                <li>
                                    Fotografía digital en fondo blanco.
                                </li>
                                <li>
                                    Diploma o acta de grado de bachiller.
                                </li>
                                <li>
                                    Resultados de tus pruebas ICFES Saber 11°
                                </li>
                        </ul>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 grid gap-y-4 content-start">
                        <div className="flex aspect-[1/1] bg-[#C62868] max-w-[40] rounded-[100] content-center">
                            <p className=" text-2xl text-white text-center w-full m-auto">3</p>
                        </div>
                        <p className="text-black">El Departamento de Admisiones revisará tu inscripción.</p>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 grid gap-y-4 content-start">
                        <div className="flex aspect-[1/1] bg-[#8E258C] max-w-[40] rounded-[100] content-center">
                            <p className="text-2xl text-white text-center w-full m-auto">4</p>
                        </div>
                        <p className="text-black">Realiza el pago en línea por PSE o de forma presencial en el 
                            Banco de Bogotá y envía el comprobante a tu asesor educativo por correo.</p>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 grid gap-y-4 content-start">
                        <div className="flex aspect-[1/1] bg-[#212844] max-w-[40] rounded-[100] content-center">
                            <p className="text-2xl text-white text-center w-full m-auto">5</p>
                        </div>
                        <p className="text-black">Revisa tu correo para información sobre clases, 
                            calendario y usuario institucional.</p>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
                    <div className="justify-center flex">
                            <Button className="min-h-[44px] px-4 py-3 text-lg my-2 bg-[#1A3C69] text-white">
                                <Link href="#formContact">
                                    Solicita más información
                                </Link>
                            </Button>
                        </div>
                </div>
            </div>
        </>
    )
}