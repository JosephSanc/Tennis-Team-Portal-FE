import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Staff } from '../../models/staff-interface';
import { StaffDetailsComponent } from '../../staff-details/staff-details.component';
import { StaffService } from '../../models/staff-service.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-staff-modal',
  templateUrl: './staff-modal.component.html',
  styleUrls: ['./staff-modal.component.css']
})
export class StaffModalComponent implements OnInit {
  testName: string | undefined;
  showOptionalFields: boolean = false;

  staffMember: Staff = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    position: ""
  }

  constructor(
    private staffService: StaffService,
    private dialogRef: MatDialogRef<StaffModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {currentStaffMemberId: number}) { }

  ngOnInit(): void {
    if(this.data){
      this.staffService.getSpecificStaffMember(this.data.currentStaffMemberId).subscribe(result => {
        this.staffMember = result;
      });
    }
  }

  addStaff(){
    this.staffService.addStaffMember(this.staffMember).subscribe(result => {
      this.dialogRef.close({
        staff_Member: this.staffMember,
      });
    });
  }

  updateStaff(){
    this.staffService.updateStaff(this.data.currentStaffMemberId, this.staffMember).subscribe(result => {
      this.dialogRef.close({
        staff_Member: this.staffMember,
      });
    });
  }

  closeDialogue(){
    this.dialogRef.close();
  }

  isEditing(): boolean{
    if(this.data){
      return true;
    }
    return false;
  }

  reverseShowFieldsProperty(){
    this.showOptionalFields = !this.showOptionalFields;
  }



}
