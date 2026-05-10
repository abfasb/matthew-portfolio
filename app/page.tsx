"use client"

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
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
  MapPin,
  BadgeCheck,
  Mail,
  Calendar,
  BookOpen,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Sun,
  Moon,
} from "lucide-react";
import logo from "@/public/matt-id.jpg";

const allTech = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux"],
  Backend: ["Node.js", "Laravel", "Prisma", "Supabase", "Express", "REST APIs"],
  "DevOps & Cloud": ["Docker", "Vercel", "AWS", "GitHub Actions", "Firebase"],
};

export default function PortfolioPage() {
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans antialiased transition-colors">
      <div className="max-w-[1100px] mx-auto px-8 py-12 space-y-16">
        <header className="relative flex flex-wrap items-start gap-6">
          <Avatar className="w-32 h-32 overflow-hidden shadow-sm">
            <AvatarImage src={logo.src} alt="Matthew C. Balinton" />
            <AvatarFallback className="text-4xl bg-gray-100 dark:bg-gray-800 text-gray-400">
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
              <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span>Philippines</span>
            </div>

            <p className="font-medium text-gray-800 dark:text-gray-200 mt-2">
              Software Developer | Tech Enthusiast
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <Button variant="outline" className="bg-black hover:bg-gray-900 text-white gap-2 shadow-sm dark:bg-white dark:text-black dark:hover:bg-gray-100">
                <BookOpen className="w-4 h-4" />
               Download Resume
              </Button>
              <Button variant="outline" className="gap-2 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
            </div>
          </div>

          <div className="absolute top-0 right-0 flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
            <Sun className="w-3.5 h-3.5" />
            <Switch
              checked={isDark}
              onCheckedChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            <Moon className="w-3.5 h-3.5" />
          </div>
        </header>

        {/* ========== MAIN GRID ========== */}
        <div className="grid grid-cols-12 gap-8">
          <section className="col-span-7 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                I’m a student developer at Mindoro State University and a freelance
                full-stack developer passionate about building clean, scalable web
                applications. I love turning ideas into real products that people
                enjoy using.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                While studying, I take on freelance projects that sharpen my skills
                in both frontend and backend technologies, always striving for
                efficient, user‑friendly solutions.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                I’m based in the Philippines and always open to new challenges and
                collaborative opportunities.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
                <Dialog open={viewAllOpen} onOpenChange={setViewAllOpen}>
                  <DialogTrigger asChild>
                    <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      View All &gt;
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md dark:bg-gray-900 dark:border-gray-800">
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
                                className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 font-medium text-xs"
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
                          className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 font-medium text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {techs.length > 4 && (
                        <Badge
                          variant="outline"
                          className="bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-700 font-medium text-xs cursor-pointer hover:text-gray-600 dark:hover:text-gray-300"
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

            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Projects</h2>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/60 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm rounded-lg">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      TOMS (Travel Order Management System)
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      A comprehensive platform for managing travel orders with
                      approval workflows.
                    </p>
                    <span className="inline-block mt-2 font-mono text-[10px] text-gray-400 dark:text-gray-500 bg-white/60 dark:bg-black/40 px-2 py-0.5 rounded">
                      toms.gov.ph
                    </span>
                  </CardContent>
                </Card>
                <Card className="border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/60 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm rounded-lg">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      HealthTrack 360
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      Patient health records and analytics dashboard for clinics.
                    </p>
                    <span className="inline-block mt-2 font-mono text-[10px] text-gray-400 dark:text-gray-500 bg-white/60 dark:bg-black/40 px-2 py-0.5 rounded">
                      healthtrack.ph
                    </span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <aside className="col-span-5 space-y-10">
            <Card className="bg-gradient-to-br from-gray-900 to-black text-white shadow-sm border-0 rounded-xl">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <span className="text-lg font-mono font-bold">&gt;_</span>
                  <div className="grid grid-cols-5 gap-0.5 w-12 h-12">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${
                          [0, 4, 6, 12, 14, 18, 20, 24].includes(i)
                            ? "bg-white"
                            : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-8 space-y-1">
                  <p className="text-[10px] tracking-widest text-gray-400 uppercase">
                    Student Access Card
                  </p>
                  <p className="text-sm font-semibold tracking-wide">
                    MATTHEW C. BALINTON
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black dark:bg-white mt-1.5 flex-shrink-0" />
                  <div className="flex-1 flex justify-between items-baseline">
                    <div>
                      <p className="font-semibold text-sm text-gray-900 dark:text-white">
                        Freelance Developer
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Self‑employed
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-2 whitespace-nowrap">
                      2022 – Present
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black dark:bg-white mt-1.5 flex-shrink-0" />
                  <div className="flex-1 flex justify-between items-baseline">
                    <div>
                      <p className="font-semibold text-sm text-gray-900 dark:text-white">
                        Student
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Mindoro State University
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-2 whitespace-nowrap">
                      2022 – 2026
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recommendations</h2>
              <blockquote className="text-sm italic text-gray-600 dark:text-gray-400 font-serif mb-3">
                “Matthew is one of the most dedicated student developers I’ve
                worked with. His attention to detail and problem‑solving skills
                are outstanding.”
              </blockquote>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Dr Maria Teresa Carido</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Travel Order Management</p>
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

            <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
              <Button 
                asChild
                variant="outline" 
                className="w-full gap-2 justify-start dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <a href="/Matthew_Balinton_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4" />
                  View Resume
                </a>
              </Button>
              <Button className="w-full gap-2 justify-start bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100">
                <Calendar className="w-4 h-4" />
                Send Email
              </Button>
            </div>
          </aside>
        </div>
        
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Certifications
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-50 dark:bg-gray-800 border-none shadow-sm">
              <CardContent className="p-4">
                <p className="font-semibold text-sm text-gray-900 dark:text-white">
                  Information Technology Specialist — Data Analytics
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Commission on Higher Education – 2023
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-800 border-none shadow-sm">
              <CardContent className="p-4">
                <p className="font-semibold text-sm text-gray-900 dark:text-white">
                  AWS Cloud Practitioner
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Amazon Web Services – 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GALLERY */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Gallery</h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm">
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
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm">
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </section>

        <footer className="py-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-center text-xs text-gray-500 dark:text-gray-500">
            © 2026 Matthew C. Balinton. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}