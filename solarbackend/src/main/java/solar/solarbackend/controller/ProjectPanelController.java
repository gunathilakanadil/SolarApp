package solar.solarbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import solar.solarbackend.entity.ProjectPanel;
import solar.solarbackend.service.ProjectPanelService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/project-panels")
public class ProjectPanelController {

    private final ProjectPanelService projectPanelService;

    @Autowired
    public ProjectPanelController(ProjectPanelService projectPanelService) {
        this.projectPanelService = projectPanelService;
    }

    @PostMapping
    public ResponseEntity<ProjectPanel> createProjectPanel(@RequestBody ProjectPanel projectPanel) {
        return ResponseEntity.ok(projectPanelService.createProjectPanel(projectPanel));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProjectPanel> getProjectPanelById(@PathVariable Long id) {
        return ResponseEntity.ok(projectPanelService.getProjectPanelById(id));
    }
    @GetMapping("project/{projecId}")
    public ResponseEntity<List<ProjectPanel>> getPanelsByProjectId(@PathVariable Long projecId){
        return  ResponseEntity.ok(projectPanelService.getProjectPanelsbyId(projecId));
    }
    @GetMapping
    public ResponseEntity<List<ProjectPanel>> getAllProjectPanels() {
        return ResponseEntity.ok(projectPanelService.getAllProjectPanels());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProjectPanel> updateProjectPanel(@PathVariable Long id, @RequestBody ProjectPanel projectPanel) {
        return ResponseEntity.ok(projectPanelService.updateProjectPanel(id, projectPanel));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProjectPanel(@PathVariable Long id) {
        projectPanelService.deleteProjectPanel(id);
        return ResponseEntity.noContent().build();
    }
}
