
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  
  { label: "Features", href: "#FeatureSection" },
  { label: "Benefits", href: "#Workflow" },
  { label: "Pricing", href: "#Pricing" },
  { label: "Testimonials", href: "#Testimonials" },
  { label: "Contact", href: "#Contact" },

];

export const testimonials = [
  {
    user: "Aarav S",
    
    image: user1,
    text: "This app has been a game-changer for me. I can now understand my surroundings better and feel more confident when I'm out and about. It is amazing.",
  },
  {
    user: "Ananya G",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "As someone who has been visually impaired for years, this app is a breath of fresh air. It has made my daily commute and interactions so much easier and stress-free. ",
  },
  {
    user: "Davish T",
    company: "Quantum Innovations",
    image: user3,
    text: "I was skeptical at first, but this app truly exceeded my expectations. The detailed audio descriptions are precise and really help me visualize my environment.",
  },
  {
    user: "Rohan K",
    company: "Fusion Dynamics",
    image: user4,
    text: "This app has transformed the way I experience the world. The accuracy of the video summaries make me feel much more independent and secure when navigating new places.",
  },
  {
    user: "Md. Ismail",
    company: "Visionary Creations",
    image: user5,
    text: "I can't thank the developers enough for this incredible app. It has given me a sense of freedom and confidence that I never thought possible. The technology is remarkable and easy to use.",
  },
  {
    user: "Srushti P",
    company: "Synergy Systems",
    image: user6,
    text: "This app has been a lifesaver for me. The video analysis and audio summaries are so accurate that I can easily understand my surroundings without any assistance",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Immersive Experience",
    description:
      "Delivers audio descriptions of surroundings to enhance user connection.",
  },
  {
    icon: <Fingerprint />,
    text: "Facial Recognition",
    description:
      "Stores and identifies facial information of close acquaintances.",
  },
  {
    icon: <ShieldHalf />,
    text: "Storage",
    description:
      "Allows the users to store their experiences.",
  },
  {
    icon: <BatteryCharging />,
    text: "Voice Commands",
    description:
      "Provides the user voice activated interface",
  },
  {
    icon: <PlugZap />,
    text: "24/7 Availability",
    description:
      "Provides the user a 24/7 experience without any delay or breaks.",
  },
 
];

export const checklistItems = [
  {
    title: "Affordable and accessible",
    description:
      "It is designed to be budget-friendly and easy to use, ensuring that more people can benefit from its features.",
  },
  {
    title: "Provides more detailed information.",
    description:
      "Delivers comprehensive and precise audio descriptions, offering users a thorough understanding of their surroundings.",
  },
  {
    title: "Helps users be more independent and safe.",
    description:
      "By providing clear and reliable information about their environment, the app empowers users to live confidently on their own.",
  },
  {
    title: "Can be gifted",
    description:
      "This app makes for a thoughtful and practical gift, offering valuable assistance to visually impaired friends and family members.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "₹0",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
    ],
  },
  {
    title: "Pro",
    price: "₹300",
    features: [
     "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
    ],
  },
  {
    title: "Enterprise",
    price: "₹500",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
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
