import { Button } from "./ui/button";
import Link from "next/link";
import { CircleDollarSign } from "lucide-react";

export default function ModuleFinanciacion(){
    return(
        <>
        <div className="bg-[#FFFFFF] px-2 py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
                <h2 className="text-2xl text-black text-center font-bold">Opciones de financiación</h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10">
                <div className="grid gap-y-2">
                    <p className="text-6xl text-black text-center">45%</p>
                    <p className="text-black text-center">En TecMD, apostamos por el futuro de Colombia y subsidiamos el 45% de tu matrícula.​</p>
                </div>
                <div className="grid gap-y-2">
                    <p className="text-6xl text-black text-center">$500,000</p>
                    <p className="text-black text-center">Gracias a Credity, puedes comenzar tu Técnico Profesional pagando menos de $500.000​.​</p>
                </div>
                <div className="grid gap-y-2">
                    <p className="text-6xl text-black text-center flex m-auto">3 <CircleDollarSign className="w-[1em] h-[1em]"/></p>
                    <p className="text-black text-center">Si necesitas financiar el saldo, tenemos tres aliados confiables con opciones flexibles.​​</p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
                <div className="justify-center flex">
                        <Button className="min-h-[44px] px-4 py-3 text-lg my-2 bg-[#1A3C69] text-white">
                            <Link href="#formContact">
                                ¿Quieres saber más? Empieza hoy
                            </Link>
                        </Button>
                    </div>
            </div>
        </div>
        </>
    )
}