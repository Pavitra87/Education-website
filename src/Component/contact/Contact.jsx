import React from "react";
import Back from "../common/back/Back";
import './contact.css'

const Contact = () => {
  const map = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30912.026827096015!2d74.40131593932664!3d14.426970166961649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc2610a796c663%3A0xc214f69a6d77668a!2sKumta%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1671467209560!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`
   
  return (
    <div>
      <Back title="Contact Us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ab!</p>

            <div className="items grid2">
                <div className="box">
                    <h4>ADDRESS: </h4>
                    <p>198 west 21st street,suite 751 New York NY 10016</p>
                </div>

                <div className="box">
                    <h4>Email: </h4>
                    <p>pavi@gmail.com</p>
                </div>

                <div className="box">
                    <h4>Phone: </h4>
                    <p>274588960</p>
                </div>
            </div>

            <form action="">
                <div className="flexSB">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Subject"/>
                <textarea   cols="30" rows="10">Create a message here...</textarea>
                <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;
