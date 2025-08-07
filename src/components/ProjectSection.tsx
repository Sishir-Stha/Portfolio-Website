import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      id: 1,
      title: 'Finance Manager ',
      description: 'A full-stack e-commerce solution with React, Java Spring Boot , and PostgreSQL. Features include user authentication, Charts, and admin dashboard.',
      tech: ['React', 'Java', 'PostgreSQL', 'AWS', 'Rest API','Chart.js'],
      github: 'https://github.com/Sishir-Stha/Finance-Manager.git',
      image: 'https://as1.ftcdn.net/v2/jpg/13/50/85/74/1000_F_1350857433_sVdI3PieMtjli8taKQmijc3zl7sXuCZq.jpg'
    },
    {
      id: 2,
      title: 'Airline Reservation System',
      description: 'A full-stack airline reservation system with React, Java Spring Boot, and PostgreSQL which shows the ticket and avalibility of all the airlines integrated. Features include user authentication, booking, and admin dashboard.',
      tech: ['React', 'Java', 'PostgreSQL', 'AWS','Spring Boot','Rest API','SOAP API','JWT'],
      github: 'https://github.com/Sishir-Stha/Airline-Booking-System.git',
      image: 'https://as1.ftcdn.net/v2/jpg/15/36/60/68/1000_F_1536606805_PBCZjmHFj16UDJNxXjzmevkDISVSY0m4.jpg'
    },
    {
      id: 3,
      title: 'Flight Information System',
      description: 'A full-stack flight information system with React, Java Spring Boot, and MSSQL which shows and update the flight information of Yeti Airlines. Features include user authentication, changing flight status and SMS notification feature',
      tech: ['React', 'Java Spring Boot', 'MSSQL','Rest API', 'SMS API', 'Sparrow API'],
      github: 'https://github.com/Sishir-Stha/Flight-Information-System.git',
      live: 'https://fis.yetiairlines.com',
      image: 'https://as1.ftcdn.net/v2/jpg/15/49/12/94/1000_F_1549129463_5Jx7VewOgkNgBAcbAZ1eKVrCUuETiDDR.jpg'
    },
    {
      id: 4,
      title: 'Fare Update System',
      description: 'A full-stack fare update system with React, Java Spring Boot, and MSSQL which allows user to update the fare on rush hours. Features include user authentication, real time fare update or creation of new fare',
      tech: ['React', 'Java Spring Boot', 'MSSQL','Rest API','JWT'],
      github: 'https://github.com/Sishir-Stha/Fare-Update-System.git',
      //live: 'https://fus.yetiairlines.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWbnS1qAcFplWYmZKazu8KT0_rXfx7lIrAQ&s'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Carousel className="w-full max-w-8xl mx-auto">
              <CarouselContent className="-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden glass-card group hover-lift h-full ">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/90 text-black hover:bg-white"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="btn-accent"
                            asChild
                          >
                            <Link to={`/project/${project.id}`}>
                              <Eye className="w-4 h-4" />
                            </Link>
                          </Button>
                          {project.live && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/90 text-black hover:bg-white"
                              onClick={() => window.open(project.live, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl text-foreground">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 btn-accent"
                            asChild
                          >
                            <Link to={`/project/${project.id}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              Details
                            </Link>
                          </Button>
                          {project.live && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              onClick={() => window.open(project.live, '_blank')}
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
