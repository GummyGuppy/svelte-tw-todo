<script>
  export let title, fn
  

</script>

<button
  class="bg-[#f9f9f9] 
        rounded-lg 
        px-5 py-2 
        font-medium 
        border-2
      hover:border-[#646cff]"
      on:click={fn}
    
>
{title}  
</button>