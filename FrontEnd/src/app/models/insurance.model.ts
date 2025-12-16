export class InsuranceModel {
	insuranceId: String;
	ownerTaxId: String;
	plateNumber: String;
	expiryDate: Date;
	price: Number;

	constructor(insuranceId, ownerTaxId, plateNumber, expiryDate, price, color) {
		this.insuranceId = insuranceId;
		this.ownerTaxId = ownerTaxId;
		this.plateNumber = plateNumber;
		this.expiryDate = expiryDate;
		this.price = price;
	}

}
