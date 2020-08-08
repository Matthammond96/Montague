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
      name: "",
      phone: "",
      email: "",
      message: "",
      success: false,
      error: false
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      error: ""
    })
  }

  sendEmail(e) {
    if (this.state.name === "") return this.setState({error: true});
    if (this.state.phone === "") return this.setState({error: true});
    if (this.state.email === "") return this.setState({error: true});
    if (this.state.message === "") return this.setState({error: true});

    if (!this.state.email.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) return this.setState({error: true});

    emailjs.sendForm('gmail', 'template_MFaczJnf', e.target, 'user_69nyfQVMDHp4qYJveoY49')
      .then((result) => {
          this.setState({success: true,
          name: "",
          phone: "",
          email: "",
          message: "",});
      }, (error) => {
        this.setState({error: true});
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
      
    }, 5000);
  }

  onClick(e) {
    e.preventDefault();

    const ex = document.getElementById("ex");

    ex.click()
    // this.sendEmail(ex);
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

                { this.state.success ? (
                  <p className="response">Your enquiry has succesfully been submitted.A member of our team will get back to you within 48 hours.</p>
                ): null }

                {this.state.error ? (
                  <p className="response">Your enquiry could not be sumbitted, please try again, or call us on 020 7118 1162</p>
                ): null}

                <form id="form" className="contact-form" onSubmit={this.sendEmail}>
                  <div className="form-group">
                    <input type="text" name="name" onChange={this.handleChange("name")} placeholder="Full Name" value={this.state.name} required/>
                    <input type="text" name="phone" placeholder="Phone Number" onChange={this.handleChange("phone")} value={this.state.phone} required />                    
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" onChange={this.handleChange("email")} placeholder="Email Address" value={this.state.email} required/>
                  </div>
                  <div className="form-group last">
                    <textarea name="message" placeholder="Your Enquiry" onChange={this.handleChange("message")} value={this.state.message} required/>
                  </div>  
                  <button id="ex" type="submit">Submit</button>
                  <a href="#" onClick={(e => this.onClick(e))}>Submit</a>
              </form>

            </div>
          </div>
          <div className="footer">
            <h4>further together</h4>
            <p>10 Brick Street, Mayfair, W1J 7DF<br></br>Tel: 020 7118 1162<br></br><span><a target="_blank" href="https://www.instagram.com/montaguelondon/"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram-alt" viewBox="0 0 32 32"><path class="cls-1" d="M16 2.88c4.27 0 4.78 0 6.47.1 4.33.19 6.36 2.25 6.56 6.56.07 1.68.09 2.19.09 6.46s0 4.78-.09 6.47c-.2 4.3-2.22 6.36-6.56 6.56-1.69.07-2.2.09-6.47.09s-4.78 0-6.47-.09c-4.34-.2-6.36-2.27-6.55-6.56-.08-1.69-.1-2.2-.1-6.47s0-4.78.1-6.47C3.17 5.23 5.19 3.17 9.53 3c1.69-.1 2.2-.12 6.47-.12zM16 0c-4.35 0-4.89 0-6.6.1C3.59.36.36 3.59.1 9.4 0 11.11 0 11.65 0 16s0 4.89.1 6.6c.26 5.81 3.49 9 9.3 9.3 1.71.08 2.25.1 6.6.1s4.89 0 6.6-.1c5.8-.26 9-3.49 9.3-9.3.08-1.71.1-2.25.1-6.6s0-4.89-.1-6.6c-.26-5.8-3.49-9-9.3-9.3C20.89 0 20.35 0 16 0zm0 7.78A8.22 8.22 0 1 0 24.22 16 8.22 8.22 0 0 0 16 7.78zm0 13.55A5.33 5.33 0 1 1 21.33 16 5.32 5.32 0 0 1 16 21.33zm8.54-15.79a1.92 1.92 0 1 0 1.92 1.92 1.92 1.92 0 0 0-1.92-1.92z"></path></svg></a></span></p>
            {/* <p>10 Brick Street, Mayfair, W1J 7DF<br></br>E: info@montaguerealestate.com<br></br>Tel: 020 7118 1162</p> */}
          </div>
          {/* <div className="breadcrumbs">
            <div className="crumbs active"></div>
            <div className="crumbs"></div>
            <div className="crumbs"></div>
          </div> */}
        </div>

        <div className="overlay"></div>
        <div className={"background image-1" + (this.state.image1 ? " active" : " hidden") }></div>
        <div className={"background image-2" + (this.state.image2 ? " active" : " hidden") }></div>
        <div className={"background image-3" + (this.state.image3 ? " active" : " hidden") }></div>
      </div>
      </div>
    )
  }
}

export default Landing;