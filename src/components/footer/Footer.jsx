import React from 'react'
import './Footer.scss'
import igImg from '../../Images/instagram.png'
import fbImg from '../../Images/facebook.png'
import wpImg from '../../Images/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div>
                <h3>Pages</h3>
                <p>Home</p>
                <p>Products</p>
                <p>Contact us</p>
            </div>
            <div className='second-div'>
                <h3>Address</h3>
                <p>Opposite Govinda theater, Edappal, </p>
                <p>679582, Kerala,  India</p>
                <a href='mailto:contact@chocochi.com'>contact@chocochi.com</a>
                <br />
                <a href='tel:+91 7909102588'>+91 7909102588</a>
            </div>
            <div className='last-one'>
                <h3>Social Media</h3>
                <div className='social-media'>
                    <a href="https://www.instagram.com/cafechocochi/"><img src={igImg} alt="" /></a>
                    <a href="https://wa.me/917909102588?text=Hi"><img src={wpImg} alt="" /></a>
                    <a href="https://www.facebook.com/103701765650923"><img src={fbImg} alt="" /></a>
                </div>
                <span>©copyright 2021 chocochi. All rights reserved.</span>
            </div>
        </div>
    </div>
  )
}

export default Footer