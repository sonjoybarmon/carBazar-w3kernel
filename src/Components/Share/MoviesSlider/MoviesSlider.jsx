import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMedia from '@material-ui/core/CardMedia'
import { Card, Container } from '@material-ui/core';
import slider1 from '../../../Images/MovieSlider/badhaai-do-04-01-2021-02-21-48-258.jpg';
import slider2 from '../../../Images/MovieSlider/ek-aur-love-story-22-02-2021-07-24-19-298.jpg';
import slider3 from '../../../Images/MovieSlider/gift-a-celeb-wish--unlu-class-27-01-2021-08-30-56-089.jpg';
import slider4 from '../../../Images/MovieSlider/kabadadaari-11-02-2021-07-12-21-286.jpg';
import slider5 from '../../../Images/MovieSlider/pogaru-28-02-2021-03-13-40-750.jpg';
import slider6 from '../../../Images/MovieSlider/raell-padamsee-s-little-actors-club-01-02-2021-10-11-37-264.jpg';
import slider7 from '../../../Images/MovieSlider/sunburn-home-festival-20-12-02-2021-08-56-56-785.jpg';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MoviesSlider = () => {
    return (
        <Container>
            <Carousel 
                responsive={responsive}
                autoPlaySpeed={2000}
                infinite={true}
                showDots={true}
                autoPlay={true}
            >
                <Card style={{margin: '10px 5px'}}>
                    <CardMedia
                        component="img"
                        title=""
                        image={slider1}
                    />
                </Card>

                <Card style={{margin: '10px 5px'}}> 
                    <CardMedia
                        component="img"
                        title=""
                        image={slider2}
                    />
                </Card>

                <Card style={{margin: '10px 5px'}}>
                    <CardMedia
                        component="img"
                        title=""
                        image={slider3}
                    />
                </Card>

                <Card style={{margin: '10px 5px'}}>
                    <CardMedia
                        component="img"
                        title=""
                        image={slider4}
                    />
                </Card>

                <Card style={{margin: '10px 5px'}}>
                    <CardMedia
                        component="img"
                        title=""
                        image={slider5}
                    />
                </Card>
                
                <Card style={{margin: '10px 5px'}}>
                    <CardMedia
                        component="img"
                        title=""
                        image={slider6}
                    />
                </Card>

                <Card style={{margin: '10px 5px'}}>
                    <CardMedia
                        component="img"
                        title=""
                        image={slider7}
                    />
                </Card>
                
               
            </Carousel>
        </Container>
    );
};

export default MoviesSlider;


