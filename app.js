let x = 10;
let n = 4;
for (let i = 1; i <= 50; i++) {
  console.log(i);
  while (i == x) {
    console.log('今' + i + '回ループしました。');
    x = x + 10;
  }
  while (i == n) {
    console.log('4で割れる数です。' + i);
    n = n + 4;
  }
  if (i == 50) {
    alert('50回カウントが終わりました。');
  }
}