import logo from '../../assets/logo.svg'

const DiscountCard = () => {
    return (
        <div className="bg-[#151515] px-12 pt-8 pb-12 rounded-md space-y-5 flex flex-col justify-center items-center">
            <img src={logo} className='h-[70px] w-[130px] object-fill' alt="" />
            <p className='text-xl font-semibold text-white text-center'>Need Help? We Are Here
                To Help You
            </p>
            <div className='px-8 py-5 bg-white rounded-md text-center space-y-2 relative'>
                <p className='text-xl font-semibold'>
                    <span className='text-[#FF3811]'>Car Doctor</span> Special
                </p>
                <p className='text-[#737373] font-semibold'>
                    Save up to <span className='text-[#FF3811]'>60% off</span>
                </p>
                <button className='bg-[#FF3811] text-white font-semibold text-sm absolute -bottom-4 rounded-md left-1/2 -translate-x-1/2 px-3 py-2'>
                    Get A Quote
                </button>

            </div>
        </div>
    );
};

export default DiscountCard;