import Breadcrumbs from "../components/Header/Breadcrumbs";

const CheckOutPage = () => {
    return (
        <div className="carDoctorContainer">
            <Breadcrumbs
                path='Check Out'
            />

            <div className="mt-20 p-5 md:p-10 xl:p-16 bg-[#F3F3F3] rounded-md">
                <form className="grid grid-cols-12 gap-5">
                     <input className="border rounded-md col-span-full md:col-span-6 border-gray-300 px-4 py-2 outline-[#FF3811]" type="text" name="firstName" id="" placeholder="First Name"/> 
                     <input className="border rounded-md col-span-full md:col-span-6 border-gray-300 px-4 py-2 outline-[#FF3811]" type="text" name="lastName" id="" placeholder="Last Name"/> 
                     <input className="border rounded-md col-span-full md:col-span-6 border-gray-300 px-4 py-2 outline-[#FF3811]" type="number" name="phone" id="" placeholder="Your Phone"/> 
                     <input className="border rounded-md border-gray-300 col-span-full md:col-span-6 px-4 py-2 outline-[#FF3811]" type="email" name="email" id="" placeholder="Your Email"/> 
                     <textarea className="border rounded-md col-span-12 border-gray-300 px-4 py-2 outline-[#FF3811]" name="message" id=""  rows="5" placeholder="Your Message"></textarea>
                     <button className="px-4 py-2 text-sm font-semibold rounded-md col-span-full text-white bg-[#FF3811] hover:bg-[#d35036] duration-200">Order Confirm</button>
                </form>
            </div>

        </div>
    );
};

export default CheckOutPage;