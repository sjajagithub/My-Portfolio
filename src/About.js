
function About() {
    return (
<div>
<section id="about">
<div className="aboutMe">
<h2>Get to know more</h2>
<h1>About me</h1>
<div className="row justify-content-center m-5">
  <div className="col-sm-3 mb-3 mb-sm-0">
    <div className="card h-100 ">
      <div className="card-body">
      <div className="icon-experience icon-link">
      <svg className="bi bi-person-workspace" xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
</svg>
        <h5 className="card-title ">Experience</h5>
        </div>
        <p className="card-text">4+ years IT functional Consultant</p>
        <p className="card-text">4 years Customer Quality Ingineer</p>
      </div>
    </div>
  </div>
  <div className=" row col-sm-3 ">
    <div className="card h-100 ">
      <div className="card-body">
      <div className="icon-experience icon-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backpack4" viewBox="0 0 16 16">
  <path d="M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
  <path d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1c0 .52.198.993.523 1.349A.5.5 0 0 0 2 6.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.5a.5.5 0 0 0-.023-.151c.325-.356.523-.83.523-1.349V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2m0 1a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1M3 14V6.937q.24.062.5.063h4v.5a.5.5 0 0 0 1 0V7h4q.26 0 .5-.063V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m9.5-11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
</svg>
      <h5 className="card-title ">Education</h5>
      </div>
        <p className="card-text">Quality & Projects Management</p>
        <p className="card-text">Industrial Engineering & Logistics</p>
      </div>
    </div>
  </div>
</div>
       
</div>
<div className="row justify-content-center m-3">
  <p className="lh-base col-12 col-md-8 col-lg-6 text-justify">
  I am currently working as a Functional IT Consultant. My work as a consultant has allowed me to gain experience in different industries, such as insurance, public finance, and the cosmetics industry.
I previously worked in the automotive industry as a Customer Quality Engineer, which helped me develop strong customer service skills.
I am fluent in French, English, and Spanish.
  </p>
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16" href="#" onClick={() => {
  document.getElementById("experience").scrollIntoView({ behavior: "smooth" });}}>
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>
</section>
</div>     
    );
  }
  
  export default About;
  