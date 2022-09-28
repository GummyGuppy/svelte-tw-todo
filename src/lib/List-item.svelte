<script>
    export let headerColor = 'bg-yellow-300'
    export let headerIcon = ''
    export let footerIcons =''
    export let bodyColor = 'bg-blue-200'
    export let todo = 'example todo'
    import Icon from '@iconify/svelte';

    export let id = 0



</script>

<div class="item flex h-8 w-5/6 rounded-xl shadow-lg">
    <div class="{headerColor} rounded-l-xl w-8 flex justify-center items-center">
      {headerIcon}
    </div>
    <div class="bg-gradient-to-t {bodyColor} w-full pl-6 items-center flex">
        {todo}
    </div>

  </div>