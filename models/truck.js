const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TruckSchema = new Schema({
  name: String,
  image: [String],
  logo: String,
  aboutTruck: String,
  phoneNumber: String,
  address: String,
  typesOfFood:[String],
  dollarValue:String,
  markedForDeletion: Boolean,
});

const Truck = mongoose.model('Truck', TruckSchema);

module.exports = Truck;