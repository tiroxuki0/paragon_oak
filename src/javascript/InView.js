function InView(elements){
  function checkElementInViewport(element){
    var rect = element.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function handleInView(){
      elements.forEach(e=>{
        if(checkElementInViewport(e)){
          e.classList.add(`inView`)
        }else{
            e.classList.remove(`inView`)
        }
      })
  }

  window.addEventListener('load',handleInView)
  window.addEventListener('scroll',handleInView)
}

export default InView