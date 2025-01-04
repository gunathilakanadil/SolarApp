package solar.solarbackend.service.impl;

import org.springframework.stereotype.Service;
import solar.solarbackend.entity.Inverters;
import solar.solarbackend.repository.Inverterrepository;
import solar.solarbackend.service.InverterService;

import java.util.List;

@Service
public class InverterServiceImpl implements InverterService {

    private final Inverterrepository inverterrepo;

    public InverterServiceImpl(Inverterrepository inverterrepo) {
        this.inverterrepo = inverterrepo;
    }

    @Override
    public List<Inverters> getAllInverters() {
        return inverterrepo.findAll();
    }
}
