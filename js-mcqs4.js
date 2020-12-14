window.onload=function(){
    show(0);
}


// function anchor()
// {
//     location.href="index-mcqs4-main.html";
// }

let questions =[
    //first Index 
    { 
    //first object 
        id:1,
    
     //2nd object
        question: "Q.1 what is the input device?",
    //3rd object
        answer: "Keyboard",
       
     //4th object
        options:[ "Monitor",
                  "Headphone",
                  "LCD",
                  "Keyboard"
                ]

},
//2nd Index
{
    id:2,
    question:"Q.2 what is the output device?",
    answer:"Lcd",
    options:["Mouse",
             "Lcd",
             "Headphone",
             "Keyboard"
            ]

},
//3rd Index
{
    id:3,
    question:"Q.3 What is RAM stand for?",
    answer:"Random Acces Memmory",
    options:["Read Acces Memmory",
             "Read Absolute Memmory",
             "Random Acces Memmory",
             "Random Arise Memmory"
            ]

}
];
let questions_count = 0;
function next(){
    questions_count++;
    show(questions_count);
    console.log(questions_count);
    
}
function show(count){
    let question=document.getElementById("questions");
    // question.innerHTML="<h2>"+questions[count].question+"</h2>";
    question.innerHTML=`<h2>${questions[count].question}</h2>`;
}
