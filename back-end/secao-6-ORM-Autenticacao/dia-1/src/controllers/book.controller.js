const BookService = require('../services/book.service');

const error500Message = 'Algo deu errado';

const findAll = async (_req, res) => {
    try {
      const book = await BookService.findAll();
      return res.status(200).json(book);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Ocorreu um erro' });
    }
  };
  
  const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const book = await BookService.getById(id);
    
      if (!book) return res.status(404).json({ message: 'Book not found' });
  
      return res.status(200).json(book);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
  };
  
  const createBook = async (req, res) => {
    try {
      const { title, author, pageQuantity } = req.body;
      const newBook = await BookService.createBook({ title, author, pageQuantity });
  
      return res.status(201).json(newBook);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
  };
  
  const updateBook = async (req, res) => {
    try {
      const { title, author, pageQuantity } = req.body;
      const { id } = req.params;
      const updatedBook = await BookService.updateBook(id, { title, author, pageQuantity });
  
      if (!updatedBook) return res.status(404).json({ message: 'Book not found!’' });
  
      return res.status(200).json({ message: 'Book updated!' });    
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
  };
  
  const deleteBook = async (req, res) => {
    try {
      const { id } = req.params;
      await BookService.deleteBook(id);
  
      return res.status(200).json({ message: 'Book deleted!' });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
  };
  
  module.exports = {
    findAll,
    getById,
    createBook,
    updateBook,
    deleteBook,
  };