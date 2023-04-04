import { ProductProps } from "model";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const getOtherProducts = (
  products: ProductProps[],
  slug: string,
  limit?: number
) => {
  return products
    .filter((product) => product.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};
