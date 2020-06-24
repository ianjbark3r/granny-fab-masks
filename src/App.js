import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from './gfab-logo.jpg';

import {
  closeDialogueClasses,
  confirmDialogueClasses,
  confirmDialogueBGMobileClasses,
  confirmDialogueBGDesktopClasses,
  confirmDialogueWrapperClasses,
  descriptionClasses,
  largeImageClasses,
  smallImageClasses,
  buttonStyles,
  closeDialogueStyles,
  confirmDialogueStyles,
  confirmDialogueBGDesktopStyles,
  confirmDialogueBGMobileStyles,
  descriptionStyles,
  descriptionItemStyles,
  dialogueFormSyles,
  logoMobileClasses,
  logoDesktopClasses,
  logoStylesDesktop,
  logoStylesMobile,
  redButtonDesktopStyles,
  redButtonMobileStyles,
  submitButtonStyles,
  titleStyles,
  largeImageStyles,
  smallImageStyles,
  maskPhotoStyles,
  maskPhotoMobileStyles
} from './styles';

const data = [
  {
    decor: "custom",
    numOfImages: 5
  },
  {
    decor: "floralEmb",
    numOfImages: 3
  },
  {
    decor: "halfBling",
    numOfImages: 3
  },
  {
    decor: "heavyBling",
    numOfImages: 6
  },
  {
    decor: "laceEmb",
    numOfImages: 1
  },
  {
    decor: "plain",
    numOfImages: 1
  },
  {
    decor: "sequin",
    numOfImages: 3
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogue: false,
      name: "",
      email: "",
      size: "small",
      decor: "heavyBling",
      num: 0,
      color: "black",
      shipping: "delivery",
      notes: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDialogue = this.handleDialogue.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleClose(e){
    this.setState({
      dialogue: false
    });
  }

  handleDialogue(e){
    this.setState({
      dialogue: true
    });
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.setState({
        dialogue: false
      });
      console.log(this.state);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let id = Date.now();

    let templateParams = {
      id: id,
      name: this.state.name,
      email: this.state.email,
      size: this.state.size,
      decor: this.state.decor,
      color: this.state.color,
      shipping: this.state.shipping,
      notes: this.state.notes
    }

    this.sendFeedback(templateParams);
    this.setState({
      submitted: true
    });
  }

  sendFeedback(templateParams) {
    const serviceID = 'mailgun'
    const templateID = 'new_order'

    window.emailjs
      .send(serviceID, templateID, templateParams)
      .then(function () {
        console.log("Form successfully submitted")
        alert("Thank you for your order! We will reach out to you soon with a price quote, so sit tight and stay frosty!");
      }, function (err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      })
      .then(() => {
        this.setState({
          dialogue: false
        });
      });
  }


  render() {

    const currDecor = this.state.decor;
    const num = data.filter((val) => {
        return val.decor === currDecor;
      })[0].numOfImages;

    let elements = [];
    let mobileElements = [];
    let i = 0;

    while (i < num) {
      elements.push(
        <img 
          alt={`${currDecor}_${i}`}
          className={"d-block mx-auto"}
          key={`${i}_lg`}
          style={maskPhotoStyles} 
          src={`/img/${currDecor}_${i}.jpg`} 
        />
      )
      mobileElements.push(
        <img 
          alt={`${currDecor}_${i}`}
          key={`${i}_sm`}
          style={maskPhotoMobileStyles} 
          src={`/img/${currDecor}_${i}.jpg`}
        />
      )
      i++;
    }

    return (
      <div className="App">
        <div className="container-fluid" onKeyDown={this.handleKeyDown}>
          {this.state.dialogue && (
            <>
              <div 
                className={confirmDialogueBGDesktopClasses}
                onClick={this.handleClose} 
                style={confirmDialogueBGDesktopStyles}
              ></div>
              <div 
                className={confirmDialogueBGMobileClasses} 
                onClick={this.handleClose}
                style={confirmDialogueBGMobileStyles}
              ></div>
              <div className={confirmDialogueWrapperClasses}>
                <div 
                  className={confirmDialogueClasses} 
                  id="confirm-dialogue"
                  style={confirmDialogueStyles}
                >
                  <div 
                    className={closeDialogueClasses}
                    onClick={this.handleClose} 
                    style={closeDialogueStyles}
                  >
                    X
                  </div>
                  <form onSubmit={this.handleSubmit} style={dialogueFormSyles}>
                    <p>
                      Please confirm your order details. If you need a special size or are submitting a custom order, please provide details in the notes section below.
                    </p>
                    <div className="form-group">
                      <label className="form-check-label">Name:</label>
                      <input
                        className="form-control"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                    <div className="form-group">  
                      <label className="form-check-label">Email address:</label>
                      <input
                        className="form-control"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                    <div className="form-group">  
                      <label className="form-check-label">Size:</label>
                      <select
                        className="form-control"
                        id="size"
                        value={this.state.size}
                        onChange={this.handleChange}
                      >
                        <option value="small">small</option>
                        <option value="large">large</option>
                        <option value="kids">kids</option>
                        <option value="custom">custom</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Decor:</label>
                      <select
                        className="form-control"
                        id="decor"
                        value={this.state.decor}
                        onChange={this.handleChange}
                      >
                        <option value="heavyBling">heavy bling</option>
                        <option value="halfBling">half bling</option>
                        <option value="floralEmb">floral embroidery</option>
                        <option value="laceEmb">lace embroidery</option>
                        <option value="sequin">sequin</option>
                        <option value="plain">plain</option>
                        <option value="custom">custom</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Color:</label>
                      <select
                        className="form-control"
                        id="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                      >
                        <option value="black">black</option>
                        <option value="white">white</option>
                        <option value="grey">grey</option>
                        <option value="leopard">leopard print</option>
                        <option value="custom">custom</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Shipping:</label>
                      <select
                        className="form-control"
                        id="shipping"
                        value={this.state.shipping}
                        onChange={this.handleChange}
                      >
                        <option value="pickup">pick-up</option>
                        <option value="delivery">delivery</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Custom/sizing notes</label>
                      <textarea 
                        className="form-control" 
                        id="notes"
                        onChange={this.handleChange} 
                        rows="3"
                        value={this.state.notes}
                        ></textarea>
                    </div>
                    <button style={submitButtonStyles} type="submit">submit</button>
                  </form>
                </div>
              </div>
            </>
          )}
          <div id="orderform" className="row justify-content-center">
            
            <img alt="Granny Fab logo" className={logoMobileClasses} style={logoStylesMobile} src={logo}></img>
            <div style={descriptionStyles} className={descriptionClasses}>
              <img alt="Granny Fab logo" className={logoDesktopClasses} style={logoStylesDesktop} src={logo}></img>
              <h1 style={titleStyles}>MASKS</h1>
              <p style={descriptionItemStyles}>Browse mask photos using the filters below to find the perfect fit for your style.</p>
              <p style={descriptionItemStyles}>You want...</p>
              <form>
                <div style={descriptionItemStyles}>
                  <ul>
                    <li key="0"> 
                      a <div className="selectdiv" key="0">
                        <select 
                          id="size" 
                          key="0"
                          value={this.state.size} 
                          onChange={this.handleChange}
                          >
                          <option key="00" value="small">small</option>
                          <option key="01" value="large">large</option>
                          <option key="02" value="kids">kids</option>
                          <option key="03" value="custom">custom</option>
                        </select> 
                      </div> mask with
                    </li>
                    <li key="1">
                      <div className="selectdiv" key="1">
                        <select 
                          id="decor"
                          key="1" 
                          value={this.state.decor} 
                          onChange={this.handleChange}
                          >
                          <option key="10" value="heavyBling">heavy bling</option>
                          <option key="11" value="halfBling">half bling</option>
                          <option key="12" value="floralEmb">floral embroidery</option>
                          <option key="13" value="laceEmb">lace embroidery</option>
                          <option key="14" value="sequin">sequin</option>
                          <option key="15" value="plain">plain</option>
                          <option key="16" value="custom">custom</option>
                        </select>  
                      </div> decor,
                    </li>
                    <li key="2">
                      in <div className="selectdiv">
                        <select 
                          id="color"
                          key="2"
                          value={this.state.color} 
                          onChange={this.handleChange}
                          >
                          <option key="20" value="black">black</option>
                          <option key="21" value="white">white</option>
                          <option key="22" value="grey">grey</option>
                          <option key="23" value="leopard">leopard print</option>
                          <option key="24" value="custom">custom</option>
                        </select>
                      </div>.
                    </li>
                  </ul>
                </div>
                <div style={descriptionItemStyles}>
                  For <div style={{marginLeft:"0"}} className="selectdiv">
                    <select 
                      id="shipping" 
                      value={this.state.shipping}
                      onChange={this.handleChange}
                      >
                      <option value="pickup">pick-up</option>
                      <option value="delivery">delivery</option>
                    </select>
                  </div>.
                </div>
                <AnchorLink href='#masks'>
                  <button style={buttonStyles} className={smallImageClasses}>see masks</button>
                </AnchorLink>
              </form>
            </div>
            <div style={largeImageStyles} className={largeImageClasses}>
              {elements.map(element => element)}
            </div>
            <div id='masks' style={smallImageStyles} className={smallImageClasses}>
              {mobileElements.map(element => element)}
            </div>
            <button
              className={largeImageClasses}
              onClick={this.handleDialogue}
              style={redButtonDesktopStyles} 
              >order</button>
            <AnchorLink href='#orderform'>
              <button
                className={smallImageClasses}
                onClick={this.handleDialogue}
                style={redButtonMobileStyles}
                >order</button>
            </AnchorLink>
          </div>
        </div>
      </div>
    );
  }
}