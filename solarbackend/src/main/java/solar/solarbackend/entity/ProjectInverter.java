package solar.solarbackend.entity;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

@Entity
@Data
@Table(name = "Project_Inverter")
public class ProjectInverter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inveter_id")
    private Long id;

    @Column(name = "serial_number", unique = true)
    private String serialNumber;

    @JsonBackReference(value = "project-id")
    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    @JsonBackReference(value = "inverter")
    @ManyToOne
    @JoinColumn(name = "inverter" )
    private Inverters inverter;
}
