import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductTypes } from "../../models/productTypes";
import { ProductCard } from "../common/index";

// Function to fetch products from the API
const fetchProducts = async (): Promise<ProductTypes[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const ProductsContainer = () => {
    const [showMore, setShowMore] = useState(8);

    // Fetch products using React Query
    const { data: products, isLoading, error } = useQuery<ProductTypes[]>({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const totalProductCount = products?.length || 0;

    const handleShowMoreClick = () => {
        if (totalProductCount > showMore) {
            setShowMore(prevState => prevState + 8);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error instanceof Error) return <div>Error: {error.message}</div>;
console.log(products)
    return (
        <section className="bg-white">
            <div className="xl:w-[85%] w-[90%] mx-auto mt-[56px] mb-[69px]">
                <h1 className="font-bold text-[#3A3A3A] mb-[32px] text-center lg:text-[30px] lg:leading-10 sm:text-2xl text-lg">Our Products</h1>
                <div className="grid lg:grid-cols-4 gap-8 lg:px-0 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-3">
                    {products?.slice(0, showMore).map((item: ProductTypes) => (
                        <ProductCard
                            key={item.id}
                            product={item} />
                    ))}
                </div>
                {(totalProductCount > showMore) && (
                    <button
                        className="mt-[32px] border-2 py-[12px] block w-[245px] mx-auto border-[#B88E2F] text-[#B88E2F] font-bold text-[16px] leading-6"
                        onClick={handleShowMoreClick}>
                        Show More
                    </button>
                )}
            </div>
        </section>
    );
};

export default ProductsContainer;
