<script setup>
import navbar from "../components/NavbarMain.vue"
import Note from "@/components/TasksMain.vue";
import { useNoteStore } from "../stores/NoteStore";
const noteStore = useNoteStore();

const handleRedactClick = (noteId) => {
  return noteId;
};

</script>


<template>

  <navbar/>

  <div class="notes">
    <Note v-for="note of noteStore.notes"
          :key="note.id"
          :note="note"
          :onRedactClick="handleRedactClick"/>
  </div>

</template>


<style scoped>

</style>
