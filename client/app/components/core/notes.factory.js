import _ from 'lodash';
let count = 0;
let Notes = ($http) => {
  let notes = [];
  const api = 'http://localhost:3000/notes';

  let getAllNotes = () => {
    return $http.get(api)
      .then(res => notes = res.data);
  };

  let getNotesState = () => {
    return notes;
  };

  let getOneNote = (id) => {
    return _.find(notes, {id});
  };

  return {
    createNote(content) {
      let note = {content, id: ++count};
      notes.push(note);
    },
    getAllNotes, getOneNote, getNotesState};
};

export {Notes};