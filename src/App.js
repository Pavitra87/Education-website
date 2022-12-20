import "./App.css";
import Header from "./Component/common/Header/Header";
import Home from "./Component/home/Home.jsx";
import About from "./Component/about/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseHome from "./Component/allcourses/CourseHome";
import Team from "./Component/team/Team.jsx";
import Pricing from "./Component/pricing/Pricing";
import Blog from "./Component/blog/Blog";
import Contact from "./Component/contact/Contact";
import Footer from "./Component/common/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/courses" component={CourseHome} />
          <Route path="/team" component={Team} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/journal" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
