// components/Navbar.tsx
import Link from "next/link";
import { Code, FileText, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full max-w-4xl mx-auto flex items-center justify-between p-4 md:p-6">
      
      {/* Logo / Name */}
      <Link href="/" className="text-lg md:text-xl font-bold">
        Jason Xie
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
        <Link href="/projects" className="flex items-center gap-1 hover:text-blue-500 transition">
          <Code size={18} />
          Projects
        </Link>
        <Link href="/resume" className="flex items-center gap-1 hover:text-blue-500 transition">
          <FileText size={18} />
          Resume
        </Link>
        <Link href="/contact" className="flex items-center gap-1 hover:text-blue-500 transition">
          <Mail size={18} />
          Contact
        </Link>
      </div>

    </nav>
  );
}