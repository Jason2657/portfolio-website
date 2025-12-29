// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-4xl mx-auto flex items-center justify-between p-6">
      
      {/* Logo / Name */}
      <Link href="/" className="text-xl font-bold">
        Jason Xie
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
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