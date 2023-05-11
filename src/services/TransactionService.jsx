import axios from "axios";

const TRANSACTION_API_BASE_URL = "http://localhost:8080/api/transactions";

class TransactionService {
  saveTransaction(transaction) {
    return axios.post(TRANSACTION_API_BASE_URL, transaction);
  }

  getTransaction(merchant, accountNumber) {
    return axios.get(
      TRANSACTION_API_BASE_URL + "/" + merchant + "/" + accountNumber
    );
  }

  transaction(transaction) {
    return axios.get(
      TRANSACTION_API_BASE_URL, transaction
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TransactionService();
