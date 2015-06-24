class NoteMakerController {
  constructor(Notes) {
    this.Notes = Notes;
  }

  createNote(content) {
    this.Notes.createNote(content);
  }
}
NoteMakerController.$inject = ['Notes'];

export {NoteMakerController};