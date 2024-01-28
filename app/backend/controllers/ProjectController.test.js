const request = require('supertest');
const express = require('express');
const ProjectController = require('./ProjectController');
const Project = require('../models/project');

// Mock your Project Model methods
jest.mock('../models/project');

const app = express();
app.use(express.json());
app.get('/projects', ProjectController.getAllProjects);
app.get('/projects/:id', ProjectController.getProject);
app.post('/projects', ProjectController.createProject);
app.put('/projects/:id', ProjectController.updateProject);
app.delete('/projects/:id', ProjectController.deleteProject);

describe('Project Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should get all projects', async () => {
        Project.find.mockResolvedValue([]);
        const res = await request(app).get('/projects');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            status: 'success',
            results: 0,
            data: {
                projects: []
            }
        });
    });

    // Test for getProject
    test('should get a project', async () => {
        const mockProject = { _id: '1', name: 'Test Project' };
        Project.findById.mockResolvedValue(mockProject);
        const res = await request(app).get('/projects/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            status: 'success',
            data: {
                project: mockProject
            }
        });
    });

    // Test for createProject
    test('should create a project', async () => {
        const newProject = { name: 'New Project' };
        Project.create.mockResolvedValue(newProject);
        const res = await request(app).post('/projects').send(newProject);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual({
            status: 'success',
            data: {
                project: newProject
            }
        });
    });

    // Test for updateProject
    test('should update a project', async () => {
        const updatedProject = { _id: '1', name: 'Updated Project' };
        Project.findByIdAndUpdate.mockResolvedValue(updatedProject);
        const res = await request(app).put('/projects/1').send(updatedProject);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            status: 'success',
            data: {
                project: updatedProject
            }
        });
    });

    // Test for deleteProject
    test('should delete a project', async () => {
        Project.findByIdAndDelete.mockResolvedValue(null);
        const res = await request(app).delete('/projects/1');
        expect(res.statusCode).toEqual(204);
    });

});