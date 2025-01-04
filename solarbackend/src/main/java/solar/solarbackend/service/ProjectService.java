package solar.solarbackend.service;

import solar.solarbackend.entity.Project;

import java.util.List;

public interface ProjectService {
    Project createProject(Project project);
    Project getProjectById(Long id);
    List<Project> getAllProjects();
    Project updateProject(Long id, Project project);
    void deleteProject(Long id);
    List<Project> getProjectsByCustomerId(Long cusId);
}
