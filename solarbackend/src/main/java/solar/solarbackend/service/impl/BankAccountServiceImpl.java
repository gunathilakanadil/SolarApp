package solar.solarbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import solar.solarbackend.entity.BankAccount;
import solar.solarbackend.exception.BankAccountException;
import solar.solarbackend.repository.BankAccountRepository;
import solar.solarbackend.service.BankAccountService;

import java.util.List;

@Service
public class BankAccountServiceImpl implements BankAccountService {

    private final BankAccountRepository bankAccountRepository;


    @Autowired
    public BankAccountServiceImpl(BankAccountRepository bankAccountRepository) {
        this.bankAccountRepository = bankAccountRepository;
    }

    @Override
    public BankAccount createBankAccount(BankAccount bankAccount) {
        if (bankAccountRepository.findByAccountNumber(bankAccount.getAccountNumber()) != null) {
            throw new BankAccountException("Account number already exists: " + bankAccount.getAccountNumber());
        }
        return bankAccountRepository.save(bankAccount);
    }

    @Override
    public BankAccount getBankAccountById(Long id) {
        return bankAccountRepository.findById(id)
                .orElseThrow(() -> new BankAccountException("Bank account not found with ID: " + id));
    }

    @Override
    public List<BankAccount> getAllBankAccounts() {
        return bankAccountRepository.findAll();
    }

    @Override
    public BankAccount updateBankAccount(Long id, BankAccount bankAccount) {
        BankAccount existingAccount = getBankAccountById(id);
        existingAccount.setBranch(bankAccount.getBranch());
        existingAccount.setAccountNumber(bankAccount.getAccountNumber());
        existingAccount.setBank(bankAccount.getBank());
        existingAccount.setCustomer(bankAccount.getCustomer());
        return bankAccountRepository.save(existingAccount);
    }

    @Override
    public void deleteBankAccount(Long id) {
        BankAccount bankAccount = getBankAccountById(id);
        bankAccountRepository.delete(bankAccount);
    }

    @Override
    public List<BankAccount> getBankAccountsByCustomerId(Long customerId) {
        return bankAccountRepository.findByCustomerId(customerId);
    }



}
