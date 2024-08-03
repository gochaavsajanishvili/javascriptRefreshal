function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function checkPalindrome() {
  const inputString = document.getElementById('inputString').value;
  const result = isPalindrome(inputString);
  const resultDiv = document.getElementById('result');
  if (result) {
    resultDiv.textContent = `This is Palindrome`;
    resultDiv.style.color = 'green';
  } else {
    resultDiv.innerHTML = `This is <u>not</u> Palindrome`;
    resultDiv.style.color = 'red';
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  checkPalindrome();
}
