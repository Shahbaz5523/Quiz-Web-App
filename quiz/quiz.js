
let name = localStorage.getItem('key');
document.getElementById('name').innerText = name;
let count = 1;
let time = '4:59';
var result = 0;
let quizName = "";

function start(type, e) {

    if (count <= 6) {
        var htmlQUiz;

        if (!type) {
            type = localStorage.getItem('type');
        }

        if (type == 'HTML') {
            quizName="HTML";
            for (i = 0; i < e.target.parentNode.childNodes.length; i++) {
                if (e.target.parentNode.childNodes[i].nodeType == 1) {
                    if (e.target.parentNode.childNodes[i].getAttribute('ans')) {
                        if (e.target.parentNode.childNodes[i].lastChild.checked == true) {
                            result = result + 1;
                            console.log(result)
                        }
                    }
                }
            }

            localStorage.setItem('type', 'HTML');

            htmlQUiz = [
                {
                    question: 'What does HTML stand for?',
                    options: ['Hypers Markup Language', 'Home Markup Language', 'Hyper Text Markup Language', 'History Text Markup Language'],
                    answerIndex: 2
                },
                {
                    question: 'Choose the correct HTML element for the largest heading:',
                    options: ['<h6>', '<h1>', '<heading>', '<head>'],
                    answerIndex: 1
                },
                {
                    question: 'What is the correct HTML element for inserting a line break?',
                    options: ['<lb>', '<break>', '<br>', '<rb>'],
                    answerIndex: 2
                },
                {
                    question: 'Who was the primary author of HTML?',
                    options: ['Brendan Ach', 'Brendan Eich', 'Google Inc.', 'Tim Berners-Lee'],
                    answerIndex: 3
                },
                {
                    question: 'How can you make a numbered list?',
                    options: ['<ul>', '<dl>', '<ol>', '<list>'],
                    answerIndex: 2
                }
            ]

        } else if (type == 'CSS') {
            quizName="CSS";
            localStorage.setItem('type', 'CSS');

            for (i = 0; i < e.target.parentNode.childNodes.length; i++) {
                if (e.target.parentNode.childNodes[i].nodeType == 1) {
                    if (e.target.parentNode.childNodes[i].getAttribute('ans')) {
                        if (e.target.parentNode.childNodes[i].lastChild.checked == true) {
                            result = result + 1;
                            console.log(result)
                        }
                    }
                }
            }

            htmlQUiz = [
                {
                    question: 'What does CSS stand for?',
                    options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
                    answerIndex: 1
                },
                {
                    question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
                    options: ['In the <body> section', 'At the end of the document', 'In the <head> section', 'In the <title>'],
                    answerIndex: 2
                },
                {
                    question: 'Which HTML tag is used to define an internal style sheet?',
                    options: ['<style>', '<script>', '<css>', '<styling>'],
                    answerIndex: 0
                },
                {
                    question: 'Which HTML attribute is used to define inline styles?',
                    options: ['font', 'class', 'style', 'styles'],
                    answerIndex: 2
                },
                {
                    question: 'Which is the correct CSS syntax?',
                    options: ['body {color: black;}', '{body;color:black;}', 'body:color=black;', '{body:color=black;}'],
                    answerIndex: 0
                }
            ]

        } else if (type == 'JS') {
            quizName="JS";
            localStorage.setItem('type', 'JS');

            for (i = 0; i < e.target.parentNode.childNodes.length; i++) {
                if (e.target.parentNode.childNodes[i].nodeType == 1) {
                    if (e.target.parentNode.childNodes[i].getAttribute('ans')) {
                        if (e.target.parentNode.childNodes[i].lastChild.checked == true) {
                            result = result + 1;
                            console.log(result)
                        }
                    }
                }
            }

            htmlQUiz = [
                {
                    question: 'Inside which HTML element do we put the JavaScript?',
                    options: ['<scripting>', '<js>', '<javascript>', '<script>'],
                    answerIndex: 3
                },
                {
                    question: 'Where is the correct place to insert a JavaScript?',
                    options: ['In the <body> section', 'The <head> section', 'Both <head> and <body>', 'In the <title>'],
                    answerIndex: 2
                },
                {
                    question: 'How do you write "Hello World" in an alert box?',
                    options: ['alert("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");'],
                    answerIndex: 0
                },
                {
                    question: 'How to write an IF statement in JavaScript?',
                    options: ['if (i == 5)', 'if i = 5 then', 'if i = 5', 'if i == 5 then'],
                    answerIndex: 0
                },
                {
                    question: 'How does a FOR loop start?',
                    options: ['for (i <= 5; i++)', 'for (i = 0; i <= 5)', 'for (i = 0; i <= 5; i++);', 'for i = 1 to 5'],
                    answerIndex: 2
                }
            ]

        } else {
            console.log("Error...")
        }

        document.getElementById('section').innerHTML = "";
        let article = document.createElement('article');
        article.setAttribute('style', 'width:90%');
        let top = document.createElement('div');
        top.setAttribute('class', 'top');
        let img = document.createElement('img');
        img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcnet3.cbsistatic.com%2Fimg%2FlobgMWs_T4416sR8aG9BFQ27yBY%3D%2F570x0%2F2011%2F01%2F18%2Fc6a54258-fdc2-11e2-8c7c-d4ae52e62bcc%2FHTML5_Logo_550px.png&f=1&nofb=1";
        top.appendChild(img);
        let h3 = document.createElement('h3');
        let h3TextNode = document.createTextNode("HTML5 QUIZ");
        h3.appendChild(h3TextNode);
        top.appendChild(h3);
        article.appendChild(top);
        // Now create the artical body
        let articalBody = document.createElement("div");
        articalBody.setAttribute("class", "articalBody");
        let articalBodyTop = document.createElement("div");
        articalBodyTop.setAttribute("class", "articalBodyTop");
        let h4 = document.createElement('h4');
        let h4TextNode = document.createTextNode(count + ' of 5');
        h4.appendChild(h4TextNode);
        articalBodyTop.appendChild(h4);

        let h4_2 = document.createElement('h4');
        let h4_2TextNode = document.createTextNode('Time Left: ');
        h4_2.appendChild(h4_2TextNode);
        let span = document.createElement('span');
        span.setAttribute('id', 'timer');
        let spanTextNode = document.createTextNode(time);
        span.appendChild(spanTextNode);
        h4_2.appendChild(span);
        articalBodyTop.appendChild(h4_2);
        articalBody.appendChild(articalBodyTop);
        articalBody.appendChild(articalBodyTop);

        // main quiz Container
        if (count != 6) {
            let quizConatiner = document.createElement('div');
            quizConatiner.setAttribute('class', 'quizConatiner');
            let question = document.createElement('p');
            let questionText = document.createTextNode(count + '. ' + htmlQUiz[count - 1]['question']);
            question.appendChild(questionText);
            count++;
            // console.log(count)
            quizConatiner.appendChild(question);
            let options = document.createElement('div');
            options.setAttribute('id', 'options');
            for (i = 0; i <= htmlQUiz[count - 2]['options'].length - 1; i++) {
                let optionContainer = document.createElement('div');

                let index = htmlQUiz[count - 2]['answerIndex'];
                if (i == index) {
                    optionContainer.setAttribute('ans', 'true');
                }

                optionContainer.setAttribute('class', 'optionContainer');
                let span = document.createElement('span');
                if (i == 0) {
                    let spanText = document.createTextNode('A');
                    span.appendChild(spanText);
                } else if (i == 1) {
                    let spanText = document.createTextNode('B');
                    span.appendChild(spanText);
                } else if (i == 2) {
                    let spanText = document.createTextNode('C');
                    span.appendChild(spanText);
                } else {
                    let spanText = document.createTextNode('D');
                    span.appendChild(spanText);
                }
                optionContainer.appendChild(span);
                let h5 = document.createElement('h5');
                // console.log(htmlQUiz[i]['options'])
                let h5TextNode = document.createTextNode(htmlQUiz[count - 2]['options'][i]);
                h5.appendChild(h5TextNode);
                optionContainer.appendChild(h5);
                let input = document.createElement('input');
                input.setAttribute('name', 'q1');
                input.setAttribute('type', 'radio');
                input.required = true;
                optionContainer.appendChild(input);
                options.appendChild(optionContainer);
            }
            let button = document.createElement('button');
            let buttonText = document.createTextNode('Next');
            button.appendChild(buttonText);
            button.setAttribute('style', 'float:right;')
            button.setAttribute('onclick', 'start("",event)');
            options.appendChild(button);
            quizConatiner.appendChild(options);
            articalBody.appendChild(quizConatiner);
            article.appendChild(articalBody);
            document.getElementById('section').appendChild(article);
        }
    }
}

