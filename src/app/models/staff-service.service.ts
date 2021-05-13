import { Injectable } from '@angular/core';
import { Staff } from './staff-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private baseUrl = "https://localhost:44337";

  constructor(private http: HttpClient) { }

  public getStaff(){
    return this.http.get<Staff[]>(`${this.baseUrl}/staff`);
  }

  public updateStaff(staffId: number, staffMember: Staff){
    return this.http.put<Staff>(`${this.baseUrl}/staff/${staffMember.staffId}`, staffMember);
  }

  public getSpecificStaffMember(staffId: number){
    return this.http.get<Staff>(`${this.baseUrl}/staff/${staffId}`);
  }

  public deleteSpecificStaffMember(staffId: number) {
    console.log(staffId);
    return this.http.delete(`${this.baseUrl}/staff/delete/${staffId}`);
  }

  public addStaffMember(staff_Member: Staff){
    return this.http.post(`${this.baseUrl}/staff/add-staff_Member`, staff_Member);
  }
}
