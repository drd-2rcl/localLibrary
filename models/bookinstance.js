var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
  {
    book: { type: Schema.ObjectId, ref: 'Book', required: true }, //reference to the associated Book
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.row}
  }
});

//Virtual for bookinstance's urlencoded
BookInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/bookinstance' + this._id;
});

// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);
