import { Insurances } from "./../models/entities/Insurance.entity.js";
import { InsuranceModel } from "./../models/insurance.model.js";

export class InsuranceRepository {
	async createInsurance(data) {
		const results = await Insurances.findOne({
			insuranceId: data.insuranceId,
			ownerTaxId: data.ownerTaxId,
		});
		if (!results) {
			await Insurances.create({
				insuranceId: data.insuranceId,
				expiryDate: data.expiryDate,
				ownerTaxId: data.ownerTaxId,
				price: data.price,
				createDate: new Date(),
				updateDate: new Date(),
			}).then((resultData) => {
				return new InsuranceModel(
					resultData.insuranceId,
					resultData.expiryDate,
					resultData.ownerTaxId,
					resultData.price
				);
			});
		}
	}

	async getInsurancesByOwner(ownerTaxId) {
		const data = await Insurances.find({
			ownerTaxId: ownerTaxId,
		});

		return data.map(
			(item) =>
				new InsuranceModel(
					item.insuranceId,
					item.expiryDate,
					item.ownerTaxId,
					item.price
				)
		);
	}
}
