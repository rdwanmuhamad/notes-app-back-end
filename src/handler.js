/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable semi-spacing */
/* eslint-disable quotes */
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style
/* eslint-disable space-in-parens */
/* eslint-disable linebreak-style */
// eslint-disable-next-line quotes
const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  notes.push(newNote);

  // eslint-disable-next-line no-trailing-spaces
  const isSuccess = notes.filter((note) => note.id === id ).length > 0 ; 

  if (isSuccess) {
    const respone = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    respone.code(201);
    return respone;
  }

  const respone = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  respone.code(500);
  return respone;

};

const getAllNotesHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});

const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const note = notes.filter((n) => n.id === id)[0];

  if(note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan!',
  });
  response.code(404);
  return response;
};
module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };
