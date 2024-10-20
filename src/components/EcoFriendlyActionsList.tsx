import Image from "next/image";
import lessPlastic from "@/public/EcoActions/lessPlatic.png";
import plant from "@/public/EcoActions/plant.png";
import recycling from "@/public/EcoActions/recycling.png";
import saveWater from "@/public/EcoActions/saveWater.png";

const EcoFriendlyActions = [
  { id: '1', src: lessPlastic, text: 'Redução de consumo de plástico', altText: 'Imagem sobre redução de plástico' },
  { id: '2', src: saveWater, text: 'Uso consciente de água', altText: 'Imagem sobre uso consciente de água' },
  { id: '3', src: recycling, text: 'Reciclagem de resíduos', altText: 'Imagem sobre reciclagem de resíduos' },
  { id: '4', src: plant, text: 'Plantio de árvores', altText: 'Imagem sobre plantio de árvores' }
];

const EcoFriendlyActionsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {EcoFriendlyActions.map(action => (
        <div 
          key={action.id}
          className="relative flex justify-center items-center rounded-lg 
                     w-full h-[50vh] overflow-hidden"
        >
          <Image 
            src={action.src} 
            alt={action.altText} 
            layout="fill" 
            objectFit="cover" 
            className="absolute inset-0 transition duration-300 ease-in-out" 
          />
          <h5 className="relative z-10 text-stone-300 text-2xl md:text-3xl p-2 text-center rounded-lg">
            {action.text}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default EcoFriendlyActionsList;
