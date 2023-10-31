import breadcrumbsBg from '../../assets/images/checkout/checkout.png';
import './Breadcrumbs.css'
const Breadcrumbs = ({path}) => {
    return (
        <div
            style={{ backgroundImage: `url(${breadcrumbsBg})` }}
            className="w-full h-[250px] mt-4 bg-no-repeat bg-cover bg-center relative rounded-md"
        >
            <div className="absolute inset-0 md:pl-[80px] w-full h-full bg-gradient-to-r from-[#151515]/90 to-[#151515]/5 rounded-md">
                <div className="text-white w-full h-full flex items-center relative">
                    <h1 className="text-4xl font-semibold text-center md:text-left w-full">{path || 'undefine'}</h1>
                    <div className='clip absolute bottom-0 left-1/2  -translate-x-1/2  px-10 min-h-[50px] bg-[#FF3811] flex justify-center  items-center text-center'>
                          <span className='font-medium text-lg'>
                            <span className='cursor-pointer'>home </span> 
                            /
                            <span className='cursor-pointer'> {path || 'undefine'}</span> </span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Breadcrumbs;