// User Interface
interface User {
  id: string;
  username: string;
  email: string;
  projectsCreated: Project[];
  projectsBacked: Project[];
  isAdmin: boolean;
}
