import { useEffect, useState } from "react";
import TechBrand from "../TechBrand/TechBrand";


const BrandNames = () => {
    const[brand,setBrand] = useState([])
    useEffect(()=>{
     fetch('/brand.json')
     .then(res =>res.json())
     .then(data =>setBrand(data))


    },[])
    return (
        <div className="pt-16 bg-gray-100 ">
           <h2 className="font-bold border bg-green-100 text-green-500  text-5xl text-center mt-16 py-5 mb-10">Popular Brand Products</h2> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-14 gap-10 pb-10 container mx-auto">
                    {
                        brand.map(card=><TechBrand key={card.id} card={card}></TechBrand>)
                    }
                </div>
        </div>
    );
};

export default BrandNames;