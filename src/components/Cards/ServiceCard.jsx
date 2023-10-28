const ServiceCard = ({service}) => {
    const {title,img,price} = service || {}
    return (
        <div className=" w-full bg-base-100  border border-[#E8E8E8] rounded-md flex flex-col">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-md w-full h-[200px] object-cover" />
            </figure>
            <div className=" px-5 pb-2 flex-grow pt-7  flex flex-col justify-between">
                <h2 className="card-title text-[#444] text-[22px]">{title || 'services Name'}</h2>
                <div className="flex justify-between mt-3 ">
                    <p className='text-[#FF3811] text-lg font-medium '>Price : {price || '100'}$</p>
                    <p className='px-3 py-1  justify-items-center justify-self-center cursor-pointer text-right'>  
                            <box-icon
                                name='right-arrow-alt'
                                animation='tada'
                                color='#FF3811'
                            ></box-icon>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;