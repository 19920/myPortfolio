import React,{Component} from'react';

class Languagelist extends Component{
  render(){
    const {language} = this.props;
      return(
      <div>
        <div className="item-inner card ">
          <button className="btn btn-success">{language.id}</button>
          <button className="btn btn-success">{language.name}</button>
          <div className="level card-title text-center">{language.level}</div>
          </div>
        </div>
    );
  }
}
  export default Languagelist;
