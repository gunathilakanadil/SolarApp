package solar.solarbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import solar.solarbackend.entity.ElectricityProfile;
import solar.solarbackend.service.ElectricityProfileService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/electricity-profiles")
public class ElectricityProfileController {

    private final ElectricityProfileService electricityProfileService;

    @Autowired
    public ElectricityProfileController(ElectricityProfileService electricityProfileService) {
        this.electricityProfileService = electricityProfileService;
    }

    @PostMapping
    public ResponseEntity<ElectricityProfile> createElectricityProfile(@RequestBody ElectricityProfile electricityProfile) {
        return ResponseEntity.ok(electricityProfileService.createElectricityProfile(electricityProfile));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ElectricityProfile> getElectricityProfileById(@PathVariable Long id) {
        return ResponseEntity.ok(electricityProfileService.getElectricityProfileById(id));
    }
    @GetMapping("project/{projectId}")
    public ResponseEntity<List<ElectricityProfile>>getelectricityByPId(@PathVariable long projectId){
        return ResponseEntity.ok(electricityProfileService.getAllElectricityProfilesByprojectId(projectId));
    }
    @GetMapping
    public ResponseEntity<List<ElectricityProfile>> getAllElectricityProfiles() {
        return ResponseEntity.ok(electricityProfileService.getAllElectricityProfiles());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ElectricityProfile> updateElectricityProfile(@PathVariable Long id, @RequestBody ElectricityProfile electricityProfile) {
        return ResponseEntity.ok(electricityProfileService.updateElectricityProfile(id, electricityProfile));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteElectricityProfile(@PathVariable Long id) {
        electricityProfileService.deleteElectricityProfile(id);
        return ResponseEntity.noContent().build();
    }
}
