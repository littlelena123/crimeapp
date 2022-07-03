
import React, {useState} from 'react'
import MapSection from '../components/MapSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import StatisticsSection from '../components/StatisticsSection';
import Footer from '../components/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            
           
            <MapSection/>
            <Footer/>
          </>
    );
};

export default Home
