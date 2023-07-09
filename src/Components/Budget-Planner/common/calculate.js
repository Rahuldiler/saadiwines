const calculateTotaEstimatedCost = (items) => {
  let total = items.reduce((sum, item) => {
    return (sum += +item.expectedAmount);
  }, 0);
  return total;
};

const calculateFinalCost = (data) => {
  let totalAmount = 0;

  for (const object of data) {
    let objectAmount = 0;

    if (object.budgetTransaction.length > 0) {
      for (const transaction of object.budgetTransaction) {
        objectAmount += transaction.amount;
      }
    }

    totalAmount += objectAmount;
  }

  return totalAmount;
};

// Calculating all the transactions
const calculateBudgetTransaction = (items) => {
  let total = items.reduce((sum, item) => {
    return (sum += +item.amount);
  }, 0);
  return total || 0;
};
// Calculating progress for linear bar
const calculateProgress = (estimatedBudget, final) => {
  let percentageDifference;

  if (estimatedBudget === 0 && final === 0) {
    percentageDifference = 0; // Both values are 0, so the percentage difference is 0%
  } else if (estimatedBudget === 0) {
    percentageDifference = Infinity; // `a` is 0, so the percentage difference is infinity
  } else {
    percentageDifference = (final / estimatedBudget) * 100;
  }

  return percentageDifference;
};

export {
  calculateTotaEstimatedCost,
  calculateFinalCost,
  calculateBudgetTransaction,
  calculateProgress,
};
