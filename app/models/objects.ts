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

// Analytics and Reports Interface
interface AnalyticsReport {
  totalProjects: number;
  totalBackers: number;
  totalFundsRaised: number;
}
