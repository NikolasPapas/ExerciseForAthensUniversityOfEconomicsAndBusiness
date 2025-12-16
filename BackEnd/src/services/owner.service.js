import { OwnerRepository } from "./../repositories/owner.repository.js";

const ownerRepository = new OwnerRepository();

export class OwnerService {
	async getOwners(request) {
		return await ownerRepository.getOwner(request);
	}

	async getOwnerById(request) {
		return await ownerRepository.getOwnersByTaxId(request);
	}

	async createOwner(request) {
		return await ownerRepository.createOwner(request);
	}

	async removeOwner(request) {
		//TODO: Implement remove owner logic
	}
}
