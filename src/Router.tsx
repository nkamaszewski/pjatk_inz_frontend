import { Switch, Route, Redirect } from 'react-router';
import { authRoutes, routes, RouteType } from './routes/routes';
import PageLayout from './components/PageLayout';
import { useAuth } from './providers/AuthProvider';

const Router = () => {
  const { auth } = useAuth();
  const [login, register, restore, change, setPassword] = authRoutes;
  const LoginComponent = login.Component;
  const RegisterComponent = register.Component;
  const RestoreComponent = restore.Component;
  const ChangeComponent = change.Component;
  const SetPasswordComponent = setPassword.Component;

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
      <Route
        key={restore.path}
        exact
        path={restore.path}
        children={<RestoreComponent />}
      />
      <Route
        key={change.path}
        exact
        path={change.path}
        children={<ChangeComponent />}
      />
      <Route
        key={setPassword.path}
        exact
        path={setPassword.path}
        children={<SetPasswordComponent />}
      />
      <Redirect to={'/logowanie'} />
    </Switch>
  );
};

export default Router;
