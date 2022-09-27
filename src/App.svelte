<script>
  
  import Button from './lib/Button.svelte'
  import Footer from './lib/Footer.svelte'
  import BgIcon from './lib/Icon.svelte'
  import Icon from '@iconify/svelte';
  import Item from './lib/List-item.svelte'


  let todos = ["an item","an item","an item","an item","an item"]

  $: value = ''
  $: page = 1

  let success = false

  function create(){
    console.log('create clicked')
    todos = [...todos, value]
    value = ''
    success = true
  }
 
  function next(){
    page++
  }

  function previous(){
    page == 1 ? console.log('page 1') : page--
  }

</script>

<div class="h-screen flex-col flex sm:flex-row overflow-hidden">

  <div class="flex flex-col justify-between items-center h-1/2 sm:h-full sm:w-1/2 p-2">
      <div class="bg-blue-100 flex h-12 p-2 justify-center items-center w-full lg:hidden">
        <h1 class="text-4xl">
          Todo
        </h1>
      </div>

      <div class="todo-list flex flex-col items-center justify-center gap-4 w-full h-full
      ">
        <div class=" lg:w-12 lg:h-12 bg-red-200"></div>

            {#each todos as todo}
              <Item {todo}/>
            {/each}
              
            <div class="pagination flex
            gap-12">
            <Button title={null} icon="ion:caret-back" fn={previous}/>
            <Button title={page} icon={null}/>
            <Button title={null} icon="ion:caret-forward" fn={next}/>
            </div>


      </div>
              

 

    
  </div>

  <div class="flex flex-col h-1/2 sm:h-full sm:w-1/2 justify-between 
              lg:justify-end ">

  

    <div class="flex flex-col items-center ">
      {#if success}
      <div class="flex mb-2 w-5/6 lg:w-3/4  rounded-xl animate-in fade-in duration-700
          bg-gradient-to-r from-blue-300 to-blue-100">
          <div class="w-8 h-8 rounded-l-xl bg-yellow-200 flex items-center justify-center">
            <Icon icon="ep:success-filled" class='bg-white rounded-full' color="green"/>
          </div>

          <div class="bg=green-100 w-full flex items-center pl-6">
            Success !
          </div>
          
      </div>
      {/if}
      <input class='w-5/6 h-8 pl-4
                    rounded-lg bg-gradient-to-r from-gray-300 to-gray-100 
                    lg:w-3/4 mb-4 lg:mb-2 animate-in slide-in-from-bottom duration-2s
                    outline-0' bind:value/>
      <Button title='Create' fn={create}/>
    </div>
    
      
    <div class='flex justify-end animate-in fade-in duration-2s'>
      <BgIcon/>
    </div>
      <Footer/>
    
  </div>
</div>



