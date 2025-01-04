package solar.solarbackend.entity;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "Electricity_Profile")
public class ElectricityProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "elec_pro_id")
    private Long id;

    @Column(name = "connect_date", nullable = false)
    private String connectDate;

    @Column(name = "shema")
    private String schema;

    @Column(name = "e_acc_no", unique = true, nullable = false)
    private String electricityAccountNumber;

    @Column(name = "area_office")
    private String areaOffice;


    @OneToOne
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;
}

