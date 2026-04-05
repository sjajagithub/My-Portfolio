import { Routes, Route } from "react-router-dom";
import Blog from './Blog';
import Contact from './Contact'
import lotus from './lotus.jpg';

function Home() {
  
  return (
    <>
    <img src={lotus} className="img-fluid mx-auto my-5 d-block" alt="lotus" ></img>
    <div className=" bg-body-tertiary rounded col-8 mx-auto p-4 text-center my-4 ">
     <h4 className="fst-italic">About</h4> 
     <p className=""> On Presence is an exploration of how presence shapes the way we live, design, travel, and
encounter the world. Through essays and reflections on culture, ethics, and place, the
project considers how attention, restraint, and atmosphere influence both spaces and
everyday life.</p>
      </div>
      <Blog />
     <Contact />
    </>
  );
}
  

export default Home;
