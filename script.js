let faq = document.querySelector(".faq")
let items = document.querySelectorAll(".faq__item")
let tabs = document.querySelectorAll(".faq__tab")
let conts = document.querySelectorAll(".faq__cont")
faq.addEventListener("click",(event)=>{
    let elTarget=event.target
    for(let item of items){
        item.classList.remove("active")
    }
    elTarget.closest(".faq__item").classList.add("active")
})