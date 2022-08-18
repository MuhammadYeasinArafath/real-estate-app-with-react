import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./Contact.css";

const Contact = () => {
    return (

//this contact form don't have js code. So this form will not work.

        <>
        <Navbar></Navbar>

<div className="Contact">

<h1>Contact Us</h1>

<div className="container">
    <form>
        <label htmlFor='Name'>Full Name</label>
        <input type="text" id="Name" name="Name" placeholder="Your Name..."></input>
        <label htmlFor='E-mail'>E-mail</label>
        <input type="text" id="E-mail" name="E-mail" placeholder="Your E-mail..."></input>
        <label htmlFor='Phone Number'>Phone Number</label>
        <input type="number" id="Phone-Number" name="Phone Number" placeholder="Your Phone Number..."></input>
        <label htmlFor='Subject'>Your Inquiry</label>
        <textarea id="Inquiry" name="Inquiry" placeholder="Your Inquiry..."></textarea>


        <input type="submit" value="Submit"></input>


    </form>

</div>


<p id="daz"><h3 id="qq">Office Location:</h3> Street:  P.O Box 16968
                                              <br />
                                              City:   Dubai
                                              <br />
                                              State/province/area:    Dubai
                                              <br />
                                              Phone number:  971-7220948
                                              <br />
                                              Zip code:  16968
                                              <br />
                                              Country calling code:  +971
                                              <br />
                                              Country:  Emirates 
                                              </p>  





</div>

<Footer></Footer>

        </>
    );
};

export default Contact;