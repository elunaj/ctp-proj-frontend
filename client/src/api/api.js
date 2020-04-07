import axios from 'axios';

// Creates a dedicated axios client that is configured to make requests with whatever configuration we
// set it up.
export default axios.create({
    baseURL: 'https://www.omdbapi.com',
    // headers: {
    //     apikey: `${process.env.REACT_APP_MOVIE_API_KEY}`
    // }
});