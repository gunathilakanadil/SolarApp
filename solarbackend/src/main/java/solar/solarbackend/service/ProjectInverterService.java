package solar.solarbackend.service;

import solar.solarbackend.entity.ProjectInverter;

import java.util.List;

public interface ProjectInverterService {
    ProjectInverter createProjectInverter(ProjectInverter projectInverter);
    ProjectInverter getProjectInverterById(Long id);
    List<ProjectInverter> getAllProjectInverters();
    ProjectInverter updateProjectInverter(Long id, ProjectInverter projectInverter);
    void deleteProjectInverter(Long id);
    List<ProjectInverter> getProjectInvertersByProjectId(Long projectId);
}
