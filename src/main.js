// 获取DOM元素
const totalCountInput = document.getElementById('totalCount');
const selectCountInput = document.getElementById('selectCount');
const drawButton = document.getElementById('drawButton');
const resultDiv = document.getElementById('result');

// 生成随机数组
function generateRandomNumbers(total, count) {
  // 创建1到total的数组
  const numbers = Array.from({ length: total }, (_, i) => i + 1);
  
  // Fisher-Yates洗牌算法
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  
  // 返回前count个数字
  return numbers.slice(0, count);
}

// 验证输入
function validateInputs() {
  const total = parseInt(totalCountInput.value);
  const count = parseInt(selectCountInput.value);
  
  if (isNaN(total) || total < 1) {
    alert('总人数必须是大于0的整数');
    return false;
  }
  
  if (isNaN(count) || count < 1) {
    alert('抽取人数必须是大于0的整数');
    return false;
  }
  
  if (count > total) {
    alert('抽取人数不能大于总人数');
    return false;
  }
  
  return true;
}

// 处理抽取事件
function handleDraw() {
  if (!validateInputs()) return;
  
  const total = parseInt(totalCountInput.value);
  const count = parseInt(selectCountInput.value);
  
  // 执行抽取
  const result = generateRandomNumbers(total, count);
  
  // 显示结果
  resultDiv.textContent = `抽取结果：${result.join(', ')}`;
  
  // 添加动画效果
  resultDiv.classList.add('opacity-0');
  setTimeout(() => {
    resultDiv.classList.remove('opacity-0');
  }, 50);
}

// 绑定事件
drawButton.addEventListener('click', handleDraw);

// 输入验证
totalCountInput.addEventListener('input', () => {
  if (totalCountInput.value < 1) totalCountInput.value = 1;
});

selectCountInput.addEventListener('input', () => {
  if (selectCountInput.value < 1) selectCountInput.value = 1;
});