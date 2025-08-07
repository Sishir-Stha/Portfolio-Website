import techImage1 from '@/assets/tech-animation-1.png';
import techImage2 from '@/assets/tech-animation-2.png';
import techImage3 from '@/assets/tech-animation-3.png';

const TechAnimation2D = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* Main tech workspace image */}
      <div className="relative tech-float-1 z-10">
        <img
          src={techImage1}
          alt="Tech Workspace"
          className="w-80 h-60 object-contain opacity-90"
        />
      </div>

      {/* Floating tech icons */}
      <div className="absolute top-4 right-8 tech-float-2 z-20">
        <img
          src={techImage2}
          alt="Tech Icons"
          className="w-32 h-24 object-contain opacity-80"
        />
      </div>

      {/* Circuit pattern background */}
      <div className="absolute bottom-8 left-4 tech-float-3 z-5">
        <img
          src={techImage3}
          alt="Circuit Pattern"
          className="w-40 h-30 object-contain opacity-70"
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 -left-8 w-12 h-12 bg-accent/20 rounded-full blur-md animate-pulse delay-500"></div>
    </div>
  );
};

export default TechAnimation2D;