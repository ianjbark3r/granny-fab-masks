import React from 'react';
import { useFormik } from 'formik';

import {
  closeDialogueClasses,
  confirmDialogueClasses,
  confirmDialogueBGMobileClasses,
  confirmDialogueBGDesktopClasses,
  confirmDialogueWrapperClasses,
  closeDialogueStyles,
  confirmDialogueStyles,
  confirmDialogueBGDesktopStyles,
  confirmDialogueBGMobileStyles,
  dialogueFormSyles,
  errorStyles,
  submitButtonStyles,
} from './styles';

const sendFeedback= (templateParams) => {
  const serviceID = 'mailgun'
  const templateID = 'new_order'

  window.emailjs
    .send(serviceID, templateID, templateParams)
    .then(function () {
        console.log("Form successfully submitted")
        alert("Thank you for your order! You will receive an email shortly with a price quote and payment options. Until then, sit tight and stay safe!");
    }, function (err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    })
    .then(() => {
        this.setState({
            dialogue: false
        });
    });
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (values.notes.length >= 500) {
    errors.notes = 'Please limit notes to less than 500 characters'
  }

  return errors;
}

const OrderForm = props => {
  const formik = useFormik({
    initialValues: {
      id: null,
      name: "",
      email: "",
      size: props.state.size,
      decor: props.state.decor,
      color: props.state.color,
      shipping: props.state.shipping,
      notes: ""
    },
    validate,
    onSubmit: values => {
      let id = Date.now();

      let templateParams = {
        id: id,
        name: values.name,
        email: values.email,
        size: values.size,
        decor: values.decor,
        color: values.color,
        shipping: values.shipping,
        notes: values.notes
      }

      sendFeedback(templateParams);
      props.submitted();
    }
  })
  return (
    <>
      <div 
        className={confirmDialogueBGDesktopClasses}
        onClick={props.close} 
        style={confirmDialogueBGDesktopStyles}
      ></div>
      <div 
        className={confirmDialogueBGMobileClasses} 
        onClick={props.close}
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
            onClick={props.close} 
            style={closeDialogueStyles}
          >
            X
          </div>
          <form onSubmit={formik.handleSubmit} style={dialogueFormSyles}>
            <h1 className="mb-4">Confirm Your Order</h1>
            <p>
              NOTE: Because each mask is entirely customized to your preferences, and masks are priced on a sliding scale, you will receive an email with your price quote and payment options <em>after</em> submitting your order.
            </p>
            <p>
              Please confirm your order details. If you need a special size or are submitting a custom order, please provide details in the notes section below.
            </p>
            <div className="form-group">
              <label style={{fontWeight: "bold"}}>Name:</label>
              <input
                className="form-control"
                id="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              ></input>
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div style={errorStyles}>{formik.errors.name}</div>
            ) : null}
            <div className="form-group">  
              <label style={{fontWeight: "bold"}}>Email address:</label>
              <input
                className="form-control"
                id="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              ></input>
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div style={errorStyles}>{formik.errors.email}</div>
            ) : null}
            <div className="form-group">  
              <label style={{fontWeight: "bold"}}>Size:</label>
              <select
                className="form-control"
                id="size"
                onChange={formik.handleChange}
                value={formik.values.size}
              >
                <option value="regular">regular</option>
                <option value="large">large</option>
                <option value="kids">kid's</option>
                <option value="custom">custom</option>
              </select>
            </div>
            <div className="form-group">
              <label style={{fontWeight: "bold"}}>Decor:</label>
              <select
                className="form-control"
                id="decor"
                onChange={formik.handleChange}
                value={formik.values.decor}
              >
                <option value="heavyBling">heavy bling</option>
                <option value="floralEmb">floral embroidery</option>
                <option value="fringe">fringe</option>
                <option value="halfBling">half bling</option>
                <option value="laceEmb">lace embroidery</option>
                <option value="plain">plain</option>
                <option value="sequin">sequin</option>
                <option value="custom">custom</option>
              </select>
            </div>
            <div className="form-group">
              <label style={{fontWeight: "bold"}}>Color:</label>
              <select
                className="form-control"
                id="color"
                onChange={formik.handleChange}
                value={formik.values.color}
              >
                <option value="black">black</option>
                <option value="white">white</option>
                <option value="grey">grey</option>
                <option value="leopard">leopard print</option>
                <option value="custom">custom</option>
              </select>
            </div>
            <div className="form-group">
              <label style={{fontWeight: "bold"}}>Shipping:</label>
              <select
                className="form-control"
                id="shipping"
                onChange={formik.handleChange}
                value={formik.values.shipping}
              >
                <option value="pickup">pick-up</option>
                <option value="delivery">delivery</option>
              </select>
            </div>
            <div className="form-group">
              <label style={{fontWeight: "bold"}}>Custom/sizing notes</label>
              <textarea 
                className="form-control" 
                id="notes"
                onChange={formik.handleChange} 
                rows="3"
                value={formik.values.notes}
                ></textarea>
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div style={errorStyles}>{formik.errors.notes}</div>
            ) : null}
            <button style={submitButtonStyles} type="submit">submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default OrderForm;