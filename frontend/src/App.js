import './App.css';
import Nav from './components/Nav/Nav';
import PostDetails from './components/PostDetails/PostDetails';
import RightNav from './components/RightNav/RightNav';
import Story from './components/Story/Story';
// import logo from './components/images/cientme-logo2.jpeg'


function App() {
  return (
    <>
    {/* < Nav logo={logo} /> */}
    < Nav />
    < Story />
    < PostDetails />
    < RightNav />
    </>
  );
}

export default App;
