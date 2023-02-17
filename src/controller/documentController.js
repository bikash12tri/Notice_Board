const Document = require('../model/documentModel');

// Create a new document
const createDocument = async (req, res) => {
  try {
    const document = new Document({
      name: req.body.name,
      url: req.body.url,
      type: req.body.type,
      noticeId: req.body.noticeId,
    });

    const savedDocument = await document.save();
    res.json(savedDocument);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all documents for a notice
const getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find({ noticeId: req.params.id });
    res.json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a document
const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndDelete(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json({ message: 'Document deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createDocument,
  getAllDocuments,
  deleteDocument,
};