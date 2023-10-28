import test from '../../assets/images/products/1.png'
const ProductCard = ({ name, price }) => {
    const rate = 2
    return (
            <div className=" w-full bg-base-100 shadow border border-[#E8E8E8] rounded-md flex flex-col p-5 cursor-pointer group">
                <figure className=" bg-[#F3F3F3] h-[200px] rounded-md relative">
                    <p className='absolute px-2 py-1 rounded-md top-2 right-2 bg-white cursor-pointer hover:bg-[#b5e2dd] lg:hidden lg:group-hover:block'>
                        <box-icon name='shopping-bag' animation='tada' color='#FF3811'></box-icon>
                    </p>
                    <img src={test} alt="Shoes" className="rounded-md w-full h-full  object-fill" />
                </figure>
                <div className="pb-3 flex-grow pt-7  flex flex-col justify-between text-center items-center space-y-3">
                    <div className="rating rating-md">
                        {
                            [1, 2, 3, 4, 5].map((i, index) => {
                                return (
                                    i === rate ?
                                        <input key={index} type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" checked />
                                        :
                                        <input key={index} type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                )
                            })
                        }

                    </div>
                    <h2 className="card-title text-[#444] text-[22px] font-bold">{name || 'services Name'}</h2>
                    <p className='text-[#FF3811] text-lg font-semibold '>Price : {price || '100'}$</p>
                </div>
            </div>
    );
};

export default ProductCard;