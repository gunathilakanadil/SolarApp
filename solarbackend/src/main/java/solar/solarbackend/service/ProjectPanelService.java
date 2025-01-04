package solar.solarbackend.service;

import solar.solarbackend.entity.ProjectPanel;

import java.util.List;

public interface ProjectPanelService {
    ProjectPanel createProjectPanel(ProjectPanel projectPanel);
    ProjectPanel getProjectPanelById(Long id);
    List<ProjectPanel> getAllProjectPanels();
    ProjectPanel updateProjectPanel(Long id, ProjectPanel projectPanel);
    void deleteProjectPanel(Long id);

    List<ProjectPanel> getProjectPanelsbyId(Long projecId);
}
