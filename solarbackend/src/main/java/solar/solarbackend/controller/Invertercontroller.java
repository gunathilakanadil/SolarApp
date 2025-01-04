package solar.solarbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import solar.solarbackend.entity.Inverters;
import solar.solarbackend.entity.Panels;
import solar.solarbackend.service.InverterService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/inverters")
public class Invertercontroller {
    private final InverterService inverterservice;

    @Autowired
    public Invertercontroller(InverterService inverterservice) {

        this.inverterservice = inverterservice;
    }

    @GetMapping
    public ResponseEntity<List<Inverters>> getAllInverters() {
        return ResponseEntity.ok(inverterservice.getAllInverters());
    }

}
