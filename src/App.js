import logo from './logo.svg';
import { Home } from './component/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Health from './component/Health';
import Travel from './component/Travel';
import Header from './component/Header';
import Technology from './component/Technology';
import Blog from './component/Blog';
import Category from './component/Category';
import Page404 from './component/Page404';
import Footer from './component/Footer';
function App() {
  return (

    <>

      <Router>

       <Header />
       
       <Route exact path="/" component={Home}/>



       {/* <Route exact path="/:name" component={Category}/> */}


       <Route exact path="/health" component={Health}/>

       <Route exact path="/travel" component={Travel}/>

       <Route exact path="/technology" component={Technology}/>


       <Route exact path="/blog/:name" component={Blog}/>




       {/* <Route path="*"  component={Page404}/> */}

        <Footer />
      </Router>
      
    </>
  );
}

export default App;
