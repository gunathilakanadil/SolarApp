package solar.solarbackend.service.impl;


import solar.solarbackend.entity.Project;
import solar.solarbackend.exception.ResourceNotFoundException;
import solar.solarbackend.repository.ProjectRepository;
import solar.solarbackend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public Project getProjectById(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with ID: " + id));
    }

    @Override
    public List<Project> getProjectsByCustomerId(Long cusId) {
        return projectRepository.findByCustomerId(cusId);
    }

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public Project updateProject(Long id, Project project) {
        Project existingProject = getProjectById(id);

        existingProject.setStartDate(project.getStartDate());

        // Update other fields if applicable
        return projectRepository.save(existingProject);
    }

    @Override
    public void deleteProject(Long id) {
        Project existingProject = getProjectById(id);
        projectRepository.delete(existingProject);
    }
}

