<script>

  import Icon from '@iconify/svelte';
  
  export let title, icon, animate = null

 

  export let fn = () => {
    
  } 
  

</script>

<button
  class="bg-[#f9f9f9] 
        rounded-lg 
        px-5 py-2 
        font-medium 
        border-2
      hover:border-[#646cff]
      hover:bg-slate-300
      active:bg-slate-100
      {animate} tracking-widest"
      on:click={fn}
>
{#if title}
  {title}
{:else}
  <Icon {icon}/>
{/if}

</button>

