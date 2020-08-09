function startQuiz(e){
    if(e.target.previousElementSibling.value==""){
        alert('Enter name and then start!')
    }else{
        localStorage.setItem('key',e.target.previousElementSibling.value);
        e.target.setAttribute('href','quiz/quiz.html');
    }
}

function stratingAnimation(){
    let h1  = document.getElementById("heading");
    let div = document.getElementById('getData');
    let count = 0;
    let key = setInterval(() => {
        switch(count){
            case 0:
                count++;
                h1.innerText ="Test your Skills.";
                break;
            case 1:
                count++;
                h1.innerText ="Test your Skills..";
                break;
            case 2:
                count++;
                h1.innerText ="Test your Skills...";
                break;
            case 3:
                count++;
                h1.innerText ="Test your Skills";
                break;
            default:
                clearInterval(key);
                div.classList.add("show");
                div.classList.add("animate__fadeInTopLeft");
        }
    }, 700);
}
stratingAnimation();