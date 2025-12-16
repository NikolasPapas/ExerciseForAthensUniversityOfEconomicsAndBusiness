import { Insurances } from "./../models/entities/Insurance.entity.js";
import { InsuranceModel } from "./../models/insurance.model.js";

export class InsuranceRepository {

	async getInsurance(request) {
		const dbRequest = {};
		if (request.insuranceId) dbRequest.insuranceId = request.insuranceId;
		if (request.ownerTaxId) dbRequest.ownerTaxId = request.ownerTaxId;
		if (request.plateNumber) dbRequest.plateNumber = request.plateNumber;
		if (request.expiryDate) dbRequest.expiryDate = request.expiryDate;
		if (request.price) dbRequest.price = request.price;
		const data = await Insurances.find(dbRequest);
		return data.map(
			(resultData) =>
				new InsuranceModel(
					resultData.insuranceId,
					resultData.ownerTaxId,
					resultData.plateNumber,
					resultData.expiryDate,
					resultData.price
				)
		);
	}

	async createInsurance(data) {
		const results = await Insurances.findOne({
			insuranceId: data.insuranceId,
			ownerTaxId: data.ownerTaxId,
			plateNumber: data.plateNumber
		});
		if (!results) {
			await Insurances.create({
				insuranceId: data.insuranceId,
				ownerTaxId: data.ownerTaxId,
				plateNumber: data.plateNumber,
				expiryDate: data.expiryDate,
				price: data.price,
				createDate: new Date(),
				updateDate: new Date(),
			})
			return data;
		}
	}

	async getInsurancesById(insuranceId) {
		const data = await Insurances.find({
			insuranceId: insuranceId,
		});

		return data.map(
			(item) =>
				new InsuranceModel(
					item.insuranceId,
					item.ownerTaxId,
					item.plateNumber,
					item.expiryDate,
					item.price
				)
		);
	}

	async getInsurancesByOwner(ownerTaxId) {
		const data = await Insurances.find({
			ownerTaxId: ownerTaxId,
		});

		return data.map(
			(item) =>
				new InsuranceModel(
					item.insuranceId,
					item.ownerTaxId,
					item.plateNumber,
					item.expiryDate,
					item.price
				)
		);
	}
}
