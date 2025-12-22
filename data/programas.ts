export type Programa = {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  codigoSNIES: string;
  resolucion: string;
  vigenciaRegistro: string;
  periodos: string;
  creditos: string;
  modalidad: string;
  tituloDescripcion: string;
  descripcionLarga: string;
  porqueEstudiar: string[]; 
};

export const PROGRAMAS: Programa[] = [
  {
    slug: "tecnico-profesional-en-programacion-de-software",
    title: "Técnico Profesional en Programación de Software",
    description:
      "Desarrolla código, resuelve problemas y lidera en la transformación social a través del software.",
    heroImage: "/images/Tecnico-Profesional-en-Programacion-de-Software.webp",
    codigoSNIES: "116692",
    resolucion: "",
    vigenciaRegistro: "Vigencia Registro Calificado 7 años",
    periodos:"4",
    creditos:"",
    modalidad:"",
    tituloDescripcion: "El futuro es digital, conviértete en Técnico Profesional en Operaciones de Comercio Electrónico.",
    descripcionLarga:"El mundo está en constante evolución, el programa Técnico Profesional en Programación de Software te prepara para desarrollar aplicaciones y sistemas eficientes, optimizar procesos y mejorar la operatividad en distintos entornos. Aprenderás a programar, probar y mantener software con metodologías y herramientas actualizadas, respondiendo a la creciente demanda de soluciones tecnológicas innovadoras.",
    porqueEstudiar: [
       "Alta demanda laboral en el sector tecnológico.",
    ]
  },

  {
    slug: "tecnico-profesional-en-operaciones-de-comercio-electronico",
    title:
      "Técnico Profesional en Operaciones de Comercio Electrónico",
    description:
      "Gestiona operaciones de ventas online y fortalece negocios en el mundo digital.",
    heroImage: "/images/tecnico-profesional-en-operaciones-de-comercio-electronico.webp",
    codigoSNIES: "",
    resolucion: "Resolución Registro calificado 000631 – 01/25/2024",
    vigenciaRegistro: "Vigencia Registro Calificado 7 años",
    periodos:"",
    creditos:"68",
    modalidad:"100% Virtual",
    tituloDescripcion: "",
    descripcionLarga:"El mundo está en constante evolución, el programa Técnico Profesional en Programación de Software te prepara para desarrollar aplicaciones y sistemas eficientes, optimizar procesos y mejorar la operatividad en distintos entornos. Aprenderás a programar, probar y mantener software con metodologías y herramientas actualizadas, respondiendo a la creciente demanda de soluciones tecnológicas innovadoras.",
    porqueEstudiar: [
       "Alta demanda laboral en el sector tecnológico.",
       "Formación práctica en entornos digitales",
    ]
  },
];
