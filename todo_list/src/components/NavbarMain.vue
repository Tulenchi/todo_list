<template>
  <div class="navbar bg-base-300 px-4">
    <div class="navbar-start">

    </div>
    <div class="navbar-center">
      <h1 class="text-base-content text-3xl font-bold "> Заметки </h1>
    </div>
    <div class="navbar-end">
      <div class="tooltip tooltip-left" data-tip="Создать заметку">
        <div class = "flex justify-center items-center">
          <button class="btn btn-ghost text-4xl btn-circle" @click="$router.push('/note-add')"><span class = "mt-1.5" >+</span></button>
        </div>
      </div>
    </div>
  </div>


</template>


<script setup>

</script>


<style scoped>

</style>