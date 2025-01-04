package solar.solarbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import solar.solarbackend.entity.ElectricityProfile;
import solar.solarbackend.exception.ElectricityProfileException;
import solar.solarbackend.repository.ElectricityProfileRepository;
import solar.solarbackend.service.ElectricityProfileService;

import java.util.List;
import java.util.Optional;

@Service
public class ElectricityProfileServiceImpl implements ElectricityProfileService {

    private final ElectricityProfileRepository electricityProfileRepository;

    @Autowired
    public ElectricityProfileServiceImpl(ElectricityProfileRepository electricityProfileRepository) {
        this.electricityProfileRepository = electricityProfileRepository;
    }

    @Override
    public ElectricityProfile createElectricityProfile(ElectricityProfile electricityProfile) {
        if (electricityProfileRepository.findByElectricityAccountNumber(electricityProfile.getElectricityAccountNumber()) != null) {
            throw new ElectricityProfileException("Electricity account number already exists: " + electricityProfile.getElectricityAccountNumber());
        }
        return electricityProfileRepository.save(electricityProfile);
    }

    @Override
    public ElectricityProfile getElectricityProfileById(Long id) {
        return electricityProfileRepository.findById(id)
                .orElseThrow(() -> new ElectricityProfileException("Electricity profile not found with ID: " + id));
    }

    @Override
    public List<ElectricityProfile> getAllElectricityProfiles() {
        return electricityProfileRepository.findAll();
    }

    @Override
    public ElectricityProfile updateElectricityProfile(Long id, ElectricityProfile electricityProfile) {
        ElectricityProfile existingProfile = getElectricityProfileById(id);
        existingProfile.setConnectDate(electricityProfile.getConnectDate());
        existingProfile.setSchema(electricityProfile.getSchema());
        existingProfile.setElectricityAccountNumber(electricityProfile.getElectricityAccountNumber());
        existingProfile.setAreaOffice(electricityProfile.getAreaOffice());
        existingProfile.setProject(electricityProfile.getProject());
        return electricityProfileRepository.save(existingProfile);
    }
    public Optional<ElectricityProfile> getElectricityProfileByProjectId(Long projectId) {
        return electricityProfileRepository.findByProject_Id(projectId);
    }

    @Override
    public void deleteElectricityProfile(Long id) {
        ElectricityProfile profile = getElectricityProfileById(id);
        electricityProfileRepository.delete(profile);
    }

    @Override
    public List<ElectricityProfile> getAllElectricityProfilesByprojectId(long projectId) {
        return electricityProfileRepository.findByProjectId(projectId);
    }
}
