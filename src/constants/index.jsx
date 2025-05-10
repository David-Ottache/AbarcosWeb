import { Cpu } from "lucide-react";
import { Code } from "lucide-react";
import { Cloud } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import Assistant from "../assets/Assistant.jpg";
import Recab from "../assets/Recab.jpg";
import Dave1 from "../assets/profile-pictures/Dave1.jpg";
import Fido1 from "../assets/profile-pictures/Fido1.jpg";
import Kamor1 from "../assets/profile-pictures/Kamor1.jpg";
import Lapaam1 from "../assets/profile-pictures/Lapaam1.jpg";

export const navItems = [
  { label: "About", href: "#Aboutus" },
  { label: "Services", href: "#featureSection" },
  { label: "Products", href: "#productsection" },
  { label: "Team", href: "#team" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Cpu />,
    text: "AI-Powered Buisness Automation",
    description:
      "Streamline operations with AI-driven tools that optimise workflows, reduce manual tasks, and enhance decision making.",
  },
  {
    icon: <Code />,
    text: "Custom Software & App Development",
    description:
      "Build tailored web and mobile applications that align with your buisnes needs, ensuring seamless user experiences and scalability.",
  },
  {
    icon: <Cloud />,
    text: "Cloud Solutions and Infrastructure",
    description:
      "Leverage cloud computing for secure, scalabe, and cost-effective storage, hosting and data management solutions.",
  },
  {
    icon: <ShieldCheck />,
    text: "Cybersecurity and Data Protection",
    description:
      "Protect your business with advanced security measures, threat detection, and data encryption to prevent cyber threats.",
  },
  {
    icon: <Lightbulb />,
    text: "Digital Transformation Consulting",
    description:
      "Upgrade your business with modern technologies, automation, and data-driven strategies for long term growth.",
  },
  {
    icon: <ShoppingCart />,
    text: "E-commerce and Fintech Solutions",
    description:
      "Develop secure and scalabe e-commerce platforms and fintech integrations to enhance digital transactions and customer engagement.",
  },
];

export const aboutitems = [
  {
    title: "Our Story",
    description: [
      "Founded in 2022, Our startup was born with a vision to create innovative solutions that address real-world challenges. We believe in the power of technology to transform industries and improve lives.  ",

      "Our team of experts combines deep technical knowledge with industry expertise to deliver cutting-edge products and services that exceed expectations.",
    ],
  },

  {
    title: "Our Mission",
    description:
      "We are committed to empowering businesses and individuals with cutting-edge technology solutions that drive growth, enhance efficiency, and create lasting impact. Our mission is to bridge the gap between innovation and practicality, ensuring that technology is not just advanced but also accessible and transformative. ",
  },
];

export const teamMembers = [
  {
    name: "Karmshinen Maxwell",
    role: "Chief Legal Officer",
    bio: "Kamshinen Maxwell is a seasoned legal practitioner with core expertise in intellectual property and corporate law. He plays a pivotal role in shaping the strategic and legal foundations of the company. Kamshinen merges legal precision with entrepreneurial insight to drive compliance, protect innovation, and support sustainable business growth in the tech space.",
    image: Kamor1,
    linkedin: "https://ng.linkedin.com/in/kamshinen-maxwell-21b178216", // Add LinkedIn URL here
    twitter: "https://x.com/_kamor?s=21",   // Add Twitter URL here
    email: "Kamshinenmaxwell@gmail.com"
    
  },
  {
    name: "David Ottache",
    role: "Head of Growth and Retention",
    bio: "David Ottache is a growth-focused customer experience strategist with a proven track record of driving revenue through user retention, digital engagement, and scalable sales operations. He has led initiatives that improved conversion rates and streamlined onboarding workflows",
    image: Dave1,
    linkedin: "https://www.linkedin.com/in/david-ottache/", // Add LinkedIn URL here
    twitter: "https://x.com/_JaYcros_gunnin",   // Add Twitter URL here
    email: "daveottache@gmail.com"
  },
  {
    name: "Lapaam Maigari",
    role: "Buisness Development Leader",
    bio: "Lapa'am is an accomplished entrepreneur and a highly effective business development strategist with a natural talent for sales. He combines strategic insight with persuasive communication to not only identify opportunities but also to effectively close deals and drive revenue.",
    image: Lapaam1,
    linkedin: "https://www.linkedin.com/in/lapa%E2%80%99am-maigari-3721111a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", // Add LinkedIn URL here
    twitter: "https://x.com/lapaam_samson?s=11&t=LlXaZFJOcVWBLfl-u2mkEw",   // Add Twitter URL here
    email: "Lapaamofficial@gmail.com"
  },
  {
    name: "Frederick Ottache",
    role: "Chief Software Architect",
    bio: "Frederick, our Chief Software Innovator, merges creative software strategies with technical mastery. He spearheads digital transformation, turning complex challenges into breakthrough solutions that power our company’s success and growth.",
    image: Fido1,
    linkedin: "https://www.linkedin.com/in/frederickottache?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Add LinkedIn URL here
    twitter: "https://x.com/mistah_fidoh?t=eC96pXB5MJ2SSBvw-bBtQw&s=08",   // Add Twitter URL here
    email: "fredottache@gmail.com"
  },
]


export const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6 text-orange-600" />,
    title: "Our Location",
    details: "123 Innovation Drive, Tech City, CA 94043",
  },
  {
    icon: <Phone className="h-6 w-6 text-orange-600" />,
    title: "Phone Number",
    details: "+1 (555) 123-4567",
  },
  {
    icon: <Mail className="h-6 w-6 text-orange-600" />,
    title: "Email Address",
    details: "abarcosltd@gmail.com",
  },
]


export const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
]

export const footerLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Products", to: "products" },
  { name: "Team", to: "team" },
  { name: "Contact", to: "contact" },
]


export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const products = [
  {
    name: "ReCab",
    description:
      "A reliable cab service focused on ensuring passenger security and comfort.",
    image: Recab,
    features: [
      "GPS tracking",
      "Emergency SOS",
      "Verified drivers",
      "24/7 support",
    ],
  },
  {
    name: "TaskGenie",
  description: "A dedicated online assistance service for busy professionals, managing tasks that require digital presence.",
  image: Assistant,
  features: ["Virtual assistance", "Task automation", "24/7 availability", "Seamless integration"]
  },
  
];
