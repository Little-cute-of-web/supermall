<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar',
  data() {
    return {
        
    }
  },
  methods:{

  }
}
</script>
<style scoped>
#tab-bar{
display: flex;
background-color: #f6f6f6;
position: fixed;
left:0;
right:0;
bottom:-2px;
height: 49px;
font-size: 16px;
z-index:100;
}
</style>