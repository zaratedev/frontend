;(function() {

  let sticky = false
  let currentPosition = 0
  const imageCounter = $("[data-name='image-counter']").attr("content")

  $("#sticky-navigation").removeClass("hidden")
  $("#sticky-navigation").slideUp(0)

  setInterval(()=> {

    if (currentPosition < imageCounter) {
      currentPosition++
    }else {
      currentPosition = 0
    }
    $("#gallery .inner").css({
      left: "-"+currentPosition*100+"%"
    })
  }, 3000)

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
    //$("#navigation").addClass("hidden")
    //$("#sticky-navigation").removeClass("hidden")
    $("#navigation").slideUp()
    $("#sticky-navigation").slideDown("fast")
  }

  function unStickyNavigation(){
    $("#description").removeClass("fixed").addClass("absolute")
    $("#navigation").slideDown("fast")
    $("#sticky-navigation").slideUp("fast")
  }

  function isInBottom() {
    const $description = $("#description")
    const descriptionHeight = $description.height()

    return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
  }
})()
