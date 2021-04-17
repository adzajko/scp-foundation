import Search from './search/Search';
import logo from '../../../scpLogo.svg';
import { useAuthState } from '../../../context';

const Navbar = () => {
  const { user } = useAuthState();
  return (
    <nav className='navbar'>
      <div className='navbar__brand'>
        <img src={logo} alt='Foundation Logo' className='navbar__logo' />
      </div>
      <div className='navbar__content'>{user && <Search />}</div>
    </nav>
  );
};

export default Navbar;
