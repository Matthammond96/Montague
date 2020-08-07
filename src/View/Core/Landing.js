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

    emailjs.sendForm('gmail', 'template_MFaczJnf', e, 'user_69nyfQVMDHp4qYJveoY49')
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

    const ex = document.getElementById("form")
    this.sendEmail(ex);
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
                    <input type="text" name="name" onChange={this.handleChange("name")} placeholder="Full Name" value={this.state.name}/>
                    <input name="phone" placeholder="Phone Number" onChange={this.handleChange("phone")} value={this.state.phone} />                    
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" onChange={this.handleChange("email")} placeholder="Email Address" value={this.state.email}/>
                  </div>
                  <div className="form-group last">
                    <textarea name="message" placeholder="Your Enquiry" onChange={this.handleChange("message")} value={this.state.message}/>
                  </div>  
                  <button id="ex" type="submit">Submit</button>
                  <a href="#" onClick={(e => this.onClick(e))}>Submit</a>
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