function verificaPalindrome(word){
  let palindrome = word.split('').reverse().join('')
  if (palindrome === word){
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome("carroça"));
