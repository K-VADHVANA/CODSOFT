let input = document.getElementById('input');
let btn =  document.querySelectorAll('button');

let string = "";
let array = Array.from(btn);
array.forEach(button => {
    button.addEventListener('click',(v) =>{
        if(v.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(v.target.innerHTML == 'AC')
            {
                string = "";
                input.value = string;
            }
            else if(v.target.innerHTML == 'DEL'){
                string = string.substring(0, string.length - 1);
                input.value = string
            }
            else{
                string += v.target.innerHTML;
                input.value = string;
            }
        
})

})
