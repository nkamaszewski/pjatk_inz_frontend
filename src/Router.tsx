import { Switch, Route, Redirect } from 'react-router';
import { authRoutes, routes, RouteType } from './routes/routes';
import PageLayout from './components/PageLayout';

const Router = () => {
  const loginPath = authRoutes[0].path;
  const LoginComponent = authRoutes[0].Component;

  return (
    <Switch>
      {routes.map(({ path, Component }: RouteType) => (
        <Route
          key={path.toString()}
          exact
          path={path}
          children={
            <PageLayout>
              <Component />
            </PageLayout>
          }
        />
      ))}

      <Route
        key={loginPath}
        exact
        path={loginPath}
        children={<LoginComponent />}
      />
      <Redirect to={'/pracownicy'} />
    </Switch>
  );
};

export default Router;
