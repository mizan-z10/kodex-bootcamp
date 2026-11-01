
import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
 
import ProductCard from "./components/ProductCard";
import { fetchProducts } from "./apis/ProductAPI";

const App = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
  } = useInfiniteQuery({
  queryKey: ["products"],
  queryFn: fetchProducts,
  initialPageParam: 1,

  getNextPageParam: (lastPage, allPages) => {
    const nextPage = allPages.length + 1;

    return nextPage <= Math.ceil(lastPage.total / lastPage.limit)
      ? nextPage
      : undefined;
  },
});


  useEffect(() => {
    const handleScrollToFetch = () => {
      const scrollPosition =
        window.innerHeight + window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight;

      if (
        scrollPosition >= pageHeight - 200 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScrollToFetch);

    return () => {
      window.removeEventListener("scroll", handleScrollToFetch);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return <h1 className="p-6 text-xl">Loading products...</h1>;
  }

  if (isError) {
    return (
      <p className="p-6 text-red-600">
        Error: {error.message}
      </p>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Our Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.pages.map((page) =>
          page.products.map((elem) => (
            <ProductCard key={elem.id} elem={elem} />
          ))
        )}
      </div>

      {isFetchingNextPage && (
        <p className="py-6 text-center font-medium">
          Loading more products...
        </p>
      )}

      {!hasNextPage && (
        <p className="py-6 text-center text-gray-500">
          You have reached the end of the products.
        </p>
      )}
    </main>
  );
};

export default App;
