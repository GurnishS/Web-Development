let string=""
let buttons=document.querySelectorAll(".Button")

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        try{
            if(e.target.innerHTML=='C' || e.target.innerHTML=='CE'){
                string=''
    
            }
            else if(e.target.innerHTML=='='){
                if(string!='Error') string=eval(string)
            }
            else if(e.target.innerHTML=='D'){
                string=string.slice(0,string.length-1)
            }
            else{
                string=string + e.target.innerHTML
            }
        }
        catch(err){
            string="Error"
        }
        console.log(e.target)
        document.querySelector("input").value=string
    })
})