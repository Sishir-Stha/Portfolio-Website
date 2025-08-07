import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    { name: 'Java SpringBoot', icon: '🔗', level: 73 },
    { name: 'Rest API', icon: '🎨', level: 72 },
    { name: 'React', icon: '⚛️', level: 40 },
    { name: 'TypeScript', icon: '📘', level: 55 },
    { name: 'PostgreSQL', icon: '🐘', level: 88 },
    { name: 'Git', icon: '📦', level: 90 },
    { name: 'Docker', icon: '🐳', level: 55 },
    { name: 'AWS', icon: '☁️', level: 70 },  
    { name: 'SQL', icon: '🍃', level: 96 }
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {skills.map((skill, index) => (
              <Card key={skill.name} className="p-6 glass-card hover-lift group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {skill.name}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {skill.level}% proficiency
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-primary/70 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 300}ms`
                    }}
                  />
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;