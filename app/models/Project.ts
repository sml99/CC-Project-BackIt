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