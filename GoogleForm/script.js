document.getElementById('submit').addEventListener('click', function() {
    let score = 0;
    
    // Store correct answers
    const answers = {
        q1: 'B',
        q2: 'A',
        q3: 'A',
        q4: 'B',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'B',
        q9: 'B',
        q10: 'B'
    };
    
    for (let i = 1; i <= 10; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.nextSibling.textContent.trim().startsWith(answers[`q${i}`])) {
            score++;
        }
    }
    
    alert(`Your score is ${score} out of 10.`);
});

document.querySelector('.clear-form').addEventListener('click', function() {

    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
});