setInterval(() => {
    if (document.getElementById('section').innerHTML == "") {
        let artical = document.createElement('article');
        artical.setAttribute('class','result');
        let top = document.createElement('div');
        top.setAttribute('class', 'top');
        let top2 = document.createElement('div');
        let img = document.createElement('img');
        if(quizName == "HTML"){
            img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcnet3.cbsistatic.com%2Fimg%2FlobgMWs_T4416sR8aG9BFQ27yBY%3D%2F570x0%2F2011%2F01%2F18%2Fc6a54258-fdc2-11e2-8c7c-d4ae52e62bcc%2FHTML5_Logo_550px.png&f=1&nofb=1";
        }else if(quizName == "CSS"){
            img.src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.myiconfinder.com%2Fuploads%2Ficonsets%2F256-256-8b61de4c84033266e15317a6eb9fda2d-css3.png&f=1&nofb=1";
        }else if(quizName == "JS"){
            img.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*crcyaiTHV7aiQH1Z93V99Q.png&f=1&nofb=1";
        }
        top2.appendChild(img);
        let h3 = document.createElement('h3');
        if(quizName == "HTML"){
            var h3TextNode = document.createTextNode("HTML5 QUIZ");
        }else if(quizName == "CSS"){
            var h3TextNode = document.createTextNode("CSS3 QUIZ");
        }else if(quizName == "JS"){
            var h3TextNode = document.createTextNode("Javascript QUIZ");
        }
        h3.appendChild(h3TextNode);
        top2.appendChild(h3);
        top.appendChild(top2);

        let div = document.createElement('div');
        div.setAttribute('style','margin:20px');
        let h4 = document.createElement('h4');
        let h4TextNode = document.createTextNode("Your Result");
        h4.appendChild(h4TextNode);
        div.appendChild(h4);

        let p1 = document.createElement('p');
        let p1TextNode = document.createTextNode("Total Marks: ");
        p1.appendChild(p1TextNode);
        let b1 = document.createElement('b');
        let b1TextNode = document.createTextNode("5");
        b1.appendChild(b1TextNode);
        p1.appendChild(b1);
        div.appendChild(p1);

        let p2 = document.createElement('p');
        let p2TextNode = document.createTextNode("Obtained Marks: ");
        p2.appendChild(p2TextNode);
        let b2 = document.createElement('b');
        let b2TextNode = document.createTextNode(result);
        b2.appendChild(b2TextNode);
        p2.appendChild(b2);
        div.appendChild(p2);

        let p3 = document.createElement('p');
        let p3TextNode = document.createTextNode("Time remaining: ");
        p3.appendChild(p3TextNode);
        let b3 = document.createElement('b');
        let b3TextNode = document.createTextNode('5 minutes');
        b3.appendChild(b3TextNode);
        p3.appendChild(b3);
        div.appendChild(p3);

        let button = document.createElement('button');
        let a = document.createElement('a');
        let btnText = document.createTextNode('Restart');
        a.appendChild(btnText);
        a.href= "../index.html";
        button.appendChild(a);
        div.appendChild(button);
        top.appendChild(div);
        artical.appendChild(top);

        document.getElementById('section').appendChild(artical);
    }
}, 100);