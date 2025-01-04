package solar.solarbackend.entity;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;

@Entity
@Data
@Table(name = "Inverters")
public class Inverters {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inverter_id")
    private Long id;

    @Column(name = "brand", nullable = false)
    private String brand;

    @Column(name = "model", nullable = false)
    private String model;

    @JsonIgnore // Relationships
    @OneToMany(mappedBy = "inverter", cascade = CascadeType.ALL)
    private List<ProjectInverter> projectInverters;
}
