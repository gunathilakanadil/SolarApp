package solar.solarbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import solar.solarbackend.entity.Panels;
import solar.solarbackend.service.PanelService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/panels")
public class PanelController {

    private final PanelService panelService;

    @Autowired
    public PanelController(PanelService panelService) {
        this.panelService = panelService;
    }


    @GetMapping
    public ResponseEntity<List<Panels>> getAllPanels() {
        return ResponseEntity.ok(panelService.getAllPanels());
    }
}
