let transactionCounter = 0;

function generateTransactionId() {
  const transactionId = Symbol(`TRANSACTION_ID_${transactionCounter + 1}`);
  transactionCounter++;
  return transactionId;
}

const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);
