import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/about';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Socials from './components/Socials';


function App() {
  return (
    <div className="font-inter bg-[#030E12] text-white">
     <Header/>
     <Hero/>
     <About />
     <Portfolio />
     <Contact />
     <Socials />
     {/* <Footer /> */}
    </div>
  );
}

export default App;
