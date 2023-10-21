import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";

import BrandDeatils from "../BrandDetails/BrandDeatils";

const Brands = () => {
    
    const brand = useLoaderData();
    console.log(brand);
    const { BrandName } = useParams();
    console.log(typeof (BrandName))

    const images = brand.filter(img => img.BrandName === BrandName);
   

    
    
    if (images.length === 0) {
        return (
            <div className="bg-green-100 px-40 py-80">
                <div className="container mx-auto mt-72 lg:ml-60">
                    <p className="text-5xl font-bold text-red-600">No data found for {BrandName}!!!</p>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-green-100 ">

            <div className="carousel w-full h-[800px] mt-32">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gmvJHxp/apple1.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/vdwR8wN/sams1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/DfQ9gsx/sony1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qpPd4WX/hu1.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto mt-16 pb-20 gap-20">

            {images.map((brandItem, index) => (
                    <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 w-full" src={brandItem.Image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{brandItem.name}</h2>
                            <h2 className="card-title">{brandItem.BrandName}</h2>
                            <h2 className="card-title">{brandItem.Type}</h2>
                            <h2 className="card-title">Price: ${brandItem.Price} Only</h2>
                            <h2 className="card-title">Rating: {brandItem.Rating}<FaRegStar /></h2>
                            <div className="card-actions w-full">
                                <Link to={`Brands/${brandItem.name}`}>
                                <button 
                                
                                className="btn btn-primary px-[150px] w-full bg-green-500 hover:bg-green-600 text-white border-none">Details</button>
                                </Link>
                            </div>
                            <div className="card-actions w-full">
                               <Link to={`update/${brandItem._id}`}>
                               <button className="px-[150px] btn btn-primary w-full bg-green-500 text-white border-none hover:bg-green-600">Update</button>
                               </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
         
        </div>
    );
};

export default Brands;