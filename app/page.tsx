// app/page.tsx
export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        
        {/* Left Column */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900">
            Hey, I'm Jason!
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            I'm a software engineer and CS student at Columbia.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Projects
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Resume
            </button>
          </div>
        </div>
        
        {/* Right: Emoji */}
        <div className="text-9xl">
          👨‍💻
        </div>

      </div>
    </div>
  );
}