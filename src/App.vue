<script setup>
import Main from './layout/Main.vue';
</script>

<template>
  <main>
    <div class="wrapper">
       <Main></Main>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 0;
  
 
  display:flex;
  align-items:center;
  justify-content:center;
}

.wrapper{
  padding-left: 2rem;
  width: 100%;
}
.router{
  width: 100%;
}
</style>
