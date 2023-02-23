<script>
  import classNames from 'classnames';
  export let id;
  export let activeTabValue
  /* type classOptions = {
    [key: string]: string;
  } */

  const activeClasses  = {
    default: 'inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500', 
    underline: 'inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
  }
  const inactiveClasses  = {
    default: 'inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
    underline: 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
    filterBtn : `filter  md:w-full md:px-4 md:py-2 mb-8 font-medium text-black uppercase shadow-md w-[40%] h-14`
  }
  /* const liClasses : classOptions = {
    default: 'mr-2',
    underline: 'mr-2',
    filterBtn: 'mr-2'
  }; */

  const liClasses = {
    default: 'mr-2',
    underline: 'mr-2',
    filterBtn: 'mr-2'
  };
  export let tabStyle = 'filterBtn'
</script>

<li class={liClasses[tabStyle]} role="presentation">
  <button
    on:click
    class={classNames(activeTabValue === id ? activeClasses[tabStyle] : inactiveClasses[tabStyle])}
    id="{id}-tabhead"
    type="button"
    role="tab">
    <slot />
  </button>
</li>