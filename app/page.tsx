export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="flex flex-col justify-center items-center text-center h-screen">
        <h1 className="text-5xl font-bold">
          Suciana Nur Arifandy
        </h1>

        <p className="mt-4 text-gray-400">
          Image Editor & Visual Designer
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#portfolio" className="bg-white text-black px-6 py-2 rounded-xl">
            Portfolio
          </a>
          <a href="#contact" className="border px-6 py-2 rounded-xl">
            Hire Me
          </a>
        </div>
      </section>

    </main>
  );
}