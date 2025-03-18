import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Check,
  Code,
  Database,
  Layers,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-20 py-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <div className="space-y-4 max-w-3xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-linear-to-r from-primary to-primary/50 blur-md opacity-75"></div>
              <div className="relative bg-background rounded-full p-4">
                <Code className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Full-Stack Developer & DevOps Engineer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building modern web applications with TypeScript, React, and
            Next.js, backed by robust infrastructure and CI/CD pipelines.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              TypeScript
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Next.js
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              React
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Express
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Kubernetes
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              ArgoCD
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              CI/CD
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" asChild>
              <Link href="#contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hidden">
              <Link href="#projects">View my work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            My Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in building end-to-end solutions with modern
            technologies, from responsive frontends to scalable backends and
            automated deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Card */}
          <Card>
            <CardHeader className="space-y-1">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Frontend Development</CardTitle>
              <CardDescription>
                Creating responsive and interactive user interfaces
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="p-1" />
                  <span>Modern React with TypeScript and hooks</span>
                </li>
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>
                    Next.js for server-side rendering and static generation
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>Responsive designs with Tailwind CSS and ShadCn</span>
                </li>
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>State management with React Context</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Backend Card */}
          <Card>
            <CardHeader className="space-y-1">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Backend Development</CardTitle>
              <CardDescription>
                Building robust APIs and server-side applications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>RESTful APIs with Express and TypeScript</span>
                </li>
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>Database design and optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>Authentication and authorization systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>Message Queues for distributed systems</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* DevOps Card */}
          <Card>
            <CardHeader className="space-y-1">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                <Workflow className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>DevOps & CI/CD</CardTitle>
              <CardDescription>
                Automating deployment and infrastructure management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>Kubernetes cluster configuration and management</span>
                </li>
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>GitOps with ArgoCD for continuous deployment</span>
                </li>
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>Automated database migrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="p-1" />

                  <span>Infrastructure as Code (IaC)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my technical skills and
            problem-solving abilities.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            {/* Project 1 */}
            <Card>
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="bg-muted rounded-l-lg overflow-hidden">
                  <div className="h-full w-full bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center p-6">
                    <Terminal
                      className="h-24 w-24 text-primary/40"
                      strokeWidth={1}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl mb-2">
                    E-Commerce Platform
                  </CardTitle>
                  <CardDescription className="mb-4">
                    A full-stack e-commerce solution with Next.js frontend and
                    Express backend, deployed on Kubernetes with automated CI/CD
                    pipeline.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Next.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>ArgoCD</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Implemented features include user authentication, product
                    catalog, shopping cart, payment processing, and order
                    management. The infrastructure includes automated testing,
                    deployment, and database migrations.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Project <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card>
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="bg-muted rounded-l-lg overflow-hidden">
                  <div className="h-full w-full bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center p-6">
                    <Database
                      className="h-24 w-24 text-primary/40"
                      strokeWidth={1}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl mb-2">
                    Analytics Dashboard
                  </CardTitle>
                  <CardDescription className="mb-4">
                    Real-time analytics dashboard with React frontend and
                    Node.js microservices backend, featuring automated
                    deployment pipeline.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>React</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>CI/CD</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built a scalable analytics platform that processes and
                    visualizes data in real-time. Implemented microservices
                    architecture with message queues for data processing and
                    WebSockets for live updates.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Project <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="frontend" className="space-y-8">
            {/* Frontend Project */}
            <Card>
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="bg-muted rounded-l-lg overflow-hidden">
                  <div className="h-full w-full bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center p-6">
                    <Layers
                      className="h-24 w-24 text-primary/40"
                      strokeWidth={1}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl mb-2">
                    Interactive Portfolio
                  </CardTitle>
                  <CardDescription className="mb-4">
                    A responsive portfolio website built with Next.js and
                    Three.js for interactive 3D elements.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Next.js</Badge>
                    <Badge>Three.js</Badge>
                    <Badge>Framer Motion</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Created an immersive portfolio experience with 3D
                    animations, smooth transitions, and responsive design.
                    Implemented optimized asset loading and accessibility
                    features.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Project <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="backend" className="space-y-8">
            {/* Backend Project */}
            <Card>
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="bg-muted rounded-l-lg overflow-hidden">
                  <div className="h-full w-full bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center p-6">
                    <Server
                      className="h-24 w-24 text-primary/40"
                      strokeWidth={1}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl mb-2">
                    API Gateway Service
                  </CardTitle>
                  <CardDescription className="mb-4">
                    A scalable API gateway built with Express and TypeScript for
                    microservices architecture.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Express</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Redis</Badge>
                    <Badge>JWT</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed a centralized API gateway that handles
                    authentication, rate limiting, request routing, and service
                    discovery for a microservices ecosystem.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Project <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="devops" className="space-y-8">
            {/* DevOps Project */}
            <Card>
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="bg-muted rounded-l-lg overflow-hidden">
                  <div className="h-full w-full bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center p-6">
                    <Workflow
                      className="h-24 w-24 text-primary/40"
                      strokeWidth={1}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl mb-2">
                    GitOps Deployment Pipeline
                  </CardTitle>
                  <CardDescription className="mb-4">
                    A fully automated CI/CD pipeline using ArgoCD and Kubernetes
                    for continuous deployment.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Kubernetes</Badge>
                    <Badge>ArgoCD</Badge>
                    <Badge>GitHub Actions</Badge>
                    <Badge>Terraform</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Implemented a GitOps workflow that automatically deploys
                    applications to Kubernetes clusters based on Git repository
                    changes. Includes infrastructure as code, automated testing,
                    and database migrations.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Project <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Experience Section */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            My Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements.
          </p>
        </div>

        <div className="relative border-l border-muted ml-4 md:ml-0 md:grid md:grid-cols-2 md:gap-8 md:border-l-0">
          {/* Timeline for mobile */}
          <div className="md:hidden absolute h-full w-px bg-border left-0 top-0"></div>

          {/* Experience 1 */}
          <div className="relative pb-12 md:pb-0 md:text-right md:border-r md:pr-8">
            <div className="absolute -left-4 md:hidden rounded-full w-8 h-8 bg-primary/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div className="md:block absolute -right-4 top-0 rounded-full w-8 h-8 bg-primary/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div className="pl-8 md:pl-0">
              <h3 className="font-bold">Business Analyst</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Volvo Cars AB • 2024 - Present
              </p>
              <p className="text-sm">
                Business Analyst within the applications cluster in the Digital
                Supply Chain Domain, focusing on the development and integration
                for the digital platform for the Volvo Cars Supply Chain.
              </p>
            </div>
          </div>

          {/* Empty space for alignment */}
          <div className="md:mt-24"></div>

          {/* Experience 2 */}
          <div className="relative pb-12 md:pb-0 md:border-r md:pr-8">
            <div className="absolute -left-4 md:hidden rounded-full w-8 h-8 bg-primary/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div className="md:block absolute -right-4 top-0 rounded-full w-8 h-8 bg-primary/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div className="pl-8 md:pl-0">
              <h3 className="font-bold">Full-Stack Developer</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Bring Intermodal AB • 2023 - 2024
              </p>
              <p className="text-sm">
                Developed a web-based platform for yard management and logistics
                operations. Implemented features for real-time tracking,
                managment and integrations. An
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for
            collaborations or just a friendly hello.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Fill out the form below and I&#39;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="w-full p-2 text-sm border rounded-md focus:ring-2 focus:ring-primary focus:outline-hidden"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="w-full p-2 text-sm border rounded-md focus:ring-2 focus:ring-primary focus:outline-hidden"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 text-sm border rounded-md focus:ring-2 focus:ring-primary focus:outline-hidden"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 text-sm border rounded-md focus:ring-2 focus:ring-primary focus:outline-hidden"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
