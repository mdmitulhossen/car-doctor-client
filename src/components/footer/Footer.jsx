import logo from '../../assets/logo.svg'
const Footer = () => {
    return (
        <footer className=" py-20 bg-[#151515]  mt-16 ">
            <div className="carDoctorContainer footer text-base-content grid-cols-2  justify-between md:justify-normal gap-10 md:grid-cols-none ">
                <aside className="text-white">
                     <img src={logo} className='w-16' alt="" />
                    <p className='w-[200px] mt-3 text-[#E8E8E8]'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                </aside>
                <nav className="text-[#F3F3F3]">
                    <header className="font-bold text-white text-lg mb-4">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-[#F3F3F3]">
                    <header className="font-bold text-white text-lg mb-4">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-[#F3F3F3]">
                    <header className="font-bold text-white text-lg mb-4">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;