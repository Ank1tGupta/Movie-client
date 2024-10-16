import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = () => {
  return (
    <div className='movie-corousel-container'>
      <Carousel>
        {
            movies.map((movies)=>{
                return(
                    <Paper>
                        <div className='movie-card-container'></div>
                        
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero
