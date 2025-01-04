package solar.solarbackend.service;

import solar.solarbackend.entity.ElectricityProfile;

import java.util.List;

public interface ElectricityProfileService {
    ElectricityProfile createElectricityProfile(ElectricityProfile electricityProfile);
    ElectricityProfile getElectricityProfileById(Long id);
    List<ElectricityProfile> getAllElectricityProfiles();
    ElectricityProfile updateElectricityProfile(Long id, ElectricityProfile electricityProfile);
    void deleteElectricityProfile(Long id);
    List<ElectricityProfile> getAllElectricityProfilesByprojectId(long prjectId);
}
