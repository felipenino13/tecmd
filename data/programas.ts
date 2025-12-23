export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")                    // separa acentos
    .replace(/[\u0300-\u036f]/g, "")     // elimina acentos
    .replace(/[^a-z0-9\s-]/g, "")        // elimina símbolos
    .trim()
    .replace(/\s+/g, "-")                // espacios → guiones
    .replace(/-+/g, "-");                // evita --
}


export type Programa = {
  slug: string;
  title: string;
  valueProgram: string;
  description: string;
  heroImage: string;
  codigoSNIES: string;
  resolucion: string;
  vigenciaRegistro: string;
  periodos: string;
  creditos: string;
  modalidad: string;
  planEstudio: string;
  tituloDescripcion: string;
  descripcionLarga: string;
  porqueEstudiar: string[]; 
  queLograras: string[];
  lograrasDescripcion: string;
  trabajaComo: string[];
};

type ProgramaInput = Omit<Programa, "slug"> & { slug?: string };

function makePrograma(data: ProgramaInput): Programa {
  return {
    ...data,
    slug: data.slug ?? slugify(data.title),
  };
}


export const PROGRAMAS: Programa[] = [
  makePrograma({
    title: "Técnico Profesional en Programación de Software",
    valueProgram:"Programacion de Software",
    description: "Desarrolla código, resuelve problemas y lidera en la transformación social a través del software",
    heroImage: "/images/Tecnico-Profesional-en-Programacion-de-Software.webp",
    codigoSNIES: "116692",
    resolucion: "Resolución Registro calificado 000631 – 01/25/2024",
    vigenciaRegistro: "Vigencia Registro Calificado 7 años",
    periodos:"4",
    creditos:"65",
    modalidad:"100% Virtual",
    planEstudio:"/pdfs/FLYER-ACADEMICO-2024-Programación-de-Software.pdf",
    tituloDescripcion: "El futuro es digital, Conviértete Técnico Profesional en Programación de Software",
    descripcionLarga:
      `El mundo está en constante evolución, el programa Técnico Profesional 
      en Programación de Software te prepara para desarrollar aplicaciones 
      y sistemas eficientes, optimizar procesos y mejorar la operatividad en 
      distintos entornos. Aprenderás a programar, probar y mantener software 
      con metodologías y herramientas actualizadas, respondiendo a la creciente 
      demanda de soluciones tecnológicas innovadoras.`,
    porqueEstudiar: [
      "Alta demanda en el mercado laboral debido a la digitalización y automatización.",
      "Oportunidad de desarrollar aplicaciones funcionales y adaptables a diversas plataformas.",
      "Acceso a conocimientos actualizados sobre tendencias y tecnologías en el desarrollo de software.",
      "Posibilidad de crecimiento profesional en distintos sectores de la industria tecnológica.",
    ],
    queLograras: [
      "Escribir código eficiente y estructurado para diferentes aplicaciones.",
      "Realizar pruebas de software y corregir errores para mejorar su rendimiento.",
      "Aplicar metodologías y herramientas de desarrollo bajo estándares de calidad.",
      "Desarrollar soluciones tecnológicas innovadoras para distintos contextos.",
      "Desarrollar soluciones tecnológicas innovadoras para distintos contextos.",
      "Demostrar liderazgo, ética y compromiso en entornos académicos y laborales.",
    ],
    lograrasDescripcion: "Conviértete en Técnico Profesional en Programación de Software y prepárate para una carrera llena de oportunidades.",
    trabajaComo: [
      "Desarrollador de aplicaciones móviles.",
      "Desarrollador web.",
      "Tester de software.",
      "Consultor de tecnología de la información.",
      "Analista de sistemas.",
      "Ingeniero de software.",
      "Emprendedor en el sector tecnológico.",
    ]
  }),

  makePrograma({
    title: "Técnico Profesional en Operaciones de Comercio Electrónico",
    valueProgram: "Operaciones de Comercio Electronico",
    description: "Gestiona operaciones de ventas online y fortalece negocios en el mundo digital.",
    heroImage: "/images/tecnico-profesional-en-operaciones-de-comercio-electronico.webp",
    codigoSNIES: "",
    resolucion: "Resolución Registro calificado 000631 – 01/25/2024",
    vigenciaRegistro: "Vigencia Registro Calificado 7 años",
    periodos:"",
    creditos:"68",
    modalidad:"100% Virtual",
    planEstudio:"/pdfs/FLYER-ACADEMICO-2024-Programación-de-Software.pdf",
    tituloDescripcion: "",
    descripcionLarga:"El mundo está en constante evolución, el programa Técnico Profesional en Programación de Software te prepara para desarrollar aplicaciones y sistemas eficientes, optimizar procesos y mejorar la operatividad en distintos entornos. Aprenderás a programar, probar y mantener software con metodologías y herramientas actualizadas, respondiendo a la creciente demanda de soluciones tecnológicas innovadoras.",
    porqueEstudiar: [
       "Alta demanda laboral en el sector tecnológico.",
       "Formación práctica en entornos digitales",
    ],
    queLograras: [
      "Aplicar metodologías y herramientas de desarrollo bajo estándares de calidad.",
      "Desarrollar soluciones tecnológicas innovadoras para distintos contextos.",
      "Demostrar liderazgo, ética y compromiso en entornos académicos y laborales.",
    ],
    lograrasDescripcion: "Conviértete en Técnico Profesional en Programación de Software y prepárate para una carrera llena de oportunidades.",
    trabajaComo: [
      "Desarrollador de aplicaciones móviles.",
      "Desarrollador web.",
      "Tester de software.",
    ]
  }),


  makePrograma({
    title: "Técnico Profesional en Operación de Sistemas de Información",
    valueProgram: "Operacion de Sistemas de Informacion",
    description:
      "Optimiza sistemas de información para la toma de decisiones y la competitividad empresarial.",
    heroImage:
      "/images/tecnico-profesional-en-operacion-de-sistemas-de-informacion.webp",
    codigoSNIES: "111470",
    resolucion: "Resolución Registro calificado 000628 – 30/01/2023",
    vigenciaRegistro: "Vigencia Registro Calificado 7 años",
    periodos: "4",
    creditos: "68",
    modalidad: "100% Virtual",
    planEstudio:
      "/pdfs/FLYER-ACADEMICO-2024-Operacion-de-Sistemas-de-Informacion.pdf",
    tituloDescripcion:
      "El futuro es digital, Conviértete Técnico Profesional en Operación de Sistemas de Información",
    descripcionLarga: `
      La tecnología es lo que mueve a las empresas modernas, y los sistemas de información
      son clave para su éxito. El programa Técnico Profesional en Operación de Sistemas de
      Información te forma para operar, mantener y optimizar sistemas informáticos,
      garantizando la continuidad de los procesos organizacionales.
      <strong>
        Aprenderás a brindar soporte técnico, gestionar sistemas de información y aplicar
        buenas prácticas tecnológicas que fortalecen la toma de decisiones empresariales.
      </strong>
    `,
    porqueEstudiar: [
      "Alta demanda laboral en el sector tecnológico.",
      "Formación orientada a la operación y soporte de sistemas de información.",
      "Oportunidades de empleo en diversos sectores productivos.",
      "Formación práctica y actualizada.",
    ],
    queLograras: [
      "Operar y mantener sistemas de información para mejorar la eficiencia empresarial.",
      "Gestionar la seguridad y el rendimiento de equipos y redes.",
      "Brindar soporte técnico a usuarios y organizaciones.",
      "Resolver problemas técnicos aplicando buenas prácticas tecnológicas.",
    ],
    lograrasDescripcion:
      "Conviértete en Técnico Profesional en Operación de Sistemas de Información y prepárate para ingresar al mundo laboral con habilidades prácticas y alta empleabilidad.",
    trabajaComo: [
      "Soporte técnico en sistemas.",
      "Operador de sistemas de información.",
      "Asistente de sistemas.",
      "Técnico en soporte informático.",
      "Auxiliar de tecnología.",
      "Emprendedor en servicios tecnológicos.",
    ],
  }),



];
