const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';
// js  正则表达式
function isBalanced(exp) {
  const reg = /{}/g;
  let len;
  do {
    len = exp.length;
    console.log(len)
    exp = exp.replace(reg, '')
    console.log(exp)
  }while (len != exp.length)  // 不为空

  return exp.length === 0;
}
console.log(isBalanced(expression));