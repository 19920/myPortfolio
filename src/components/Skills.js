import React,{Component} from 'react';

class Skills extends Component{
  render(){
    const {knowledge} = this.props;
    const skillsList = knowledge.map(knowledge =>{
      return(
        <div >
        <div>
          <div className="item-inner card ">
            <button className="btn btn-success">{knowledge.name}</button>
            <div className="level card-title text-center">{knowledge.level}</div>
            </div>
          </div>
        </div>
      )

    })

    return(
    <div id="skills" className ="jumbotron container ">
      <section id="skills" className="skills-section section ">
        <h2 className="skills-title text-center"><u>Skills</u></h2>
        <div className="top-skills">
          <h3 className="subtitle">Top skills</h3>
          <div className="row  item col-12 col-sm-12 mb-8 ">
            {skillsList}
          </div>
        </div>
        
      </section>


    </div>
    );
  }

}
export default Skills;
