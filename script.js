let input=document.getElementById("inputbox");
let buttons=document.querySelectorAll(".btn");
let string="";
buttons.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        const value=e.target.innerHTML;
        if(value=="AC"){
            string="";
            input.value=string;
        }
        else if(value=="clear"){
            string=string.slice(0,-1);
            input.value=string;
        }
        else if(value=="="){
            try{
                string=eval(string);
                input.value=string;
            }catch{
                input.value="Error";
                string="";
            }
        }
        else{
            string+=value;
            input.value=string;
        }
    })
}) 