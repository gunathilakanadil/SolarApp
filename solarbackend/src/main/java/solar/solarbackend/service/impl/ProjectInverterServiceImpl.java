package solar.solarbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import solar.solarbackend.entity.ProjectInverter;
import solar.solarbackend.exception.ProjectInverterException;
import solar.solarbackend.repository.ProjectInverterRepository;
import solar.solarbackend.service.ProjectInverterService;

import java.util.List;

@Service
public class ProjectInverterServiceImpl implements ProjectInverterService {

    private final ProjectInverterRepository projectInverterRepository;

    @Autowired
    public ProjectInverterServiceImpl(ProjectInverterRepository projectInverterRepository) {
        this.projectInverterRepository = projectInverterRepository;
    }

    @Override
    public ProjectInverter createProjectInverter(ProjectInverter projectInverter) {
        if (projectInverterRepository.findBySerialNumber(projectInverter.getSerialNumber()) != null) {
            throw new ProjectInverterException("Serial number already exists: " + projectInverter.getSerialNumber());
        }
        return projectInverterRepository.save(projectInverter);
    }

    @Override
    public ProjectInverter getProjectInverterById(Long id) {
        return projectInverterRepository.findById(id)
                .orElseThrow(() -> new ProjectInverterException("Project Inverter not found with ID: " + id));
    }

    @Override
    public List<ProjectInverter> getAllProjectInverters() {
        return projectInverterRepository.findAll();
    }

    @Override
    public ProjectInverter updateProjectInverter(Long id, ProjectInverter projectInverter) {
        ProjectInverter existingInverter = getProjectInverterById(id);
        existingInverter.setSerialNumber(projectInverter.getSerialNumber());
        existingInverter.setProject(projectInverter.getProject());
        existingInverter.setInverter(projectInverter.getInverter());
        return projectInverterRepository.save(existingInverter);
    }

    @Override
    public void deleteProjectInverter(Long id) {
        ProjectInverter projectInverter = getProjectInverterById(id);
        projectInverterRepository.delete(projectInverter);
    }

    @Override
    public List<ProjectInverter> getProjectInvertersByProjectId(Long projectId) {
        return projectInverterRepository.findByProjectId(projectId);
    }
}
