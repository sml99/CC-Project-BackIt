# Hito 3
# Docker Container for Testing - Evaluation

## Container Base Selection

**Choice:** Official Node.js 14-slim image.

**Justification:**
- The official Node.js image is a well-established and trusted base for Node.js applications.
- The slim variant ensures a minimal and efficient image size, suitable for testing purposes.

## Dockerfile 
### Dockerfile
![dockerfile](https://github.com/sml99/CC-Project-BackIt/assets/29798184/cbb9bda1-107d-40c5-949e-828bc51d7f2f)
### docker-compose.yaml
![doccodev](https://github.com/sml99/CC-Project-BackIt/assets/29798184/656ec71e-6947-4632-a8c9-eabb5419f09d)
### docker-compose.dev.yaml
![doccom](https://github.com/sml99/CC-Project-BackIt/assets/29798184/d1cbf3c6-951d-4e74-ad40-83d3c223f30a)
### build & run
![image](https://github.com/sml99/CC-Project-BackIt/assets/29798184/602c937e-7561-43f3-9f75-7afaa37f4fed)

## Container Upload to Docker Hub
![workflow](https://github.com/sml99/CC-Project-BackIt/assets/29798184/271bab2a-8b99-4e8c-8071-442f8c815c17)

- The container is uploaded to Docker Hub at [sml99/backit](https://hub.docker.com/r/sml99/backit).
- GitHub Actions workflow is configured for automatic builds and updates on Docker Hub.

## Use of Alternative Registries

**Alternative Registry:**
- GitHub Container Registry is considered as an alternative and public container registry.

**Justification:**
- GitHub Container Registry seamlessly integrates with GitHub Actions, streamlining the container workflow.
- It serves as a centralized and versioned location for container images, enhancing collaboration and version control.
