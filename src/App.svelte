<script>
  
  import Button from './lib/Button.svelte'

  let todos = []

  $: value = ''

  function create(){
    todos = [...todos, value]
    value = ''

  }
 

</script>

<div class="bg-red-200 h-screen">
  <div class="bg-blue-100 h-1/2">

  </div>
  <div class="bg-yellow-300 h-1/2">

  </div>
</div>



