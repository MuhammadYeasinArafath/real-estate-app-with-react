import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./Submit.css";

const Submit = () => {
    return (

//this submit form don't have js code. So this form will not work.

        <>
<Navbar></Navbar>


        <div className='Submit'>
<h1>Property Submit Form For Listing</h1>
<div className="container">
    <form>
        <label htmlFor='Name'></label>
        <input type="text" id="Name" name="Name" placeholder="Your Name..."></input>
        <label htmlFor='E-mail'></label>
        <input type="text" id="E-mail" name="E-mail" placeholder="Your E-mail..."></input>
        <label htmlFor='Phone Number'></label>
        <input type="number" id="Phone-Number" name="Phone Number" placeholder="Your Phone Number..."></input>
        <label htmlFor='Option'>Fill The Informations:</label>
        <input type="number" id="Total Rooms" name="Total Rooms" placeholder="Total Rooms..."></input>
        <input type="number" id="Total Bath Rooms" name="Total Bath Rooms" placeholder="Total Bath Rooms..."></input>
        <input type="number" id="Total Kitchen Rooms" name="Total Kitchen Rooms" placeholder="Total Kitchen Rooms..."></input>
        <input type="number" id="Total Kitchen Rooms" name="Total Squre Foots" placeholder="Total Squre Foots..."></input>
        <label htmlFor='Description'></label>
        <textarea id="Description" name="Description" placeholder="Property Description...(Price, Rent, Address & Other Additional Info"></textarea>

        <input type="submit" value="Submit"></input>
    </form>

</div>

  </div>
        <Footer></Footer>
        </>
    );
};

export default Submit;