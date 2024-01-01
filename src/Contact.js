import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitted!');
    const { name, email, subject, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    }
    console.log(conFom);
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="subject">Subject</label>
          <textarea className="form-control" id="subject" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact;