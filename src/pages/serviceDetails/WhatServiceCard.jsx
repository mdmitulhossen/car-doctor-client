

const WhatServiceCard = ({title,details}) => {
    return (
        <div className="bg-[#F3F3F3] space-y-2 p-10 md:p-5 lg:p-10 rounded-md border-t-4 border-t-[#FF3811]">
            <p className="text-xl font-semibold">{title || 'undefine'}</p>
            <p className="text-[#737373]">
                {details || 'undefine'}
            </p>
        </div>
    );
};

export default WhatServiceCard;