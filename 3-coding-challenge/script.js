function getTip (amount) {
  let tip = 0;
  if (amount < 50) {
    tip = amount *  0.2;
  } else if (amount >= 50 && amount <= 200) {
    tip = amount * 0.15;
  } else if (amount > 200) {
    tip = amount * 0.1;
  }
  return tip;
}
const tips = [];
const totals = [];
tips.push(getTip(124));
totals.push(124 + tips[0]);
tips.push(getTip(48));
totals.push(48 + tips[1]);
tips.push(getTip(268));
totals.push(268 + tips[2]);
console.table(tips);
console.table(totals);
