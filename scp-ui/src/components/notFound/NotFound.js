import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';

export const NotFound = () => {
  return (
    <div className='not-found'>
      <h4 className='h4'>Data access forbidden by order of the 05 Council.</h4>
      <Button variant='contained' startIcon={<ArrowBack />}>
        <Link to='/' className='no-decoration'>
          Back{' '}
        </Link>
      </Button>
    </div>
  );
};
