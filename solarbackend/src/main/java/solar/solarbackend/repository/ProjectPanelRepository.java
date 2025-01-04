package solar.solarbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import solar.solarbackend.entity.ProjectPanel;

import java.util.List;

@Repository
public interface ProjectPanelRepository extends JpaRepository<ProjectPanel, Long> {

    List<ProjectPanel> findByProjectId(Long projectId);
    // Optional: Add any custom query methods if needed
}
