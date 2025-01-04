package solar.solarbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import solar.solarbackend.entity.Accessories;

import java.util.List;

@Repository
public interface AccessoriesRepository extends JpaRepository<Accessories, Long> {
    Accessories findBySerialNumber(String serialNumber);
    List<Accessories> findByProjectId(Long projectId); // New method
}
