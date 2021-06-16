import axios from 'axios';


const base_url = "https://api.themoviedb.org/3"
const image_url = "https://image.tmdb.org/t/p"

export const Api = axios.create({
  baseURL: base_url,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjFhNTcwMTQ1YzExM2QxOGJhMDdhZDhiNzljMmQxZCIsInN1YiI6IjYwYTU4YzhkNTkwMDg2MDA2ZjRhYTk1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amF71WJg47PU5E_nA8sSHTv3Xe8jLxoJUfBi8F74yW4'
  }
});

export const ImageApi = axios.create({
  baseUrl: image_url,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjFhNTcwMTQ1YzExM2QxOGJhMDdhZDhiNzljMmQxZCIsInN1YiI6IjYwYTU4YzhkNTkwMDg2MDA2ZjRhYTk1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amF71WJg47PU5E_nA8sSHTv3Xe8jLxoJUfBi8F74yW4'
  }
});
