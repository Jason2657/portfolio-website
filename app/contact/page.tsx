// app/contact/page.tsx
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto min-h-[calc(100vh-200px)] flex items-center">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-gray-600 mt-2">
          Feel free to reach out. I'd love to hear from you! Whether you want to talk tech, travel, or anything else.
        </p>

        {/* Contact Links */}
        <div className="mt-8 space-y-4">
          
            <a href="mailto:jax2001@columbia.edu"
            className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-500 transition"
          >
            <Mail size={24} />
            jax2001@columbia.edu
          </a>

          
            <a href="https://github.com/Jason2657"
            target="_blank"
            className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-500 transition"
          >
            <Github size={24} />
            github.com/Jason2657
          </a>

          
            <a href="https://linkedin.com/in/jasonagxie"
            target="_blank"
            className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-500 transition"
          >
            <Linkedin size={24} />
            linkedin.com/in/jasonagxie
          </a>
        </div>
      </div>
    </div>
  );
}