import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from '../src/components/Navbar/Navbar'
import Hero from '../src/components/Hero/Hero'
import Card from '../src/components/Card/Card'
import Upload from '../src/components/Upload/upload'
import Footer from '../src/components/Footer/Footer'
import About from '../src/components/About/About'
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Hero></Hero> 
      <Card></Card> 
      <About></About>  
      <Upload></Upload>
{/* <DocumentView></DocumentView>
<ImageView></ImageView>
<NoticeView></NoticeView> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
