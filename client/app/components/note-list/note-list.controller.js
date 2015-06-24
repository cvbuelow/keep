class NoteListController {
  constructor(Notes) {
    this.Notes = Notes;
    this.getAllNotes();
  }
  getOneNote(id) {
    return this.Notes.getOneNote(id);
  }
  getAllNotes() {
    return this.Notes.getAllNotes()
      .then((notes) => {
        this.notes = notes;
      })
      .catch(err => console.log(err));
  }
  update() {
    console.log('update');
  }
}
NoteListController.$inject = ['Notes'];

export {NoteListController};