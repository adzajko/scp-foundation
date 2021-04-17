import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section className='app-page home-section'>
      <h4 className='h4 underline-before'>Welcome back, researcher.</h4>
      <Button variant='outlined'>
        <Link className='no-decoration' to='/scps'>
          View all Objects
        </Link>
      </Button>
    </section>
  );
};
