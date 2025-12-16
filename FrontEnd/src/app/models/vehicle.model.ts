export class VehicleModel {
	plateNumber: String;
	insuranceDate: String;
	ownerTaxId: String;
	brand: String;
	model: String;
	color: String;

	constructor(plateNumber, insuranceDate, ownerTaxId, brand, model, color) {
		this.plateNumber = plateNumber;
		this.insuranceDate = insuranceDate;
		this.ownerTaxId = ownerTaxId;
		this.brand = brand;
		this.model = model;
		this.color = color;
	}

}