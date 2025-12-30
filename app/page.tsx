"use client"
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Send, Download, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Types
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'tools';
  proficiency: number;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Data
const projects: Project[] = [
  {
    id: '1',
    title: 'Student Management System',
    description: 'Comprehensive system with attendance reports, admin dashboard, dark/light theme toggle, and notification system.',
    technologies: ['ASP.NET', 'Razor Pages', 'Entity Framework', 'SQL Server'],
    githubUrl: 'https://github.com/maliksayar',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    title: 'HealthCart',
    description: 'E-commerce platform for medicines with online doctor appointment feature. Focused on user-friendly navigation and secure data handling.',
    technologies: ['ASP.NET', 'C#', 'SQL Server', 'Bootstrap'],
    githubUrl: 'https://github.com/maliksayar',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Daily Expenses Tracker',
    description: 'Clean, aesthetic expense tracker with local storage support. Helps users track daily expenses efficiently.',
    technologies: ['ASP.NET MVC', 'Bootstrap', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/maliksayar',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop'
  }
];

const skills: Skill[] = [
  { name: 'C#', category: 'languages', proficiency: 85 },
  { name: 'JavaScript', category: 'languages', proficiency: 80 },
  { name: 'SQL', category: 'languages', proficiency: 75 },
  { name: 'HTML5', category: 'languages', proficiency: 90 },
  { name: 'CSS3', category: 'languages', proficiency: 85 },
  { name: 'ASP.NET', category: 'frameworks', proficiency: 85 },
  { name: 'MVC', category: 'frameworks', proficiency: 80 },
  { name: 'Razor Pages', category: 'frameworks', proficiency: 80 },
  { name: 'Web API', category: 'frameworks', proficiency: 75 },
  { name: 'React.js', category: 'frameworks', proficiency: 80 },
  { name: 'Redux', category: 'frameworks', proficiency: 70 },
  { name: 'Tailwind CSS', category: 'frameworks', proficiency: 85 },
  { name: 'Bootstrap', category: 'frameworks', proficiency: 85 },
  { name: 'SQL Server', category: 'databases', proficiency: 80 },
  { name: 'Entity Framework', category: 'databases', proficiency: 75 },
  { name: 'Git', category: 'tools', proficiency: 80 },
  { name: 'GitHub', category: 'tools', proficiency: 80 },
  { name: 'VS Code', category: 'tools', proficiency: 90 },
  { name: 'Visual Studio', category: 'tools', proficiency: 85 }
];

const education: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Jamia Hamdard University, New Delhi',
    period: '2024 - Present',
    grade: 'In Progress'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Shaheed Himayun Muzammil Memorial Govt. Degree College, Anantnag',
    period: '2021 - 2024',
    grade: 'CGPA: 6.3'
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Islamia Hanafia Wakf Higher Secondary School, Lalchowk Anantnag',
    period: '2019 - 2020',
    grade: 'Completed'
  }
];

const experience: Experience[] = [
  {
    role: 'Student Developer',
    company: 'ILS',
    duration: '1 Year',
    achievements: [
      'Worked on multiple academic and personal projects',
      'Gained hands-on experience in modern web and mobile development frameworks',
      'Applied C#, ASP.NET, React.js, and SQL in real-world project scenarios',
      'Developed scalable and responsive applications'
    ]
  }
];

