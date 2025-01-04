package solar.solarbackend.entity;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;


@Entity
@Data
@Table(name = "Accessories")
public class Accessories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "acc_id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "qty" )
    private int quantity;

    @Column(name = "rating")
    private String rating;

    @Column(name = "serial_no" )
    private String serialNumber;

    @JsonBackReference(value = "project-id")
    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)

    private Project project;
}
