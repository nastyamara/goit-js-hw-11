import axios from 'axios';

export async function getImage(search, pagecount) {
  const BASE_URL = 'https://pixabay.com/api';
 
  const SEARCH_PARAMS = new URLSearchParams({
    key: '34960745-b530bdf219145f51506c30578',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: pagecount,
    per_page: 40,
  });
  
  try{  const response =
    await axios.get(`${BASE_URL}?${SEARCH_PARAMS}`);
    return response.data;
  }
  catch(error) {console.log(error)}


}
  // 