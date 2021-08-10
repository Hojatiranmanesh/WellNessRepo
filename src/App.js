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
import Evolution from "./pages/evolution/Evolution";
import Products from "./pages/products/Products";
import EditProfile from "./pages/profile/EditProfile";
import Login from "./pages/auth/Login";
import Product from "./pages/products/Product";
import Norbu from './pages/evolution/Norbu';
import Appointments from "./pages/appointments/Appointments";
import ReserveAppointment from "./pages/appointments/ReserveAppointment";
import ActivateProfile from "./pages/auth/ActivateProfile";
import QuizzesDims from "./pages/quizzes/QuizzesDims";
import Dimension from './pages/quizzes/Dimension';
import Breathing from './pages/evolution/Breathing';
import Quiz from './pages/quizzes/Quiz'
import Signup from "./pages/auth/Signup";
import "./assets/fonts/fonts.css";
import { useSelector } from 'react-redux';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, rgba(215,226,238,1) 0%, rgba(111,189,205,1) 100%)"
  },
  main: {
    height: "calc(100vh - 77px)",
    overflow: "auto"
  }
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
            <div className={classes.main}>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/profile/edit" component={EditProfile} />
                <Route path="/quizzes" exact component={QuizzesDims} />
                <Route path="/quizzes/dimension" exact component={Dimension} />
                <Route path="/quizzes/dimension/quiz" component={Quiz} />
                <Route path="/evolution" exact component={Evolution} />
                <Route path="/evolution/breathing" component={Breathing} />
                <Route path="/evolution/relaxation" component={Norbu} />
                <Route path="/products" exact component={Products} />
                <Route path="/products/product" component={Product} />
                <Route path="/appointments" exact component={Appointments} />
                <Route path="/appointments/reserve" component={ReserveAppointment} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/activate" component={ActivateProfile} />
              </Switch>
            </div>
            {window.location.pathname === '/login' ||
              window.location.pathname === '/signup' ||
              window.location.pathname === '/' ||
              window.location.pathname === '/activate' ? null : <BootomNav />}
          </div>
        </StylesProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
