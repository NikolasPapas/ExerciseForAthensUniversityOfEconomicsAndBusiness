import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerModel } from '../models/owner.model';
import { BaseComponent } from '../uI-common/base-component';
import { HttpClient } from '@angular/common/http';
import { FormArray } from '@angular/forms';

@Component({
	standalone: false,
	selector: 'app-owner',
	templateUrl: './owner.component.html',
	styleUrls: ['./owner.component.scss']
})
export class OwnerComponent extends BaseComponent implements OnInit {
	owners: FormArray = null;


	constructor(private router: Router, private http: HttpClient) {
		super();
	}


	ngOnInit() {
		this.http.get(`${this.API_URL}/api/owner`, {}).subscribe((owners: any) => {
			const ownerList = owners.map((owner) =>
				new OwnerModel(owner.ownerTaxId, owner.name, owner.surname, owner.age, owner.gender).getFromModel()
			);
			this.owners = new FormArray(ownerList);
		});
	}



}
