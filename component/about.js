// components/About.js

import { WarpBackground } from "@/components/magicui/warp-background";

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">About Me</h2>
        <WarpBackground>
          <div className="w-80">
            <p>Warp Background</p>
            <p>This is a component that creates a warp background effect.</p>
          </div>
        </WarpBackground>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              {/* Add more skills */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}