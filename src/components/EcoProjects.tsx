const ecoProjectsList = [
  {
    title: 'Projeto Tamar (Brazil)',
    Descrição: 'Foco: Proteção de tartarugas marinhas Atua na preservação e recuperação das espécies de tartarugas marinhas ameaçadas de extinção no litoral brasileiro. O projeto envolve ações de educação ambiental e manejo sustentável.',
    link: 'tamar.org.br'
  },
  {
    title: 'SOS Mata Atlântica (Brasil)',
    Descrição: 'Foco: Conservação e restauração da Mata Atlântica. Dedica-se ao reflorestamento, monitoramento de rios e conservação da biodiversidade na Mata Atlântica, uma das florestas mais ameaçadas do mundo.',
    link: 'sosma.org.br'
  },
  {
    title: 'Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio)',
    Descrição: 'Foco: Proteção de ecossistemas e recursos naturais. Responsável pela administração das unidades de conservação e proteção das espécies da fauna e flora brasileiras.',
    link: 'icmbio.gov.br'
  },
  {
    title: 'The Nature Conservancy (Global)',
    Descrição: 'Foco: Proteção de ecossistemas e recursos naturais. A The Nature Conservancy trabalha com governos e comunidades locais para restaurar ecossistemas e promover a gestão sustentável de áreas naturais, como florestas, rios e oceanos.',
    link: 'nature.org'
  },
]

function EcoProjects() {
  return (
    <div>
      <ul className="flex xl:overflow-hidden min-w-full gap-5 p-4 overflow-x-scroll">
        {ecoProjectsList.map((el, index) => (
          <li className="min-w-[280px] md:w-[35vw] lg:w-[25vw] border-2 p-4 rounded-lg border-stone-400/50 bg-black/80" key={index}>
            <strong className="text-md md:text-2xl">{el.title}</strong>
            <br />
            <p className="indent-1 text-sm md:text-xl text-justify text-gray-100/90">
              {el.Descrição}
              <br />
                link:
              <a href={`https://${el.link}`} target="_blank" className="hover:underline px-2 text-blue-400 hover:text-blue-500"> 
                {el.link}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EcoProjects;
