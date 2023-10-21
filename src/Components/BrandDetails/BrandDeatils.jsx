import { useLoaderData, useParams } from "react-router-dom";

const BrandDeatils = () => {
    const CardsInfo = useLoaderData();
    console.log(CardsInfo);
    const{name} = useParams();
    
    const card = CardsInfo.find(img => img.name === name);
    return (
        <div className="mt-[600px] lg:mt-60">
           <div className="flex flex-col md:flex-row lg:flex-row  mx-20 gap-20">
              <div>
              <img  className="h-[550px] w-[3000px] " src={card.Image} alt="" />
              </div>
              <div>
                  <h1 className="text-4xl font-bold  text-green-500  mt-32 mb-5">{card.name}</h1>
                  <h1 className="text-justify  text-xl mb-5">{card.Des}</h1>

                  <p className="text-4xl font-bold  text-green-500">$ {card.Price} Only</p>
                  <button 
                                
                                className="btn btn-primary px-[150px] w-full bg-green-500 hover:bg-green-600 text-white border-none mt-20">Add To Curt</button>

              </div>
           </div>
        </div>
    );
};

export default BrandDeatils;