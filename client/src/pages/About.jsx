import { motion } from 'framer-motion';
import { FaLaptopCode, FaGlobeAmericas, FaGamepad, FaBookReader, FaQuestionCircle } from 'react-icons/fa';

const About = () => {
  const hobbies = [
    { icon: <FaLaptopCode size={24} />, text: 'Building Projects', color: 'var(--accent-cyan)' },
    { icon: <FaBookReader size={24} />, text: 'Tech Reading', color: 'var(--accent-violet)' },
    { icon: <FaGlobeAmericas size={24} />, text: 'Traveling', color: 'var(--accent-magenta)' },
    { icon: <FaQuestionCircle size={24} />, text: 'Quizzes', color: '#ffd700' },
    { icon: <FaGamepad size={24} />, text: 'E-Sports', color: '#ff4d4d' }
  ];

  return (
    <div className="page-container" style={{ maxWidth: '1000px' }}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        <h1 className="section-title text-gradient">About Me</h1>
        <p className="section-subtitle">
          The developer behind the code.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'stretch' }}>
        
        {/* Profile ID Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="glass-effect"
          style={{ 
            padding: '40px', 
            borderRadius: '30px', 
            textAlign: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Cyberpunk Decorative Line */}
          <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '3px', background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)' }}></div>

          <motion.img 
            whileHover={{ scale: 1.1, rotate: 5 }}
            src="/PranavPhoto.png" 
            alt="Pranav Chougale" 
            style={{ 
              width: '180px', height: '180px', 
              borderRadius: '24px', 
              objectFit: 'cover', 
              border: '2px solid rgba(255,255,255,0.2)', 
              boxShadow: '0 15px 35px rgba(0,212,255,0.2)',
              marginBottom: '25px',
              zIndex: 2
            }}
          />
          
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '5px' }}>
             Pranav <span style={{ color: 'var(--accent-cyan)' }}>Chougale</span>
          </h2>
          <p style={{ color: 'var(--accent-magenta)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '20px' }}>
            MERN & DevOps Engineer
          </p>
          
          <div style={{ background: 'var(--glass-bg)', padding: '15px', borderRadius: '16px', border: '1px solid var(--glass-border)', width: '100%' }}>
            <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--text-light)' }}>
              <span style={{ opacity: 0.5 }}>Location</span> <strong>Karnataka, India</strong>
            </p>
            <p style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-light)' }}>
              <span style={{ opacity: 0.5 }}>Open To Work</span> <strong style={{ color: '#00fa9a' }}>Yes</strong>
            </p>
          </div>
        </motion.div>

        {/* Biography & Hobbies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* Bio Glass Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect"
            style={{ padding: '35px', borderRadius: '30px', flex: 1, background: 'rgba(5, 8, 22, 0.4)' }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-violet)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-violet)', boxShadow: '0 0 10px var(--accent-violet)' }}></div>
              My Journey
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-light)', opacity: 0.85, textJustify: 'inter-word' }}>
              I thrive at the intersection of logical backend architecture and beautiful frontend design. 
              Holding both a BCA and MCA with top marks (CGPA: 9.0), my academic background perfectly complements 
              my hands-on engineering experience. I believe in writing <strong className="text-gradient">clean, scalable code</strong> and love automating 
              complex workflows from deployment down to database aggregations.
            </p>
          </motion.div>

          {/* Hobbies Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-light)', opacity: 0.9, marginBottom: '20px', marginLeft: '10px' }}>
              Beyond The Terminal
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px' }}>
              {hobbies.map((hobby, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="glass-effect"
                  style={{ 
                    padding: '20px 15px', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '12px',
                    textAlign: 'center',
                    borderTop: `2px solid ${hobby.color}40`,
                    boxShadow: `0 10px 20px rgba(0,0,0,0.3), inset 0 0 15px ${hobby.color}10`
                  }}
                >
                  <div style={{ color: hobby.color, filter: `drop-shadow(0 0 8px ${hobby.color}80)` }}>
                    {hobby.icon}
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 500 }}>{hobby.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
