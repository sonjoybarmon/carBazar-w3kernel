import React from 'react';
import MoviesSlider from '../Share/MoviesSlider/MoviesSlider';
import NavMenu from '../Share/NavMenu/NavMenu';
import EntertainmentMovies from '../Movies/EntertainmentMovies/EntertainmentMovies';
import RecommendedMovies from '../Movies/RecommendedMovies/RecommendedMovies';

const Home = () => {
    return (
        <div>
            <NavMenu />
            <MoviesSlider />
            <div style={{padding: '30px 0'}}>
                <RecommendedMovies />
            </div>
            
            <EntertainmentMovies />
        </div>
    );
};

export default Home;