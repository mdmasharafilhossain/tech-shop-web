

const WhyChooseUs = () => {
    return (
        <div className="pt-16 bg-gray-100 pb-20">
            <h2 className="font-bold border bg-green-100 text-green-500  text-5xl text-center mt-16 py-5 mb-10">Why Choose Us</h2>
            <div className="flex flex-col md:flex-row lg:flex-row container mx-auto bg-white shadow-md rounded-lg">
                <div>
                    <img className="h-[550px]" src="https://i.ibb.co/THg6H8Z/2.png" alt="" />
                </div>
              {/* For Text */}
              <div className="ml-10 mt-14">
                <h2 className="text-4xl font-bold mb-8 text-green-500">Reason For Choosing Our Strike<br></br> Consultancy</h2>
                <h3 className="text-2xl font-bold mb-3">Quick Response</h3>
                <p className="text-gray-500 text-lg mb-7">Improve efficiency, provide a better customer experience with<br></br> modern technology services available around the world.</p>
                <h3 className="text-2xl font-bold mb-3">Experienced</h3>
                <p className="text-gray-500 text-lg mb-7">Our experienced, provide a better customer experience with<br></br> modern technology services available around the world.</p>
                <h3 className="text-2xl font-bold mb-3">Flexible Payment</h3>
                <p className="text-gray-500 text-lg">Improve flexible Payment, provide a better customer experience with<br></br> modern technology services available around the world.</p>
              </div>
             </div>
        </div>
    );
};

export default WhyChooseUs;