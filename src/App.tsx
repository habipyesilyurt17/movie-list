import "./App.css";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'
import { MovieType } from "./types";
import Loading from "./components/Loading";
import Detail from "./components/movies/Detail";
import Navbar from "./components/navbar";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay
} from "swiper";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const App = () => {
  const api_key = '4a9812c2dc890165509d3f857a35e4dc';
  const [movies, setMovies] = useState<MovieType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getMovies = async () => {
    setLoading(true)
    try {
      await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
        .then((response: AxiosResponse<any>) => {
          setMovies(response.data.results);
        }).catch(error => console.log(error))
    } catch (error) {
      console.log("Hata oluştu")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="grid-container">
              <div className="header">
                <Navbar />
              </div>
              <div className="main">
                <div className="main-container">
                  <div className="main-slider">
                    <div className="layout">
                      <div className="swiper-container">
                        <Swiper
                          cssMode={true}
                          navigation={true}
                          pagination={{
                            clickable: true,
                          }}
                          mousewheel={true}
                          keyboard={true}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <img src={image1} alt="" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={image2} alt="" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={image3} alt="" />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                  <div className="main-banner">
                    <div className="banner1"></div>
                    <div className="banner2"></div>
                  </div>
                  <div className="main-movie-list">
                    <div className="layout">
                      <div className="movie-slide">
                        <h1>Movie list</h1>
                        <Swiper
                          slidesPerView={5}
                          spaceBetween={30}
                          navigation={true}
                          className="mySwiper"
                        >
                          <Loading loading={loading}>
                            {movies.map((movie) => (

                              <SwiperSlide key={movie.id}>
                                <div className="slider-card">
                                  <article className="slider-article">
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="Sample photo" />
                                    <div className="text">
                                      <Link className="card-btn" to={`detil/${movie.id}`}>Detail</Link>
                                    </div>
                                  </article>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Loading>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">&copy; 2021 created by Habip</div>
            </div>
          </Route>
          <Route path="/detil/:movieId"  exact >
            <Detail movies={movies} />
          </Route>
          <Route path="*" render={() =>
            <main style={{ padding: "1rem", color: "black" }}>
              
              <p>There's nothing here!</p>
            </main>
          }
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
