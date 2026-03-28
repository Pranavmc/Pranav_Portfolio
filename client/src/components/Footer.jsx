import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      marginTop: 'auto',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '40px 20px',
      background: 'rgba(5, 8, 22, 0.8)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h3 className="text-gradient" style={{ fontSize: '1.5rem' }}>Pranav Mallinath Chougale</h3>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { Icon: FaGithub, href: 'https://github.com/Pranavmc', color: '#fff' },
            { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/pranavchougale07', color: '#0077b5' },
            { Icon: FaTwitter, href: 'https://x.com/Chougalepranav_', color: '#1da1f2' },
            { Icon: FaFacebook, href: 'https://www.facebook.com/pranav.chougale.733/', color: '#1877f2' },
            { Icon: FaInstagram, href: 'https://www.instagram.com/pranav_chougale_', color: '#e1306c' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                color: social.color,
                fontSize: '1.8rem',
                display: 'inline-block',
                background: 'rgba(255,255,255,0.05)',
                padding: '12px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              <social.Icon />
            </motion.a>
          ))}
        </div>

        <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '10px' }}>
          &copy; {new Date().getFullYear()} Pranav Mallinath Chougale. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
