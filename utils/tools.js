//生成n位数字字符串
function randomNum(n){
  let res = ''
  for(let i=0;i<n;i++){
      res += Math.floor(Math.random()*10);
  }
  return res;
}
//生成n位数字字母混合得字符串
function generateMixed(n){
  let chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let res = '';
  for(let i=0;i<n;i++){
      let id = Math.floor(Math.random()*36);
      res += chars[id]
  }
  return res;
}

module.exports = {
  randomNum,
  generateMixed
}