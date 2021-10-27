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
import ProductList from "./pages/products/ProductList";
import Cart from "./pages/products/Cart";
import Norbu from './pages/evolution/Norbu';
import Appointments from "./pages/appointments/Appointments";
import ReserveAppointment from "./pages/appointments/ReserveAppointment";
import ActivateProfile from "./pages/auth/ActivateProfile";
import QuizzesDims from "./pages/quizzes/QuizzesDims";
import Dimension from './pages/quizzes/Dimension';
import Breathing from './pages/evolution/Breathing';
import OnlineAppointment from './pages/appointments/OnlineAppointment';
import OnlineChat from './pages/appointments/OnlineChat';
import Quiz from './pages/quizzes/Quiz'
import Notifications from './pages/profile/Notifications'
import AddNotif from './pages/profile/AddNotif'
import Signup from "./pages/auth/Signup";
import HealthFiles from "./pages/admin/HealthFiles";
import Analyzes from "./pages/admin/Analyzes";
import SpecilistsPanel from "./pages/admin/SpecilistsPanel";
import QuizSubjects from "./pages/admin/QuizSubjects";
import QuizResult from "./pages/admin/QuizResult";
import SearchFiles from "./pages/admin/SearchFiles";
import FilePanel from "./pages/admin/FilePanel";
import PanelSelection from "./pages/admin/PanelSelection";
import SearchUserInfo from "./pages/admin/SearchUserInfo";
import Paths from "./pages/admin/Paths";
import "./assets/fonts/fonts.css";
import { useSelector } from 'react-redux';




// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: "#d4ebff",
  },
  main: {
    // height: "calc(100vh - 77px)",
    overflow: "auto"
  }
});


const App = props => {
  const classes = useStyles();
  const state = useSelector(state => state.authentication)
  const nav = useSelector(state => {
    return state.nav;
  });
  console.log(state)
  return (
    <Router>
      <ThemeProvider theme={CustomTheme}>
        <StylesProvider jss={jss}>
          <div className={classes.root}>
            <div className={classes.main} style={{ height: (nav) ? "calc(100vh - 65px)" : "100vh" }}>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/profile/edit" component={EditProfile} />
                <Route path="/profile/notifications" exact component={Notifications} />
                <Route path="/profile/notifications/add-notif" component={AddNotif} />
                <Route path="/quizzes" exact component={QuizzesDims} />
                <Route path="/quizzes/dimension" exact component={Dimension} />
                <Route path="/quizzes/dimension/quiz" component={Quiz} />
                <Route path="/evolution" exact component={Evolution} />
                <Route path="/evolution/breathing" component={Breathing} />
                <Route path="/evolution/relaxation" component={Norbu} />
                <Route path="/products" exact component={Products} />
                <Route path="/products/product" component={Product} />
                <Route path="/products/product-list" component={ProductList} />
                <Route path="/products/cart" component={Cart} />
                <Route path="/appointments" exact component={Appointments} />
                <Route path="/appointments/reserve" component={ReserveAppointment} />
                <Route path="/appointments/OnlineApoointment" exact component={OnlineAppointment} />
                <Route path="/appointments/OnlineApoointment/chat" component={OnlineChat} />
                <Route path="/admin/health-files" component={HealthFiles} />
                <Route path="/admin/analyzes" exact component={Analyzes} />
                <Route path="/admin/specilists-panel" exact component={SpecilistsPanel} />
                <Route path="/admin/quiz-subjects" exact component={QuizSubjects} />
                <Route path="/admin/search-files" exact component={SearchFiles} />
                <Route path="/admin/file-panel" exact component={FilePanel} />
                <Route path="/admin/panel-selection" exact component={PanelSelection} />
                <Route path="/admin/paths" exact component={Paths} />
                <Route path="/admin/quiz-result" component={QuizResult} />
                <Route path="/admin/user-info" component={SearchUserInfo} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/activate" component={ActivateProfile} />
              </Switch>
            </div>
            <Route path="(/profile|/profile/quizzes|/quizzes/dimensio|/quizzes/dimension/quiz|/evolution|/evolution/breathing|/evolution/relaxation|/products|/products/product|/appointments|/appointments/reserve|/appointments|/quizzes)" component={() => <BootomNav />} />
          </div>
        </StylesProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
