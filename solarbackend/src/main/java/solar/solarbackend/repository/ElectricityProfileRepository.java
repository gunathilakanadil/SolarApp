package solar.solarbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import solar.solarbackend.entity.Accessories;
import solar.solarbackend.entity.BankAccount;
import solar.solarbackend.entity.ElectricityProfile;

import java.util.List;
import java.util.Optional;

@Repository
public interface ElectricityProfileRepository extends JpaRepository<ElectricityProfile, Long> {
    ElectricityProfile findByElectricityAccountNumber(String electricityAccountNumber);
    Optional<ElectricityProfile> findByProject_Id(Long projectId);
    List<ElectricityProfile> findByProjectId(Long projectId);

}
