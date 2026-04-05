import civil from './civil.jpg';
import earing from './earing.jpg'
import { Link } from "react-router-dom";
function Blog() {
    return (
        <div>
        <section id="Blog">
            <h2 className='mx-5'>Recent Posts</h2>
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

  
</section>

</div>
    );
  }
  
  export default Blog;
  