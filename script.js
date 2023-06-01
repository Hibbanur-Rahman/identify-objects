//tick &#10003;
//wrong &#10007;
var images = document.getElementById('image');
var options = document.getElementById('options');
var optionsList = document.getElementsByClassName('options-item');
var next = document.getElementById('button');
var objects = ['Basket', 'Bottledwater', 'Box', 'Bucket', 'Car', 'Cup', 'Football', 'Keyring', 'Pencil', 'Basket', 'Bottledwater', 'Box'];
console.log(images.innerHTML);
console.log(objects);


var answer;
var optionsElement = [...optionsList];
var mark=document.getElementsByClassName('mark');
optionsElement.forEach(function (element) {
    element.addEventListener('click', function (e) {
        if (e.currentTarget.classList.contains('options-item')) {
            console.log(e.currentTarget.nextElementSibling);
            console.log(answer);
            console.log(e.currentTarget.innerHTML==answer);
            if(e.currentTarget.innerHTML==answer){
                e.currentTarget.nextElementSibling.innerHTML='&#10003;';
                e.currentTarget.nextElementSibling.style.color='green';
                document.getElementById("awesomeSound").play(); 
            }
            else{
                e.currentTarget.nextElementSibling.innerHTML='&#10007;';
                e.currentTarget.nextElementSibling.style.color='red';
                document.getElementById("yuckySound").play(); // Play the yucky sound
            }
        }
    })
})

var k = 0;
function display(j) {
    images.innerHTML = `<img src="./images/${objects[j]}.png" height="400px" width="400px"/>`;
    if (k % 3 == 0) {
        optionsList[0].innerHTML = objects[j + 1];
        optionsList[1].innerHTML = objects[j + 2];
        optionsList[2].innerHTML = objects[j];
    }
    else if (k % 3 == 1) {
        optionsList[1].innerHTML = objects[j + 1];
        optionsList[2].innerHTML = objects[j + 2];
        optionsList[0].innerHTML = objects[j];
    }
    else {
        optionsList[2].innerHTML = objects[j + 1];
        optionsList[1].innerHTML = objects[j + 2];
        optionsList[0].innerHTML = objects[j];
    }
    answer=objects[j];

}
display(0);
function next1() {
    k++;
    display(k);
    for(var i=0;i<3;i++){
        mark[i].innerHTML='';
    }
    if (k >= (objects.length - 3)) {
        k = 0;
    }
}