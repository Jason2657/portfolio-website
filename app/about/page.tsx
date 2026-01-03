// app/about/page.tsx
import Image from "next/image";

export default function About() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      
      {/* Header with Photo */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/headshot.JPG"
            alt="Jason Xie"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
            I'm Jason, a senior at Columbia University studying Computer Science and Psychology. 
            I got into tech because I love building things that people actually use: products 
            that solve real problems and feel intuitive. My psychology background shapes how I 
            think about users: what motivates them, what frustrates them, and how to design 
            experiences that just work.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Python", "Java", "C/C++", "JavaScript", "TypeScript", "Ruby on Rails", "SQL", "HTML/CSS", "React", "Next.js", "Node.js", "TensorFlow", "PyTorch", "LangChain", "PostgreSQL", "Docker", "GitHub Actions", "GCP", "Linux"].map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Columbia University</h3>
          <p className="text-gray-600">B.A. Computer Science & Psychology — Expected 2026</p>
          <p className="text-gray-500 text-sm mt-2">
            Relevant coursework: Intro Java, Data Structures & Algorithms, Systems Programming in C, Databases, Engineering Software as a Service, UI Design, Natural Language Processing, Artificial Intelligence, Computer Systems, CS Theory
          </p>
          
          <p className="text-gray-500 text-sm mt-4 font-medium">Awards & Honors:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Upsilon Pi Epsilon (CS Honor Society)", "Psi Chi International (Psychology Honor Society)", "Zhou Family Scholar"].map((award) => (
              <span 
                key={award}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {award}
              </span>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4 font-medium">School Organizations:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Columbia Daily Spectator (Product)", "Cognitive Science Student Club (VP Career & Alumni)", "Application Development Initiative (DevFest)", "Columbia Organization of Rising Entrepreneurs (Almaworks)", "Ski and Snowboard Club"].map((org) => (
              <span 
                key={org}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* What I'm Looking For */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">What I'm Looking For</h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          I'm seeking software engineering roles where I can build user-facing products 
          at the intersection of technology and human behavior. I thrive in environments 
          where I can ship quickly, learn from users, and iterate.
        </p>
      </div>

      {/* Outside of Work */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Outside of Work</h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          When I'm not coding, you'll find me backpacking, doing photography, 
          and going on sidequests (most recently: pickleball). I love exploring 
          new places and picking up random skills along the way.
        </p>
      </div>

    </div>
  );
}
