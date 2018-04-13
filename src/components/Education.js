import React,{Component} from 'react';

class Education extends Component {
  render() {
    return (
      <div id="education" className ="jumbotron container ">
    	<section id="education" className="education-section section ">
        <h2 className="section-title text-center"><u>Education</u></h2>
        <h6 className="subtitle text-danger">Degrees:</h6>
        <div className="row ">
          <div className="item col-8 col-md-4 card">
            <div className="item-inner">
              <h6 className="degree">Full satack developer bachelor</h6>
              <div className="school">Openclassrooms(France)</div>
              <div className="time">2017-2018</div>
              <div className="description">
                <em>HTML5,CSS3,Javascript,UML,SQL,React js,Bootstrap,Ruby,Ruby on Rails,</em>
              </div>
            </div>
          </div>
          <div className="item col-12 col-md-4 card">
            <div className="item-inner">
              <h6 className="degree">A1 Diploma(Electronics and Telecommunication)</h6>
              <div className="school">Tumba College of Technology(Rwanda)</div>
              <div className="time">2009-2011</div>
              <div className="description">
                <em>Mathematics(I&II),digital Electronics,Telephony systems,Optical&digital&satellite communication,Radio&TV Engeneering,Microwave&Radar Engeneering,Antenna and Wave Propagation</em>
              </div>
            </div>
          </div>
          <div className="item col-12 col-md-4 card">
            <div className="item-inner">
              <h6 className="degree">A2 Diploma(Mathematics and Physics)</h6>
              <div className="school">Institut de formation Apostolique de Kimihurura (IFAK-Rwanda)</div>
              <div className="time">2003-2009</div>
              <div className="description">
                <em>Mathematics,Physics</em>
              </div>
            </div>
          </div>
          <h6 className="subtitle text-danger">Non Degrees:</h6>
          <div className="row">
            <div className="item col-8 col-md-4 card">
              <div className="item-inner">
                <h6 className="degree">The Complete Web Developer course</h6>
                <div className="school">Udemy(Remote)</div>
                <div className="time">2016-2017</div>
                <div className="description">
                  <em>HTML, CSS, Javascript,jQuery, PHP, Python, MySQL,Bootstrap</em>
                </div>
              </div>
          </div>
          <div className="item col-8 col-md-4 card">
            <div className="item-inner">
              <h6 className="degree">Complete React JS web developer with ES6 course</h6>
              <div className="school">Udemy(Remote)</div>
              <div className="time">2017-2018</div>
              <div className="description">
                <em>react JS, ES6, firebase, Auth0</em>
              </div>
            </div>
        </div>
        <div className="item col-8 col-md-4 card">
          <div className="item-inner">
            <h6 className="degree">The Advanced Web Developer Bootcamp course</h6>
            <div className="school">Udemy(Remote)</div>
            <div className="time">2017-2018</div>
            <div className="description">
              <em>React 16, Redux, D3, ES2015, Testing, CSS Flexbox, Animations, SVG, AJAX</em>
            </div>
          </div>
          </div>
          <div className="item col-8 col-md-4 card">
            <div className="item-inner">
              <h6 className="degree"> IT essentials(PC hardware and software maintenance)</h6>
              <div className="school">CISCO(Remote)</div>
              <div className="time">2009-2011</div>
              <div className="description">
                <em>PC Hardware and Software maintenance</em>
              </div>
            </div>
            </div>
            <div className="item col-8 col-md-4 card">
              <div className="item-inner">
                <h6 className="degree">CCNA networking academy</h6>
                <div className="school">CISCO(Remote)</div>
                <div className="time">2009-2011</div>
                <div className="description">
                  <em>Networking</em>
                </div>
              </div>
              </div>
              <div className="item col-8 col-md-4 card">
                <div className="item-inner">
                  <h6 className="degree">Certificate in  cabin crew Training Program from INFLIGHT INSTITUTE(CANADA)</h6>
                  <div className="school">INFLIGHT INSTITUTE(CANADA)(Remote)</div>
                  <div className="time">2015-2016</div>
                  <div className="description">
                    <em>Cabin crew (working within Airplanes)</em>
                  </div>
                </div>
                </div>
        </div>
      </div>

      </section>
        </div>

    );
  }
}

export default Education;
