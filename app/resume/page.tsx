import { Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Resume</h1>

        <a
          href="/Jason_Xie_Resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          <Download size={18} />
          Download PDF
        </a>
      </div>

      <article className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 px-8 md:px-14 py-10 md:py-12 text-gray-800 dark:text-gray-200">
        {/* Header */}
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-gray-900 dark:text-white">
            JASON XIE
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
            New York, NY · (646) 240-1631 · jax2001@columbia.edu · linkedin.com/in/jasonagxie · github.com/Jason2657
          </p>
        </header>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-1 mb-3">
            Education
          </h3>
          <div className="flex justify-between items-baseline flex-wrap gap-x-4">
            <p className="font-semibold text-gray-900 dark:text-white">Columbia University</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">May 2026</p>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 italic">
            Bachelor of Arts, Computer Science and Psychology (Double Major)
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>
              GPA: 3.76/4.00 · Honors: Dean&apos;s List (all semesters), Ward H. Dennis Scholarship, Upsilon Pi Epsilon (Honor Society)
            </li>
            <li>
              Relevant Coursework: Data Structures and Algorithms, Computer Systems, Artificial Intelligence, Database Systems
            </li>
            <li>
              Activities: Application Development Initiative (DevFest), Columbia Organization of Rising Entrepreneurs (Almaworks)
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-1 mb-4">
            Professional Experience
          </h3>

          <div className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <p className="font-semibold text-gray-900 dark:text-white">
                AI Engineer Intern · Onki AI
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">January 2026 – Present</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Building an AI-powered in-store sales assistant combining voice, computer vision, and touchscreen interfaces to deliver real-time product recommendations in retail; deployed to 3 pilot locations across high-margin categories.
              </li>
              <li>
                Designed evaluation frameworks benchmarking agent performance across 500+ test conversations; iterated on LLM architecture, prompt strategies, and edge-deployment pipelines to improve recommendation accuracy by 35%.
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <p className="font-semibold text-gray-900 dark:text-white">
                Software Engineer Intern · Columbia Build Labs – Arlo
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">September 2025 – December 2025</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Built an AI leasing platform for affordable housing applications, consisting of Azure OpenAI vision agents, Supabase PostgreSQL backend &amp; React/Next.js frontend, reducing manual validation time by 90% for pilot users.
              </li>
              <li>
                Designed AI document verification pipelines leveraging GPT-4 Vision and optimized full-stack architecture (PostgreSQL schemas, Box API, TypeScript dashboards) to automate ID/income workflows and improve pilot usability.
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <p className="font-semibold text-gray-900 dark:text-white">
                GTM Software Engineer Intern · InstaLily AI
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">May 2025 – August 2025</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Built and shipped a multi-agent AI sales platform from zero to one (Python MCP Server + Google ADK Agent + React/Next.js), integrating 20 LLM tools; deployed to 15 pilot users and reduced onboarding time 30%.
              </li>
              <li>
                Designed PostgreSQL schemas &amp; optimized SQL for LLM-driven (LangChain) queries, boosting throughput by 25%.
              </li>
              <li>
                Containerized &amp; deployed full platform on Docker → GitHub Actions → GCP Cloud Run. Architected a Firestore-based credential flow + CI/CD pipeline, achieved &gt; 99.9% uptime, and secured multi-tenant authentication.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <p className="font-semibold text-gray-900 dark:text-white">
                Co-Founder &amp; Technical Lead · Apply for China
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">February 2021 – September 2021</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Co-founded an ed-tech platform connecting international students with Chinese universities; owned product vision and roadmap from idea to launch, scaling to 200+ active users across 15 countries.
              </li>
              <li>
                Led a 4-person engineering team to ship a full-stack product on AWS from scratch, boosting engagement by 30%.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-1 mb-4">
            Projects
          </h3>

          <div className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <p className="font-semibold text-gray-900 dark:text-white">
                Repro-Bot AI · Yale Hackathon YHacks 2024
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">New Haven, CT</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Won the ActualFood Challenge for developing a health AI chatbot that bridges the communication gap in healthcare.
              </li>
              <li>
                Gathered and analyzed user feedback to iterate on key features, resulting in a more user-friendly and scalable platform.
              </li>
              <li>
                Developed frontend using React.js, ensuring data privacy and system robustness through secure HIPAA API integrations.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <p className="font-semibold text-gray-900 dark:text-white">
                VERSA · UCLA Hackathon LA Hacks 2024
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Los Angeles, CA</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Developed a cloud-enabled AI application leveraging Python and Linux-based environments to assess research paper quality, incorporating comprehensive metrics beyond traditional citation counts.
              </li>
              <li>
                Led product development by coordinating feature prioritization and roadmap planning to meet tight hackathon deadlines.
              </li>
              <li>
                Achieved top 5 placement among 100+ projects, recognized for innovation in academic research evaluation.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-1 mb-3">
            Technical Skills &amp; Interests
          </h3>
          <dl className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-gray-900 dark:text-white">Spoken Languages:</dt>
              <dd>German (native), Chinese (native), English (native), Spanish (basic).</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-gray-900 dark:text-white">Programming Languages:</dt>
              <dd>Java, Python, C/C++, JavaScript/TypeScript, HTML/CSS, SQL, Ruby.</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-gray-900 dark:text-white">Technologies:</dt>
              <dd>React/Next.js, Flask, TensorFlow, PyTorch, LangChain, Docker, GitHub Actions, AWS, Linux, PostgreSQL.</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-gray-900 dark:text-white">Interests:</dt>
              <dd>Backpacking, Scuba Diving, Tennis, Golf, Skiing, Piano, Reading, Photography, Building Products, Cooking.</dd>
            </div>
          </dl>
        </section>
      </article>
    </div>
  );
}
