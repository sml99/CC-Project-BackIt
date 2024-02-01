# Hito 4
## Project Integration Continua
## 1. GitHub Actions
### Why GitHub Actions?

1. **Seamless Integration:** GitHub Actions offers native integration with our GitHub repository, streamlining setup and providing an intuitive workflow configuration.

2. **Extensive Ecosystem:** With a diverse set of pre-built actions and workflows, GitHub Actions enables us to incorporate best practices and ensures scalability as our project evolves.

3. **Cost-Effective and Community Support:** The platform's cost-effective approach for open-source projects, combined with strong community support, makes GitHub Actions an optimal choice for efficient and collaborative continuous integration.

- **Configuration:** Configured GitHub Actions to run tests automatically on each Pull request before merging & updating docker image on each merge in main branch to keep docker image up to date on docker hub.

#### A - Docker action config

![image](https://github.com/sml99/CC-Project-BackIt/assets/29798184/95d36dba-ad91-4b68-a755-f606880f7ba3)
![code](https://github.com/sml99/CC-Project-BackIt/assets/29798184/8e586cde-a43b-4746-a64e-08823f71b092)


- The container is uploaded to Docker Hub at [sml99/backit](https://hub.docker.com/r/sml99/backit).
- GitHub Actions workflow is configured for automatic builds and updates on Docker Hub.

#### B - Running tests on each PR config

![image](https://github.com/sml99/CC-Project-BackIt/assets/29798184/6db667a9-f7a4-404d-baf5-42c39cb0e917)
![code1](https://github.com/sml99/CC-Project-BackIt/assets/29798184/1de659a7-a402-4859-98b3-d5883afde204)
