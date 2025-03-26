import Link from "next/link";
import { Download, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResumePage() {
  return (
    <div className="container mx-auto px-1 py-12">
      <div className="max-w-5xl mx-auto">
    
        
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-2xl font-bold">Bhanu Kaushal</CardTitle>
              <CardDescription className="text-muted-foreground">
                IT Service Technician | Cloud & DevOps Enthusiast
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <Link href="https://linkedin.com/in/bhanu-kaushal-6a17aa232" target="_blank" className="hover:text-blue-600">
                {/* <LinkedIn className="h-6 w-6" /> */}
              </Link>
              <Link href="https://github.com/Bhanuk2811" target="_blank" className="hover:text-gray-700">
                {/* <GitHub className="h-6 w-6" /> */}
              </Link>
            </div>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Professional Profile</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Innovative IT professional with expertise in cloud computing, DevOps, and web development. 
                Proven track record of implementing cutting-edge technologies and solving complex technical challenges.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Core Competencies</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>👨‍💻 Frontend Development (React, Astro, Next.js)</li>
                  <li>📊 Data Analysis (Python, SQL, Power BI)</li>
                  <li>☁️ Cloud & DevOps (Azure, AWS, Docker, Ansible)</li>
                  <li>🔧 IT Support & Cybersecurity</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Achievements</h3>
              <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                <li>Microsoft Certified: Azure Fundamentals</li>
                <li>Completed Cloud Platform Job Simulation at Verizon</li>
                <li>Developed Cloud Resume Project with 99.9% uptime</li>
                <li>Created Online Image Editor with advanced features</li>
              </ul>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>Kaushalbhanu3@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>(778) 598-9442</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              University of The Fraser Valley | Bachelor of Computer Information Systems
            </div>
            <Link 
              href="https://drive.google.com/file/d/1pRFeg8vU-0EfyxvjD5vD6VWpKh6t7g5R/view?usp=sharing" 
              target="_blank" 
              className="flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download Full Resume</span>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}