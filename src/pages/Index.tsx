import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Code, Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  useEffect(() => {
    document.title = "Harsha Vardhana T - Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-sky-900 dark:bg-gray-900">
      {/* Simple Header/Navigation */}
      <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex justify-between items-center py-3">
          <div className="text-xl font-bold">Harsha<span className="text-white">.</span></div>
          <nav className="hidden md:flex space-x-6">
            {["Home", "About", "Education", "Skills", "Projects"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      
      {/* Simplified Hero Section */}
      <section id="home" className="min-h-screen pt-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <motion.div 
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
                Hi, I'm <span className="text-white">Harsha Vardhana T</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-4 text-white dark:text-white">
                Aspiring AI Developer
              </h2>
              <p className="text-white dark:text-white mb-6">
                Computer Science & Engineering student at Presidency University Bangalore.
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-56 h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <img 
                  src="public\lovable-uploads\23900270-7690-4f29-986c-09ff10d2b1c3 copy.png" 
                  alt="Harsha Vardhana T"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-gray-400 dark:text-gray-500">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Simplified About Section */}
      <section id="about" className="py-16 bg-violet-300 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            About <span className="text-purple-600">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
              I am currently a B.Tech Computer Science and Engineering student at Presidency University Bangalore, aspiring to become a lead AI developer. I placed 4th in the ITM Medicure challenge out of 40 contestants and am a core member of the Presidency Build Club.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
              <div className="flex items-center gap-3">
                <Mail className="text-purple-600" size={20} />
                <span className="text-gray-700 dark:text-gray-300">harshavardhan.t@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-purple-600" size={20} />
                <span className="text-gray-700 dark:text-gray-300">+91 9148798241</span>
              </div>
            </div>
            <div className="flex justify-center mt-6 gap-4">
              <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Simplified Education Section */}
      <section id="education" className="py-16 bg-violet-300 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Education
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Presidency University Bangalore</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  B.Tech in Computer Science and Engineering (2022 - Present)
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Dr. N.M.P. College</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  11th - 12th Standard (PCMB) (2021 - 2022)
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>The Salogee School</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  6th - 10th Standard (2015 - 2020)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Simplified Skills Section */}
      <section id="skills" className="py-16 bg-violet-300 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Skills
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Machine Learning</h3>
              <Progress value={70} className="h-2" />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">AI Development</h3>
              <Progress value={65} className="h-2" />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Data Science</h3>
              <Progress value={55} className="h-2" />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Git/GitHub</h3>
              <Progress value={60} className="h-2" />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">IoT</h3>
              <Progress value={50} className="h-2" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Simplified Projects Section */}
      <section id="projects" className="py-16 bg-violet-300 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Projects
          </h2>
          
          <Tabs defaultValue="all" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="robotics">Robotics</TabsTrigger>
              <TabsTrigger value="iot">IoT</TabsTrigger>
              <TabsTrigger value="electronics">Electronics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bluetooth Nerf Turret</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    A remotely controlled nerf turret operated via Bluetooth technology.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Vaxuuvaidya</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Medical drone which delivers medical supplies autonomously.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>IoT-based Watermeter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Smart water metering system using IoT technology.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>DC to DC Converter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Step up and step-down buck converter for voltage conversion.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="robotics" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bluetooth Nerf Turret</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    A remotely controlled nerf turret operated via Bluetooth technology.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Vaxuuvaidya</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Medical drone which delivers medical supplies autonomously.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="iot" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>IoT-based Watermeter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Smart water metering system using IoT technology.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="electronics" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>DC to DC Converter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Step up and step-down buck converter for voltage conversion.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Index;
