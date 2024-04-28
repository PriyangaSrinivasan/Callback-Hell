const div = document.createElement("div");
div.classList.add("content")

const count = document.createElement("h1")
count.classList.add("header")




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