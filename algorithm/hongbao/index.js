// total/num*2 抢的公平的
function hongbao(total, num) {
  const arr = [];
  let restAmount = total;//余下的钱
  let restNum = num;//余下没领的人数

  for(let i = 0;i < num - 1; i++) {
    let amount = parseFloat(Math.random() * 2 *(restAmount/restNum)).toFixed(2);
    restNum --;
    restAmount -= amount;
    arr.push(amount);
  }
  arr.push(restAmount.toFixed(2));
  return arr;
}
console.log(hongbao(100, 10))