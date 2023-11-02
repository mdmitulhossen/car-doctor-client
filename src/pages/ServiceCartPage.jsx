import CartCard from "../components/Cards/CartCard";
import Breadcrumbs from "../components/Header/Breadcrumbs";


const ServiceCartPage = () => {
    return (
        <div className="carDoctorContainer mt-5">
            <Breadcrumbs
                path='Cart Details'
            />

            <div className="mt-16">
              <CartCard/>
            </div>
        </div>
    );
};

export default ServiceCartPage;