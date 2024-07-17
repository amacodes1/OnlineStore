const ORGANIZATION_ID = "8a7d7ce37f124a7885872c77c689ff5c";
const APP_ID = "VLUQZCFWMQ8NTZX";
const API_KEY = "72e558bb01e3456991c0bb24303e71a520240713010709100144";

// Fetch all products
export const FetchAllProducts = async () => {
  try {
    const response = await fetch(
      `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=1&size=20&Appid=${APP_ID}&Apikey=${API_KEY}`,
      {
        mode: "no-cors",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(ob),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return null;
  }
};

// Fetch a single product by ID
export const FetchProductById = async (id: any) => {
  try {
    const response = await fetch(
      `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
};
