import { Vehicles } from "../models/entities/vehicle.entity.js";
import { VehicleModel } from "../models/vehicle.model.js";

export class VehicleRepository {
	async createVehicle(data) {
		const results = await Vehicles.findOne({
			plateNumber: data.plateNumber,
			ownerTaxId: data.ownerTaxId,
		});
		if (!results) {
			await Vehicles.create({
				plateNumber: data.plateNumber,
				insuranceDate: data.insuranceDate,
				ownerTaxId: data.ownerTaxId,
				brand: data.brand,
				model: data.model,
				color: data.color,
				createDate: new Date(),
				updateDate: new Date(),
			}).then((resultData) => {
				return new VehicleModel(
					resultData.plateNumber,
					resultData.insuranceDate,
					resultData.ownerTaxId,
					resultData.brand,
					resultData.model,
					resultData.color
				);
			});
		}
	}

	async getVehiclesByTaxId(ownerTaxId) {
		const data = await Vehicles.find({
			ownerTaxId: ownerTaxId,
		});

		return data.map(
			(item) =>
				new VehicleModel(
					item.insuranceDate,
					item.ownerTaxId,
					item.brand,
					item.model,
					item.color
				)
		);
	}
}
