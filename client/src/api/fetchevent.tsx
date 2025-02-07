const eventkeyword = async (keyword:string) => {
    try {
      const response = await fetch(`/api/search/keyword?keyword=${keyword}`);
      const data = await response.json();
      
      if(!response.ok) {
        throw new Error('invalid work API response, check network tab!');
      }
  
      return data;
    } catch(err) {
      console.log('Error from data retrieval:', err);
      return [];
    }
  };

const eventcity = async (city:string) => {
  try {
    const response = await fetch(`/api/search/city?city=${city}`);
    const data = await response.json();
    
    if(!response.ok) {
      throw new Error('invalid work API response, check network tab!');
    }

    return data;
  } catch(err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
}
export { eventkeyword, eventcity };