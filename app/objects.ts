// The following interfaces are used to define the structure of the objects used in the application
// Nothing is final and can be changed as needed

// Project Interface 
interface Project {
  id: string;
  title: string;
  description: string;
  fundingGoal: number;
  campaignDuration: number; // Duration in days
  images: string[]; // URLs of project images
  videos: string[]; // URLs of project videos
  rewards: Reward[];
  creator: User;
  backers: User[];
}

// Reward Interface
interface Reward {
  id: string;
  title: string;
  description: string;
  minimumPledge: number;
  maximumBackers: number;
}

// User Interface
interface User {
  id: string;
  username: string;
  email: string;
  projectsCreated: Project[];
  projectsBacked: Project[];
  isAdmin: boolean;
}

// Project Update Interface
interface ProjectUpdate {
  id: string;
  projectId: string;
  content: string;
  createdAt: Date;
}

// Administrator Interface
interface Administrator {
  id: string;
  username: string;
}

// Email Notification Interface
interface EmailNotification {
  id: string;
  recipient: User;
  content: string;
  sentAt: Date;
}

// Search Filter Interface
interface SearchFilter {
  keyword?: string;
  category?: string;
  location?: string;
}

// Payment Interface
interface Payment {
  id: string;
  projectId: string;
  backer: User;
  amount: number;
  timestamp: Date;
}

// Analytics and Reports Interface
interface AnalyticsReport {
  totalProjects: number;
  totalBackers: number;
  totalFundsRaised: number;
}

// Social Sharing Options Interface
interface SocialShareOptions {
  facebook: boolean;
  twitter: boolean;
  linkedIn: boolean;
  email: boolean;
}

