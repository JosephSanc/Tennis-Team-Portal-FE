import { Component, OnInit, OnChanges } from '@angular/core';
import { Staff } from '../models/staff-interface';
import { StaffService } from '../models/staff-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { StaffModalComponent } from '../modals/staff-modal/staff-modal.component';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  public staff: Staff[];
  public staffCount: number;

  constructor(
    private readonly staffService: StaffService,
    public dialog: MatDialog
    ) {
  }

  ngOnInit(): void {
    this.staffService.getStaff().subscribe(result => {
      this.staff = result;
      this.staffCount = result.length;
    },
     error => console.error(error));
  }

  ngOnChanges(){
    this.staffService.getStaff().subscribe(result => {
      this.staff = result;
    },
    error => console.error(error));
  }

  deleteStaffMember(staffId: number) {
    this.staffService.deleteSpecificStaffMember(staffId).subscribe(result => {
      console.log(result);
      this.staffService.getStaff().subscribe(result => {
        this.staff = result;
        console.log(this.staff)
      }, error => console.error(error));
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StaffModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.staffService.getStaff().subscribe(result => {
        this.staff = result;
        console.log(this.staff);
      });
    });
  }

  openDialogWithInfo(staffId: number): void {
    const dialogRef = this.dialog.open(StaffModalComponent, {
      width: '400px',
      data: { currentStaffMemberId: staffId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.staffService.getStaff().subscribe(result => {
        this.staff = result;
        console.log(this.staff);
      });
      console.log(result);
    });
  }



}
