const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

// Function to get KPIs data
export const getKPIs = async () => {
  const data = await fetchData("src/state/data/kpis.json");
  return data;
};

// Function to get Products data
export const getProducts = async () => {
  return await fetchData("src/state/data/products.json");
};

// Function to get Transactions data
export const getTransactions = async () => {
  return await fetchData("src/state/data/transactions.json");
};
