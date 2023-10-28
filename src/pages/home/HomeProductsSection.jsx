import Button from "../../components/Button/Button";
import ProductCard from "../../components/Cards/ProductCard";
import SectionHeader from "../../components/Header/SectionHeader";


const HomeProductsSection = () => {
    return (
        <div>
            {/* header */}
            <SectionHeader
                header="Popular Products"
                title="Browse Our Products"
                smallDisc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />

            {/* product container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="flex justify-center w-full pt-10">
                <Button name='More Product' />
            </div>
        </div>
    );
};

export default HomeProductsSection;