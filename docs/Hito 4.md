# Hito 4
## Project Integration Continua
### 1. GitHub Actions

- **Selection:** Chose GitHub Actions as the online code testing system.
- **Configuration:** Configured GitHub Actions to run tests automatically on each Pull request & updating docker image on each merge in main branch.

#### A - Docker action config

![image](https://github.com/sml99/CC-Project-BackIt/assets/29798184/95d36dba-ad91-4b68-a755-f606880f7ba3)
![code](https://github.com/sml99/CC-Project-BackIt/assets/29798184/8e586cde-a43b-4746-a64e-08823f71b092)


- The container is uploaded to Docker Hub at [sml99/backit](https://hub.docker.com/r/sml99/backit).
- GitHub Actions workflow is configured for automatic builds and updates on Docker Hub.

#### B - Running tests on each PR config

![image](https://github.com/sml99/CC-Project-BackIt/assets/29798184/6db667a9-f7a4-404d-baf5-42c39cb0e917)
![code1](https://github.com/sml99/CC-Project-BackIt/assets/29798184/1de659a7-a402-4859-98b3-d5883afde204)
