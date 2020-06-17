import React, { Component } from 'react';

const largeImageClasses = "col-md-6 d-none d-lg-block"

const smallImageClasses = "col-sm-12 d-block d-lg-none"

const descriptionClasses = "col-md col-sm-10"

const titleStyles = {
  fontSize:"2.5rem", 
  fontWeight:"700", 
  marginBottom:"3vh",
  paddingTop:"calc(4vh + 5vw)"
}

const descriptionStyles = {
  height:"90vh",
  margin:"0 7vw 0 7vw"
}

const descriptionItemStyles = {
  fontFamily:"Helvetica Neue, sans-serif",
  fontSize:"1.1rem",
  fontWeight:"bold",
  lineHeight:"1.7rem",
  marginBottom:"2.8vh"
}

const buttonStyles = {
  backgroundColor:"#FFF",
  border:"1px solid",
  fontSize:"1.3rem",
  height:"2.5rem",
  marginBottom:"2rem",
  marginTop:"3rem",
  marginRight:"1.5rem",
  width:"10rem"
}

const redButtonDesktopStyles = {
  backgroundColor:"#c83f49",
  borderRadius:"100px",
  border:"none",
  color:"#FFF",
  fontSize:"1.3rem",
  fontWeight:"bold",
  height:"3rem",
  marginTop:"2.8vh",
  marginBottom:"3vh",
  position:"absolute",
  bottom:"5vh",
  right:"2.5vw",
  width:"12rem"
}

const redButtonMobileStyles = {
  backgroundColor:"#c83f49",
  borderRadius:"100px",
  border:"none",
  color:"#FFF",
  fontSize:"1.3rem",
  fontWeight:"bold",
  height:"3rem",
  marginTop:"2.8vh",
  marginBottom:"3vh",
  position:"absolute",
  bottom:"-90vh",
  right:"5vw",
  width:"12rem"
}

const largeImageStyles = {
  backgroundColor:"#EEE",
  height:"100vh",
  paddingLeft:"5vw",
  paddingTop:"5vh",
  overflow:"scroll"
}

const smallImageStyles = {
  backgroundColor:"#EEE",
  height:"100vh",
  paddingTop:"3vh",
  overflow:"scroll"
}

const maskPhotoStyles = {
  backgroundColor:"#000",
  display:"inline-block",
  height:"150px",
  width:"200px",
  margin:"auto",
  marginBottom:"1rem",
  marginLeft:"1rem"
}

const maskPhotoMobileStyles = {
  backgroundColor:"#000",
  display:"block",
  height:"25vh",
  width:"40vh",
  margin:"auto",
  marginBottom:"1rem"
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div style={descriptionStyles} className={descriptionClasses}>
              <h1 style={titleStyles}>MASKS</h1>
              <p style={descriptionItemStyles}>Browse masks using the filters below to find the perfect fit for your style.</p>
              <p style={descriptionItemStyles}>"I want...</p>
              <form>
                <p style={descriptionItemStyles}>
                  <ul>
                    <li> 
                      a <div className="selectdiv">
                        <select id="size" name="size">
                          <option value="small">small</option>
                          <option value="medium">medium</option>
                          <option value="large">large</option>
                          <option value="xl">extra large</option>
                        </select> 
                      </div> mask with
                    </li>
                    <li>
                      <div className="selectdiv">
                        <select id="embroidery" name="embroidery">
                          <option value="nopref">no preference</option>
                          <option value="light">light</option>
                          <option value="medium">medium</option>
                          <option value="heavy">heavy</option>
                        </select>  
                      </div> embroidery,
                    </li>
                    <li>
                      <div className="selectdiv">
                        <select id="bling" name="bling">
                          <option value="nopref">no preference</option>
                          <option value="light">light</option>
                          <option value="medium">medium</option>
                          <option value="heavy">heavy</option>
                        </select>
                      </div> bling,
                    </li>
                    <li>
                      <div className="selectdiv">
                        and <select id="category" name="category">
                          <option value="nopref">no preference</option>
                          <option value="opt1">option 1</option>
                          <option value="opt2">option 2</option>
                          <option value="opt3">option 3</option>
                        </select>
                      </div> category
                    </li>
                  </ul>
                </p>
                <p style={descriptionItemStyles}>
                  For <div style={{marginLeft:"0"}} className="selectdiv">
                        <select id="shipping" name="shipping">
                          <option value="pickup">pick-up</option>
                          <option value="delivery">delivery</option>
                        </select>
                      </div>."
                </p>
                <button style={buttonStyles} className={largeImageClasses}>see masks</button>
                <button style={buttonStyles} className={smallImageClasses}>see masks</button>
              </form>
            </div>
            <div style={largeImageStyles} className={largeImageClasses}>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
              <div style={maskPhotoStyles}></div>
            </div>
            <div style={smallImageStyles} className={smallImageClasses}>
              <div style={maskPhotoMobileStyles}></div>
              <div style={maskPhotoMobileStyles}></div>
              <div style={maskPhotoMobileStyles}></div>
              <div style={maskPhotoMobileStyles}></div>
              <div style={maskPhotoMobileStyles}></div>
              <div style={maskPhotoMobileStyles}></div>
              <div style={maskPhotoMobileStyles}></div>
              <div style={maskPhotoMobileStyles}></div>
            </div>
            <button style={redButtonDesktopStyles} className={largeImageClasses}>order</button>
            <button style={redButtonMobileStyles}  className={smallImageClasses}>order</button>
          </div>
        </div>
      </div>
    );
  }
}