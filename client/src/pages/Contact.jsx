import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: "Location",
      value: "Karnataka, India",
      color: "var(--accent-cyan)"
    },
    {
      icon: <FaEnvelope size={20} />,
      title: "Email",
      value: "pranavchougale17@gmail.com",
      color: "var(--accent-violet)"
    },
    {
      icon: <FaPhoneAlt size={20} />,
      title: "Phone",
      value: "+91 6360326864",
      color: "var(--accent-magenta)"
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.submitter?.blur();
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      // Robustly construct the API URL
      let baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
      // Remove trailing slash if present
      if (baseUrl.endsWith('/')) baseUrl = baseUrl.slice(0, -1);
      
      const fullUrl = `${baseUrl}/contact`;
      console.log('Attempting POST to:', fullUrl);
      
      const res = await axios.post(fullUrl, formData);
      setStatus({ type: 'success', msg: res.data.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('API Error details:', err);
      const is404 = err.response?.status === 404;
      const errorMsg = is404 
        ? `Error 404: Path not found. Check if API URL is correct: ${err.config?.url}`
        : (err.response?.data?.error || `Failed to send message. ${err.message}`);
      
      setStatus({ type: 'error', msg: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container" style={{ maxWidth: '1100px' }}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        <h1 className="section-title text-gradient">Get In Touch</h1>
        <p className="section-subtitle">
          Let's build something extraordinary together.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'stretch' }}>
        
        {/* Contact Info Pane */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect"
          style={{ 
            padding: '40px', 
            borderRadius: '30px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            gap: '30px',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
            boxShadow: 'inset 0 0 20px rgba(0, 212, 255, 0.05)'
          }}
        >
          {/* Decorative Glow */}
          <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--accent-violet)', filter: 'blur(100px)', opacity: 0.3, zIndex: 0 }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-light)', marginBottom: '10px' }}>
              Contact Information
            </h3>
            <p style={{ color: 'var(--text-light)', opacity: 0.7, marginBottom: '30px', lineHeight: 1.6 }}>
              Whether you have a question about my projects, want to collaborate on a new idea, or just want to say hi, my inbox is always open!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {contactDetails.map((detail, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ x: 10 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
                >
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '16px',
                    background: 'var(--glass-bg)', border: `1px solid ${detail.color}40`,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    color: detail.color, boxShadow: `0 8px 20px ${detail.color}20`
                  }}>
                    {detail.icon}
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-light)', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                      {detail.title}
                    </span>
                    <span style={{ fontSize: '1.1rem', color: 'var(--text-light)', fontWeight: 600 }}>
                      {detail.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form Pane */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect"
          style={{ padding: '40px', borderRadius: '30px', position: 'relative', zIndex: 1 }}
        >
          <AnimatePresence>
            {status.msg && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{
                  background: status.type === 'success' ? 'rgba(56, 239, 125, 0.1)' : 'rgba(255, 75, 43, 0.1)',
                  border: `1px solid ${status.type === 'success' ? '#38ef7d' : '#ff4b2b'}`,
                  color: 'var(--text-light)',
                  padding: '15px',
                  borderRadius: '16px',
                  marginBottom: '25px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}
              >
                {status.msg}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div style={{ position: 'relative' }}>
                <FaUser style={{ position: 'absolute', top: '16px', left: '16px', color: 'var(--text-light)', opacity: 0.4 }} />
                <input 
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Your Name *" required className="glass-input" style={{ paddingLeft: '45px' }}
                />
              </div>
              <div style={{ position: 'relative' }}>
                <FaEnvelope style={{ position: 'absolute', top: '16px', left: '16px', color: 'var(--text-light)', opacity: 0.4 }} />
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="Your Email *" required className="glass-input" style={{ paddingLeft: '45px' }}
                />
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <FaCommentDots style={{ position: 'absolute', top: '16px', left: '16px', color: 'var(--text-light)', opacity: 0.4 }} />
              <input 
                type="text" name="subject" value={formData.subject} onChange={handleChange}
                placeholder="Subject" className="glass-input" style={{ paddingLeft: '45px' }}
              />
            </div>

            <textarea 
              name="message" value={formData.message} onChange={handleChange}
              placeholder="Your Message *" required rows="6" className="glass-input"
              style={{ padding: '15px 20px', resize: 'vertical' }}
            ></textarea>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="btn-primary" 
              disabled={loading}
              style={{ 
                marginTop: '10px', width: '100%', justifyContent: 'center', 
                padding: '16px', borderRadius: '16px', opacity: loading ? 0.7 : 1,
                fontSize: '1.1rem', letterSpacing: '1px' 
              }}
            >
              {loading ? 'Transmitting Protocol...' : (
                <>Send Message <FaPaperPlane size={14} /></>
              )}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
