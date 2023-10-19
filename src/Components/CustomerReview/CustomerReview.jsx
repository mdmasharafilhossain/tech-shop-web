import { useEffect, useState } from "react";
import Customer from "../Customer/Customer";


const CustomerReview = () => {
    const[review,setReview] = useState([])
    useEffect(()=>{
     fetch('/Customer.json')
     .then(res =>res.json())
     .then(data =>setReview(data))


    },[])
    return (
        <div className="pt-10 bg-green-100  pb-10">
            <h2 className="font-bold  bg-green-100 text-green-500  text-5xl text-center mt-16 py-5 mb-10 border-2 border-green-300">What Are Our Customers Saying ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-14 gap-10 pb-10 container mx-auto">
                    {
                        review.map(card=><Customer key={card.id} card={card}></Customer>)
                    }
                </div>
        </div>
    );
};

export default CustomerReview;