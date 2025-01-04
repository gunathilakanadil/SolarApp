package solar.solarbackend.entity;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;


@Entity
@Data
@Table(name = "Bank_Account")
public class BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bank_id")
    private Long id;

    @Column(name = "bank" )
    private String bank;

    @Column(name = "branch" )
    private String branch;

    @Column(name = "acc_no")
    private String accountNumber;

    @JsonBackReference(value = "cus-id")
    @ManyToOne
    @JoinColumn(name = "cus_id", nullable = false)

    private Customer customer;
}

