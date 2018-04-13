import React ,{Component} from 'react';

class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light fixed-top " id="mainNav" data-spy="scroll" data-target="#navbarResponsive">
        <div className="container">
        <a className="navbar-brand" href="#">Jean Baptiste Kadahizi</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className=" navbar-collapse " id="navbarResponsive">
          <ul className="navbar-nav ml-auto nav page-nav list-inline">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Ab">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#exp">Experiences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
    );
  }

}
export default Navbar;
