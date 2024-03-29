import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useNoteStore = defineStore("noteStore", () => {
    const notes = ref([])

    /*const notesInLocalStorage = localStorage.getItem("notes")
    if (notesInLocalStorage) {
        notes.value = JSON.parse(notesInLocalStorage);
    }*/

    const addNote = (note) => {
        notes.value.push(note);
    };

    const deleteNote = (id) => {
        notes.value = notes.value.filter(el => el.id !== id);
    };

    /*watch(
        () => notes.value,
        (state) => {
            localStorage.setItem('notes', JSON.stringify(state));
            },
        {deep: true}
    );*/

    return {notes, addNote, deleteNote};

});

/*export const useNoteStore = defineStore("noteStore", {
    state: () => ({
        notes: [],
    }),
    actions: {
        addNote(note) {
            this.notes.push(note)
        },
        deleteNote(id){
            this.notes = this.notes.filter(el => el.id !== id);
        }
    },
});*/