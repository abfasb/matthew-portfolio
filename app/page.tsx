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
  DialogDescription,
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
  X,
} from "lucide-react";
import logo from "@/public/matt-id.jpg";

const allTech = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux"],
  Backend: ["Node.js", "Laravel", "Prisma", "Supabase", "Express", "REST APIs"],
  "DevOps & Cloud": ["Docker", "Vercel", "AWS", "GitHub Actions", "Firebase"],
};

const galleryImages = [
  "/carousel-1.jpg",
  "/carousel-2.jpg",
  "/carousel-3.jpg",
  "/carousel-4.jpg",
];

export default function PortfolioPage() {
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Gallery state
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Theme mounted effect
  useEffect(() => setMounted(true), []);

  // Keyboard navigation effect
  useEffect(() => {
    if (!galleryOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      }
      if (e.key === "Escape") setGalleryOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryOpen]);

  if (!mounted) {
    return <div className="bg-white dark:bg-gray-950 min-h-screen" />;
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setGalleryOpen(true);
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

        <div className="grid grid-cols-12 gap-8">
          <section className="col-span-7 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                I’m a fresh graduate and aspiring full-stack developer from Mindoro State University passionate about building clean, scalable, and user-friendly web applications. I enjoy turning ideas into real digital products while continuously improving my skills in both frontend and backend development.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                During my studies, I worked on personal and freelance projects using modern web technologies, gaining hands-on experience in developing responsive and efficient applications. I’m always eager to learn new technologies, take on challenges, and collaborate on meaningful projects.
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
            <a
              href="/analytics-cert.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card className="bg-gray-50 dark:bg-gray-800 border-none shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">
                    Information Technology Specialist — Data Analytics
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    MC Tech Training & Assessment Center – 2026
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/google-cert.png"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card className="bg-gray-50 dark:bg-gray-800 border-none shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">
                    Google IT Support
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Google – 2026
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </section>

        {/* ========== GALLERY WITH PROPERLY SCALED FULL-SCREEN VIEWER ========== */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Gallery</h2>
          
          <div className="grid grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                onClick={() => openGallery(index)}
                className="aspect-square rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 
                           cursor-pointer hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Full-screen lightbox – images now always fit the viewport */}
          <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
            <DialogContent 
              className="!w-screen !h-screen !max-w-none !max-h-none !overflow-hidden p-0 bg-black/95 border-none rounded-none"
              aria-describedby="gallery-description"
            >
              <DialogHeader className="sr-only">
                <DialogTitle>Gallery Image {currentIndex + 1}</DialogTitle>
                <DialogDescription>
                  Full screen image viewer. Use arrow keys or buttons to navigate.
                </DialogDescription>
              </DialogHeader>

              <button
                onClick={() => setGalleryOpen(false)}
                className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center w-full h-full absolute inset-0">
                <img
                  src={galleryImages[currentIndex]}
                  alt={`Gallery ${currentIndex + 1}`}
                  className="max-w-full max-h-full w-auto h-auto object-contain select-none"
                />

                <button
                  onClick={() => setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </DialogContent>
          </Dialog>
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