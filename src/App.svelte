<script>
  
  import Button from './lib/Button.svelte'
  import Footer from './lib/Footer.svelte'
  import BgIcon from './lib/Icon.svelte'
  import Icon from '@iconify/svelte';


  let todos = ["an item","an item","an item","an item","an item"]

  $: value = ''
  $: page = 1

  function create(){
    console.log('create clicked')
    todos = [...todos, value]
    value = ''
  }
 
  function next(){
    page++
  }

  function previous(){
    page == 1 ? console.log('page 1') : page--
  }

</script>

<div class="h-screen flex-col flex sm:flex-row overflow-hidden">

  <div class="
              flex 
              flex-col 
              justify-between 
              items-center 
              h-1/2 
              sm:h-full 
              sm:w-1/2
              p-2 
            ">

              <div class="bg-blue-100 flex h-12 p-2 justify-center items-center w-full lg:hidden">
                  <h1 class="text-4xl">
                    Todo
                  </h1>
              </div>

              <div class="todo-list
                          flex
                          flex-col
                          items-center
                          justify-center
                          gap-4
                          w-full
                          h-full
                      
                          ">
                   
                          <div class=" lg:w-12 lg:h-12 bg-red-200">

                          </div>

                          {#each todos as todo}
                          <div class="item flex h-8 w-5/6 rounded-xl shadow-lg">
                            <div class="bg-yellow-300 rounded-l-xl w-8 flex justify-center items-center">
                              1
                            </div>
                            <div class="bg-gradient-to-t from-gray-400 to-blue-500 w-full pl-6 items-center flex">
                              {todo}
                            </div>
                          </div>
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
      <div class="w-full h- bg-red-200">
        
      </div>
      <input class='w-5/6 h-8
                    border-2 rounded-lg  bg-blue-100 lg:w-3/4 mb-4 lg:mb-2 animate-in slide-in-from-bottom duration-2s' bind:value/>
      <Button title='Create' fn={create}/>
    </div>
    
      
    <div class='flex justify-end animate-in fade-in duration-2s'>
      <BgIcon/>
    </div>
      <Footer/>
    
  </div>
</div>



