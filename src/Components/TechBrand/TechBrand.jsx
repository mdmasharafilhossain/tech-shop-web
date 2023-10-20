import { Link } from "react-router-dom";


const TechBrand = ({card}) => {
    const{id,brand_name,img_brand} = card;
    return (
        <div>
             <Link to={`/card/${id}`}>
             <div className="container mx-auto">
            <div className="bg-white shadow-xl pb-5 rounded-xl">
               <img className="mx-auto h-40" src={img_brand} alt="" /> 
               <h2 className="text-center font-bold mt-5 text-2xl text-green-600">{brand_name}</h2>
               {/* <p className="text-center mt-3">{specialist}</p> */}
            </div>

           </div>
             </Link>
        </div>
    );
};

export default TechBrand;