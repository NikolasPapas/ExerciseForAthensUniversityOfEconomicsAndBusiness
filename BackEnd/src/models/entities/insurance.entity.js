
import mongoose from 'mongoose';
const InsuranceSchema = new mongoose.Schema({
	insuranceId: String,
	expiryDate: Date,
	ownerTaxId: String,
	price: Number,
	createDate: Date,
	updateDate: Date,
});
InsuranceSchema.index({ insuranceId: 1, ownerTaxId:1 }, { unique: true });

const Insurances = mongoose.model("Insurances", InsuranceSchema);
export { Insurances };


