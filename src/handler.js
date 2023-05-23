/* eslint-disable space-in-parens */
/* eslint-disable linebreak-style */
// eslint-disable-next-line quotes
const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updateAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updateAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id ).length > 0 ; 

  if (isSuccess) {
    const respone = h.respone({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    respone.code(201);
    return respone;
  }

  const respone = h.respone({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  respone.code(500);
  return respone;

};

module.exports = { addNoteHandler };
