const Notice = require('../model/noticeModel');

// Create a new notice
const createNotice = async (req, res) => {
  try {
    const notice = new Notice({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      status: req.body.status,
    });

    const savedNotice = await notice.save();
    res.json(savedNotice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all notices
const getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json(notices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a notice
const deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) {
      return res.status(404).json({ message: 'Notice not found' });
    }
    res.json({ message: 'Notice deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createNotice,
  getAllNotices,
  deleteNotice,
};