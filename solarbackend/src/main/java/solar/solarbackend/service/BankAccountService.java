package solar.solarbackend.service;

import solar.solarbackend.entity.BankAccount;

import java.util.List;

public interface BankAccountService {
    BankAccount createBankAccount(BankAccount bankAccount);
    BankAccount getBankAccountById(Long id);
    List<BankAccount> getAllBankAccounts();
    BankAccount updateBankAccount(Long id, BankAccount bankAccount);
    void deleteBankAccount(Long id);
    List<BankAccount> getBankAccountsByCustomerId(Long customerId);

}
