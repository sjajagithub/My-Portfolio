import { Routes, Route, Link } from "react-router-dom";
import civil from './civil.jpg';
import earing from './earing.jpg'

function Articles() {
  return (
    <div>
    <h2 className='mx-5'>Recent posts</h2>
    <div className="row mx-5 my-5"> 
            <div className="col-md-6">
             <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"> 
             <div className="col p-4 d-flex flex-column position-static"> 
             <h3 className="mb-0">The civil gesture</h3>
              <div clasName="mb-1 text-body-secondary">4th of April 2026</div>
               <p className="card-text mb-auto">“It is easy to forget that sophistication is not rare in humans—only quiet.”
From the moment survival stabilized, human attention shifted away from mere
endurance and toward relation.</p> 
               <Link href="#" className="icon-link gap-1 icon-link-hover stretched-link" to="/gesture">Continue reading</Link> 
 </div>
  <div className="col-auto d-none d-lg-block"> 
  <img src={civil} className="bd-placeholder-img "  height="250" preserveAspectRatio="xMidYMid slice" role="img" width="200"/>
  </div> 
  </div> 
  </div> 
  <div className="col-md-6"> <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
   <div className="col p-4 d-flex flex-column position-static"> 
   <h3 className="mb-0">Presence Is Not Performance</h3> 
   <div className="mb-1 text-body-secondary">4th of April 2026</div> 
   <p className="mb-auto">“To thine own self be true.”
— Shakespeare, Hamlet

This line has endured not because it is poetic, but because it exposes a quiet
contradiction.</p> 
   <Link href="#" className="icon-link gap-1 icon-link-hover stretched-link" to="/performance">
Continue reading
</Link> 
</div>
 <div className="col-auto d-none d-lg-block"> 
 <img src={earing}aria-label="Placeholder: Thumbnail" class="bd-placeholder-img " height="250" preserveAspectRatio="xMidYMid slice" role="img" width="200"/>
 </div> 
 </div> 
 </div> 
 </div>

 <div class="row mx-5">
  <div class="col-md-6"> 
  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
   <div class="col p-4 d-flex flex-column position-static">
    <strong class="d-inline-block mb-2 text-primary-emphasis">World</strong> 
    <h3 class="mb-0">Featured post</h3> 
    <div class="mb-1 text-body-secondary">Nov 12</div> 
    <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p> 
    <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
Continue reading
</a> 
</div> <div class="col-auto d-none d-lg-block"> 
<svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img " height="250" preserveAspectRatio="xMidYMid slice" role="img" width="200" xmlns="http://www.w3.org/2000/svg">
<title>Placeholder</title>
<text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
</svg> 
</div> 
</div> 
</div>
 <div class="col-md-6">
  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"> 
  <div class="col p-4 d-flex flex-column position-static"> 
  <strong class="d-inline-block mb-2 text-success-emphasis">Design</strong> 
  <h3 class="mb-0">Post title</h3>
   <div class="mb-1 text-body-secondary">Nov 11</div>
    <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
     <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
Continue reading
 </a> 
</div> 
<div class="col-auto d-none d-lg-block">
 <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img " height="250" preserveAspectRatio="xMidYMid slice" role="img" width="200" xmlns="http://www.w3.org/2000/svg">
 <title>Placeholder</title>
 <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
 </svg> 
 </div> 
 </div>
  </div>
   </div>
    
    </div>
  );
}
  

export default Articles;