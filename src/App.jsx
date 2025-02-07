import { BrowserRouter } from "react-router-dom";

import { Overview, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Credits } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#000000]'>
        <div className='bg-[url(/public/images/bg.png)] bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Overview />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Credits/>
      </div>
    </BrowserRouter>
  );
}

export default App;