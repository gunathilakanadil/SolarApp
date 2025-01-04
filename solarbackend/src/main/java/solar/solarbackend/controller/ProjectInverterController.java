package solar.solarbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import solar.solarbackend.entity.ProjectInverter;
import solar.solarbackend.service.ProjectInverterService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/project-inverters")
public class ProjectInverterController {

    private final ProjectInverterService projectInverterService;

    @Autowired
    public ProjectInverterController(ProjectInverterService projectInverterService) {
        this.projectInverterService = projectInverterService;
    }

    @PostMapping
    public ResponseEntity<ProjectInverter> createProjectInverter(@RequestBody ProjectInverter projectInverter) {
        return ResponseEntity.ok(projectInverterService.createProjectInverter(projectInverter));
    }
    @GetMapping("project/{projectId}")
    public ResponseEntity<List<ProjectInverter>> getIntvertersByProjectId(@PathVariable Long projectId){
        return ResponseEntity.ok(projectInverterService.getProjectInvertersByProjectId(projectId));
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProjectInverter> getProjectInverterById(@PathVariable Long id) {
        return ResponseEntity.ok(projectInverterService.getProjectInverterById(id));
    }

    @GetMapping
    public ResponseEntity<List<ProjectInverter>> getAllProjectInverters() {
        return ResponseEntity.ok(projectInverterService.getAllProjectInverters());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProjectInverter> updateProjectInverter(@PathVariable Long id, @RequestBody ProjectInverter projectInverter) {
        return ResponseEntity.ok(projectInverterService.updateProjectInverter(id, projectInverter));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProjectInverter(@PathVariable Long id) {
        projectInverterService.deleteProjectInverter(id);
        return ResponseEntity.noContent().build();
    }
}
