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
            New York, NY · jax2001@columbia.edu · linkedin.com/in/jasonagxie · github.com/Jason2657
          </p>
        </header>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-1 mb-3">
            Education
          </h3>
          <div className="flex justify-between items-baseline flex-wrap gap-x-4">
            <p className="font-semibold text-gray-900 dark:text-white">Columbia University</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Expected May 2026</p>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 italic">
            B.A. Computer Science &amp; Psychology (Double Major)
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">GPA: 3.76</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Honors: Dean&apos;s List, Upsilon Pi Epsilon
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-1 mb-4">
            Experience
          </h3>

          <div className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <p className="font-semibold text-gray-900 dark:text-white">
                Software Engineer Intern · Arlo (Columbia Build Labs)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sept 2025 – Dec 2025</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Built an AI leasing platform for affordable housing applications using Azure OpenAI vision agents, Supabase PostgreSQL backend, and React/Next.js frontend, reducing manual validation time by 90% for pilot users.
              </li>
              <li>
                Designed AI document verification pipelines leveraging GPT-4 Vision and optimized full-stack architecture (PostgreSQL schemas, Box API, TypeScript dashboards) to automate ID/income workflows.
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <p className="font-semibold text-gray-900 dark:text-white">
                GTM Software Engineer Intern · InstaLily AI
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">May 2025 – Aug 2025</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Built a complete AI-assisted sales platform from zero to one, integrating 20 LLM tools for 15 pilot users, cutting new-feature onboarding by 30%.
              </li>
              <li>
                Designed PostgreSQL schemas and optimized SQL for LLM-driven LangChain queries, boosting throughput by 25%.
              </li>
              <li>
                Containerized and deployed full platform on Docker → GitHub Actions → GCP Cloud Run, achieving &gt;99.9% uptime with multi-tenant authentication.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <p className="font-semibold text-gray-900 dark:text-white">
                Research Assistant · Columbia University Irving Medical Center (Shen Lab)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">May 2024 – Aug 2024</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Developed and fine-tuned ML models using TensorFlow and PyTorch to identify key genetic mutations.
              </li>
              <li>
                Built robust data analytics pipelines analyzing large-scale genetic datasets (ClinVar, PrimateAI), boosting predictive accuracy by 20%.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-1 mb-3">
            Skills
          </h3>
          <dl className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-gray-900 dark:text-white">Languages:</dt>
              <dd>Python, TypeScript, JavaScript, Java, C/C++, Ruby, SQL.</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-gray-900 dark:text-white">Frameworks:</dt>
              <dd>React, Next.js, Node.js, Ruby on Rails, TensorFlow, PyTorch, LangChain, PostgreSQL.</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-gray-900 dark:text-white">DevOps:</dt>
              <dd>Docker, GitHub Actions, GCP, Vercel, Linux.</dd>
            </div>
          </dl>
        </section>
      </article>
    </div>
  );
}
