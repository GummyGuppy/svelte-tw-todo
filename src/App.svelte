<script>
  
  import Button from './lib/Button.svelte'
  import Footer from './lib/Footer.svelte'
  

  let todos = []

  $: value = ''

  function create(){
    todos = [...todos, value]
    value = ''

  }
 

</script>

<div class="h-screen flex-col flex sm:flex-row">

  <div class=" bg-blue-400 flex flex-col justify-end items-center h-1/2 sm:h-full sm:w-1/2">

    <input class='w-72 mb-4'/>
  </div>

  <div class="flex flex-col h-1/2 sm:h-full sm:w-1/2 justify-between">

    <div class="flex justify-center bg-red-200">
      <Button title='Create' fn={create}/>
    </div>
    <div class='p-4 bg-red-200'>
      <Footer/>
    </div>
  </div>
</div>



