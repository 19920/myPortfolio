import React,{Component} from 'react';
import './Skills.css';

   class Skill extends Component{
     render(){
    const {knowledge} = this.props;
       return(
        <div >
        <div>
          <div className="item-inner card skill">
            <button className="btn btn-success">{knowledge.name}</button>
            <div className="level card-title text-center">{knowledge.level}</div>
            </div>
          </div>
        </div>
	      )
    }

	  }
	  export default Skill;
