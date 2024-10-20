import Image from "next/image";
import mainBG from "@/public/backgrounds/main-bg.png";
import noon from "@/public/backgrounds/noon.png";
import sunSet from "@/public/backgrounds/sunset.png";
import night from "@/public/backgrounds/night.png";
import leefs from "@/public/leefs.png";
import EcoFriendlyActionsList from "@/components/EcoFriendlyActionsList";
import EcoProjects from "@/components/EcoProjects";

function Home() {
  return (
    <div>
      <main
        style={{ backgroundImage: `url(${mainBG.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className="relative w-full h-[50vh] md:h-[90vh] text-slate-300 flex flex-col justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="relative z-0 px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-7xl font-bold opacity-90 z-0">
            SALVE A NATUREZA
          </h1>
        </div>

        <div className="absolute w-full h-[40vh] md:h-[65vh] top-[10vh] md:top-[28vh] z-10 overflow-hidden">
          <Image src={leefs} layout="fill" objectFit="cover" alt="folhas da selva" priority className="object-cover" />
        </div>

        <div className="relative z-20 px-6 md:px-12 lg:px-24">
          <h2 className="text-md md:text-4xl mt-4 max-w-[800px]">
            Conecte-se com o equilíbrio natural e inspire sua jornada sustentável.
          </h2>
        </div>
      </main>

      <section className="bg-[#8DAB35] p-2 indent-2 text-sm text-justify md:text-xl">
        <p className="text-stone-200">A preservação da natureza envolve práticas e políticas que visam proteger os recursos naturais da Terra. Isso inclui a conservação de florestas, rios, mares, fauna e flora, buscando garantir que esses recursos permaneçam intactos para as futuras gerações. O equilíbrio dos ecossistemas é essencial para a sobrevivência de todas as formas de vida no planeta, e a preservação ambiental é um dos pilares para manter esse equilíbrio.</p>
      </section>
      <section
        style={{
          backgroundImage: `url(${noon.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="p-4"
      >
        <EcoFriendlyActionsList />
      </section>
      <section
        style={{
          backgroundImage: `url(${sunSet.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="p-4 md:text-2xl min-h-[50vh]"
      >
        <h3 className="p-4 font-bold">
          Projetos sobre preservação da natureza
        </h3>
        <EcoProjects />
      </section>
      <footer
        className="bg-cover bg-center text-white p-8"
        style={{
          backgroundImage: `url(${night.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <p><strong>Localização:</strong> Rua exemplo 123</p>
            <p><strong>Email:</strong> <a href="mailto:exemplo@gmail.com" className="text-white">exemplo@gmail.com</a></p>
            <p><strong>Telefone:</strong> (12) 3456-789</p>
          </div>

          <div>
            <p><strong>Autor:</strong> Antoniel Zeferino de Melo</p>
            <p><strong>Email:</strong> <a href="mailto:antonielzeferino0@gmail.com" className="text-white">antonielzeferino0@gmail.com</a></p>
            <p><strong>Contato:</strong> (86) 99540-7002</p>
          </div>

          <div>
            <p><strong>Me siga nas minhas redes sociais:</strong></p>
            <a href="https://www.linkedin.com" target="_blank" className="text-white mr-2">LinkedIn</a>
            <a href="https://github.com" target="_blank" className="text-white mr-2">GitHub</a>
            <a href="https://www.instagram.com" target="_blank" className="text-white">Instagram</a>
          </div>
        </div>

        <p className="mt-5 text-sm">&copy; 2024 Antoniel Zeferino de Melo. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
