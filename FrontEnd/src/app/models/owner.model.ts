import { FormControl, FormGroup, Validators } from "@angular/forms";

export class OwnerModel {
	ownerTaxId: String;
	name: String;
	surname: String;
	age: Number;
	gender: String;

	constructor(ownerTaxId, name, surname, age, gender) {
		this.ownerTaxId = ownerTaxId;
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.gender = gender;
	}

	getFromModel(): FormGroup {
		var form = new FormGroup({
			ownerTaxId: new FormControl(this.ownerTaxId,[Validators.required]),
			name: new FormControl(this.name, [Validators.required]),
			surname: new FormControl(this.surname, [Validators.required]),
			age: new FormControl(this.age, [Validators.required]),
			gender: new FormControl(this.gender, [Validators.required]),
		});
		return form;
	}
}

