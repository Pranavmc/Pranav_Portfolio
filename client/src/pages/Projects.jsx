import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaShieldAlt, FaLeaf, FaServer, FaArrowLeft, FaReact, FaDocker, FaLayerGroup } from 'react-icons/fa';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const projects = [
    {
      title: "Secure FinTech Expense Platform",
      category: "MERN",
      description: "Secure transaction processing with encrypted data storage, immutable audit logs, and policy-driven workflows using RBAC. Features fraud & risk scoring via anomaly detection on time-series expense data.",
      tech: ["React.js", "Node.js", "MongoDB", "Python", "AES Encryption", "Docker", "AWS"],
      icon: <FaShieldAlt size={30} />,
      color: "var(--accent-cyan)",
      link: "https://securefintech.netlify.app",
      github: "https://github.com/Pranavmc/fintech"
    },
    {
      title: "TrackaFarm (Smart Livestock & AI Diary)",
      category: "MERN",
      description: "A comprehensive MERN-based platform digitizing animal records and milk production. Integrates an AI-powered ARIMA Python forecasting module to predict future milk yields based on historical data.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Python (ARIMA)", "Docker", "AWS"],
      icon: <FaLeaf size={30} />,
      color: "var(--accent-magenta)",
      link: "https://trackafarm.netlify.app",
      github: "https://github.com/Pranavmc/Trackafarm"
    },
    {
      title: "Automated CI/CD Pipeline for a Containerized Web Application",
      category: "DevOps",
      description: "Built an end-to-end CI/CD pipeline using GitHub, Jenkins, and Docker to automate build, test, and deployment workflows. Deployed Dockerized applications on AWS EC2 with image versioning and tag-based rollback for reliable releases.",
      tech: ["Git", "GitHub", "Jenkins", "Docker", "Docker Hub", "AWS EC2", "Linux", "Shell Scripting"],
      icon: <FaServer size={30} />,
      color: "var(--accent-violet)",
      link: "https://github.com/Pranavmc/Automated-CI-CD",
      github: "https://github.com/Pranavmc/Automated-CI-CD"
    },
    {
      title: "End-to-End Infra Automation & Deployment",
      category: "DevOps",
      description: "Automated cloud infrastructure provisioning with Terraform and configuration management using Ansible. Deployed and managed scalable Kubernetes applications via CI/CD pipelines with automated builds, image creation, and cluster updates.",
      tech: ["Terraform", "Ansible", "Kubernetes", "Docker", "Jenkins/GitHub Actions", "AWS", "Git", "Linux", "Shell Scripting"],
      icon: <FaLayerGroup size={30} />,
      color: "var(--accent-cyan)",
      link: "#",
      github: "#"
    },
    {
      title: "Multi-Environment CI/CD Pipeline (Dev → QA → Prod)",
      category: "DevOps",
      description: "Built a multi-stage CI/CD pipeline automating build, test, and deployment across Dev, QA, and Production environments. Implemented approval gates, rollback mechanisms, and version-controlled, environment-specific releases to ensure deployment reliability.",
      tech: ["Git", "GitHub", "Jenkins", "Docker", "AWS", "Linux", "Shell Scripting"],
      icon: <FaServer size={30} />,
      color: "var(--accent-magenta)",
      link: "https://github.com/Pranavmc/multi-env-cicd",
      github: "https://github.com/Pranavmc/multi-env-cicd"
    }
  ];

  const categories = [
    {
      id: "MERN",
      title: "MERN Stack Projects",
      subtitle: "Full-Stack Web Applications",
      icon: <FaReact size={50} />,
      color: "var(--accent-cyan)",
      description: "Explore my high-performance, scalable web applications built primarily with MongoDB, Express.js, React, and Node.js.",
      bgGradient: "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 212, 255, 0.0) 100%)",
      borderColor: "var(--accent-cyan)"
    },
    {
      id: "DevOps",
      title: "DevOps & Cloud",
      subtitle: "Infrastructure & Automation",
      icon: <FaDocker size={50} />,
      color: "var(--accent-violet)",
      description: "Discover my projects focusing on CI/CD pipelines, containerization, and cloud infrastructure automation.",
      bgGradient: "linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(157, 78, 221, 0.0) 100%)",
      borderColor: "var(--accent-violet)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  };

  const filteredProjects = selectedCategory 
    ? projects.filter(p => p.category === selectedCategory) 
    : [];

  return (
    <div className="page-container" style={{ maxWidth: '1200px', minHeight: '80vh' }}>
      
      <AnimatePresence mode="wait">
        {!selectedCategory ? (
          <motion.div
            key="categories"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            style={{ width: '100%' }}
          >
            <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h1 className="section-title text-gradient">Project Categories</h1>
              <p className="section-subtitle">
                Select a domain to explore my engineered solutions.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
              {categories.map((cat) => (
                <motion.div
                  key={cat.id}
                  variants={itemVariants}
                  whileHover={{ y: -15, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="glass-effect"
                  style={{
                    padding: '50px 40px',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: cat.bgGradient,
                    border: `1px solid ${cat.borderColor}40`,
                    boxShadow: `0 20px 40px rgba(0,0,0,0.2), inset 0 0 30px ${cat.borderColor}10`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Decorative Glow */}
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '-50px',
                    width: '150px',
                    height: '150px',
                    background: cat.color,
                    filter: 'blur(80px)',
                    opacity: 0.3,
                    zIndex: 0
                  }}></div>

                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      color: cat.color,
                      marginBottom: '20px',
                      background: 'rgba(255,255,255,0.05)',
                      padding: '20px',
                      borderRadius: '50%',
                      boxShadow: `0 10px 30px ${cat.color}30`
                    }}>
                      {cat.icon}
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '10px' }}>
                      {cat.title}
                    </h2>
                    <h4 style={{ color: cat.color, fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
                      {cat.subtitle}
                    </h4>
                    <p style={{ color: 'var(--text-light)', opacity: 0.8, fontSize: '1.05rem', lineHeight: 1.6 }}>
                      {cat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="projects"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            style={{ width: '100%' }}
          >
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <h1 className="section-title text-gradient" style={{ marginBottom: '10px', fontSize: '2.5rem' }}>
                  {categories.find(c => c.id === selectedCategory)?.title}
                </h1>
                <p className="section-subtitle" style={{ margin: 0 }}>
                  {categories.find(c => c.id === selectedCategory)?.description}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(null)}
                className="btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'var(--text-light)',
                  boxShadow: 'none'
                }}
              >
                <FaArrowLeft /> Back to Categories
              </motion.button>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="glass-effect"
                  style={{ 
                    borderRadius: '24px', 
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderTop: `2px solid ${project.color}`,
                    boxShadow: `0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px ${project.color}15`,
                    overflow: 'hidden'
                  }}
                >
                  {/* Background Glow */}
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '150px',
                    height: '150px',
                    background: project.color,
                    filter: 'blur(80px)',
                    opacity: 0.2,
                    zIndex: 0
                  }}></div>

                  <div style={{ padding: '35px', flex: 1, display: 'flex', flexDirection: 'column', zIndex: 1, position: 'relative' }}>
                    
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                      <div style={{ 
                        color: project.color, 
                        background: 'rgba(255,255,255,0.03)', 
                        padding: '12px', 
                        borderRadius: '16px',
                        border: `1px solid ${project.color}50`
                      }}>
                        {project.icon}
                      </div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-light)', lineHeight: 1.2 }}>
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p style={{ color: 'var(--text-light)', opacity: 0.8, lineHeight: 1.7, marginBottom: '25px', flex: 1, fontSize: '1rem' }}>
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
                      {project.tech.map((tech, i) => (
                        <span key={i} style={{ 
                          background: 'rgba(255,255,255,0.05)', 
                          backdropFilter: 'blur(10px)', 
                          border: '1px solid rgba(255,255,255,0.1)',
                          padding: '6px 12px', 
                          borderRadius: '8px', 
                          fontSize: '0.8rem', 
                          color: project.color,
                          fontWeight: 600
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
                      <motion.a 
                        whileHover={{ scale: 1.05, backgroundColor: project.color, color: '#000' }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ 
                          flex: 1,
                          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', 
                          color: 'var(--text-light)', 
                          textDecoration: 'none', 
                          background: 'rgba(255,255,255,0.05)', 
                          border: '1px solid rgba(255,255,255,0.1)',
                          padding: '12px 16px', 
                          borderRadius: '12px', 
                          fontSize: '0.9rem', 
                          fontWeight: 600,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ 
                          flex: 1,
                          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', 
                          color: 'var(--text-light)', 
                          textDecoration: 'none', 
                          background: 'transparent',
                          border: '1px solid rgba(255,255,255,0.1)',
                          padding: '12px 16px', 
                          borderRadius: '12px', 
                          fontSize: '0.9rem', 
                          fontWeight: 600,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <FaGithub size={18} /> Source Code
                      </motion.a>
                    </div>
                  </div>
                  
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Projects;
