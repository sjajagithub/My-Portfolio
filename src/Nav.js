import { Link } from "react-router-dom";


function Nav() {
  return (
    <div className="className="my-5 mx-5 d-flex align-items-center justify-content-between>
      <ul className="nav justify-content-end">
     
      <li className="nav-item">
          <Link className="nav-link text-dark fs-4" to="/home">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark fs-4" to="/about">
            About
          </Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link text-dark fs-4" to="/articles">
            Blog
          </Link>
        </li>
      </ul>
      <h1 className=" mx-5 py-2">On Presence</h1>
      
    </div>
  );
}
export default Nav;