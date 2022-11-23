const { Book } = require('../models');

const findAll = async () => {
  const users = await Book.findAll();

  return users;
};

const getById = async (id) => {
    const book = await Book.findByPk(id);
  
    return book;
  };
  
    const createBook = async ({ title, author, pageQuantity }) => {
    const newBook = await Book.create({ title, author, pageQuantity });
  
    return newBook;
  };
  
  const updateBook = async (id, { title, author, pageQuantity }) => {
    const [updatedBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );
  
    console.log(updatedBook); // confira o que é retornado quando o user com o id é ou não encontrado;  
    return updatedBook;
  };
  
  const deleteBook = async (id) => {
    const book = await Book.destroy(
      { where: { id } },
    );
  
    console.log(book); // confira o que é retornado quando o user com o id é ou não encontrado;
    return book;
  };
  
  module.exports = {
    findAll,
    getById,
    createBook,
    updateBook,
    deleteBook,
  };
  