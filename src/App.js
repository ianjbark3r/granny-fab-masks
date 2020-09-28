import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import OrderForm from './OrderForm';

import logo from './gfab-logo.jpg';
import fb from './fb-icon.png';
import instagram from './instagram-icon.png';
import depop from './depop-icon.png';

import {
  descriptionClasses,
  largeImageClasses,
  smallImageClasses,
  buttonStyles,
  descriptionStyles,
  descriptionItemStyles,
  iconContainerClasses,
  iconDesktopClasses,
  logoMobileClasses,
  logoDesktopClasses,
  logoStylesDesktop,
  logoStylesMobile,
  redButtonDesktopStyles,
  redButtonMobileStyles,
  titleStyles,
  largeImageStyles,
  smallImageStyles,
  maskPhotoStyles,
  maskPhotoMobileStyles,
} from './styles';

const data = [
  {
    decor: "custom",
    numOfImages: 9
  },
  {
    decor: "floralEmb",
    numOfImages: 4
  },
  {
    decor: "fringe",
    numOfImages: 2
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
    this.handleSubmitted = this.handleSubmitted.bind(this);
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

  handleSubmitted(e) {
    this.setState({
      submitted: true
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
      <div className="App" id="top">
        <div className="container-fluid" onKeyDown={this.handleKeyDown}>
          {this.state.dialogue && 
            <OrderForm 
              close={this.handleClose}
              submitted={this.handleSubmitted}
              state={this.state}
            />
          }
          <div className="row justify-content-center">
            <img 
              alt="Granny Fab logo" 
              className={logoMobileClasses} 
              style={logoStylesMobile} 
              src={logo} />
          </div>
          <div className="row justify-content-center">
            <a
              href="https://www.facebook.com/grannyfabulous"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt="Facebook" className={logoMobileClasses} src={fb} />
            </a>
            <a
              href="https://www.instagram.com/granny_fab/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt="Instagram" className={logoMobileClasses} src={instagram} />
            </a>
            <a
              href="https://www.depop.com/grannyfab/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt="Depop" className={logoMobileClasses} src={depop} />
            </a>
          </div>
          <div 
            className="row justify-content-center"
          >
            <div style={descriptionStyles} className={descriptionClasses}>
              <img 
                alt="Granny Fab logo" 
                className={logoDesktopClasses} 
                style={logoStylesDesktop} 
                src={logo} 
              />
              <div className={iconContainerClasses}>
                <a 
                  href="https://www.facebook.com/grannyfabulous" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <img alt="Facebook" className={iconDesktopClasses} src={fb} />
                </a>
                <a
                  href="https://www.instagram.com/granny_fab/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img alt="Instagram" className={iconDesktopClasses} src={instagram} />
                </a>
                <a
                  href="https://www.depop.com/grannyfab/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img alt="Depop" className={iconDesktopClasses} src={depop} />
                </a>
              </div>
              <h1 style={titleStyles}>MASKS</h1>
              <p style={descriptionItemStyles}>Browse mask photos using the filters below to find the perfect fit for your style.</p>
              <p style={descriptionItemStyles}>You want...</p>
              <form>
                <div style={descriptionItemStyles}>
                  <ul>
                    <li key="0"> 
                      <div className="selectdiv" key="0">
                        <select 
                          id="size" 
                          key="0"
                          value={this.state.size} 
                          onChange={this.handleChange}
                        >
                          <option key="00" value="regular">regular</option>
                          <option key="01" value="large">large</option>
                          <option key="02" value="kids">kid's</option>
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
            <AnchorLink href='#top'>
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