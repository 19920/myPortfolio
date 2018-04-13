import React,{Component} from 'react';
class Contact extends Component{
  render(){
    return(
      <div class="wrapper container jumbotron">
        <h2 className ="section-title text-center"><u>Contact Me</u></h2>
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <form name="sentMessage" id="contactForm" novalidate>
              <div class="control-group">
                <div class="form-group  controls">
                  <label>Name</label>
                  <input type="text" class="form-control"  id="name" required data-validation-required-message="Please enter your name."></input>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group  controls">
                  <label>Email Address</label>
                  <input type="email" class="form-control"  id="email" required data-validation-required-message="Please enter your email address."></input>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group col-xs-12  controls">
                  <label>Phone Number</label>
                  <input type="tel" class="form-control"  id="phone" required data-validation-required-message="Please enter your phone number."></input>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group  controls">
                  <label>Message</label>
                  <textarea rows="5" class="form-control"  required data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br/>
              <div id="success"></div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
        <div className ="container-fluid" >
          <h5 className="text-center"><u>My Full Address</u></h5>
          <address className ="text-center">
  				<p><strong>Norrtullsgatan  48</strong></p>
  				<p><strong>826 37 Söderhamn</strong></p>
  				<p><strong>Sweden</strong></p>
  				<p><strong>Telefon, mobil: (+46)73 – 0923388</strong></p>
  				<p><strong>Email :jbatgoal@yahoo.fr</strong></p>
  				</address>
			</div>
      </div>
    );
  }

}
export default Contact;
