

const Customer = ({card}) => {
    const{customer_img,description,customer_name} = card;
    return (
        <div className="border-2 border-green-600">
            <div className="py-10 px-10">
                <img className="mx-auto pb-5 " src={customer_img} alt="" />
                <p className="text-justify">{description}</p>
                <h1 className="text-center font-bold text-xl mt-5">{customer_name}</h1>

            </div>
        </div>
    );
};

export default Customer;