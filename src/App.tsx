import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      technologies: ["TypeScript", "Firebase", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather visualization with forecasting",
      technologies: ["React", "D3.js", "OpenWeather API"],
    },
  ]

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "UI/UX Design",
    "AWS/Cloud Deployment",
    "GraphQL/REST APIs",
    "PostgreSQL/MongoDB",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">John Developer</div>
          <nav className="hidden md:flex space-x-6">
            {["Home", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`${
                  activeSection === item.toLowerCase()
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                } transition-colors`}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex space-x-3">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                Hi, I'm <span className="text-primary">John</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-heading font-semibold mb-6 text-muted-foreground">
                Full Stack Developer
              </h2>
              <p className="text-lg max-w-lg mb-8 text-muted-foreground">
                I build exceptional digital experiences that are fast, accessible, and visually appealing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>Contact Me</Button>
                <Button variant="outline">View Projects</Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <PlaceholderImage
                  label="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-background" id="projects">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-4">My Projects</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Here are some of my recent works. Each project reflects my passion for clean code and great user experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="flex flex-col h-full overflow-hidden">
                  <div className="h-48 bg-muted">
                    <PlaceholderImage
                      label={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <div className="px-6 pb-6 mt-auto">
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-muted/50" id="skills">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              I specialize in building digital products with modern technologies and best practices.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-background p-4 rounded-lg border border-border text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background" id="contact">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-center mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} John Developer. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with React, TypeScript and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}