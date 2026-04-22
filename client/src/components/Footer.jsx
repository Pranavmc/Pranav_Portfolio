import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socials = [
    { Icon: FaGithub, href: 'https://github.com/Pranavmc', color: '#ffffff' },
    { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/pranavchougale07', color: '#4db5ff' },
    { Icon: FaTwitter, href: 'https://x.com/Chougalepranav_', color: '#67ceff' },
    { Icon: FaFacebook, href: 'https://www.facebook.com/pranav.chougale.733/', color: '#7cb1ff' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/pranav_chougale_', color: '#ff8bb6' }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <h3 className="text-gradient" style={{ fontSize: '1.35rem', letterSpacing: '0.4px' }}>
          Pranav Mallinath Chougale
        </h3>
        
        <div className="footer-socials">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="footer-social-link"
              style={{ color: social.color, fontSize: '1.2rem' }}
            >
              <social.Icon />
            </motion.a>
          ))}
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Pranav Mallinath Chougale. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
