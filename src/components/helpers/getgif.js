 


 export const Getgif = async ( category) => {
    const url =
      `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=iUUwZTEXv8O6uJl8SszgNNJCr87EhLTD`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gift = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
   return gift
  };
  