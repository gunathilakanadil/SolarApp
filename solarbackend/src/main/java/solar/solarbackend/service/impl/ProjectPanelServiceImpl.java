package solar.solarbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import solar.solarbackend.entity.ProjectPanel;
import solar.solarbackend.exception.ProjectPanelException;
import solar.solarbackend.repository.ProjectPanelRepository;
import solar.solarbackend.service.ProjectPanelService;

import java.util.List;

@Service
public class ProjectPanelServiceImpl implements ProjectPanelService {

    private final ProjectPanelRepository projectPanelRepository;

    @Autowired
    public ProjectPanelServiceImpl(ProjectPanelRepository projectPanelRepository) {
        this.projectPanelRepository = projectPanelRepository;
    }

    @Override
    public ProjectPanel createProjectPanel(ProjectPanel projectPanel) {
        return projectPanelRepository.save(projectPanel);
    }

    @Override
    public ProjectPanel getProjectPanelById(Long id) {
        return projectPanelRepository.findById(id)
                .orElseThrow(() -> new ProjectPanelException("Project Panel not found with ID: " + id));
    }

    @Override
    public List<ProjectPanel> getAllProjectPanels() {
        return projectPanelRepository.findAll();
    }

    @Override
    public ProjectPanel updateProjectPanel(Long id, ProjectPanel projectPanel) {
        ProjectPanel existingPanel = getProjectPanelById(id);
        existingPanel.setDirection(projectPanel.getDirection());
        existingPanel.setSerialnumber(projectPanel.getSerialnumber());

        existingPanel.setProject(projectPanel.getProject());
        existingPanel.setPanel(projectPanel.getPanel());
        return projectPanelRepository.save(existingPanel);
    }

    @Override
    public void deleteProjectPanel(Long id) {
        ProjectPanel projectPanel = getProjectPanelById(id);
        projectPanelRepository.delete(projectPanel);
    }

    @Override
    public List<ProjectPanel> getProjectPanelsbyId(Long projectId) {
        return projectPanelRepository.findByProjectId(projectId);
    }
}
