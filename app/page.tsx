import { Suspense } from "react"
import Link from "next/link"
import { ArrowRight, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThreeScene } from "@/components/three-scene"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { AnimatedText } from "@/components/animated-text"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              <Link href="#about" className="hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="#projects" className="hover:text-purple-600 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-purple-600 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="hover:text-purple-600 transition-colors">
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <AnimatedText text="Hi, I'm" className="block" />
                <AnimatedText
                  text="Antonis Gargallis"
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent block"
                  delay={0.3}
                />
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                <AnimatedText
                  text="Full-stack developer specializing in creating beautiful, functional, and high-performance web applications."
                  delay={0.6}
                />
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="#contact">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View my work</Link>
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:your.email@example.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="h-[400px] w-full relative">
              <Suspense
                fallback={<div className="h-full w-full bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>}
              >
                <ThreeScene />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I'm a passionate developer with expertise in building modern web applications. With a strong foundation in
              both frontend and backend technologies, I create seamless digital experiences that are both beautiful and
              functional.
            </p>
            <p className="text-lg mb-6">
              My journey in tech began with a curiosity about how things work, which evolved into a career building
              innovative solutions. I'm constantly learning and experimenting with new technologies to stay at the
              cutting edge of web development.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new hiking trails, reading about emerging tech trends, or
              experimenting with new recipes in the kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Website Portfolio"
              description="A collection of custom websites I've designed and developed for various clients across different industries."
              tags={["Next.js", "React", "Responsive Design", "SEO"]}
              image="/placeholder.svg?height=300&width=500"
              link="#"
            />
            <ProjectCard
              title="Google Business Management"
              description="Professional Google Business Account setup and management services to improve local SEO and online visibility."
              tags={["Local SEO", "Google Maps", "Business Listings", "Reviews"]}
              image="/placeholder.svg?height=300&width=500"
              link="#"
            />
            <ProjectCard
              title="Fashion E-Commerce Store"
              description="A modern clothing e-shop with advanced filtering, secure payments, and a seamless mobile shopping experience."
              tags={["E-Commerce", "Shopify", "Payment Processing", "Inventory Management"]}
              image="/placeholder.svg?height=300&width=500"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="React" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="Tailwind CSS" />
                <SkillBadge name="Three.js" />
                <SkillBadge name="Framer Motion" />
                <SkillBadge name="HTML/CSS" />
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Node.js" />
                <SkillBadge name="Express" />
                <SkillBadge name="PostgreSQL" />
                <SkillBadge name="MongoDB" />
                <SkillBadge name="GraphQL" />
                <SkillBadge name="REST APIs" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Git" />
                <SkillBadge name="Docker" />
                <SkillBadge name="CI/CD" />
                <SkillBadge name="AWS" />
                <SkillBadge name="Vercel" />
                <SkillBadge name="Figma" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:your.email@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
