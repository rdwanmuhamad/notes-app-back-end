/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
];
// eslint-disable-next-line linebreak-style
module.exports = routes;
