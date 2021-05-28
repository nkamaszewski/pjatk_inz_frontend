import { Switch, Route, Redirect } from 'react-router';
import { routes, RouteType } from './routes/routes';
import PageLayout from './components/PageLayout';

const Router = () => {
  return (
    <PageLayout>
      <Switch>
        {routes.map(({ path, Component }: RouteType) => (
          <Route key={path.toString()} exact path={path} children={Component} />
        ))}
        <Redirect to={'/pracownicy'} />
      </Switch>
    </PageLayout>
  );
};

export default Router;
