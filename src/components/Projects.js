import React,{Component} from 'react';
class Projects extends Component{
  render(){
    return(
      <div className ="container jumbotron wrapper">
         <h3 className="subtitle text-center"><u>Projects</u></h3>
          <div class="card-deck">
	         <div className="card">
		       <img className="card-img-top image-1" src ={require ("./groove3.jpg")}/>
           <div className="card-body">
		       <h6 className="card-title">Moove&Groove Fitness</h6>
           <p className="card-title"><strong>Rails project at OC Full stack path(2018)</strong></p>
           <p className="card-text">Ruby on rails,SQLite3,   Bootstrap4,  Devise,</p>
           <button className="card-title btn btn-success"><a href="https://onedrive.live.com/?authkey=%21AOR_BZoCVhslqwQ&cid=BC98F280AC9CF273&id=BC98F280AC9CF273%2113790&parId=BC98F280AC9CF273%21349&action=locate">view on onedrive</a></button>
           </div>
	         </div>
           <div className="card">
           <img className="card-img-top image-2" src ={require ("./estate.jpeg")}/>
           <div className="card-body">
           <h6 className="card-title">Real estate agency website by WordPress</h6>
             <p className="card-title"><strong>website for Chalets ,Cavier in Aspen,Colorado </strong></p>
             <p className="card-text">WordPress with AgentPress theme</p>
             <button className="card-title btn btn-success"><a href="https://onedrive.live.com/?authkey=%21AEFS5FEFo7gPmWw&id=BC98F280AC9CF273%2111078&cid=BC98F280AC9CF273">view on onedrive</a></button>
           </div>
           </div>
           <div className="card">
		       <img className="card-img-top image-3" src ={require ("./festival.jpg")}/>
           <div className="card-body">
		       <h6 className="card-title">brooklyn Outdoor film festval</h6>
           <p className="card-title"><strong>Muckup website  for OC(full stack developer path)</strong></p>
           <p className="card-title">HTML5,CSS3,JS,  Bootstrap4,JQuery,</p>
           <button className="card-title btn btn-success"><a href="http://kadahizi-com.stackstaging.com/">Preview</a></button>
           </div>
	         </div>
           <div className="card">
           <img className="card-img-top image-4" src ={require ("./portfolio.jpeg")}/>
           <div className="card-body">
           <h6 className="card-title">Build your portfolio site using React</h6>
           <p className="card-title"><strong>Single page app(2018)</strong></p>
           <p className="card-text">javascript, React,Bootstrap4,  HTML5,CSS3</p>
           <button className="card-title btn btn-success"><a href="#">Preview</a></button>
           </div>
           </div>
         </div>
        </div>
    );
  }

}
export default Projects
