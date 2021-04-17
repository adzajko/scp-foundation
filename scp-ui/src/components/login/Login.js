import { Button } from '@material-ui/core';
import logo from '../../scpLogo.svg';
import { Security } from '@material-ui/icons';
import { login, useAuthDispatch } from '../../context';

export const Login = props => {
  const dispatch = useAuthDispatch();
  const handleAuthentication = () => {
    login(dispatch).then(response => {
      if (!response.user) return;
      props.history.push('/home');
    });
  };

  return (
    <section className='login-container'>
      <div className='login-container__img-container'>
        <img src={logo} alt='Foundation Logo' className='img-container__img' />
      </div>
      <h2 className='h2'>Secure. Contain. Protect.</h2>
      <Button
        className='login-container__btn'
        id='login-btn'
        variant='contained'
        onClick={handleAuthentication}
        startIcon={<Security />}
      >
        Access
      </Button>
    </section>
  );
};
