import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerVehicleModel } from '../../models/owner-vehicle.model';
import { BaseComponent } from '../../uI-common/base-component';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
	standalone: false,
	selector: 'app-full',
	templateUrl: './full.component.html',
	styleUrls: ['./full.component.scss']
})
export class FullComponent extends BaseComponent implements OnInit {
	owners: FormArray = null;


	constructor(private router: Router, private http: HttpClient) {
		super();
	}

	ngOnInit() {
		const authToken = localStorage.getItem("access_token");
		if (!authToken) {
			this.router.navigate(['/']);
		}
		this.loadData();
	}

	loadData() {
		this.http.get(`${this.API_URL}/api/full`, {}).subscribe((data: any) => {
			const ownerList = data.map((item) =>
				new OwnerVehicleModel().init(item.owner.ownerTaxId, item.owner.name, item.owner.surname, item.owner.email, item.owner.age, item.owner.gender, item.vehicles).getFromModel()
			)
			this.owners = new FormArray(ownerList);
		});
	}

	edit(data: FormGroup) {
		data.enable();
	}
	save(data: FormGroup) {
		this.http.patch(`${this.API_URL}/api/full`, data.getRawValue()).subscribe((owners: any) => {
			data.disable();
			this.loadData();
		});
	}

	add() {
		this.owners.controls.push(new OwnerVehicleModel().getFromModel());
	}

	delete(owner: FormGroup) {
		this.http.delete(`${this.API_URL}/api/full/${owner.get('ownerTaxId').value}`, {}).subscribe((owners: any) => {
			this.loadData();
		});
	}

}
