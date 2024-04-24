const div = document.createElement("div");
div.classList.add("content")
div.setAttribute("style", "background:green; color:white; width:500px;height:200px;margin-left:450px;")

const count = document.createElement("h1")
count.classList.add("header")
count.setAttribute("style","width:100px;font-size:2.5rem;text-align:center; margin-left:170px;padding-top:40px")



count.innerHTML="10";
setTimeout(()=>{
    count.innerHTML="9";
    setTimeout(()=>{
        count.innerHTML="8";
        setTimeout(()=>{
            count.innerHTML="7";
            setTimeout(()=>{
                count.innerHTML="6";
                setTimeout(()=>{
                    count.innerHTML="5";
                    setTimeout(()=>{
                        count.innerHTML="4";
                        setTimeout(()=>{
                            count.innerHTML="3";
                            setTimeout(()=>{
                                count.innerHTML="2";
                                setTimeout(()=>{
                                    count.innerHTML="1";
                                    setTimeout(()=>{
                                        count.innerHTML="0";
                                   count.innerHTML = "<i>Happy Independence Day</i>"
                                
                                },1000)
                                    
                                },1000)  
                            },1000)  
                        },1000)  
                    },1000)    
                },1000) 
            },1000) 
        },1000)
    },1000)
},1000)
div.appendChild(count)

document.body.append(div)