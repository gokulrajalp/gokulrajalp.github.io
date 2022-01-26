function validate(){

var a = document.forms["contact"]["name"].value;
if(a === ""){
    alert("Name filed is empty!");
    
    $(function(){
        $('#name').attr('placeholder',"Enter your Name or Type anything (Eg:NA)")
    });
    return false;
}

var a = document.forms["contact"]["email"].value;
if(a === ""){
    alert("Email filed is empty!");

    $(function(){
        $('#email').attr('placeholder',"Enter your EmailID or Type anything (Eg:abc@gmail.com)")
    });
    return false;
}


var a = document.forms["contact"]["message"].value;
if(a === ""){
    alert("Message filed is empty!");
    
    $(function(){
        $('#message').attr('placeholder',"This field must not empty, type your Message")
    });
    return false;
}

var name = document.querySelector('#name').value;


var email = document.querySelector('#email').value;


var message = document.querySelector('#message').value;

var num = localStorage.getItem("num");

var level = parseInt(num);

localStorage.setItem(`name${num}`,name);
localStorage.setItem(`email${num}`,email);
localStorage.setItem(`message${num}`,message);

level++;

localStorage.setItem("num",level);

}

function loading(){
    var load = localStorage.getItem("load");
    if(!load){
        $('#home').collapse('toggle');
    }
    else{
        $(`#${load}`).collapse('toggle');
    }

    var num = localStorage.getItem("num");
    if(!num){
        localStorage.setItem("num",1)
    }

    var check = parseInt(localStorage.getItem(`num`));

for(var i =1;i<check;i++){
    var local = localStorage.getItem(`name${i}`);
    if(local){ 
        var html = `
<div class="card pb-5">
    <div class="card-header bg-warning text-center">
        <h3>Message</h3>
    </div>
    <div class = "card-body bg-dark text-white">
        <h3>Name : ${localStorage.getItem(`name${i}`)}</h3>
        <h3>Mail : ${localStorage.getItem(`email${i}`)}</h3>
        <h3>Message : ${localStorage.getItem(`message${i}`)}</h3>
    </div>
    <div class="card-footer bg-success text-center" >
        <h3>Above message sucessfully sent</h3>
        <button class = "btn btn-danger" onclick = "remove(${i})">Remove From here</button>
    </div>
</div>
`

document.querySelector('.message').insertAdjacentHTML('afterbegin',html);
}
    }
    
}



function remove(rem){

    localStorage.removeItem(`name${rem}`);
    localStorage.removeItem(`email${rem}`);
    localStorage.removeItem(`message${rem}`);
    location.reload();


}

function index(){
    document.querySelector('.index').scrollIntoView();
}

function tohide(hide){
    var i = document.querySelectorAll(`.${hide}`);

    i.forEach(tohide => {
        tohide.classList.add('d-none');
    });
}

function toshow(show){
    var j = document.querySelectorAll(`.${show}`);

    j.forEach(toshow => {
        toshow.classList.remove('d-none');
    });
}

document.querySelector('#home').addEventListener("shown.bs.collapse",function(){
    toshow("p1");
    tohide("p2");
    tohide("p3");
    tohide("p4");
    localStorage.setItem("load","home");
});

document.querySelector('#academic').addEventListener("shown.bs.collapse",function(){
    toshow("p2");
    tohide("p1");
    tohide("p3");
    tohide("p4");
    localStorage.setItem("load","academic");
    
});

document.querySelector('#projects').addEventListener("shown.bs.collapse",function(){
    toshow("p3");
    tohide("p1");
    tohide("p2");
    tohide("p4");
    localStorage.setItem("load","projects");
    
});

document.querySelector('#contact').addEventListener("shown.bs.collapse",function(){
    toshow("p4");
    tohide("p1");
    tohide("p2");
    tohide("p3");
    localStorage.setItem("load","contact");
    
});