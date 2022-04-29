
// Caso 1 - Traversing the dom

/**
    const btns = document.querySelectorAll('.question-btn')

    btns.forEach((btn)=>{
        btn.addEventListener('click', e => {
            const question = e.currentTarget.parentElement.parentElement;
            question.classList.toggle('show-text');

        })
    })

 */



// Caso 2 - Using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
  
    btn.addEventListener("click", function () {
      // console.log(question);
  
      questions.forEach(function (e) {
        if (e !== question) {
          e.classList.remove("show-text");
        }
      });
  
      question.classList.toggle("show-text");
    });
  });