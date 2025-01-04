package solar.solarbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import solar.solarbackend.entity.Panels;

import java.awt.*;

public interface panelrepository extends JpaRepository<Panels,Long> {

}
