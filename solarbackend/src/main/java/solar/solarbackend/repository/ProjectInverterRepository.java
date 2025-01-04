package solar.solarbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import solar.solarbackend.entity.Accessories;
import solar.solarbackend.entity.ProjectInverter;

import java.util.List;

@Repository
public interface ProjectInverterRepository extends JpaRepository<ProjectInverter, Long> {
    ProjectInverter findBySerialNumber(String serialNumber);
    List<ProjectInverter> findByProjectId(Long projectId); // New method

}
