import Banner from "../Banner/Banner";
import BrandNames from "../BrandNames/BrandNames";
import CustomerReview from "../CustomerReview/CustomerReview";
import Footer from "../Footer/Footer";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BrandNames></BrandNames>
           <WhyChooseUs></WhyChooseUs>
           <CustomerReview></CustomerReview>
           <Footer></Footer>
        </div>
    );
};

export default Home;