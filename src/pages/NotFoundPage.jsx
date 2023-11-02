import Navbar from "../components/Header/Navbar";
import notFound from '../assets/404/404.png'


const NotFoundPage = () => {
    return (
        <div>
            <Navbar />

            <div className="carDoctorContainer flex justify-center mt-16">
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;