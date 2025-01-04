package solar.solarbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import solar.solarbackend.entity.BankAccount;
import solar.solarbackend.service.BankAccountService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/bank-accounts")
public class BankAccountController {

    private final BankAccountService bankAccountService;


    @Autowired
    public BankAccountController(BankAccountService bankAccountService) {
        this.bankAccountService = bankAccountService;
    }

    @PostMapping
    public ResponseEntity<BankAccount> createBankAccount(@RequestBody BankAccount bankAccount) {
        return ResponseEntity.ok(bankAccountService.createBankAccount(bankAccount));
    }

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<BankAccount>> getBankAccountsByCustomerId(@PathVariable Long customerId) {
        return ResponseEntity.ok(bankAccountService.getBankAccountsByCustomerId(customerId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<BankAccount> getBankAccountById(@PathVariable Long id) {
        return ResponseEntity.ok(bankAccountService.getBankAccountById(id));
    }

    @GetMapping
    public ResponseEntity<List<BankAccount>> getAllBankAccounts() {
        return ResponseEntity.ok(bankAccountService.getAllBankAccounts());
    }

    @PutMapping("/{id}")
    public ResponseEntity<BankAccount> updateBankAccount(@PathVariable Long id, @RequestBody BankAccount bankAccount) {
        return ResponseEntity.ok(bankAccountService.updateBankAccount(id, bankAccount));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBankAccount(@PathVariable Long id) {
        bankAccountService.deleteBankAccount(id);
        return ResponseEntity.noContent().build();
    }
}
