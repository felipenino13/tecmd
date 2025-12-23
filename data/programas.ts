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

const titleProgramaObj = "Técnico Profesional en Programación de Software";

export const PROGRAMAS: Programa[] = [
  {
    slug: slugify(titleProgramaObj),
    title: titleProgramaObj,
    valueProgram:"Programacion de Software",
    description: "Desarrolla código, resuelve problemas y lidera en la transformación social a través del software.",
    heroImage: "/images/Tecnico-Profesional-en-Programacion-de-Software.webp",
    codigoSNIES: "116692",
    resolucion: "",
    vigenciaRegistro: "Vigencia Registro Calificado 7 años",
    periodos:"4",
    creditos:"",
    modalidad:"",
    planEstudio:"/pdfs/FLYER-ACADEMICO-2024-Programación-de-Software.pdf",
    tituloDescripcion: "El futuro es digital, conviértete en Técnico Profesional en Operaciones de Comercio Electrónico.",
    descripcionLarga:"El mundo está en constante evolución, el programa Técnico Profesional en Programación de Software te prepara para desarrollar aplicaciones y sistemas eficientes, optimizar procesos y mejorar la operatividad en distintos entornos. Aprenderás a programar, probar y mantener software con metodologías y herramientas actualizadas, respondiendo a la creciente demanda de soluciones tecnológicas innovadoras.",
    porqueEstudiar: [
       "Alta demanda laboral en el sector tecnológico.",
    ],
    queLograras: [
      "Escribir código eficiente y estructurado para diferentes aplicaciones.",
      "Realizar pruebas de software y corregir errores para mejorar su rendimiento.",
    ],
    lograrasDescripcion: "Conviértete en Técnico Profesional en Programación de Software y prepárate para una carrera llena de oportunidades.",
    trabajaComo: [
      "Desarrollador de aplicaciones móviles.",
      "Desarrollador web.",
      "Tester de software.",
    ]
  },

  {
    slug: "tecnico-profesional-en-operaciones-de-comercio-electronico",
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
  },
];
