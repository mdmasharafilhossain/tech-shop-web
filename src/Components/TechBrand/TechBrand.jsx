import { Link } from "react-router-dom";


const TechBrand = ({card}) => {
    const{id,BrandName,img_brand} = card;
    return (
        <div>
             <Link to={`/card/${BrandName}`}>
             <div className="container mx-auto">
            <div className="bg-white shadow-xl pb-5 rounded-xl">
               <img className="mx-auto h-40" src={img_brand} alt="" /> 
               <h2 className="text-center font-bold mt-5 text-2xl text-green-600">{BrandName}</h2>
               {/* <p className="text-center mt-3">{specialist}</p> */}
            </div>

           </div>
             </Link>
        </div>
    );
};

export default TechBrand;