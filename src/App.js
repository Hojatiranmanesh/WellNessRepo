import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  makeStyles,
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CustomTheme from "./assets/CustomTheme";
import BootomNav from "./components/BootomNav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Login from "./pages/auth/Login";
import ActivateProfile from "./pages/auth/ActivateProfile";
import Signup from "./pages/auth/Signup";
import "./assets/fonts/fonts.css";
import {useSelector} from 'react-redux';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const useStyles = makeStyles({
  root: {
    background: "#d7e2ee",
    minHeight: "100vh",
    paddingBottom: 40
  },
});


const App = props => {
  const classes = useStyles();
  const state = useSelector(state => state.authentication)
  console.log(state)
  return (
    <Router>
      <ThemeProvider theme={CustomTheme}>
        <StylesProvider jss={jss}>
          <div className={classes.root}>
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/profile/edit" component={EditProfile} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/activate" component={ActivateProfile} />

            </Switch>
            {window.location.pathname !== '/login' || window.location.pathname !== '/signup' || window.location.pathname !== '/activate' ? <BootomNav /> : null}

          </div>
        </StylesProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
