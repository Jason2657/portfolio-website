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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            I'm Jason, a senior at Columbia University studying Computer Science and Psychology.
            I got into tech because I love building things that people actually use: products
            that solve real problems and feel intuitive. My psychology background shapes how I
            think about users: what motivates them, what frustrates them, and how to design
            experiences that just work.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
            When I'm not coding, you'll find me backpacking, doing photography, or playing pickleball.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>

        <div className="mt-6 space-y-8">
          {/* Arlo */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer Intern @ Arlo (Columbia Build Labs)</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm italic mt-1">September 2025 - December 2025</p>
            <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
              Building Arlo, an AI leasing platform for affordable housing applications. Designed document verification pipelines using GPT-4 Vision, Supabase PostgreSQL, and React/Next.js that reduced manual validation time by 90% for pilot users.
            </p>
            <div className="mt-3">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">Stack:</p>
              <div className="flex flex-wrap gap-2">
                {["Azure OpenAI", "GPT-4 Vision", "PostgreSQL", "React", "Next.js", "TypeScript", "Box API"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Instalily */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GTM Software Engineer Intern @ InstaLily AI</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm italic mt-1">May 2025 - August 2025</p>
            <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
              Built an AI-assisted sales platform from zero to one for 15 pilot users, cutting new-feature onboarding by 30%. Designed PostgreSQL schemas, optimized LLM-driven queries with LangChain (25% throughput boost), and containerized the full platform on Docker + GCP Cloud Run with 99.9% uptime.
            </p>
            <div className="mt-3">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">Stack:</p>
              <div className="flex flex-wrap gap-2">
                {["Python", "MCP Server", "Google ADK", "Next.js", "PostgreSQL", "LangChain", "Docker", "GCP Cloud Run", "Firestore"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Shen Lab */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Research Assistant @ Columbia University Irving Medical Center (Shen Lab)</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm italic mt-1">May 2024 - August 2024</p>
            <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
              Developed machine learning models using TensorFlow and PyTorch to identify genetic mutations. Built data analytics pipelines analyzing large-scale genetic datasets (ClinVar, PrimateAI), boosting predictive accuracy by 20%.
            </p>
            <div className="mt-3">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">Stack:</p>
              <div className="flex flex-wrap gap-2">
                {["Python", "TensorFlow", "PyTorch", "Docker", "ClinVar", "PrimateAI"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>

        <div className="mt-6 space-y-6">
          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "TypeScript", "JavaScript", "Java", "C/C++", "Ruby", "SQL", "HTML/CSS"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm dark:bg-gray-800 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "Ruby on Rails", "TensorFlow", "PyTorch", "LangChain", "PostgreSQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm dark:bg-gray-800 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              {["Docker", "GitHub Actions", "GCP", "Vercel", "Linux"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm dark:bg-gray-800 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Columbia University</h3>
          <p className="text-gray-600 dark:text-gray-300">B.A. Computer Science & Psychology — Expected 2026</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Relevant coursework: Intro Java, Data Structures & Algorithms, Systems Programming in C, Databases, Engineering Software as a Service, UI Design, Natural Language Processing, Artificial Intelligence, Computer Systems, CS Theory
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 font-medium">Awards & Honors:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Upsilon Pi Epsilon (CS Honor Society)", "Psi Chi International (Psychology Honor Society)", "Zhou Family Scholar"].map((award) => (
              <span
                key={award}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm dark:bg-gray-800 dark:text-gray-300"
              >
                {award}
              </span>
            ))}
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 font-medium">School Organizations:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Columbia Daily Spectator (Product)", "Cognitive Science Student Club (VP Career & Alumni)", "Application Development Initiative (DevFest)", "Columbia Organization of Rising Entrepreneurs (Almaworks)", "Ski and Snowboard Club"].map((org) => (
              <span
                key={org}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm dark:bg-gray-800 dark:text-gray-300"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* What I'm Looking For */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What I'm Looking For</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          I'm seeking software engineering roles where I can build user-facing products
          at the intersection of technology and human behavior. I thrive in environments
          where I can ship quickly, learn from users, and iterate.
        </p>
      </div>

    </div>
  );
}
