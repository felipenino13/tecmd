import Image from "next/image"

export default function ModuleBeneficios (){
    return(
        <>
        <div className="bg-[#212844] px-2 py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
                <h2 className="text-2xl text-white text-center font-bold">Beneficios de estudiar con nosotros</h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-20 gap-y-10">
                <div className="bg-[#293551] p-4 grid gap-y-4 content-between">
                    <div>
                        <h3 className="text-lg text-white font-bold">Financiación</h3>
                        <p className="text-white">En TecMD te financiamos el 45% de tu matrícula, además con el apoyo nuestros 
                            aliados financieros puedes comenzar tu Técnico Profesional pagando menos 
                            de $500.000​.
                        </p> 
                    </div>
                    <Image
                    src="/images/financiacion-icon.webp"   // ruta relativa a /public
                    alt="Estudiantes del programa técnico profesional en operaciones de comercio electrónico"
                    width={100}            // ancho real de la imagen
                    height={300}            // alto real de la imagen
                    />               
                </div>
                <div className="bg-[#293551] p-4 grid gap-y-4 content-between">
                    <div>
                        <h3 className="text-lg text-white font-bold">Modalidad virtual</h3>
                        <p className="text-white">¡Estudia a tu propio ritmo! Nuestra modalidad virtual te ofrece la 
                            flexibilidad para estudiar mientras trabajas o para equilibrar tu 
                            vida con tus actividades diarias.</p>
                    </div>
                    <Image
                    src="/images/virtual-icon.webp"   // ruta relativa a /public
                    alt="Estudiantes del programa técnico profesional en operaciones de comercio electrónico"
                    width={100}            // ancho real de la imagen
                    height={300}            // alto real de la imagen
                    />  
                </div>
                <div className="bg-[#293551] p-4 grid gap-y-4 content-between">
                    <div>
                        <h3 className="text-lg text-white font-bold">Gradúate en menos tiempo</h3>
                        <p className="text-white">Estudiar y graduarte como Técnico Profesional en poco tiempo te 
                            permite ingresar al mundo laboral más rápido, impulsando tu carrera 
                            sin perder años de preparación. Aprovecha la oportunidad de avanzar 
                            rápidamente hacia tu futuro.</p>
                    </div>
                    <Image
                    src="/images/tiempo-icon.webp"   // ruta relativa a /public
                    alt="Estudiantes del programa técnico profesional en operaciones de comercio electrónico"
                    width={80}            // ancho real de la imagen
                    height={300}            // alto real de la imagen
                    />  
                </div>
            </div>
        </div>
        </>
    )
}