import React from "react";
import {
    MapPin,
    Mail,
    Phone,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    
    Youtube,
  } from "lucide-react";
  
  const Footer = () => {
    return (
      <footer className="bg-purple-300 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          
          <div>
            <h3 className="font-semibold mb-4">Get in touch</h3>
            <div className="flex items-start gap-2 mb-2">
              <MapPin className="w-4 h-4 mt-1" />
              <p>
                1105, The Platina <br />
                Mumbai - 400 068, India
              </p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@giftolove.in">info@giftolove.in</a>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-4 h-4" />
              <a href="tel:+918097876873">+91 80978-76873</a>
            </div>
            <div className="flex gap-4 text-white">
              <Facebook className="w-4 h-4" />
              <Twitter className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
              <Linkedin className="w-4 h-4" />
            
              <Youtube className="w-4 h-4" />
            </div>
          </div>
  
        
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-1">
              <li>Order Enquiry</li>
              <li>Home</li>
              <li>Best Sellers</li>
              <li>Acrylic Craft</li>
              <li>Art & Craft</li>
              <li>Artificial Flowers</li>
              <li>Artificial Grass & Matt</li>
              <li>Artificial Leafs</li>
              <li>Canvas Board & Sunboard</li>
              <li>Cash Boxes</li>
            </ul>
          </div>
  
        
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Return and refund policy</li>
              <li>Privacy policy</li>
              <li>Terms of service</li>
              <li>Shipping policy</li>
              <li>Contact information</li>
              <li>Search</li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="font-semibold mb-4">Useful links</h3>
            <ul className="space-y-1">
              <li>Shop</li>
              <li>Orders</li>
            </ul>
          </div>
  
        
          <div>
            <h3 className="font-semibold mb-4">Newsletter Signup</h3>
            <p className="mb-4">Subscribe to our newsletter and get 10% off your first purchase</p>
            <form className="flex border border-white rounded-full  ">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py- text-black flex-grow focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-full "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  