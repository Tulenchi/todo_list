<template>

  <div class="navbar bg-base-300 px-4">
    <div class="navbar-start">
      <div class="tooltip tooltip-right" data-tip="Отменить изменения">
        <button class="btn btn-ghost text-4xl btn-circle save" @click="$router.push('/')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
    <div class="navbar-end">
      <div class = "flex justify-center items-center">
        <div class="tooltip tooltip-left" data-tip="Сохранить">
          <button class="btn btn-ghost text-4xl btn-circle save" @click="handleSubmit">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 18L18 6M5 12l4 6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="center-input">
    <input class = "inputtxt input input-bordered w-full" type="text" placeholder="Название заметки" v-model="newNoteTitle" />
  </div>

  <div v-for="ind in formCount" :key="ind">
    <div class="inp-note">
      <label class="checkbox-container">
        <input type="checkbox" class="checkbox hover:checkbox-info" v-model="newDone[ind - 1]" @change="updateDoneStatus(ind)" />
        <span class="checkmark"></span>
      </label>
        <input class = "inputtxtnote input input-bordered w-full" type="text" placeholder="Задание" v-model="newNote[ind - 1]" />
      <button class="btn btn-ghost btn-square" @click="deleteForm(ind)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6L20 6M6 6l0 15M17 6l0 15M6 21L17 21M8 2L15 2" /></svg>
      </button>
    </div>
  </div>

  <div class="plus-note">
    <button class="btn btn-lg btn-ghost text-4xl btn-circle" @click="addForm">
      <span class = "mt-2" >+</span>
    </button>
  </div>
</template>


<script setup>
import {ref} from "vue";
import {useNoteStore} from "@/stores/NoteStore.js";
import {useRouter} from "vue-router";

const router = useRouter();
const noteStore = useNoteStore();
const newNoteTitle = ref('');
const newNote = ref([]);
const newDone = ref([]);

const formCount = ref(0);

const updateDoneStatus = (ind) => {
    newDone[ind - 1] = true;
};

const addForm = () => {
  formCount.value++;
  newNote.value.push('');
  newDone.value.push(false);
};

const deleteForm = (ind) => {
  newNote.value.splice(ind - 1, 1);
  newDone.value.splice(ind - 1, 1);
  formCount.value--;
};

const numberOfElements = noteStore.notes.length;

let index = 0;

if (numberOfElements > 0) {
  index = noteStore.notes[noteStore.notes.length - 1].id + 1;
}

const handleSubmit = () => {
  if (newNoteTitle.value.length > 0 || newNote.value.length > 0) {
    noteStore.addNote({
      id: index,
      original_title: newNoteTitle.value,
      original_note: newNote.value,
      is_done: newDone.value
    });
  }
  router.push('/')
};

</script>


<style lang="css" scoped>

.btn.btn-circle.save{
  margin-right: 0;
}

.center-input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.inputtxt{
  padding: 15px;
  max-width: 1000px;
}

.inp-note {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.inputtxtnote{
  padding: 15px;
  max-width: 800px;
}

.checkbox-container {
  margin-right: 10px;
}

.plus-note{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

</style>