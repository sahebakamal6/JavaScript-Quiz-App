document.getElementById('submit').addEventListener('click',function(){
    var score = 0;

    var options = {
        q1: "B",
        q2: "A",
        q3: "A",
        q4: "B",
        q5: "A",
        q6: "A",
        q7: "A",
        q8: "B",
        q9: "B",
        q10: "B"
    }

    for (var i = 1; i <= 10; i++){
        var quiz = document.querySelector(`input[name='q${i}']:checked`);
        if(quiz && quiz.nextSibling.textContent.trim().startsWith(options[`q${i}`])){
            score++
        }
    }
    alert(`Your score is ${score} out of 10.`)
});

document.querySelector(".clear-form").addEventListener("click", function(){
    document.querySelectorAll("input[type = 'radio']").forEach(input => input.checked = false);
});


