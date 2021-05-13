import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff } from '../models/staff-interface';
import { StaffService } from '../models/staff-service.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  constructor(private readonly staffService: StaffService, private route: ActivatedRoute) { }

  showExtraFields: boolean = false;
  presentingStaffMember: Staff = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    position: ""
  }
  staffId: number;

  ngOnInit(): void {
    this.staffId = +this.route.snapshot.paramMap.get('staffId');
    if (this.staffId) {
      this.staffService.getSpecificStaffMember(this.staffId).subscribe(result => {
        this.presentingStaffMember = result;
      }, error => console.error(error));
    }
  }

  reverseShowExtraFields(){
    this.showExtraFields = !this.showExtraFields;
  }



}
