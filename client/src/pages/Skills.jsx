import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaDatabase, FaCloud, FaCode } from 'react-icons/fa';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Architecture",
      theme: "Adaptable, Dynamic, & Vibrant UI",
      icon: <FaLaptopCode size={35} />,
      color: "var(--accent-cyan)",
      gradient: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 212, 255, 0.02))",
      skills: ["React.js", "Redux", "Context API", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend Systems",
      theme: "Robust, Secure, & Scalable APIs",
      icon: <FaServer size={35} />,
      color: "var(--accent-violet)",
      gradient: "linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(124, 58, 237, 0.02))",
      skills: ["Node.js", "Express.js", "RESTful APIs", "MVC Pattern", "Python", "JWT Auth"]
    },
    {
      title: "Database Management",
      theme: "Optimized Queries & Data Integrity",
      icon: <FaDatabase size={35} />,
      color: "var(--accent-magenta)",
      gradient: "linear-gradient(135deg, rgba(240, 171, 252, 0.1), rgba(240, 171, 252, 0.02))",
      skills: ["MongoDB", "Mongoose", "SQL", "Aggregation Pipelines", "Data Modeling"]
    },
    {
      title: "Cloud & DevOps",
      theme: "Automated Infrastructure & Deployments",
      icon: <FaCloud size={35} />,
      color: "#ffd700",
      gradient: "linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.02))",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "CI/CD", "Ansible", "Prometheus"]
    }
  ];

  return (
    <div className="page-container" style={{ maxWidth: '1200px' }}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h1 className="section-title text-gradient">Technical Arsenal</h1>
        <p className="section-subtitle">
          The core technologies powering my robust applications.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -15, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
            className="glass-effect"
            style={{
              padding: '40px',
              borderRadius: '30px',
              position: 'relative',
              background: cat.gradient,
              border: `1px solid ${cat.color}40`,
              backdropFilter: 'blur(30px)',
              boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), inset 0 0 30px ${cat.color}15`,
              overflow: 'hidden'
            }}
          >
            {/* Ambient Background Glow */}
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '150px',
              height: '150px',
              background: cat.color,
              filter: 'blur(80px)',
              opacity: 0.2,
              pointerEvents: 'none'
            }}></div>

            {/* Header / Icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '30px', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '70px', height: '70px',
                borderRadius: '20px',
                background: 'rgba(0,0,0,0.2)',
                border: `1px solid ${cat.color}60`,
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                color: cat.color,
                boxShadow: `0 10px 20px ${cat.color}30, inset 0 0 15px ${cat.color}20`
              }}>
                {cat.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-light)', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '8px' }}>
                  {cat.title}
                </h3>
                <p style={{ color: cat.color, fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.9 }}>
                  {cat.theme}
                </p>
              </div>
            </div>

            {/* Subtle Divider */}
            <div style={{ width: '100%', height: '1px', background: `linear-gradient(90deg, ${cat.color}40, transparent)`, marginBottom: '30px' }}></div>

            {/* Skills Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', position: 'relative', zIndex: 1 }}>
              {cat.skills.map((skill, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.1, backgroundColor: `${cat.color}20`, borderColor: cat.color }}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid rgba(255,255,255,0.1)`,
                    padding: '8px 18px',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    color: 'var(--text-light)',
                    fontWeight: 500,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'default',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FaCode style={{ color: cat.color, opacity: 0.7, fontSize: '0.8rem' }} /> {skill}
                </motion.div>
              ))}
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
