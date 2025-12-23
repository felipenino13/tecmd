import Link from "next/link";
import { PROGRAMAS } from "@/data/programas";

export default function ProgramasPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Programas</h1>

      <div className="grid grid-cols-3 gap-6">
        {PROGRAMAS.map((p) => (
          <div key={p.slug} className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.description}</p>

            <Link
              href={`/programas/${p.slug}`}
              className="text-blue-600 underline mt-2 inline-block"
            >
              Ver programa
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
