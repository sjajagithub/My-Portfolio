import me from './me.png';
import './index';
function Nav(){
    return(
        <div>
        <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active text-dark fs-4" aria-current="page" href="#" onClick={() => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });}}>About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark fs-4"  href="#" onClick={() => {
  document.getElementById("experience").scrollIntoView({ behavior: "smooth" });}} >Experience</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark fs-4" href="#" onClick={() => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });}}>Contact</a>
  </li>
</ul>


<div className="profile">
      <div className="pic-container">
        <img src={me} className="myPic" />
      </div>
      <div className="info">
        <h1 className="title">Sara JAJA</h1>
        <h5 className="section__text__p2">IT Consultant</h5>
        <h5 className="section__text__p1">Paris, France</h5>
        <div className="buttons">
        <a type="button" className="btn btn-primary btn-dark" href="https://www.linkedin.com/in/sara-jaja-31752610b/"
        target="_blank"
        rel="noopener noreferrer"
        >Linkedin</a>
        <button type="button" className="btn btn-primary btn-light" onClick={() => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });}}>Contact Form</button>
        </div>
      </div>
    </div>



</div>
  
    )
}

export default Nav;
