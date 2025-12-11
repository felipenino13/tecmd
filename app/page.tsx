// app/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Inicio TECMD",
  description: "Landing de TECMD en Next.js",
};

export default function Home() {
  return (
    <>
      <h1>Página de inicio TECMD</h1>
      <Link href="/tecnico-profesional-en-programacion-de-software">
        Técnico Profesional en Programación de Software
      </Link>
    </>
  );
}
