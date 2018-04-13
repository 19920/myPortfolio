import React,{Component} from 'react';

class Experience extends Component{
  render(){
    return(
      <div className="wrapper container jumbotron ">
        <section id="experiences" className="experiences-section section ">
          <h2 className ="section-title text-center"><u>Experiences</u></h2>
          <div className="timeline">
            <div>
              <div className="item">
                <div className="work-place">
                  <h5 className="place">Openclassrooms,France(Remote)</h5>
                </div>
                <div className="job-meta">
                  <div className="title">Full stack developer</div>
                  <div className="time">2017-2018</div>
                </div>
                <div className="job-desc">
                  <p>Developed various web projects to obtain a bachelor degree</p>
                  <ul>
                    <li>HTML,CSS,Javascript</li>
                    <li>React,UML</li>
                    <li>Ruby on Rails,SQL</li>
                    <li>Bootstrap</li>
                    <li>Ruby</li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="work-place">
                  <h5 className="place">ORSAMBAY AB,SÖDERHAMN</h5>
                </div>
                <div className="job-meta">
                  <div className="title">Construction career</div>
                  <div className="time">2015-2017</div>
                </div>
                <div className="job-desc">
                  <ul>
                    <li>pool construction</li>
                    <li>platläggning</li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="work-place">
                  <h5 className="place">COFTA(Cooperation For Trade in Africa)</h5>
                </div>
                <div className="job-meta">
                  <div className="title">IT support assistant</div>
                  <div className="time">2010-2011</div>
                </div>
                <div className="job-desc">
                  <ul>
                    <li>IT Hardware and Software support</li>
                    <li>Computer Networking support</li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="work-place">
                  <h5 className="place">United Nations Kongo,Goma</h5>
                </div>
                <div className="job-meta">
                  <div className="title">Translator</div>
                  <div className="time">2012-2013</div>
                </div>
                <div className="job-desc">
                  <ul>
                    <li>Translating English to French or to Swahili Goma(parttime)</li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="work-place">
                  <h5 className="place">Aitel Africa,Kigali-Rwanda</h5>
                </div>
                <div className="job-meta">
                  <div className="title">Airtel customer services agent</div>
                  <div className="time">2011-2012</div>
                </div>
                <div className="job-desc">
                  <ul>
                    <li>Customer credit Acount </li>
                    <li>Customer service support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    );
  }

}
export default Experience;
