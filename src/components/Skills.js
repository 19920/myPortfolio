import React,{Component} from 'react';
import Skill from './skill';
import './Skills.css';

class Skills extends Component{
  render(){
    const {knowledge} = this.props;
    return(
    <div id="skills" className ="jumbotron container ">
      <section id="skills" className="skills-section section ">
        <h2 className="skills-title text-center"><u>Skills</u></h2>
        <div className="top-skills skills">
          <h3 className="subtitle">Top skills</h3>
          <div className="row  item col-12 col-sm-12 mb-8 knowledge">
              {knowledge.map(knowledge => <Skill key={knowledge.id} knowledge={knowledge} />)}
          </div>
        </div>

      </section>


    </div>
    );
  }

}
export default Skills;
