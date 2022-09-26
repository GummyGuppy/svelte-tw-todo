<script>
  
  import Button from './lib/Button.svelte'
  import Footer from './lib/Footer.svelte'
  

  let todos = []

  $: value = ''

  function create(){
    console.log('create clicked')
    todos = [...todos, value]
    value = ''


  }
 

</script>

<div class="h-screen flex-col flex sm:flex-row">

  <div class="bg-blue-400
              flex 
              flex-col 
              justify-end 
              items-center 
              h-1/2 
              sm:h-full 
              sm:w-1/2">

    
  </div>

  <div class="flex flex-col h-1/2 sm:h-full sm:w-1/2 justify-between 
              lg:justify-end">


    <div class="flex flex-col items-center mt-12 lg:mb-32">
      <input class='sm:w-5/6 lg:w-3/4 mb-4 lg:mb-12 animate-in slide-in-from-bottom duration-2s bg-red-600' bind:value/>
      <Button title='Create' fn={create}/>
    </div>
    
      <Footer/>
    
  </div>
</div>



