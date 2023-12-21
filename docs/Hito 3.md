# Hito 3
# Docker Container for Testing - Evaluation

## Container Base Selection

**Choice:** Official Node.js 14-slim image.

**Justification:**
- The official Node.js image is a well-established and trusted base for Node.js applications.
- The slim variant ensures a minimal and efficient image size, suitable for testing purposes.

## Dockerfile Quality

**Adherence to Best Practices:**
- The Dockerfile follows best practices, leveraging specific image tags and setting a clear working directory.
- Node.js dependencies are managed using a package.json file, ensuring a clean and standardized approach.

**Module Adaptation:**
- The Dockerfile is adapted to the Node.js application under test, including configurations for installing dependencies and running tests.

**Size Optimization:**
- The Dockerfile optimizes image size by excluding unnecessary files and directories from the build context.

## Container Upload to Docker Hub

**Correct Upload:**
- The container is successfully uploaded to Docker Hub at [sml99/backit](https://hub.docker.com/r/sml99/backit).
- GitHub Actions workflow is configured for automatic builds and updates on Docker Hub.

**Documentation:**
- Documentation regarding automatic updates is available in the [README.md](https://github.com/sml99/backit/blob/main/README.md) file.
- The README.md provides clear instructions on reproducing the environment and executing tests.

## Use of Alternative Registries

**Alternative Registry:**
- GitHub Container Registry is considered as an alternative and public container registry.

**Justification:**
- GitHub Container Registry seamlessly integrates with GitHub Actions, streamlining the container workflow.
- It serves as a centralized and versioned location for container images, enhancing collaboration and version control.
