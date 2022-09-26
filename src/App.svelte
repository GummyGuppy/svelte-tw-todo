<script>
  
  import Button from './lib/Button.svelte'

  let todos = []

  $: value = ''

  function create(){
    todos = [...todos, value]
    value = ''

  }
 

</script>

<div class="h-screen flex-col flex sm:flex-row">

  <div class="bg-blue-100 h-1/2 sm:h-full sm:w-1/2">

  </div>
  <div class="bg-yellow-300 h-1/2 sm:h-full sm:w-1/2">

  </div>
</div>



