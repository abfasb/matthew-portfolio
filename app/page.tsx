"use client"

import React, { useState, useEffect } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ChevronRight,
  MapPin,
  BadgeCheck,
  Mail,
  Calendar,
  BookOpen,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  X,
  Sun,
  Moon,
} from "lucide-react";

const allTech = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux", "Vue.js"],
  Backend: ["Node.js", "Laravel", "Prisma", "Supabase", "Express", "GraphQL"],
  "DevOps & Cloud": ["Docker", "Vercel", "AWS", "GitHub Actions", "Firebase"],
};

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [viewAllOpen, setViewAllOpen] = useState(false);

  // Toggle the 'dark' class on the <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100 font-sans antialiased transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-8 py-12 space-y-16">
        {/* ========== HEADER ========== */}
        <header className="relative flex flex-wrap items-start gap-6">
          <Avatar className="w-32 h-32 rounded-xl overflow-hidden shadow-sm">
            <AvatarImage src="/avatar-placeholder.jpg" alt="Matthew C. Balinton" />
            <AvatarFallback className="text-4xl bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500">
              MB
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Matthew C. Balinton
              </h1>
              <BadgeCheck className="w-5 h-5 text-blue-500 fill-current" />
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
              <MapPin className="w-4 h-4" />
              <span>Philippines</span>
            </div>

            <p className="font-medium text-gray-800 dark:text-gray-200 mt-2">
              Full-Stack Developer \ MERN \ Next.js \ PHP
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <Button className="bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white gap-2 shadow-sm">
                Schedule a Call
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="gap-2 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
              <Button variant="outline" className="gap-2 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                <BookOpen className="w-4 h-4" />
                Read my blog
              </Button>
            </div>
          </div>

          {/* Dark mode toggle */}
          <div className="absolute top-0 right-0 flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
            <Sun className="w-3.5 h-3.5" />
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            <Moon className="w-3.5 h-3.5" />
          </div>
        </header>

        {/* ========== MAIN CONTENT ========== */}
        <div className="grid grid-cols-12 gap-8">
          {/* LEFT COLUMN */}
          <section className="col-span-7 space-y-10">
            {/* About */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                I’m a full-stack developer passionate about building scalable web
                applications and seamless user experiences...
              </p>
              {/* ... keep the rest of the about text */}
            </div>

            {/* Tech Stack with Dialog */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
                <Dialog open={viewAllOpen} onOpenChange={setViewAllOpen}>
                  <DialogTrigger asChild>
                    <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      View All &gt;
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md dark:bg-gray-900 dark:border-gray-700">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold dark:text-white">Full Technology Stack</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      {Object.entries(allTech).map(([category, techs]) => (
                        <div key={category}>
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{category}</p>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 font-medium text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="space-y-5">
                {Object.entries(allTech).map(([category, techs]) => (
                  <div key={category}>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {techs.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 font-medium text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {techs.length > 4 && (
                        <Badge
                          variant="outline"
                          className="bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-600 font-medium text-xs cursor-pointer hover:text-gray-600 dark:hover:text-gray-300"
                          onClick={() => setViewAllOpen(true)}
                        >
                          +{techs.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Projects (add dark variants to cards) */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Projects</h2>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-gray-100 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm rounded-lg">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      TOMS
                    </h3>
                    {/* ... */}
                  </CardContent>
                </Card>
                {/* second card similarly */}
              </div>
            </div>

            {/* Certifications (add dark variants) */}
            {/* ... */}

            {/* Footer Links – add proper social icons */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">A member of</p>
                <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Google Developer Groups</li>
                  <li>React Philippines</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Social Links</p>
                <div className="flex items-center gap-3">
                  {/* GitHub */}
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN (apply dark variants similarly) */}
          <aside className="col-span-5 space-y-10">
            {/* Developer Card */}
            <Card className="bg-gradient-to-br from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 text-white shadow-sm border-0 rounded-xl">
              {/* ... */}
            </Card>

            {/* Experience */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
              <ul className="space-y-6">
                {[
                  { role: "Full-Stack Developer", company: "Tech Innovations Inc.", year: "2023 – Present" },
                  { role: "Frontend Engineer", company: "Digital Solutions Co.", year: "2021 – 2023" },
                  { role: "Junior Developer", company: "StartUp Labs", year: "2020 – 2021" },
                ].map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black dark:bg-white mt-1.5 flex-shrink-0" />
                    <div className="flex-1 flex justify-between items-baseline">
                      <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-white">{exp.role}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{exp.company}</p>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 ml-2 whitespace-nowrap">
                        {exp.year}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recommendations</h2>
              <blockquote className="text-sm italic text-gray-600 dark:text-gray-300 font-serif mb-3">
                “Matthew is one of the most dedicated developers I’ve worked with...”
              </blockquote>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Maria Santos</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">CTO, HealthTrack 360</p>
              <div className="flex items-center gap-1.5 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i === 0 ? "bg-gray-900 dark:bg-white" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Contact buttons (add dark outline) */}
            <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
              <Button variant="outline" className="w-full gap-2 justify-start dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
              <Button className="w-full gap-2 justify-start bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white">
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </Button>
              <Button variant="outline" className="w-full gap-2 justify-start dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                <BookOpen className="w-4 h-4" />
                Read my Blog
              </Button>
            </div>
          </aside>
        </div>

        {/* GALLERY */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Gallery</h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-4 gap-4 px-12">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700"
                ></div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm">
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            © 2026 Matthew C. Balinton. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}