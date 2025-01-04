package solar.solarbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import solar.solarbackend.entity.BankAccount;

import java.util.List;

@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {
    // Additional custom queries (if needed) can be added here
    BankAccount findByAccountNumber(String accountNumber); // Example: Find by account number
    List<BankAccount> findByCustomerId(Long customerId);
}
