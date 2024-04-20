const input= document.querySelector('.input');

const body= document.querySelector('body')

console.log(input.checked);
input.checked= false;
input.checked = JSON.parse(localStorage.getItem('mode'));

updateBody();
function updateBody(){
    if(input.checked){
        body.style.background="black";
    }else{
        body.style.background='white';
    }
}

input.addEventListener("input", ()=> {
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem('mode',JSON.stringify(input.checked))
}