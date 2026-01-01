// app/resume/page.tsx
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
        
          <a href="/Jason_Xie_Resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          <Download size={18} />
          Download
        </a>
      </div>

      {/* PDF Embed */}
      <div className="w-full h-[80vh] border border-gray-200 rounded-lg overflow-hidden">
        <iframe
          src="/Jason_Xie_Resume.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>
    </div>
  );
}