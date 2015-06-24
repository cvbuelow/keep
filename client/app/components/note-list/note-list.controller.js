class NoteListController {
  constructor(Notes) {
    this.Notes = Notes;
    this.notes = this.getAllNotes();
  }
  getOneNote(id) {
    return this.Notes.getOneNote(id);
  }
  getAllNotes() {
    return this.Notes.getAllNotes();
  }
}
NoteListController.$inject = ['Notes'];

export {NoteListController};