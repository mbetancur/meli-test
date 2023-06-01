const fetchProduct = async (id) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
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

const fetchDescription = async (id) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
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

export {
  fetchProduct,
  fetchDescription
}