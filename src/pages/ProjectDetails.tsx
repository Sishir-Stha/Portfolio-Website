import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Finance Manager',
      description: 'A full-stack e-commerce finance solution with React, Java Spring Boot , and PostgreSQL. Features include user authentication, Charts, and admin dashboard.',
      longDescription: 'This comprehensive e-commerce platform was built from the ground up using modern web technologies. The frontend is powered by React with a responsive design that works seamlessly across all devices. The backend uses Java SpringBoot API (REST API) for API development and PostgreSQL for data persistence. Key features include user registration and authentication, transaction management, Alloting budget functionality, Analysing finance though charts, finance tracking, and a comprehensive admin dashboard for managing categories and users.',
      tech: ['React', 'Java Spring Boot', 'Rest API','PostgreSQL', 'Chart.js'],
      github: 'https://github.com/Sishir-Stha/Finance-Manager.git',
     // live: 'https://example.com',
      image: 'https://as1.ftcdn.net/v2/jpg/13/50/85/74/1000_F_1350857433_sVdI3PieMtjli8taKQmijc3zl7sXuCZq.jpg',
      features: [
        'Secure user authentication and role-based authorization',
        'Comprehensive income, expense, and transaction tracking',
        'Interactive financial analytics and reporting using charts',
        'Budget allocation and finance planning tools',
        'Order management and tracking with full history',
        'Admin dashboard for managing users, categories, and budgets',
        'Responsive and mobile-friendly user interface'
      ]      
    },
    {
        id: 2,
        title: 'Airline Reservation System',
        description: 'A full-stack airline reservation system with React, Java Spring Boot, and PostgreSQL which shows the ticket and availability of all the airlines integrated. Features include user authentication, booking, and admin dashboard.',
        longDescription: 'This full-stack airline reservation system is designed to streamline the flight booking process for agencies and customers. Built using modern technologies, the frontend is developed with React, ensuring a responsive and intuitive user interface, while the backend is powered by Java Spring Boot and PostgreSQL for secure and efficient data handling. Users can view the availability of flights across multiple integrated airlines, book tickets in real time, and securely log in using the robust authentication system. The platform supports user registration, login, flight search by destination and date, ticket booking, and booking history for both B2B and B2C.',
        tech: ['React', 'Java Spring Boot', 'PostgreSQL', 'REST API'],
        github: 'https://github.com/Sishir-Stha/Airline-Booking-System.git',
      //  live: 'https://example.com',
        image: 'https://as1.ftcdn.net/v2/jpg/15/36/60/68/1000_F_1536606805_PBCZjmHFj16UDJNxXjzmevkDISVSY0m4.jpg',
        features: [
          'User registration and secure login system',
          'Flight availability browsing across multiple airlines',
          'Flight search by date, route, and availability',
          'Real-time ticket booking functionality',
          'Booking history tracking for users and agencies',
          'Admin dashboard for managing flights and bookings',
          'Support for both B2B (agency) and B2C (customer) access',
          'Responsive design optimized for all screen sizes'
        ]
      }
      ,
    {
      id: 3,
      title: 'Flight Information System',
      description: 'A full-stack flight information system with React, Java Spring Boot, and MSSQL which shows and update the flight information of Yeti Airlines. Features include user authentication, changing flight status and SMS notification feature',
      longDescription: 'This full-stack flight information system is developed specifically for managing and displaying the real-time flight details of Yeti Airlines. The frontend, built with React, offers a user-friendly interface for both airline staff and administrators. The backend, powered by Java Spring Boot and MSSQL, ensures secure and efficient data management. The system allows authorized users to log in, view flight schedules, and update flight statuses such as delays, departures, or arrivals. Additionally, it features an integrated SMS notification system to inform passengers about flight status changes, enhancing communication and operational efficiency. This system is currently live and actively used in a domestic airport to display up-to-date flight status information to travelers.',
      tech: ['React', 'Java Spring Boot', 'MSSQL','Rest API', 'SMS API', 'Sparrow API'],
      github: 'https://github.com/Sishir-Stha/Flight-Information-System.git',
      live: 'https://fis.yetiairlines.com',
      image: 'https://as1.ftcdn.net/v2/jpg/15/49/12/94/1000_F_1549129463_5Jx7VewOgkNgBAcbAZ1eKVrCUuETiDDR.jpg',
      features: [
        'User authentication with secure login',
        'Real-time flight status display and updates',
        'Flight schedule management (arrival, departure, delay, cancel)',
        'Flight status preview including check-in and departure details',
        'SMS notification system for flight updates',
        'Dedicated admin interface for managing flight data',
        'Responsive and intuitive React-based frontend',
        'Optimized for use at domestic airport displays',
        'Live deployment in a domestic airport environment',
        'Integration with MSSQL for efficient data handling'
      ]      
    },
    {
      id: 4,
      title: 'Fare Update System',
      description: 'A full-stack fare update system with React, Java Spring Boot, and MSSQL which allows user to update the fare on rush hours. Features include user authentication, real time fare update or creation of new fare',
      longDescription: 'This full-stack fare update system is designed to allow authorized users to efficiently manage and update fare information, especially during peak or rush hours. Built with React for a responsive frontend and Java Spring Boot with MSSQL for a secure and scalable backend, the system supports real-time fare modifications and the creation of new fare entries as needed. With built-in user authentication, only verified users can access fare management functionalities. The web application ensures that fare changes are instantly reflected across the platform, making it ideal for dynamic pricing models used in transportation or airline systems. It is particularly useful in time-sensitive scenarios where rapid fare adjustments are necessary to reflect demand or operational changes.',
      tech: ['React', 'Java Spring Boot', 'MSSQL','Rest API','JWT'],
      github: 'https://github.com/Sishir-Stha/Fare-Update-System.git',
    //  live: 'https://fus.yetiairlines.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      features: [
        'User authentication with role-based access control',
        'Real-time fare updates during rush hours',
        'Creation of new fare entries with full validation',
        'Instant synchronization of fare data across the system',
        'Responsive React-based user interface',
        'Admin interface for fare history and change tracking',
        'Secure backend built with Java Spring Boot and MSSQL',
        'Dynamic pricing support for flexible fare management',
        'Optimized for high-demand, time-sensitive operations'
      ]      
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || '1'));

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 slide-in-top">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 slide-in-left">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 slide-in-right">
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {project.description}
              </p>

              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Key Features</h2>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features?.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  )) || <li className="text-muted-foreground">No features listed</li>}
                </ul>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="glass-card p-6 sticky top-8 slide-in-bottom">
                <h3 className="text-xl font-semibold text-foreground mb-4">Project Info</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    )) || <span className="text-muted-foreground text-sm">No technologies listed</span>}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Button>
                  
                  {project.live && (
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
