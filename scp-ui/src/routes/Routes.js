import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { Login } from '../components/login/Login';
import { NotFound } from '../components/notFound/NotFound';
import { SCPS } from '../components/scps/SCPS';
import { useAuthState } from '../context';

const routes = [
  {
    path: '/login',
    component: Login,
    isPrivate: false,
    exact: false
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    isPrivate: true
  },
  {
    path: '/scps',
    component: SCPS,
    isPrivate: true,
    exact: false
  },
  {
    path: '/results',
    component: Home,
    isPrivate: true,
    exact: false
  },
  {
    path: '/',
    component: Home,
    isPrivate: true,
    exact: true
  },
  {
    path: '*',
    component: NotFound,
    isPrivate: true,
    exact: false
  }
];

const AppRoute = ({
  component: Component,
  path,
  isPrivate,
  exact,
  ...rest
}) => {
  const userDetails = useAuthState();
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        isPrivate && !Boolean(userDetails.user) ? (
          <Redirect to={{ pathname: '/login' }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};

export const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, component, isPrivate }) => (
        <AppRoute
          key={path}
          path={path}
          component={component}
          isPrivate={isPrivate}
        />
      ))}
    </Switch>
  );
};
