import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import TypewriterText from './TypewriterText';


const HeroSection = () => {
  const roles = [
    'Full Stack Developer',
    'SQL Developer',
    'JAVA SpringBoot Developer',
    'Data Analystics'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="text-glow text-primary">
                  Sishir Shrestha
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-muted-foreground">
                <TypewriterText 
                  texts={roles} 
                  speed={100} 
                  delay={2000}
                  className="text-primary"
                />
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about creating beautiful, functional web applications 
                with modern technologies. I love turning ideas into reality through 
                clean code and innovative solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="btn-accent px-8 py-3 text-lg"
                size="lg"
              >
                View Projects
              </Button>
              
              <a href="/Sishir CV.pdf" download>
                <Button 
                  variant="outline" 
                  className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href="https://github.com/Sishir-Stha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sishir-shrestha-57a50b1b9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="mailto:sishershrestha000@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right Column - Video Placeholder */}
          <div className="flex justify-center lg:justify-end slide-in-right">
            <div className="relative w-[600px] h-[480px] overflow-hidden rounded-lg border border-black group cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
              <video
                className="w-full h-full object-cover scale-110 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:translate-x-2"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              >
                {/* Add your video source here */}
                <source src="/video.mp4" type="video/mp4" />
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Video Placeholder - Add your video source
                </div>
              </video>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
