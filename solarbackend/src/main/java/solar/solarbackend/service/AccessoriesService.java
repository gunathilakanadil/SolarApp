package solar.solarbackend.service;

import solar.solarbackend.entity.Accessories;

import java.util.List;

public interface AccessoriesService {
    Accessories createAccessory(Accessories accessory);
    Accessories getAccessoryById(Long id);
    List<Accessories> getAllAccessories();
    Accessories updateAccessory(Long id, Accessories accessory);
    void deleteAccessory(Long id);
    List<Accessories> getAccessoriesByProjectId(Long projectId); // New method

}
