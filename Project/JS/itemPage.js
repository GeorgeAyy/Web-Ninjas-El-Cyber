/*##############addone############*/
var data = 1;
document.querySelector('.number').innerText = data;
function decrement() {
    if (data <= 1) {
        data = 1;
    } else {
        data--;
        document.querySelector('.number').innerText = data;
    }
}
function increment() {
    data++;
    document.querySelector('.number').innerText = data;
}
/*##################Review Section ###############*/
const accordion=document.querySelector('.contentBox');
accordion.addEventListener('click',function(event){
    this.classList.toggle('active');

    if(this.classList.contains('active')){
        this.querySelector("i").classList.replace("fa-plus","fa-minus");
    }
    else{
        this.querySelector("i").classList.replace("fa-minus","fa-plus");
    }
})