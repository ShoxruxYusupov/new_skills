const buttons = document.querySelectorAll(".nav > button");
const content = document.querySelectorAll(".content-list > .content");

function reset(ActiveId){
    buttons.forEach( btn => {
        if(btn.getAttribute("data-open") !== ActiveId){
            btn.classList.remove("active")
        } else{
            btn.classList.add("active")
        }
    })
    content.forEach( con => {
        if(con.getAttribute("id") !== ActiveId){
            con.classList.remove("active")
        } else{
            con.classList.add("active")
        }
    })
}

buttons.forEach( btn => {
    btn.addEventListener("click", ()=>{
        const id = btn.getAttribute("data-open")
        reset(id)
    })
})