import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaServer, FaCloud, FaDatabase } from 'react-icons/fa';

const Resume = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.tab || 'mern'); // 'mern' or 'devops'

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  const mernExperience = [
    {
      title: 'MERN Stack Engineer',
      company: 'JSpiders | Bengaluru',
      period: 'Sept 2025 - Feb 2026',
      description: 'Developed scalable MERN MVC applications and built secure REST APIs utilizing JSON Web Tokens (JWT) for robust authentication flows.',
      icon: <FaBriefcase />
    },
    {
      title: 'Secure FinTech Expense & Risk Platform',
      company: 'Full Stack Project',
      period: '2025',
      description: 'Engineered secure transaction processing with AES encryption, immutable audit logs, and RBAC. Integrated a Python anomaly detection engine for risk scoring on time-series expense data.',
      icon: <FaCode />
    },
    {
      title: 'Trackafarm (Smart Dairy & Livestock Management)',
      company: 'AgriTech Project',
      period: '2024 - 2025',
      description: 'Built a smart MERN platform digitizing animal records, milk tracking, and vet management. Integrated an AI-powered Python (ARIMA) forecasting module for future milk yields.',
      icon: <FaCode />
    },
    {
      title: 'Master of Computer Applications (MCA)',
      company: 'AMC Engineering College, Bangalore | CGPA: 9.0',
      period: '2023 - 2025',
      description: 'Specialized in advanced software engineering, full-stack architecture, and algorithms.',
      icon: <FaGraduationCap />
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      company: 'SJPN Trust’s Degree College, Nidasoshi | CGPA: 8.5',
      period: '2020 - 2023',
      description: 'Foundational programming concepts, web development basics, and database management.',
      icon: <FaGraduationCap />
    }
  ];

  const devopsExperience = [
    {
      title: 'Cloud / DevOps Engineer Training',
      company: 'JSpiders | Bengaluru',
      period: 'Dec 2024 - Aug 2025',
      description: 'Completed a 9-month structured DevOps program. Built CI/CD pipelines, containerized applications, automated cloud infrastructure using Terraform, and deployed applications on Kubernetes.',
      icon: <FaCloud />
    },
    {
      title: 'Automated CI/CD Pipeline (Containerized Web App)',
      company: 'DevOps Project',
      period: '2025',
      description: 'Built an end-to-end CI/CD pipeline using GitHub, Jenkins, and Docker to automate build, test, and deployment workflows to AWS EC2 with tag-based rollback support.',
      icon: <FaServer />
    },
    {
      title: 'Multi-Environment CI/CD Pipeline with Approvals',
      company: 'DevOps Project',
      period: '2025',
      description: 'Designed a multi-stage CI/CD pipeline (Dev → QA → Prod) incorporating approval gates, rollback mechanisms, and environment-specific variable injection.',
      icon: <FaServer />
    },
    {
      title: 'End-to-End Infrastructure Automation & Deployment',
      company: 'DevOps Project',
      period: '2024 - 2025',
      description: 'Provisioned AWS Infrastructure logic using Terraform and Ansible. Managed scalable Kubernetes clusters via automation pipelines for image creation and rolling updates.',
      icon: <FaDatabase />
    },
    {
      title: 'Master of Computer Applications (MCA)',
      company: 'AMC Engineering College, Bangalore | CGPA: 9.0',
      period: '2023 - 2025',
      description: 'Enhanced core computer science concepts that serve as a strong foundation for scalable system architecture and operations.',
      icon: <FaGraduationCap />
    }
  ];

  const renderTimeline = (data) => (
    <div style={{ position: 'relative', marginTop: '40px' }}>
      {/* Vertical Line */}
      <div style={{ position: 'absolute', left: '26px', top: '10px', bottom: '10px', width: '2px', background: 'var(--glass-border)' }}></div>
      
      {data.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          style={{ display: 'flex', gap: '20px', marginBottom: '40px', position: 'relative' }}
        >
          {/* Timeline Dot/Icon */}
          <div style={{ 
            width: '54px', height: '54px', borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--accent-violet), var(--accent-cyan))',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            fontSize: '1.2rem', color: '#fff', zIndex: 2,
            boxShadow: '0 0 15px rgba(0, 212, 255, 0.4)'
          }}>
            {item.icon}
          </div>

          {/* Content Card */}
          <div className="glass-effect" style={{ flex: 1, padding: '25px', borderRadius: '16px' }}>
            <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>{item.period}</span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-light)', marginTop: '5px', marginBottom: '5px' }}>{item.title}</h3>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-light)', opacity: 0.6, fontWeight: 400, marginBottom: '15px' }}>{item.company}</h4>
            <p style={{ color: 'var(--text-light)', opacity: 0.85, lineHeight: 1.6 }}>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="page-container" style={{ maxWidth: '900px' }}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title text-gradient"
      >
        My Resume
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="section-subtitle"
      >
        Experience, Education, and Focus Areas
      </motion.p>

      {/* Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}
      >
        <button 
          onClick={() => setActiveTab('mern')}
          className={activeTab === 'mern' ? 'btn-primary' : 'btn-outline'}
          style={{ width: '200px', justifyContent: 'center' }}
        >
          MERN Developer
        </button>
        <button 
          onClick={() => setActiveTab('devops')}
          className={activeTab === 'devops' ? 'btn-primary' : 'btn-outline'}
          style={{ width: '200px', justifyContent: 'center' }}
        >
          DevOps Engineer
        </button>
      </motion.div>

      {/* Tab Content */}
      <div style={{ minHeight: '500px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'mern' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === 'mern' ? 50 : -50 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'mern' ? renderTimeline(mernExperience) : renderTimeline(devopsExperience)}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Download Resume Bottom */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resumes/Pranav M Chougale MERN.pdf" 
          download="Pranav_M_Chougale_MERN.pdf" 
          className="btn-outline"
          style={{ padding: '12px 25px' }}
        >
          ⬇ Download MERN Resume
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resumes/Pranav M Chougale Devops.pdf" 
          download="Pranav_M_Chougale_Devops.pdf" 
          className="btn-outline"
          style={{ padding: '12px 25px' }}
        >
          ⬇ Download DevOps Resume
        </motion.a>
      </div>
    </div>
  );
};

export default Resume;
