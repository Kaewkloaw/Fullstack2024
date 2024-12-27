let count = 0; // count points


function checkAnswer(answer) {
    const result = document.getElementById('result1');
    if (answer === 'a') {
        result1.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result1.style.color = 'green';
        count++;
    } else {
        result1.textContent = "Incorrect! Try again.";
        result1.style.color = 'red';
    }
 }
function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const score = document.getElementById('score');
    if (answer === 'd') {
        result2.textContent = "ถูกต้อง PIM ก่อตั้งเมื่อปี 2550";
        result2.style.color = 'green';
        count++;
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
    }

    score.textContent = "You got "+ count +" points.";
    count = 0;
}