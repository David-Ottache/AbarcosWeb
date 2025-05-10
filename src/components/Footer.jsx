
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { socialLinks } from "../constants";
import { footerLinks } from "../constants";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-black-50 text-white h-auto min-h-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <h3 className="text-xl font-bold mb-4">Abarcos</h3>
        <p className="text-gray-400 mb-4">
          Innovative solutions for a digital world. We help businesses transform and thrive in the technology era.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
          ))}
        </div>
      </div>
    
      <div className="md:col-span-1">
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          {footerLinks.map((link, index) => (
        <li key={index}>
          <Link
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {link.name}
          </Link>
        </li>
          ))}
        </ul>
      </div>
    
      <div className="md:col-span-1">
        <h3 className="text-lg font-semibold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          Privacy Policy
        </a>
          </li>
          <li>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          Terms of Service
        </a>
          </li>
          <li>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          Cookie Policy
        </a>
          </li>
          <li>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          GDPR
        </a>
          </li>
        </ul>
      </div>
    
      <div className="md:col-span-1">
        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
        <form className="flex">
          <input
        type="email"
        placeholder="Your email"
        className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
        Subscribe
          </button>
        </form>
      </div>
        </div>
    
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {currentYear} STARTUP. All rights reserved.</p>
            <p className="text-gray-400 mt-4 md:mt-0">Designed with ❤️ for innovation</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
