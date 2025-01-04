package solar.solarbackend.service.impl;

import org.springframework.stereotype.Service;
import solar.solarbackend.entity.Panels;
import solar.solarbackend.repository.panelrepository;
import solar.solarbackend.service.PanelService;

import java.util.List;
@Service
public class PanelServiceimlp implements PanelService {
    private final panelrepository panelrepo;

    public PanelServiceimlp(panelrepository panelrepo) {
        this.panelrepo = panelrepo;
    }

    @Override
    public List<Panels> getAllPanels() {
        return panelrepo.findAll();
    }
}
