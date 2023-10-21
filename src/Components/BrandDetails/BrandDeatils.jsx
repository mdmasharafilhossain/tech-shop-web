import { useLoaderData, useParams } from "react-router-dom";

const BrandDeatils = () => {
    const CardsInfo = useLoaderData();
    console.log(CardsInfo);
    const{name} = useParams();
    
    const card = CardsInfo.find(img => img.name === name);
    return (
        <div className="mt-60">
           <div className="flex  mx-20 gap-20">
              <div>
              <img  className="h-[550px] w-[2000px] " src={card.Image} alt="" />
              </div>
              <div>
                  <h1 className="text-4xl font-bold  text-green-500 mb-5">{card.name}</h1>
                  <h1 className="text-justify  text-xl mb-5">{card.Des}</h1>
                  <p className="text-4xl font-bold  text-green-500">$ {card.Price} Only</p>

              </div>
           </div>
        </div>
    );
};

export default BrandDeatils;