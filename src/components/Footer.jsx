import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* About Us Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">About Us</h3>
          <p className="text-neutral-300">
            Our app helps blind individuals analyze their surroundings using video summaries, enhancing their independence and safety.
          </p>
          <a href="/about" className="text-blue-400 hover:underline">Learn More</a>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Contact Us</h3>
          <p className="text-neutral-300">Email: netra.support@gmail.com</p>
          <p className="text-neutral-300">Phone: +91 7014924886</p>
          <a href="/contact" className="text-blue-400 hover:underline">Contact Form</a>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white">Facebook</a></li>
            <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white">X</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white">LinkedIn</a></li>
          </ul>
        </div>

        {/* App Download Links */}
        <div>
          <h3 className="text-md font-semibold mb-4">Get the App</h3>
          <a href="#"><img src="googleplay.png" alt="Get it on Google Play" /></a>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="mt-10 text-center text-neutral-300">
        <p>© 2024 NETR-A. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
