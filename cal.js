let result = document.getElementById('result');
let buttons = Array.from(document.getElementsByClassName('btn'));
buttons.map( btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.innerText=='C'){
                result.innerText = '';
        }
        else if(e.target.innerText=='='){
                try{
                    result.innerText = eval(result.innerText);
                } catch {
                    result.innerText = "Error"
                }
        }
        else if(e.target.innerText=='←'){
                if (result.innerText){
                   result.innerText = result.innerText.slice(0, -1);
                }
        }
        else{
                result.innerText += e.target.innerText;
        }
    });
});
