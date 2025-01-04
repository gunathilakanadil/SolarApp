package solar.solarbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import solar.solarbackend.entity.Accessories;
import solar.solarbackend.service.AccessoriesService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/accessories")
public class AccessoriesController {

    private final AccessoriesService accessoriesService;

    @Autowired
    public AccessoriesController(AccessoriesService accessoriesService) {
        this.accessoriesService = accessoriesService;
    }
    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Accessories>> getAccessoriesByProjectId(@PathVariable Long projectId) {
         return ResponseEntity.ok(accessoriesService.getAccessoriesByProjectId(projectId));
    }

    @PostMapping
    public ResponseEntity<Accessories> createAccessory(@RequestBody Accessories accessory) {
        return ResponseEntity.ok(accessoriesService.createAccessory(accessory));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Accessories> getAccessoryById(@PathVariable Long id) {
        return ResponseEntity.ok(accessoriesService.getAccessoryById(id));
    }

    @GetMapping
    public ResponseEntity<List<Accessories>> getAllAccessories() {
        return ResponseEntity.ok(accessoriesService.getAllAccessories());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Accessories> updateAccessory(@PathVariable Long id, @RequestBody Accessories accessory) {
        return ResponseEntity.ok(accessoriesService.updateAccessory(id, accessory));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccessory(@PathVariable Long id) {
        accessoriesService.deleteAccessory(id);
        return ResponseEntity.noContent().build();
    }
}
