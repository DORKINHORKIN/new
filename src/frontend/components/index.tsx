import { Route, Switch, Link, useLocation } from "wouter-preact";
import Header from "./header.tsx";
import Footer from "./footer.tsx";

import { Routes, type Route } from "../lib/routes.tsx";

const Content = () => {
  const [location, setLocation] = useLocation();
  
  return (
    <main className="grow max-h-content">
      <Switch>
        {Routes.map((route: Route) => (
          <Route key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))}
        <Route path="*">
          <div className="p-4">
            <h2 className="text-2xl font-bold">Page Not Found</h2>
            {globalThis.location.pathname}
          </div>
        </Route>
      </Switch>
    </main>
  );
};

const App = () => (
  <div className="mx-auto max-w-lg flex flex-col border-x-2 border-black min-h-screen">
    <Header />
    <Content />
    <Footer />
  </div>
);

export default App;
