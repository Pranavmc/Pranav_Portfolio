import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaArrowRight, FaCode, FaServer } from 'react-icons/fa';

const Home = () => {
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', paddingTop: '80px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px', zIndex: 2 }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', marginBottom: '10px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            Welcome to my universe
          </motion.h2>
          
          <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
            Hi, I'm <br />
            <span className="text-gradient">Pranav Mallinath Chougale</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', opacity: 0.7, maxWidth: '600px', marginBottom: '40px', lineHeight: 1.6 }}>
            MERN Stack & DevOps Engineer | Problem Solver | Cloud Enthusiast
            <br />
            Architecting scalable solutions and elegant, glassmorphic realities.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/contact" className="btn-primary">
              Let's Talk <FaArrowRight />
            </Link>
            
            <div style={{ position: 'relative' }}>
              <AnimatePresence mode="wait">
                {!showResumeOptions ? (
                  <motion.button 
                    key="main-btn"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    onClick={() => setShowResumeOptions(true)} 
                    className="btn-outline"
                  >
                    <FaFileAlt /> View Resume
                  </motion.button>
                ) : (
                  <motion.div 
                    key="options"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    style={{ display: 'flex', gap: '10px' }}
                  >
                    <Link to="/resume" state={{ tab: 'mern' }} className="btn-outline" style={{ borderColor: 'var(--accent-cyan)' }}>
                      <FaCode style={{ color: 'var(--accent-cyan)' }} /> MERN
                    </Link>
                    <Link to="/resume" state={{ tab: 'devops' }} className="btn-outline" style={{ borderColor: 'var(--accent-violet)' }}>
                      <FaServer style={{ color: 'var(--accent-violet)' }} /> DevOps
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Hero Image/Abstract Art */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Glowing Orb behind image */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(40px)',
            zIndex: -1,
            animation: 'pulse 4s infinite alternate'
          }}></div>

          {/* 3D Glass Image Container */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              height: '480px',
              perspective: '1200px',
              zIndex: 5
            }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
                backdropFilter: 'var(--glass-blur)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,212,255,0.1)',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible'
              }}
            >
              {/* Actual Image Layer */}
              <img 
                src="/PranavPhoto.png" 
                alt="Pranav" 
                style={{ 
                  width: '90%', 
                  height: '90%',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  transform: 'translateZ(40px)', // Pushes image forward
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                }}
              />
              
              {/* Glass Glare / Parallax Overlay */}
              <motion.div 
                style={{
                  position: 'absolute',
                  top: '5%', 
                  left: '5%', 
                  right: '5%', 
                  bottom: '5%',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 40%)',
                  transform: 'translateZ(80px)', // Pushes glare further out
                  pointerEvents: 'none'
                }} 
              />
              
              {/* Floating Decorative Elements */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  background: 'var(--accent-cyan)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  transform: 'translateZ(20px)',
                  opacity: 0.6
                }}
              />
            </motion.div>
          </motion.div>

          <style>
            {`
              @keyframes pulse {
                0% { transform: scale(1); opacity: 0.5; }
                100% { transform: scale(1.2); opacity: 0.8; }
              }
            `}
          </style>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', opacity: 0.5, marginBottom: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ width: '20px', height: '35px', border: '2px solid var(--glass-border)', borderRadius: '20px', display: 'flex', justifyContent: 'center', paddingTop: '5px' }}
        >
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ width: '4px', height: '4px', background: 'var(--accent-cyan)', borderRadius: '50%' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
