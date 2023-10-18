

const Banner = () => {
    return (
        <div>
           <div className="mt-96 md:mt-36  lg:mt-28">
            <div className="hero w-full h-[750px] mt-16" style={{ backgroundImage: 'url(https://i.ibb.co/SyzcQHY/Screenshot-990.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-bold text-center">Welcome to <span className="text-green-400">TechLand</span> </h1>
                        <p className="mb-5 text-2xl font-bold text-green-100">Step into a world of technology and innovation at our digital haven. Discover the latest gadgets, stay updated on emerging trends, and delve into insightful reviews. Join us on a journey through the ever-evolving landscape of tech.</p>
                      
                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Banner;