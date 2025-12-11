// app/page.tsx

export const metadata = {
  title: "Inicio TECMD",
  description: "Landing de TECMD en Next.js",
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>
        Página de inicio TECMD
      </h1>
    </main>
  );
}
