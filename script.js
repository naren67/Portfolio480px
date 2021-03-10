gsap.registerPlugin(ScrollTrigger)

const movement1 = gsap.timeline({
   
    scrollTrigger:{

        trigger:'.about_mini_box',
        markers:false,
        start:'top 90%',
        end:'top 0%',
        scrub:1
    }


});

movement1.to('.about_mini_box',{ x:125, duration:5})
        .to('.about_mini_box',{ x:0, duration:4})
        .to('.about_mini_box',{ y:170, duration:4})





        /* =========================================*/


const movement2 = gsap.timeline({
   
    scrollTrigger:{

        trigger:'.map_mini_box',
        markers:false,
        start:'top 90%',
        end:'top 0%',
        scrub:1
    }


});

movement2.to('.map_mini_box',{ y:150, duration:5})
        .to('.map_mini_box',{ y:0, duration:4})
        .to('.map_mini_box',{ x:170, duration:4})



        /*======================================================*/

   
          
    
        
     

        /*======================================================*/



const mark_box = document.querySelector('.mark_box')
const mark_mini_box = document.querySelector('.mark_mini_box')

const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')

const book = document.querySelector('.mark_box svg')


mark_box.addEventListener('mousemove',(e)=>{

 

    let xAxis = (window.innerWidth/2-e.pageX)/25
    let yAxis = (window.innerHeight/2-e.pageY)/25

    p1.style.transform = `translateX(-60px)`
    p2.style.transform = `translateX(60px)`
    p3.style.transform = `translateX(-60px)`

    book.style.transform = `translatey(-70px)`
    
})

mark_box.addEventListener('mouseenter',(e)=>{
   
    
    
})

mark_box.addEventListener('mouseleave',(e)=>{
    
    p1.style.transform = `translateX(0px)`
    p2.style.transform = `translateX(0px)`
    p3.style.transform = `translateX(0px)`

    book.style.transform = `translatey(0px)`

})