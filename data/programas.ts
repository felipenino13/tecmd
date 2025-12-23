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

  makePrograma({
  title: "Técnico Profesional en Procesos de Mercadeo Digital",
  valueProgram: "Procesos de Mercadeo Digital",
  description:
    "Impulsa marcas en el mundo digital creando estrategias de mercadeo efectivas.",
  heroImage:
    "/images/tecnico-profesional-en-procesos-de-mercadeo-digital.webp",
  codigoSNIES: "",
  resolucion: "",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Procesos-de-Mercadeo-Digital.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Procesos de Mercadeo Digital",
  descripcionLarga: `
    El crecimiento del mercado digital exige profesionales capaces de crear,
    ejecutar y analizar estrategias de mercadeo en entornos digitales.
    El programa Técnico Profesional en Procesos de Mercadeo Digital te forma
    para apoyar la planeación, ejecución y evaluación de campañas digitales,
    fortaleciendo la visibilidad de marcas y productos en diferentes canales.
    <strong>
      Aprenderás a desarrollar contenidos digitales, gestionar redes sociales,
      analizar métricas y apoyar procesos de publicidad digital orientados a
      resultados.
    </strong>
  `,
  porqueEstudiar: [
    "Alta demanda en el mercado laboral por la digitalización de las empresas.",
    "Desarrollo de habilidades en estrategias digitales y marketing online.",
    "Oportunidades de empleo en distintos sectores económicos.",
    "Formación práctica y actualizada en mercadeo digital.",
  ],
  queLograras: [
    "Desarrollar estrategias de mercadeo digital alineadas a objetivos empresariales.",
    "Gestionar contenidos para redes sociales y plataformas digitales.",
    "Apoyar la ejecución de campañas de publicidad digital.",
    "Analizar métricas y resultados para la toma de decisiones.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Procesos de Mercadeo Digital y prepárate para ingresar al mundo laboral con competencias digitales altamente demandadas.",
  trabajaComo: [
    "Asistente de mercadeo digital.",
    "Gestor de redes sociales.",
    "Auxiliar de publicidad digital.",
    "Community manager.",
    "Asistente de marketing.",
    "Emprendedor digital.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Operaciones Contables y Financieras Digitales",
  valueProgram: "Operaciones Contables y Financieras Digitales",
  description:
    "Aplica procesos contables y financieros digitales que fortalecen la gestión y toma de decisiones en las organizaciones.",
  heroImage:
    "/images/tecnico-profesional-en-operaciones-contables-y-financieras-digitales.webp",
  codigoSNIES: "116695",
  resolucion: "Resolución Registro calificado 003332 – 21/03/2024",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Operaciones-Contables-y-Financieras-Digitales.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Operaciones Contables y Financieras Digitales",
  descripcionLarga: `
    Las organizaciones requieren profesionales capaces de gestionar procesos
    contables y financieros apoyados en herramientas digitales.
    El programa Técnico Profesional en Operaciones Contables y Financieras
    Digitales te forma para registrar, analizar y apoyar la gestión de la
    información contable y financiera, contribuyendo al control y la
    toma de decisiones en las empresas.
    <strong>
      Aprenderás a aplicar procesos contables, manejar información financiera,
      apoyar la gestión presupuestal y utilizar herramientas digitales
      en entornos administrativos y financieros.
    </strong>
  `,
  porqueEstudiar: [
    "Alta demanda laboral en áreas contables y financieras.",
    "Formación orientada al uso de herramientas digitales.",
    "Oportunidades de empleo en empresas de distintos sectores.",
    "Formación práctica y actualizada en procesos contables y financieros.",
  ],
  queLograras: [
    "Registrar operaciones contables y financieras de manera precisa.",
    "Apoyar la elaboración de informes contables y financieros.",
    "Aplicar procesos de control financiero y presupuestal.",
    "Utilizar herramientas digitales para la gestión contable.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Operaciones Contables y Financieras Digitales y prepárate para desempeñarte en áreas administrativas, contables y financieras.",
  trabajaComo: [
    "Auxiliar contable.",
    "Asistente financiero.",
    "Auxiliar administrativo.",
    "Asistente de contabilidad.",
    "Auxiliar de gestión financiera.",
    "Emprendedor en servicios contables.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Mejoramiento de Procesos Industriales",
  valueProgram: "Mejoramiento de Procesos Industriales",
  description:
    "Optimiza procesos industriales, reduce costos y mejora la calidad en entornos productivos.",
  heroImage:
    "/images/tecnico-profesional-en-mejoramiento-de-procesos-industriales.webp",
  codigoSNIES: "",
  resolucion: "",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Mejoramiento-de-Procesos-Industriales.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Mejoramiento de Procesos Industriales",
  descripcionLarga: `
    Las organizaciones requieren profesionales capaces de analizar, optimizar
    y mejorar sus procesos productivos para ser más eficientes y competitivas.
    El programa Técnico Profesional en Mejoramiento de Procesos Industriales
    te forma para identificar oportunidades de mejora, aplicar herramientas
    de calidad y apoyar la optimización de procesos en distintos contextos
    industriales y organizacionales.
    <strong>
      Aprenderás a utilizar metodologías de mejora continua, apoyar procesos
      productivos y contribuir a la eficiencia, calidad y productividad
      de las organizaciones.
    </strong>
  `,
  porqueEstudiar: [
    "Alta demanda de profesionales en procesos industriales y productivos.",
    "Formación orientada a la optimización y mejora continua.",
    "Aplicación de herramientas de calidad y productividad.",
    "Oportunidades laborales en distintos sectores industriales.",
  ],
  queLograras: [
    "Analizar procesos industriales para identificar oportunidades de mejora.",
    "Aplicar herramientas técnicas para reducir costos y aumentar eficiencia.",
    "Apoyar la implementación de procesos de mejora continua.",
    "Contribuir al aseguramiento de la calidad en procesos productivos.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Mejoramiento de Procesos Industriales y prepárate para desempeñarte en entornos productivos con alta demanda laboral.",
  trabajaComo: [
    "Consultor de mejora continua.",
    "Técnico en automatización industrial.",
    "Planificador de producción.",
    "Coordinador de calidad.",
    "Técnico en procesos industriales.",
    "Analista de procesos.",
    "Emprendedor en el sector industrial.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Montaje y Mantenimiento de Energías Renovables",
  valueProgram: "Montaje y Mantenimiento de Energias Renovables",
  description:
    "Instala y mantiene sistemas de energías renovables promoviendo la sostenibilidad y el cuidado del medio ambiente.",
  heroImage:
    "/images/tecnico-profesional-en-montaje-y-mantenimiento-de-energias-renovables.webp",
  codigoSNIES: "116694",
  resolucion: "Resolución Registro calificado 003232 – 20/03/2024",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Montaje-y-Mantenimiento-de-Energias-Renovables.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Montaje y Mantenimiento de Energías Renovables",
  descripcionLarga: `
    El crecimiento de las energías renovables ha generado una alta demanda
    de profesionales capacitados para el montaje, operación y mantenimiento
    de sistemas energéticos sostenibles.
    El programa Técnico Profesional en Montaje y Mantenimiento de Energías
    Renovables te forma para instalar, mantener y supervisar sistemas de
    generación de energía limpia en diferentes contextos.
    <strong>
      Aprenderás a trabajar con sistemas solares, aplicar normas de seguridad,
      realizar mantenimientos preventivos y correctivos, y contribuir al
      desarrollo sostenible.
    </strong>
  `,
  porqueEstudiar: [
    "Alta demanda de profesionales en el sector de energías renovables.",
    "Contribución al cuidado del medio ambiente y la sostenibilidad.",
    "Formación orientada al montaje y mantenimiento de sistemas energéticos.",
    "Oportunidades laborales en proyectos de energía limpia.",
  ],
  queLograras: [
    "Instalar sistemas de energía renovable de acuerdo con normas técnicas.",
    "Realizar mantenimiento preventivo y correctivo de sistemas energéticos.",
    "Aplicar protocolos de seguridad en entornos de trabajo.",
    "Apoyar proyectos de generación de energía sostenible.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Montaje y Mantenimiento de Energías Renovables y prepárate para desempeñarte en un sector con alta proyección laboral.",
  trabajaComo: [
    "Técnico en energías renovables.",
    "Instalador de sistemas solares.",
    "Técnico de mantenimiento energético.",
    "Asistente en proyectos de energía renovable.",
    "Operador de sistemas energéticos.",
    "Emprendedor en servicios de energía renovable.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Procesos de Cloud Computing",
  valueProgram: "Procesos de Cloud Computing",
  description:
    "Innova y desarrolla servicios digitales basados en modelos de escala global.",
  heroImage:
    "/images/tecnico-profesional-en-procesos-de-cloud-computing.webp",
  codigoSNIES: "111628",
  resolucion: "Resolución Registro calificado 9397 – 07/06/2023",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Procesos-de-Cloud-Computing.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Procesos de Cloud Computing",
  descripcionLarga: `
    El programa Técnico Profesional en Procesos de Cloud Computing te permite
    desarrollar habilidades para administrar y configurar infraestructura en la nube,
    optimizando procesos empresariales y aumentando la disponibilidad de los servicios
    digitales. Aprenderás a gestionar servicios de software, plataformas y almacenamiento
    en la nube, garantizando escalabilidad, seguridad y continuidad del negocio en
    entornos digitales en constante evolución.
    <strong>
      Fortalece tu perfil en tecnologías cloud y prepárate para un sector con alta
      demanda de profesionales capaces de operar servicios digitales a escala.
    </strong>
  `,
  porqueEstudiar: [
    "Alta demanda de profesionales en tecnologías de la información y computación en la nube.",
    "Desarrollo de competencias clave en administración de infraestructura digital.",
    "Aplicación de estrategias de escalabilidad y seguridad en la nube.",
    "Oportunidades laborales en sectores que requieren soluciones tecnológicas escalables.",
  ],
  queLograras: [
    "Administrar y configurar servicios de software, plataformas e infraestructura en la nube.",
    "Implementar estrategias de continuidad del negocio mediante soluciones cloud.",
    "Aplicar procedimientos de seguridad y accesibilidad en plataformas digitales.",
    "Gestionar contenidos y almacenamiento de datos en entornos en la nube.",
    "Dar soporte y disponibilidad, ética y compromiso en la administración de servicios digitales.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Procesos de Cloud Computing y prepárate para una carrera con alta demanda y crecimiento en tecnología.",
  trabajaComo: [
    "Analista web.",
    "Analista en seguridad de red.",
    "Asistente en infraestructura de red.",
    "Asistente de administración de contenidos.",
    "Técnico de software web.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Construcción y Operación de Sitios Web",
  valueProgram: "Construccion y Operacion de Sitios Web",
  description:
    "Aprende a construir y mantener sitios web seguros, funcionales y adaptables a las necesidades del mundo digital.",
  heroImage:
    "/images/tecnico-profesional-en-construccion-y-operacion-de-sitios-web.webp",
  codigoSNIES: "111504",
  resolucion: "Resolución Registro calificado 002375 – 16/02/2023",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Construccion-y-Operacion-de-Sitios-Web.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Construcción y Operación de Sitios Web",
  descripcionLarga: `
    El entorno digital exige sitios web que sean seguros, rápidos y fáciles de usar.
    El programa Técnico Profesional en Construcción y Operación de Sitios Web te
    forma para construir, administrar y mantener plataformas web funcionales,
    adaptables y orientadas a las necesidades del mercado digital.
    <strong>
      Aprenderás a desarrollar sitios web, administrar contenidos, garantizar la
      seguridad y optimizar el rendimiento de plataformas digitales en distintos
      entornos.
    </strong>
  `,
  porqueEstudiar: [
    "Alta demanda laboral en el sector tecnológico.",
    "Desarrollo de habilidades en diseño, mantenimiento y operación web.",
    "Oportunidades en múltiples industrias digitales.",
    "Formación práctica orientada a las necesidades del mercado.",
  ],
  queLograras: [
    "Publicar y administrar sitios web en servidores y redes internas.",
    "Configurar bases de datos de forma segura y eficiente.",
    "Implementar soluciones web adaptables a múltiples dispositivos.",
    "Ejecutar operaciones de respaldo y recuperación de datos.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Construcción y Operación de Sitios Web y prepárate para una carrera con alta proyección en el mundo digital.",
  trabajaComo: [
    "Operador web.",
    "Técnico de soporte de páginas web.",
    "Webmaster.",
    "Emprendedor digital.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Servicios de Seguridad Informática",
  valueProgram: "Servicios de Seguridad Informatica",
  description:
    "Aprende a detectar vulnerabilidades, diseñar ciberdefensas y garantizar la seguridad de la información en las empresas.",
  heroImage:
    "/images/tecnico-profesional-en-servicios-de-seguridad-informatica.webp",
  codigoSNIES: "116692",
  resolucion: "",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Servicios-de-Seguridad-Informatica.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Servicios de Seguridad Informática",
  descripcionLarga: `
    La información es uno de los activos más valiosos para cualquier organización,
    y su protección es fundamental en los entornos digitales actuales.
    El programa Técnico Profesional en Servicios de Seguridad Informática te
    forma para identificar riesgos, prevenir amenazas y proteger los sistemas
    de información frente a ataques, accesos no autorizados y vulnerabilidades.
    <strong>
      Aprenderás a aplicar medidas de seguridad informática, analizar incidentes,
      gestionar controles de protección y contribuir a la confidencialidad,
      integridad y disponibilidad de la información.
    </strong>
  `,
  porqueEstudiar: [
    "Alta demanda laboral en ciberseguridad.",
    "Desarrollo de competencias técnicas y éticas.",
    "Oportunidades en múltiples sectores económicos.",
    "Formación práctica adaptada a la normativa vigente.",
  ],
  queLograras: [
    "Diagnosticar y analizar vulnerabilidades de seguridad.",
    "Diseñar e implementar sistemas de protección de información.",
    "Detectar y gestionar incidentes de ciberseguridad.",
    "Aplicar protocolos de seguridad y protección de datos.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Servicios de Seguridad Informática y prepárate para una carrera con alta demanda en el sector tecnológico.",
  trabajaComo: [
    "Técnico de seguridad informática.",
    "Monitor de sistemas informáticos.",
    "Técnico en sistemas informáticos.",
    "Operar y mantener soluciones de protección del sistema de red.",
    "Aplicar herramientas de diagnóstico de seguridad de la información.",
    "Emprendedor en servicios tecnológicos.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Aseguramiento y Procesamiento de Bases de Datos",
  valueProgram: "Aseguramiento y Procesamiento de Bases de Datos",
  description:
    "Asegura, procesa y gestiona bases de datos de forma eficiente y confiable.",
  heroImage:
    "/images/tecnico-profesional-en-aseguramiento-y-procesamiento-de-bases-de-datos.webp",
  codigoSNIES: "111503",
  resolucion: "Resolución Registro calificado 002374 – 16/02/2023",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Aseguramiento-y-Procesamiento-de-Bases-de-Datos.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Aseguramiento y Procesamiento de Bases de Datos",
  descripcionLarga: `
    La gestión de datos es esencial para la toma de decisiones en cualquier
    organización. El programa Técnico Profesional en Aseguramiento y
    Procesamiento de Bases de Datos te forma para administrar, procesar y
    proteger información, garantizando la integridad, disponibilidad y
    confidencialidad de los datos en entornos digitales.
    <strong>
      Aprenderás a aplicar buenas prácticas en administración de bases de datos,
      seguridad de la información y procesamiento eficiente de datos para apoyar
      la operación y el crecimiento de las organizaciones.
    </strong>
  `,
  porqueEstudiar: [
    "Alta demanda de profesionales en análisis y gestión de datos.",
    "Fortalecimiento de competencias en manejo de información.",
    "Formación en seguridad, análisis y administración de datos.",
    "Enfoque práctico para escenarios reales.",
  ],
  queLograras: [
    "Asegurar la integridad y disponibilidad de la información.",
    "Administrar bases de datos bajo estándares técnicos.",
    "Aplicar herramientas de análisis y procesamiento de datos.",
    "Apoyar la toma de decisiones mediante el manejo eficiente de información.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Aseguramiento y Procesamiento de Bases de Datos y prepárate para desempeñarte en un área estratégica para las organizaciones.",
  trabajaComo: [
    "Auxiliar de bases de datos.",
    "Programador de bases de datos.",
    "Administrador de bases de datos.",
    "Implementar y controlar sistemas de seguridad de la información.",
    "Operador de bases de datos de acuerdo con estándares y marcos de referencia.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Desarrollo de Aplicaciones Web Móviles",
  valueProgram: "Desarrollo de Aplicaciones Web Moviles",
  description:
    "Diseña y desarrolla apps web móviles funcionales, seguras y pensadas en el usuario.",
  heroImage:
    "/images/tecnico-profesional-en-desarrollo-de-aplicaciones-web-moviles.webp",
  codigoSNIES: "111496",
  resolucion: "Resolución Registro calificado 002191 – 13/02/2023",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Desarrollo-de-Aplicaciones-Web-Moviles.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Desarrollo de Aplicaciones Web Móviles",
  descripcionLarga: `
    La industria tecnológica demanda profesionales capaces de diseñar, construir
    y mantener aplicaciones web móviles. El programa Técnico Profesional en
    Desarrollo de Aplicaciones Web Móviles te forma para crear soluciones digitales
    adaptadas a múltiples dispositivos, aplicando buenas prácticas de desarrollo,
    seguridad y experiencia de usuario.
    <strong>
      Aprenderás a construir apps funcionales, optimizar su rendimiento, integrar
      servicios y mantener una estructura moderna enfocada en el usuario.
    </strong>
  `,
  porqueEstudiar: [
    "Alta demanda en la industria tecnológica.",
    "Formación orientada a la práctica.",
    "Desarrollo de habilidades en diseño y programación.",
    "Preparación para entornos multiplataforma.",
  ],
  queLograras: [
    "Desarrollar aplicaciones web móviles con enfoque en usabilidad.",
    "Construir apps funcionales, dinámicas y escalables.",
    "Aplicar buenas prácticas en experiencia de usuario.",
    "Implementar plataformas web con infraestructura moderna.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Desarrollo de Aplicaciones Web Móviles y prepárate para ingresar a un sector con alta demanda laboral.",
  trabajaComo: [
    "Técnico programador de sistemas de información.",
    "Técnico en asistencia y soporte al usuario de tecnología de la información y las comunicaciones.",
    "Técnico de la web.",
    "Técnico de redes.",
    "Emprendedor.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Operaciones de Comercio Electrónico",
  valueProgram: "Operaciones de Comercio Electronico",
  description:
    "Gestiona operaciones de ventas online y fortalece negocios en el mundo digital.",
  heroImage:
    "/images/tecnico-profesional-en-operaciones-de-comercio-electronico.webp",
  codigoSNIES: "116692",
  resolucion: "",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Operaciones-de-Comercio-Electronico.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Operaciones de Comercio Electrónico",
  descripcionLarga: `
    El comercio electrónico se ha convertido en un pilar fundamental para las
    empresas que desean expandir sus mercados y mejorar sus procesos de venta.
    El programa Técnico Profesional en Operaciones de Comercio Electrónico te
    forma para gestionar plataformas digitales, coordinar procesos de venta
    online y mejorar la experiencia del cliente en entornos virtuales.
    <strong>
      Aprenderás a implementar estrategias de e-commerce, analizar datos de
      ventas, optimizar procesos de distribución y apoyar la operación de
      negocios digitales.
    </strong>
  `,
  porqueEstudiar: [
    "Crecimiento constante del comercio electrónico.",
    "Formación práctica en entornos digitales.",
    "Alta empleabilidad en empresas y emprendimientos.",
    "Desarrollo de habilidades en ventas e internacionalización.",
  ],
  queLograras: [
    "Gestionar ventas y operaciones en plataformas digitales.",
    "Aplicar estrategias de ventas y atención al cliente online.",
    "Optimizar procesos de distribución y logística en e-commerce.",
    "Analizar datos para mejorar la experiencia de compra.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Operaciones de Comercio Electrónico y prepárate para desempeñarte en un sector en constante crecimiento.",
  trabajaComo: [
    "Agente de ventas electrónicas.",
    "Asistente de comercio electrónico.",
    "Auxiliar de marketing y ventas electrónicas.",
    "Asesor de negocios digitales.",
    "Operador de contenidos.",
    "Asistente de información.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Operaciones Fintech",
  valueProgram: "Operaciones Fintech",
  description:
    "Gestiona operaciones financieras digitales y conecta empresas con las tendencias del ecosistema Fintech.",
  heroImage:
    "/images/tecnico-profesional-en-operaciones-fintech.webp",
  codigoSNIES: "116693",
  resolucion: "Resolución Registro calificado 002001 – 28/02/2024",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Operaciones-Fintech.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Operaciones Fintech",
  descripcionLarga: `
    El crecimiento de las tecnologías financieras ha transformado la manera
    en que las organizaciones gestionan pagos, servicios y productos financieros.
    El programa Técnico Profesional en Operaciones Fintech te forma para operar
    plataformas financieras digitales, apoyar procesos de pagos electrónicos,
    analizar datos financieros y aplicar soluciones tecnológicas en el sector
    financiero.
    <strong>
      Aprenderás a gestionar servicios Fintech, analizar información financiera,
      apoyar procesos de transformación digital y participar en la innovación
      de servicios financieros.
    </strong>
  `,
  porqueEstudiar: [
    "Crecimiento acelerado de las tecnologías financieras.",
    "Desarrollo de competencias en banca, startups y Fintech.",
    "Formación práctica y orientada a la innovación.",
    "Oportunidad de impacto en mercados emergentes.",
  ],
  queLograras: [
    "Operar y gestionar plataformas de servicios financieros digitales.",
    "Implementar estrategias de gestión de recursos tecnológicos y financieros.",
    "Analizar y aplicar tendencias Fintech en diferentes sectores.",
    "Brindar soporte a procesos de transformación financiera.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Operaciones Fintech y prepárate para desempeñarte en un sector financiero digital en constante crecimiento.",
  trabajaComo: [
    "Auditor financiero.",
    "Gestor de operaciones Fintech.",
    "Asesor de estrategias financieras.",
    "Asistente de auditoría en Fintech.",
    "Emprendedor.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Procesos de Inteligencia de Negocios",
  valueProgram: "Procesos de Inteligencia de Negocios",
  description:
    "Aprende a analizar y transformar datos en información de valor económico y estratégico para las empresas.",
  heroImage:
    "/images/tecnico-profesional-en-procesos-de-inteligencia-de-negocios.webp",
  codigoSNIES: "116968",
  resolucion: "Resolución Registro calificado 04669 – 28/02/2024",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Procesos-de-Inteligencia-de-Negocios.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Procesos de Inteligencia de Negocios",
  descripcionLarga: `
    Las organizaciones necesitan tomar decisiones basadas en datos para ser
    competitivas en mercados cada vez más dinámicos. El programa Técnico
    Profesional en Procesos de Inteligencia de Negocios te forma para recopilar,
    analizar y transformar datos en información estratégica que apoye la toma
    de decisiones empresariales.
    <strong>
      Aprenderás a utilizar herramientas de análisis y visualización de datos,
      interpretar información clave y apoyar procesos estratégicos en distintos
      contextos organizacionales.
    </strong>
  `,
  porqueEstudiar: [
    "Alta demanda de perfiles con pensamiento analítico.",
    "Formación práctica en análisis de datos y business intelligence.",
    "Uso de tecnologías aplicadas al entorno empresarial.",
    "Posibilidades de crecimiento en múltiples sectores.",
  ],
  queLograras: [
    "Aplicar herramientas de análisis y visualización de datos.",
    "Interpretar información para apoyar procesos organizacionales.",
    "Apoyar la toma de decisiones estratégicas.",
    "Convertir datos en reportes y análisis de desempeño.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Procesos de Inteligencia de Negocios y prepárate para aportar valor estratégico a las organizaciones mediante el análisis de datos.",
  trabajaComo: [
    "Auxiliar de inteligencia de negocios.",
    "Analista de datos.",
    "Auxiliar de bases de datos.",
    "Técnico en sistemas de información.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Relacionamiento Digital con Clientes Enfoque CRM",
  valueProgram: "Relacionamiento Digital con Clientes Enfoque CRM",
  description:
    "Aprende a gestionar la relación entre empresas y clientes en entornos digitales mediante estrategias de CRM.",
  heroImage:
    "/images/tecnico-profesional-en-relacionamiento-digital-con-clientes-enfoque-crm.webp",
  codigoSNIES: "111497",
  resolucion: "Resolución Registro calificado 002192 – 13/02/2023",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Relacionamiento-Digital-con-Clientes-CRM.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Relacionamiento Digital con Clientes Enfoque CRM",
  descripcionLarga: `
    En un mundo donde los clientes son el centro de la estrategia empresarial,
    las organizaciones requieren profesionales capaces de gestionar relaciones
    digitales de forma eficiente. El programa Técnico Profesional en
    Relacionamiento Digital con Clientes Enfoque CRM te forma para administrar
    plataformas CRM, brindar soporte digital multicanal y fortalecer la
    fidelización y la experiencia del cliente.
    <strong>
      Aprenderás a gestionar la experiencia del cliente, analizar interacciones,
      utilizar herramientas CRM y apoyar estrategias de relacionamiento en
      entornos digitales.
    </strong>
  `,
  porqueEstudiar: [
    "Alta empleabilidad en áreas de servicio y atención digital.",
    "Formación práctica en plataformas CRM.",
    "Enfoque en experiencia del cliente y multicanalidad.",
    "Perfil adaptable a múltiples industrias.",
  ],
  queLograras: [
    "Atender y gestionar relaciones con clientes en canales digitales.",
    "Utilizar herramientas CRM para seguimiento y soporte.",
    "Resolver necesidades y solicitudes de clientes de forma eficiente.",
    "Apoyar estrategias de fidelización y retención de usuarios.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Relacionamiento Digital con Clientes Enfoque CRM y prepárate para desempeñarte en áreas clave de experiencia y servicio al cliente.",
  trabajaComo: [
    "Auxiliar de ventas y servicios especializados.",
    "Técnico en asistencia y soporte al usuario de tecnología de la información y las comunicaciones.",
    "Auxiliar de gestión de PQRS.",
    "Auxiliar de plataforma CRM.",
    "Emprendedor.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Asesoría Comercial para Soluciones Digitales",
  valueProgram: "Asesoria Comercial para Soluciones Digitales",
  description:
    "Desarrolla habilidades para asesorar y vender soluciones digitales adaptadas a las necesidades del mercado actual.",
  heroImage:
    "/images/tecnico-profesional-en-asesoria-comercial-para-soluciones-digitales.webp",
  codigoSNIES: "111505",
  resolucion: "111505",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Asesoria-Comercial-para-Soluciones-Digitales.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Asesoría Comercial para Soluciones Digitales",
  descripcionLarga: `
    La transformación digital ha creado nuevas formas de vender y conectar
    productos tecnológicos con las necesidades de las personas. El programa
    Técnico Profesional en Asesoría Comercial para Soluciones Digitales te
    capacita para asesorar, presentar y gestionar soluciones digitales en
    entornos de alta competitividad, combinando habilidades técnicas y
    comerciales.
    <strong>
      Aprenderás a identificar necesidades del cliente, proponer soluciones
      tecnológicas, apoyar procesos de preventa y postventa, y fortalecer la
      relación comercial en entornos digitales.
    </strong>
  `,
  porqueEstudiar: [
    "Demanda creciente de asesores en tecnología.",
    "Capacitación práctica en soluciones digitales.",
    "Habilidades para el mercado comercial y tecnológico.",
    "Preparación para emprendimiento y ventas consultivas.",
  ],
  queLograras: [
    "Asesorar en la venta de productos y servicios digitales.",
    "Identificar necesidades del cliente y proponer soluciones tecnológicas.",
    "Apoyar procesos de preventa y postventa.",
    "Fortalecer la gestión comercial en entornos digitales.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Asesoría Comercial para Soluciones Digitales y prepárate para desempeñarte en áreas comerciales del sector tecnológico.",
  trabajaComo: [
    "Vendedor de soluciones digitales.",
    "Técnico comercial en tecnología de la información y las comunicaciones.",
    "Emprendedor o propietario de una empresa.",
    "Ejecutivo de ventas consultivas.",
    "Asesor comercial de servicios tecnológicos.",
  ],
}),

makePrograma({
  title: "Técnico Profesional en Creación de Contenidos Digitales",
  valueProgram: "Creacion de Contenidos Digitales",
  description:
    "Aprende a crear contenidos visuales, escritos y multimedia que conecten con audiencias digitales.",
  heroImage:
    "/images/tecnico-profesional-en-creacion-de-contenidos-digitales.webp",
  codigoSNIES: "116696",
  resolucion: "Resolución Registro calificado 003710 – 03/04/2024",
  vigenciaRegistro: "Vigencia Registro Calificado 7 años",
  periodos: "4",
  creditos: "65",
  modalidad: "100% Virtual",
  planEstudio:
    "/pdfs/FLYER-ACADEMICO-2024-Creacion-de-Contenidos-Digitales.pdf",
  tituloDescripcion:
    "El futuro es digital, conviértete en Técnico Profesional en Creación de Contenidos Digitales",
  descripcionLarga: `
    Las marcas, organizaciones y creadores necesitan comunicarse de forma
    creativa y estratégica en entornos digitales. El programa Técnico Profesional
    en Creación de Contenidos Digitales te forma para diseñar, producir y gestionar
    contenidos visuales, escritos y multimedia orientados a diferentes plataformas
    digitales.
    <strong>
      Aprenderás a crear contenido creativo y estratégico, gestionar redes
      sociales, producir piezas audiovisuales y desarrollar campañas digitales
      alineadas con los objetivos de comunicación.
    </strong>
  `,
  porqueEstudiar: [
    "Demanda creciente en redes sociales y marketing digital.",
    "Formación práctica en diseño, agencias y empresas.",
    "Creatividad aplicada a entornos digitales.",
    "Capacitación con herramientas actualizadas.",
  ],
  queLograras: [
    "Crear contenido digital para múltiples formatos y plataformas.",
    "Gestionar redes sociales con visión estratégica.",
    "Diseñar mensajes creativos orientados a audiencias digitales.",
    "Entender el comportamiento digital y apoyar campañas de comunicación.",
  ],
  lograrasDescripcion:
    "Conviértete en Técnico Profesional en Creación de Contenidos Digitales y prepárate para desarrollar una carrera creativa en el ecosistema digital.",
  trabajaComo: [
    "Apoyo en la gestión de contenidos de marketing.",
    "Gestor de redes sociales.",
    "Creador de contenido multimedia.",
    "Freelancer digital.",
    "Emprendedor.",
  ],
}),


];
