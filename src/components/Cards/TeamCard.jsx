import facebook from '../../assets/social/facebook.svg'
import instagram from '../../assets/social/instagram.svg'
import linkedIn from '../../assets/social/linkedIn.svg'
import twiter from '../../assets/social/twiter.svg'

const TeamCard = ({ title, price }) => {
    return (
        <div className=" w-full bg-base-100  border border-[#E8E8E8] rounded-md flex flex-col p-5">
            <figure className="">
                <img src='https://i.ibb.co/ydCbDN3/5555.jpg' alt="Shoes" className="rounded-md w-full h-[250px] object-cover" />
            </figure>
            <div className=" pb-3 flex-grow pt-7  flex flex-col justify-between text-center items-center space-y-3">
                <h2 className="card-title text-[#444] text-[22px]">{title || ' Name'}</h2>
                <p className='text-[#737373] text-lg font-medium '>Engine Expert</p>
                <p className='px-3   justify-items-center justify-self-center cursor-pointer text-right'>
                </p>
                <div className='flex gap-3 justify-center py-1'>
                    <img className='h-9 w-9 cursor-pointer' src={facebook} alt="" />
                    <img className='h-9 w-9 cursor-pointer' src={twiter} alt="" />
                    <img className='h-9 w-9 cursor-pointer' src={linkedIn} alt="" />
                    <img className='h-9 w-9 cursor-pointer' src={instagram} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeamCard;