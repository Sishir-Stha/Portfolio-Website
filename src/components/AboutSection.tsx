import { Button } from '@/components/ui/button';
import { Code, Users, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams to deliver outstanding results.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Creative approach to solving complex technical challenges with innovative solutions.'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on delivering high-quality solutions that meet business objectives.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate Full Stack Developer with 1+ years of experience creating 
              innovative digital solutions that make a real impact.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer who loves turning ideas into 
                  reality through clean, efficient code. My journey started with curiosity 
                  and has evolved into a career dedicated to creating exceptional user experiences.
                </p>
                
                <p>
                  I specialize in modern web technologies including React, Java Spring Boot, Rest API, SQL
                  and various databases like MSSQL, PostgreSQL, MySQL. I enjoy the entire development process, from conceptualizing 
                  ideas to deploying scalable applications.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source, or sharing knowledge with the developer community.
                </p>
              </div>

              <Button 
                className="btn-accent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </Button>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 glass-card rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="text-center p-6 glass-card rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="text-center p-6 glass-card rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              
              <div className="text-center p-6 glass-card rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center p-6 glass-card rounded-lg group hover-lift">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;