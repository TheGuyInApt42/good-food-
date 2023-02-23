<script>
    import TabWrapper from "./TabWrapper.svelte";
    import TabContentItem from "./TabContentItem.svelte";
    import TabHead from "./TabHead.svelte";
    import TabHeadItem from "./TabHeadItem.svelte";
    import Menu from "../menu/Menu.svelte";
    let activeTabValue = 1;
    const handleClick = (tabValue) => () => {
        activeTabValue = tabValue;
    };

    export let list = []
    export let buttonStyle = 'p-4 border';
    let tabStyle = buttonStyle

    // NOTE: https://medium.com/stackanatomy/creating-a-svelte-tabs-component-with-slot-props-37c138e0a23e


  </script>
  
  <TabWrapper let:buttonStyle>
    <TabHead {buttonStyle}>
      {#each list as item, i}
        <TabHeadItem id={i+1} tabStyle={'filterBtn'} on:click={handleClick(i+1)}>{item.title}</TabHeadItem>
      {/each}
   </TabHead>
   {#each list as item, i}
    <TabContentItem id={i+1} {activeTabValue}>
    <Menu sectionTitle={item.title} menuItems={item.content}/></TabContentItem>
   {/each}

 </TabWrapper>