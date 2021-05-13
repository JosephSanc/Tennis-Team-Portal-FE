export interface Staff {
  firstName: string;
  lastName: string;
  position: string;
  emailAddress: string;

  homeAddress?: string;
  city?: string;
  zipCode?: number;
  staffId?: number;
}
