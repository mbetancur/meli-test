const searchItems = async (query) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Unable to fetch data from the API.');
    }
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while fetching data.');
  }
};

export default searchItems;
