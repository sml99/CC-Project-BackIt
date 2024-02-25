# HITO 05

## Design and Test of Microservices

### Justification of Framework Choice

I chose Express.js in Node.js for its simplicity, flexibility, and robustness in building scalable and performant APIs. Express.js allows for quick development and easy handling of HTTP requests, making it an ideal choice for microservices.

### Design Overview

#### API Design

The API design revolves around two main microservices: one for users and one for projects. Each microservice has its set of routes, encapsulating specific functionalities related to users and projects. The design follows a layered architecture, separating business logic from the API for maintainability and scalability.

![image](https://github.com/sml99/CC-Project-BackIt/assets/29798184/5b4680f5-7162-492f-93e1-3167ab2c88b2)

##### Users (auth)
![image](https://github.com/sml99/CC-Project-BackIt/assets/29798184/414300d8-0cac-4ea5-925e-f810a62782b7)
![image](https://github.com/sml99/CC-Project-BackIt/assets/29798184/6025798c-8aa1-4b3a-9c2e-c415b73a732a)

##### Projects


#### Microservices Architecture

The backend is divided into two microservices, ensuring a clear separation of concerns. The users microservice handles user-related functionalities, while the projects microservice deals with project-specific operations. This architecture allows for independent scaling and deployment of each microservice.
![image](https://github.com/sml99/CC-Project-BackIt/assets/29798184/b84f3c4c-8085-4790-a2b9-8bdf464780b2)

### Testing

![image](https://github.com/sml99/CC-Project-BackIt/assets/29798184/d0aa481d-1f93-4a50-8a1e-c27d8537d73d)

#### Logging

For logging, I chose the Winston library, a widely used logging library for Node.js. Winston provides flexibility and supports various log transports, making it suitable for capturing and managing logs in a distributed microservices environment.

![logger](https://github.com/sml99/CC-Project-BackIt/assets/29798184/86746d86-65c8-409b-88a2-d9dc25ea2be3)


