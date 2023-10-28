import { useEffect, useState } from "react";
import SectionHeader from "../../components/Header/SectionHeader";
import ServiceCard from "../../components/Cards/ServiceCard";
import Button from "../../components/Button/Button";


const HomeServiceSection = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            {/* header */}
            
            <SectionHeader
                header="Service"
                title="Our Service Area"
                smallDisc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />

            {/* section container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                {
                    services?.map((service, index) => <ServiceCard key={service._id} service={service} />)
                }
            </div>

            <div className="flex justify-center w-full pt-10">
                <Button name='More Service' />
            </div>
        </div>
    );
};

export default HomeServiceSection;