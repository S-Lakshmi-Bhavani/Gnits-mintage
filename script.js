var typed=new Typed(".typing", {
    strings:["News", "Events" ,"Updates"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var typed=new Typed(".typing2", {
    strings:["Links"],
    typeSpeed:70,
    backSpeed:30,
    loop:true
})
const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerText='0'

    const updateCounter=()=>{
        const target = +counter.getAttribute("data-target")
        const c = +counter.innerText


        const increment = target/200
        if(c<target){
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter,15)
        }else{
            counter.innerText= target
        }
    }
    updateCounter()
});