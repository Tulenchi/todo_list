<template>
  <div class = "note" >
    <div>
      <div class="note-name">
        <div class="title">
          {{note.original_title}}
        </div>
        <div class="button-container">
          <button class="btn btn-square redact" @click="$router.push({ path: '/note-redact', query: { id: note.id } })">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 2l6 5L10 22H5v-6L13 6z" />
              <line x1="11" y1="21" x2="6" y2="16" stroke="currentColor" stroke-linecap="square" stroke-width="1.7" />
            </svg>
          </button>
          <button class="btn btn-square delete">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="showPopup"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>
      <div class="note-note">
        <span class="note-all" v-for="(noteItem, index) in note.original_note.slice(0, 2)" :key="index">
          <input type="checkbox" :checked="note.is_done[index]" class="checkbox hover:checkbox-info" disabled  />
            <span class="note-text">
              {{ noteItem.slice(0, 50) }}{{ noteItem.length > 50 ? '...' : '' }}
            </span>
          <br />
        </span>
      </div>
    </div>
  </div>

</template>

<script setup>
import { defineProps } from 'vue';
import {useNoteStore} from "@/stores/NoteStore.js";
import {useRouter} from "vue-router";

const router = useRouter();
const noteStore = useNoteStore();

const props = defineProps({
  note:{
    type: Object,
    required: true,
    default:() => {}
  }
})

const showPopup = () => {
  const confirmation = confirm("Вы уверены, что хотите удалить заметку?");

  if (confirmation) {
    noteStore.deleteNote(props.note.id);
  }
}

</script>

<style lang="css" scoped>
.note {

  margin: 20px;
  border: 1px solid #797979;
  padding: 20px;
  border-radius: 25px;
  word-wrap: break-word;
}

.note-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 23px;
  margin-bottom: 20px;
  white-space: nowrap;

}

.note-note {
  font-size: 18px;
  column-gap: 30px;

}

.checkbox {
  margin-right: 25px;
  margin-top: 10px;
}

.btn.btn-square.redact{
  margin-right: 20px;
}

@media screen and (min-width: 1035px) {
  .note {
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>