export default function Portfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleDownloadResume = () => {
    // This would link to your actual resume PDF
   
    window.open('/resume.pdf', '_blank');
  };

  const navItems = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];

  const categoryLabels = {
    languages: 'Languages',
    frameworks: 'Frameworks & Libraries',
    databases: 'Databases',
    tools: 'Tools'
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        theme === 'dark' ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
      } backdrop-blur-sm border-b`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sayar Malik
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-500 transition-colors text-sm ${
                    activeSection === item ? 'text-blue-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
              <Button onClick={toggleTheme} variant="ghost" size="icon">
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <Button onClick={toggleTheme} variant="ghost" size="icon">
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 mb-6 animate-pulse">
              <div className={`w-full h-full rounded-full ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } flex items-center justify-center text-4xl font-bold`}>
                SM
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sayar Ahmad Malik
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-4 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Full-Stack Developer | ASP.NET & React.js Specialist
          </p>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            MCA Student building scalable web applications with modern frameworks
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
              View My Work
            </Button>
            <Button onClick={handleDownloadResume} size="lg" variant="outline" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
              {/* <view className="h-5 w-5 mr-2" /> */}
              View Resume
            </Button>
            <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
              Contact Me
            </Button>
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <Button variant="ghost" size="icon" onClick={() => window.open('https://github.com/maliksayar', '_blank')}>
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => window.open('https://www.linkedin.com/in/sayar-malik-8a065b343/', '_blank')}>
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => window.location.href = 'mailto:maliksyr999@gmail.com'}>
              <Mail className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <Card className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''} transition-all duration-300 hover:shadow-xl`}>
            <CardContent className="pt-6">
              <p className={`text-lg leading-relaxed mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a motivated MCA student and aspiring Full-Stack Developer with hands-on experience in building scalable web
                and mobile applications using ASP.NET, C#, React.js, and modern UI frameworks.
              </p>
              <p className={`text-lg leading-relaxed mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I specialize in creating professional, responsive, and user-friendly solutions through academic, personal, and freelance projects.
                My expertise includes developing comprehensive systems with features like authentication, dashboards, and real-time notifications.
              </p>
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm seeking opportunities to apply my technical expertise, problem-solving skills, and creativity to contribute to
                innovative software development teams. I believe in continuous learning and staying updated with the latest technologies.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge className="bg-blue-500 hover:bg-blue-600">Web Development</Badge>
                <Badge className="bg-purple-500 hover:bg-purple-600">Android Development</Badge>
                <Badge className="bg-green-500 hover:bg-green-600">Full-Stack</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-6 ${
        theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="h-10 w-10" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <Card 
                key={idx}
                className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''} transition-all duration-300 hover:shadow-xl hover:scale-102`}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-base`}>
                    {edu.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="outline" className={theme === 'dark' ? 'border-gray-600' : ''}>
                      {edu.period}
                    </Badge>
                    {edu.grade && (
                      <Badge variant="secondary" className={theme === 'dark' ? 'bg-gray-700' : ''}>
                        {edu.grade}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="h-10 w-10" />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <Card 
                key={idx}
                className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''} transition-all duration-300 hover:shadow-xl`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{exp.role}</CardTitle>
                  <CardDescription className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-base`}>
                    {exp.company} | {exp.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {exp.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${
        theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Code className="h-10 w-10" />
            Skills & Proficiency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(categoryLabels).map(([category, label]) => (
              <Card 
                key={category}
                className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''} transition-all duration-300 hover:shadow-xl`}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              {skill.name}
                            </span>
                            <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              {skill.proficiency}%
                            </span>
                          </div>
                          <div className={`h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}>
                            <div 
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''} transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group`}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className={theme === 'dark' ? 'text-gray-400' : ''}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className={theme === 'dark' ? 'border-gray-600' : ''}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${
        theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <Card className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''} transition-all duration-300 hover:shadow-xl`}>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
                        : 'bg-white border-gray-300 focus:border-blue-500'
                    } outline-none transition-colors`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
                        : 'bg-white border-gray-300 focus:border-blue-500'
                    } outline-none transition-colors`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
                        : 'bg-white border-gray-300 focus:border-blue-500'
                    } outline-none transition-colors resize-none`}
                    placeholder="Your message..."
                  />
                </div>
                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90" 
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </div>
              <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className={`text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                    <p className="font-medium">maliksyr999@gmail.com</p>
                  </div>
                  <div>
                    <p className={`text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
                    <p className="font-medium">+91 6006125886</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              © 2024 Sayar Ahmad Malik. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-blue-500 transition-colors"
                onClick={() => window.open('https://github.com/maliksayar', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-blue-500 transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/sayar-malik-8a065b343/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-blue-500 transition-colors"
                onClick={() => window.location.href = 'mailto:maliksyr999@gmail.com'}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}