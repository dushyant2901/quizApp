
let questionSet=[{
    question:"what is abcd",
    answer:"a",
    options:["a","b","c","d"]
},
{
    question:"what is 1abcd",
    answer:"a",
    options:["a","b","c","d"]
},
{
    question:"what is 2abcd",
    answer:"a",
    options:["a","b","c","d"]
},
{
    question:"what is 3abcd",
    answer:"a",
    options:["a","b","c","d"]
},
{
    question:"what is 4abcd",
    answer:"a",
    options:["a","b","c","d"]
}]

//taking and storing user-details


const btnStart = document.querySelector(".quiz-start")

btnStart.addEventListener("click",submitForm)

function submitForm(event){
    event.preventDefault()
    
let userName=document.querySelector(".user-name").value
sessionStorage.setItem("name",userName)

//location.href="quiz.html"
let userDetailScreen=document.querySelector(".user")
userDetailScreen.style.display="none"

let userQuestions=document.querySelector(".user-questions")
userQuestions.style.display="flex"
//adding and removing classes hide on both boxes
show(quesionCount)
}

const nextBtn=document.querySelector(".next")
nextBtn.addEventListener("click",nextQues)
let quesionCount=0

function show(index){
let quizQuestion=document.querySelector(".quiz-body h2");
quizQuestion.innerHTML=questionSet[index].question

let quizOptions=document.querySelector(".quiz-options");
quizOptions.innerHTML=`
<li class="option">${questionSet[index].options[0]}</li>
<li class="option">${questionSet[index].options[1]}</li>
<li class="option">${questionSet[index].options[2]}</li>
<li class="option">${questionSet[index].options[3]}</li>
`
toggleActive()
console.log(quizQuestion)
}

function nextQues(){
    quesionCount++
    console.log(quesionCount)
    show(quesionCount)
    //check()
}

/*function check(){
 
  if(userAnswer==a){
      console.log("kkk")
  }
}*/


/*function toggleActive(){
    let quizOptions=document.querySelectorAll(".option");
console.log(quizOptions)
function optionToggle(){
quizOptions.style.color="white";
console.log("jj")
}
    quizOptions.forEach((opt)=>opt.addEventListener("click",optionToggle))
}toggleActive()*/

function toggleActive(){
    console.log("jj")
    let option=document.querySelectorAll(".option");
    console.log(option)
   /* for(let i;i<option.length;i++){
       // quizOptions[i].addEventListener("click",()=>{
          //  quizOptions[i].classList.add("active")
          option[i].onclick=function(){
              console.log("hi")
            //quizOptions[i].classList.add("active")
            //console.log("jjj")
          //}
        }}
        //)
  //  }*/

  option.forEach((ii)=>{
  console.log(li.innertext)
  })
}toggleActive()
