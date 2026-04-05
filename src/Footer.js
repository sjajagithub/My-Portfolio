import { Link } from "react-router-dom";
function Footer(){
    return(
        <div>
<footer className="py-3 my-4"> 
<ul className="nav justify-content-center border-bottom pb-3 mb-3"> 
<li className="nav-item">
<Link  className="nav-link px-2 text-body-secondary" to="/home">Home</Link>
</li> 
<li className="nav-item">
<Link className="nav-link px-2 text-body-secondary" to="/about">About</Link>
</li>
 <li className="nav-item">
 <Link href="#" className="nav-link px-2 text-body-secondary" to="/articles">Blog</Link>
 </li> 
 </ul> <p className="text-center text-body-secondary">
© On Presence 2026</p> 
</footer>
</div>
);

}

export default Footer;

