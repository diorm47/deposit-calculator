function calculate() {
  const depositAmount = Number(document.getElementById("depositAmount").value);

  if (depositAmount < 10000) {
    alert("Минимальная сумма вклада составляет 10 000 рублей");
    return;
  } else if (depositAmount > 100000000) {
    alert("Максимальная сумма вклада составляет 100 000 000 рублей");
    return;
  }

  const depositTerm = Number(document.getElementById("depositTerm").value);
  const interestRate =
    Number(document.getElementById("interestRate").value) / 100;
  const compoundingFrequency = Number(
    document.getElementById("compoundingFrequency").value
  );

  const n = compoundingFrequency;
  const t = depositTerm / 12;
  const r = interestRate / n;

  const totalInterest = depositAmount * Math.pow(1 + r, n * t) - depositAmount;
  const finalAmount = depositAmount * Math.pow(1 + r, n * t);
  const effectiveInterestRate = (Math.pow(1 + interestRate / n, n) - 1) * 100;

  document.getElementById("totalInterest").textContent =
    totalInterest.toFixed(2);
  document.getElementById("effectiveInterestRate").textContent =
    effectiveInterestRate.toFixed(2);
  document.getElementById("finalAmount").textContent = finalAmount.toFixed(2);
}
