const SectionHeader = ({header,title,smallDisc}) => {
    return (
        <div className="max-w-[750px] text-center mx-auto px-4 space-y-2">
            <p className="text-xl text-[#FF3811] font-semibold">{header}</p>
            <p className="md:text-[40px] text-[30px] font-semibold">{title}</p>
            <p className="text-[#737373] text-sm md:text-base">{smallDisc}</p>
        </div>
    );
};

export default SectionHeader;