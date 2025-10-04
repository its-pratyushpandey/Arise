"use client";
import { frameworks } from "@/data/frameworks";
export default function FrameworksGrid() {
  return (
    <section className="w-full py-10 px-2 md:px-0">

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Frameworks & Libraries
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {frameworks.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-md p-4 hover:shadow-lg transition group border border-gray-100 dark:border-zinc-800"
          >
            <Icon className="text-4xl md:text-5xl text-[#6c47ff] group-hover:scale-110 transition-transform" />
            <span className="mt-3 text-base md:text-lg font-medium text-gray-800 dark:text-gray-200 text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
