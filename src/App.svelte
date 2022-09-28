<script>
  
  import Button from './lib/Button.svelte'
  import Footer from './lib/Footer.svelte'
  import BgIcon from './lib/Icon.svelte'
  import Icon from '@iconify/svelte';
  import Item from './lib/List-item.svelte' 
  



  let todos = ["1", "2an item","3an item","4an item","5an item", "6more items","7an item", "more items","an item", "more items"]

  $: value = ''

  let currentPage = 1
  let pageSize = 4
 

  $: count = 0

  let success = false

  let type = ''

  let animateIn = 'animate-in slide-in-from-bottom duration-2s'

  function create(){
    
    if(value != ''){
      todos = [...todos, value]
      value = ''
      success = true
      setTimeout(() => {
        success = false
        
      },3000)
    }
    else{
      console.log('nothing in text')
    }

    
  }


 
  function next(){
    
    count = count + 5
    currentPage++
    
  }

  function previous(){
    
    //check to see if at first page
    if(currentPage > 1){

      currentPage--
      count = count - 5
    } 
  }

</script>

<div class="h-screen flex-col flex sm:flex-row overflow-hidden">


  

  <div class="flex flex-col h-full justify-center items-center sm:h-full sm:w-1/2 p-2">
      <div class="bg-blue-100 flex h-12 p-2 justify-center items-center w-full lg:hidden">
        <h1 class="text-4xl">
          Todo
        </h1>
      </div>

      <div class="todo-list flex flex-col items-center justify-center gap-4 w-full h-1/2
                  lg:overflow-y-scroll">
            
        {#each todos as todo, i}

            <Item todo={todos[i]}/>
            
        {/each}
                       



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



