import { Switch, Route, Redirect } from 'react-router';
import { authRoutes, routes, RouteType } from './routes/routes';
import PageLayout from './components/PageLayout';
import { useAuth } from './contexts/AuthProvider';

const Router = () => {
  const { auth } = useAuth();
  const [login, register] = authRoutes;
  const LoginComponent = login.Component;
  const RegisterComponent = register.Component;
  console.log(auth);

  return (
    <Switch>
      {auth.user && (
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
        key={login.path}
        exact
        path={login.path}
        children={<LoginComponent />}
      />
      <Route
        key={register.path}
        exact
        path={register.path}
        children={<RegisterComponent />}
      />
      <Redirect to={'/logowanie'} />
    </Switch>
  );
};

export default Router;
