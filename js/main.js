;(function() {

  let sticky = false

  $(window).scroll(()=>{
    //console.log(isInBottom())
    const inBottom = isInBottom()

    if (inBottom && !sticky) {
      //Mostrar navegacion
      sticky = true
      stickyNavigation()
    }
    if(!inBottom && sticky){
      //Ocultar la navegacion
      sticky = false
      unStickyNavigation()
    }
  })

  function stickyNavigation(){
    $("#description").addClass("fixed").removeClass("absolute")
    $("#navigation").addClass("hidden")
    $("#sticky-navigation").removeClass("hidden")
  }

  function unStickyNavigation(){
    $("#description").removeClass("fixed").addClass("absolute")
    $("#navigation").removeClass("hidden")
    $("#sticky-navigation").addClass("hidden")
  }

  function isInBottom() {
    const $description = $("#description")
    const descriptionHeight = $description.height()

    return $(window).scrollTop() > $(window).height() - (descriptionHeight * 1.5)
  }
})()
