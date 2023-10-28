import user from '../../assets/user.jpeg'
import quate from '../../assets/icons/quote.svg'

const TestimonialCard = () => {
    return (
        <div className="p-8 border border-[#E8E8E8] rounded-md space-y-4">
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <img src={user} alt="" className='w-[60px] h-[60px] rounded-full' />
                    <div className='space-y-1'>
                        <p className='text-[#444] text-[22px] font-bold'>Awlad Hossain</p>
                        <p className='text-[#737373] text-lg font-semibold'>Businessman</p>
                    </div>
                </div>
                <div className='md:w-1/4 flex items-center'>
                    <img src={quate} className='' alt="" />
                </div>
            </div>
            <p className=' text-[#737373]'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

            </p>

            <div className="rating ">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
        </div>
    );
};

export default TestimonialCard;