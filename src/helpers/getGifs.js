export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=WYKibhJ4K7XAaxVISblrpiLehecbDMwr&q=${encodeURI(category)}&limit=20`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
};