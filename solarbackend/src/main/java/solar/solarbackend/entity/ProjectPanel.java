package solar.solarbackend.entity;


import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;

@Entity

@Data
@Table(name = "Project_Panel")
public class ProjectPanel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "panel_id")
    private Long id;

    @Column(name = "direction" )
    private String direction;

    @Column(name = "serialnumber" )
    private String serialnumber;


    @ManyToOne
    @JoinColumn(name = "project_id" )
    private Project project;


    @ManyToOne
    @JoinColumn(name = "panel" )

    private Panels panel;
}

