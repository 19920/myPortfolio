import React,{Component} from'react';
import Languagelist from './Languagelist';
class Spokenlanguages extends Component{
  render(){
    const {language} = this.props;
    return(
      <div id="skills" className ="jumbotron container ">
        <section id="skills" className="skills-section section ">
          <div className="other-skills">
            <h3 className="subtitle mt-5 text-center"><u>Languages</u></h3>
            <div className="row  item col-12 col-sm-12 mb-8 ">
            {language.map(language=><Languagelist key={language.id} language={language} />)}
            </div>
          </div>
        </section>
      </div>
    );
  }

}
export default Spokenlanguages;
