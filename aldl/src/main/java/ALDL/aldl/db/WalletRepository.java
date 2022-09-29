package ALDL.aldl.db;

import ALDL.aldl.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface WalletRepository extends JpaRepository<Wallet,Long> {

    Optional<Wallet> findWalletByAddress(String address);
}