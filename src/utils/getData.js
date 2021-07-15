const URI = 'https://api.pokemontcg.io/v2/cards?q=name:';

const getData = async(Pokemon) => {

    let URL_SEARCH = `${URI}${Pokemon}`;
    console.log(`URL para ser consultada por el API: ${URL_SEARCH}`);
    try {
        const response = await fetch(URL_SEARCH);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error get Data', error);
    }
}

export default getData;