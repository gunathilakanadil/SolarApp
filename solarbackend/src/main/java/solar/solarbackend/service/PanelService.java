package solar.solarbackend.service;

import solar.solarbackend.entity.Panels;
import solar.solarbackend.entity.ProjectInverter;

import java.util.List;

public interface PanelService {
    List<Panels> getAllPanels();
}
