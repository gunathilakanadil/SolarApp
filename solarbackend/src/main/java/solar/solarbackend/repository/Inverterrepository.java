package solar.solarbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import solar.solarbackend.entity.Inverters;
import solar.solarbackend.entity.Panels;

public interface Inverterrepository extends JpaRepository<Inverters,Long> {
}
