import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import InfoCards from '../components/InfoCards'
import Footer from '../components/Footer'

const Homepage = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar />
            <Banner />
            <AboutUs />
            <InfoCards />
            <Footer />
        </div>
    )
}

export default Homepage