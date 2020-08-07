import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import "../Styles/landing.sass";
import '../Styles/navigation.sass';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: 1,
      image1: true,
      image2: false,
      image3: false,
      name: "Matt Hammond",
      phone: "07854217123",
      email: "matt@personalised.io",
      enquiry: "This is my enquiry"
    }
  }

  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_MFaczJnf', e.target, 'user_69nyfQVMDHp4qYJveoY49')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  componentWillMount() {
    setInterval(() => {
      
      if (this.state.image === 3) {
        this.setState({image: 1});
      } else {
        this.setState({image: this.state.image + 1});
      }

      if (this.state.image === 1) {
        this.setState({image1: true, image2: false, image3: false})
      }


      if (this.state.image === 2) {
        this.setState({image1: false, image2: true, image3: false})
      }


      if (this.state.image === 3) {
        this.setState({image1: false, image2: false, image3: true})
      }
      
    }, 2900);
  }

  render() {
    
    return (
      <div>
        <div className="logo">
            <img alt="montage properties" src="logo.png"></img>
          </div>
      
      <div className="landing-page">
        
        <div className="image">
          
          <div className="form">
            <div>
              <h1>Website Coming&nbsp;Soon</h1>
              <p>Montague Real Estate is known for its refreshing, modern and luxury approach to real estate, whilst providing a premium service to clients across the globe.  Our relationships with clients can start with something as simple as real estate, however our services go far beyond that including, complex acquisitions, investment advice and luxury sales.</p>
              {/* <p class="enquiry-text">For any current enquires or wish to stay update to date please fill in the contact form below.</p> */}

                <form className="contact-form" onSubmit={this.sendEmail}>
                  <div className="form-group">
                    <input type="text" name="user_name" value={this.state.name}/>
                    <input name="contact_number" value={this.state.phone} />                    
                  </div>
                  <div className="form-group">
                    <input type="email" name="user_email" value={this.state.email}/>
                  </div>
                  <div className="form-group last">
                    <textarea name="message"  value={this.state.enquiry}/>
                  </div>  
                  <a href="#" onclick="$(this).closest('form').submit()">Submit</a>
              </form>

            </div>
          </div>
          <div className="footer">
            <h4>further together</h4>
            <p>10 Brick Street, Mayfair, W1J 7DF</p>
            {/* <p>10 Brick Street, Mayfair, W1J 7DF<br></br>E: info@montaguerealestate.com<br></br>Tel: 020 7118 1162</p> */}
          </div>
          {/* <div className="breadcrumbs">
            <div className="crumbs active"></div>
            <div className="crumbs"></div>
            <div className="crumbs"></div>
          </div> */}
        </div>


        <div className={"background image-1" + (this.state.image1 ? " active" : " hidden") }></div>
        <div className={"background image-2" + (this.state.image2 ? " active" : " hidden") }></div>
        <div className={"background image-3" + (this.state.image3 ? " active" : " hidden") }></div>
      </div>
      </div>
    )
  }
}

export default Landing;