import { VehicleRepository } from "../repositories/vehicle.repository.js";

const vehicleRepository = new VehicleRepository();

export class VehicleService {
	async getVehicles(request) {
		return await vehicleRepository.getVehicle(request);
	}

	async getVehicleById(request) {
		return await vehicleRepository.getVehiclesByPlate(request);
	}

	async createVehicle(request) {
		return await vehicleRepository.createVehicle(request);
	}

	async removeVehicle(request) {
		//TODO: Implement remove vehicle logic
	}
}
