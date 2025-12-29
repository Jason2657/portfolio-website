// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-4xl mx-auto flex items-center justify-between p-4 md:p-6">
      
      {/* Logo / Name */}
      <Link href="/" className="text-lg md:text-xl font-bold">
        Jason Xie
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
        <Link href="/projects" className="hover:text-blue-500 transition">
          Projects
        </Link>
        <Link href="/resume" className="hover:text-blue-500 transition">
          Resume
        </Link>
        <Link href="/contact" className="hover:text-blue-500 transition">
          Contact
        </Link>
      </div>

    </nav>
  );
}