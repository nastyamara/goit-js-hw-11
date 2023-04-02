import axios from 'axios';

export async function getImage(search) {
  const BASE_URL = 'https://pixabay.com/api';
 
  const SEARCH_PARAMS = new URLSearchParams({
    key: '34960745-b530bdf219145f51506c30578',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  }) ;

  try {
    const response =
  await axios({
  // method: 'get',
  url: `${BASE_URL}?${SEARCH_PARAMS}`,
 })
    // const response = await axios("https://pixabay.com/api?key=34960745-b530bdf219145f51506c30578&q=cat");
    // return response;
    return response;
  } catch (error) {
    console.error(error);
  }
}
