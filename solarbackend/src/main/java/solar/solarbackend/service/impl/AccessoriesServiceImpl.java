package solar.solarbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import solar.solarbackend.entity.Accessories;
import solar.solarbackend.exception.AccessoriesException;
import solar.solarbackend.repository.AccessoriesRepository;
import solar.solarbackend.service.AccessoriesService;

import java.util.List;

@Service
public class AccessoriesServiceImpl implements AccessoriesService {

    private final AccessoriesRepository accessoriesRepository;

    @Autowired
    public AccessoriesServiceImpl(AccessoriesRepository accessoriesRepository) {
        this.accessoriesRepository = accessoriesRepository;
    }

    @Override
    public List<Accessories> getAccessoriesByProjectId(Long projectId) {
        return accessoriesRepository.findByProjectId(projectId);
    }
    @Override
    public Accessories createAccessory(Accessories accessory) {
        if (accessory.getSerialNumber() != null &&
                accessoriesRepository.findBySerialNumber(accessory.getSerialNumber()) != null) {
            throw new AccessoriesException("Serial number already exists: " + accessory.getSerialNumber());
        }
        return accessoriesRepository.save(accessory);
    }

    @Override
    public Accessories getAccessoryById(Long id) {
        return accessoriesRepository.findById(id)
                .orElseThrow(() -> new AccessoriesException("Accessory not found with ID: " + id));
    }

    @Override
    public List<Accessories> getAllAccessories() {
        return accessoriesRepository.findAll();
    }

    @Override
    public Accessories updateAccessory(Long id, Accessories accessory) {
        Accessories existingAccessory = getAccessoryById(id);
        existingAccessory.setName(accessory.getName());
        existingAccessory.setQuantity(accessory.getQuantity());
        existingAccessory.setRating(accessory.getRating());
        existingAccessory.setSerialNumber(accessory.getSerialNumber());
        existingAccessory.setProject(accessory.getProject());
        return accessoriesRepository.save(existingAccessory);
    }

    @Override
    public void deleteAccessory(Long id) {
        Accessories accessory = getAccessoryById(id);
        accessoriesRepository.delete(accessory);
    }
}
