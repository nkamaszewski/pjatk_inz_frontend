import { Switch, Route, Redirect } from 'react-router';
import { routes, RouteType } from './routes/routes';

const Router = () => {
  return (
    <>
      <Switch>
        {routes.map(({ path, Component }: RouteType) => (
          <Route key={path.toString()} exact path={path} children={Component} />
        ))}
        <Redirect to={'/pracownicy'} />
      </Switch>
    </>
  );
};

export default Router;
