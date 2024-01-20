import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition duration-300">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">Documentation</a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition duration-300">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">Whitepapers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">Support</a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-4">Social</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition duration-300">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-400 flex justify-between items-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
