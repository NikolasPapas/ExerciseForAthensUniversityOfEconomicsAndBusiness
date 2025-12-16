import { UserRepository } from "./../repositories/user.repository.js";
import { OwnerRepository } from "./../repositories/owner.repository.js";
import { VehicleRepository } from "./../repositories/vehicle.repository.js";
import { InsuranceRepository } from "./../repositories/insurance.repository.js";

const userRepository = new UserRepository();
const ownerRepository = new OwnerRepository();
const vehicleRepository = new VehicleRepository();
const insuranceRepository = new InsuranceRepository();

export class InitialService {
	async initDb() {
		//Users
		await userRepository.createUser({
			name: "Georgis",
			surname: "Antonoglou",
			email: "georgis.antonoglou@example.com",
			username: "georgisantonoglou",
			password: "password123",
		});
		await userRepository.createUser({
			name: "John",
			surname: "Doe",
			email: "john.doe@example.com",
			username: "johndoe",
			password: "password123",
		});

		//Owners
		await ownerRepository.createOwner({
			ownerTaxId: "taxId001",
			name: "Georgis",
			surname: "Antonoglou",
			age: 30,
			gender: "MALE",
		});
		await ownerRepository.createOwner({
			ownerTaxId: "taxId002",
			name: "Anna",
			surname: "Antonoglou",
			age: 30,
			gender: "FEMALE",
		});

		//Vehicle
		await vehicleRepository.createVehicle({
			plateNumber: "plate001",
			insuranceDate: new Date(),
			ownerTaxId: "taxId001",
			brand: "Toyota",
			model: "Camry",
			color: "Red",
		});
		await vehicleRepository.createVehicle({
			plateNumber: "plate002",
			insuranceDate: new Date(),
			ownerTaxId: "taxId002",
			brand: "Honda",
			model: "Civic",
			color: "Blue",
		});

		// Insurance
		await insuranceRepository.createInsurance({
			insuranceId: "insurance001",
			expiryDate: new Date().addDays(365),
			ownerTaxId: "taxId001",
			price: 150,
		});
		await insuranceRepository.createInsurance({
			insuranceId: "insurance002",
			expiryDate: new Date().addDays(60),
			ownerTaxId: "taxId002",
			price: 100,
		});
		return true;
	}
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}