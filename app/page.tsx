"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Card from "./components/style";
import { Particles } from "@/app/components/particles";
import CoolBackground from "./components/topBackground";
import TypingText from "@/app/components/typing-text";
import { FloatingNav } from "./components/floating_navbar";
import Image from "next/image";
import pesticaress from "@/lib/images/pesticaress.jpg";
import {
  HomeIcon,
  FolderGit2,
  Mail,
  Briefcase,
  Github,
  Linkedin,
} from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import components that are below the fold
const Timeline = dynamic(() =>
  import("./components/timeline").then((mod) => mod.Timeline)
);
const IntegrationHero = dynamic(() => import("./components/integration-hero"));
const ContactModal = dynamic(() =>
  import("./components/contact-modal").then((mod) => mod.ContactModal)
);

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <HomeIcon className="h-4 w-4 text-white" />,
    },

    {
      name: "Projects",
      link: "#projects",
      icon: <FolderGit2 className="h-4 w-4 text-white" />,
    },

    {
      name: "Background",
      link: "#professional-background",
      icon: <Briefcase className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "#contact", // Keep link for scroll-spy active state
      icon: <Mail className="h-4 w-4 text-white" />,
      onClick: () => setIsModalOpen(true),
    },
  ];

  const timelineData = [
    {
      title: "PYQ Organizer",
      description:
        "A modern web application that uses artificial intelligence to automatically organize Previous Year Questions (PYQs) from PDF files according to your course syllabus. Built with a beautiful dark theme and intuitive user interface.",
      githubUrl: "https://github.com/iamshaury/PyqOrganizer",
      content: (
        <div className="bg-gray-900/50 border border-white/10 rounded-lg overflow-hidden">
          {/* Card Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800/60 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://pyqorganizer-frontend.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Live Site &rarr;
              </a>
            </div>
          </div>
          {/* Iframe Content */}
          <div className="relative w-full h-[450px] overflow-auto pointer-events-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <iframe
              src="https://pyqorganizer-frontend.onrender.com/"
              className="absolute top-0 left-0 w-full h-full"
              title="PYQ Organizer Live Demo"
              allow="fullscreen"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            ></iframe>
          </div>
        </div>
      ),
    },
    {
      title: "PestiCare",
      description:
        "PestiCare is an AI-driven web and mobile solution built to empower farmers with quick, reliable plant disease and pest diagnostics. Using just a smartphone or computer, farmers can capture or upload crop images and receive instant, actionable insights—even in areas with limited internet connectivity.",
      githubUrl: "https://github.com/iamshaury/PestiCareMobile",
      content: (
        <div className="w-full max-w-[250px] mx-auto bg-gray-900/50 p-1 rounded-[2.5rem] border-2 border-white/10 shadow-xl">
          <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
            {/* Phone Bezel Top */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-800 rounded-full"></div>
            </div>
            {/* Image Content */}
            <div className="w-full">
              <Image
                src={pesticaress}
                alt="PestiCare Screenshot"
                width={250}
                height={538}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="relative overflow-hidden min-h-screen w-full">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles />
      </div>

      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-24 gap-8 md:gap-16">
        {/* Top Section */}
        <section
          id="home"
          className="scroll-mt-24 w-full flex flex-col items-center"
        >
          <div className="relative w-full max-w-[800px] h-auto md:h-64 flex flex-col md:flex-row items-center justify-center mb-0 p-8 rounded-3xl">
            <CoolBackground />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-8 md:gap-0 px-4 md:px-8">
              {/* Left */}
              <div className="flex-1 max-w-md text-center md:text-left">
                <div className="flex flex-col items-start">
                  <h1 className="text-2xl md:text-3xl text-neutral-400 font-light">
                    Hello,
                  </h1>
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
                    <TypingText text="I'm Shaury" />
                  </h1>
                </div>
              </div>
              {/* Right */}
              <div className="flex-shrink-0">
                <Card />
              </div>
            </div>
          </div>
        </section>

        <motion.section
          id="about"
          className="scroll-mt-24 w-full max-w-[800px] px-4 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className=" backdrop-blur-sm">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              As a B.Tech student with a deep passion for software development,
              I am on a journey to create applications that are not only
              functional but also provide intuitive and engaging user
              experiences. I am dedicated to building for both web and mobile,
              constantly exploring new technologies to write clean, efficient
              code.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="scroll-mt-24 w-full max-w-7xl px-4 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <Timeline data={timelineData} />
        </motion.section>

        <motion.section
          id="skills"
          className="relative scroll-mt-24 w-full max-w-[800px] px-4 md:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h1 className="text-4xl lg:text-6xl p-2 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Technologies I Work With
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            I have experience with a wide range of technologies for building
            modern web applications.
          </p>
          <IntegrationHero />
        </motion.section>

        <motion.section
          id="professional-background"
          className="scroll-mt-24 w-full max-w-[800px] px-4 mb-8 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl lg:text-6xl p-4 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8 text-center mt-16">
            Professional Background
          </h2>
          <div className="bg-gray-900/30  rounded-2xl p-8 backdrop-blur-sm">
            <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg md:text-xl leading-relaxed">
              <li>
                Bachelor of Technology in Computer Science and Engineering.
              </li>
              <li>
                Skilled in AI/ML, Web Development, and Mobile App Development.
              </li>
              <li>Solved 600+ DSA problems with a LeetCode rating of 1550.</li>
              <li>
                Passionate about building innovative, real-world tech solutions.
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-24 pb-24 w-full max-w-[800px] px-4 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl lg:text-6xl p-2 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8 text-center">
            Let's Connect
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start align-center justify-center">
            <a
              href="https://github.com/iamshaury" // Replace with your GitHub profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-lg text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-white/10"
            >
              <Github className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shaury-chaudhary-7139a530a/" // Replace with your LinkedIn profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-lg text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-white/10"
            >
              <Linkedin className="h-8 w-8 text-[#0A66C2] transition-colors" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-4 text-lg text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-white/10"
            >
              <Mail className="h-8 w-8 text-red-500 transition-colors" />
              <span>officialshaury@gmail.com</span>
            </button>
          </div>
        </motion.section>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
