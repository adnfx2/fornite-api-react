import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import routes from "../../routes/routes";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Header />
        <Main>
          <Switch>
            {routes.map(({ name, ...route }) =>
              // prettier-ignore
              route.component
                ? <Route key={name} {...route} />
                : <Redirect key={name} {...route} />
            )}
          </Switch>
        </Main>
        <Footer />
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
