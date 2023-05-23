/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require("./handler");

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
];
// eslint-disable-next-line linebreak-style
module.exports = routes;
