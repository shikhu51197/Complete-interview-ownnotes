

function  logphase(phase , event) {
    console.log(phase + 'phase:' + event.currentTarget.id   )
   
   
     }
   
      const outer = document.getElementById('outer')
      const innerbtn = document.getElementById('innerbtn')
   
      outer.addEventListener('click', (event )=>  logphase('capture', event), false)
      innerbtn.addEventListener('click', (event )=>  logphase('capture', event), false)
       outer.addEventListener('click', (event )=>  logphase('capture', event), true)
       innerbtn.addEventListener('click', (event )=>  logphase('capture', event), true)
