import { Switch, Route, Redirect } from 'react-router';
import { authRoutes, routes, RouteType } from './routes/routes';
import PageLayout from './components/PageLayout';
import { useAuth } from './contexts/AuthProvider';

const Router = () => {
  const { auth } = useAuth();
  const loginPath = authRoutes[0].path;
  const LoginComponent = authRoutes[0].Component;

  return (
    <Switch>
      {auth && (
        <PageLayout>
          <>
            {routes.map(({ path, Component }: RouteType) => (
              <Route
                key={path.toString()}
                exact
                path={path}
                children={<Component />}
              />
            ))}
          </>
        </PageLayout>
      )}

      <Route
        key={loginPath}
        exact
        path={loginPath}
        children={<LoginComponent />}
      />
      <Redirect to={'/logowanie'} />
    </Switch>
  );
};

export default Router;
