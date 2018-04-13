import React,{Component} from'react';
class Spokenlanguages extends Component{
  render(){
    const {language} = this.props;
    const languageList= language.map(language =>{
      console.log(language.name);
      return(
      <div>
        <div className="item-inner card ">
          <button className="btn btn-success">{language.id}</button>
          <button className="btn btn-success">{language.name}</button>
          <div className="level card-title text-center">{language.level}</div>
          </div>
        </div>
    )
    })
    return(
      <div id="skills" className ="jumbotron container ">
        <section id="skills" className="skills-section section ">
          <div className="other-skills">
            <h3 className="subtitle mt-5 text-center"><u>Languages</u></h3>
            <div className="row  item col-12 col-sm-12 mb-8 ">
            {languageList}
            </div>
          </div>
        </section>
      </div>
    );
  }

}
export default Spokenlanguages;
