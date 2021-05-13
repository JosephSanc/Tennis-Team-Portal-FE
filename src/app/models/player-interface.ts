import { computeDecimalDigest } from "@angular/compiler/src/i18n/digest";

export interface Player {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;

  homeAddress?: string;
  city?: string;
  zipCode?: number;
  position?: number;
  gender?: string;
  shoeModel?: string;
  shoeSize?: number;
  racquetModel?: string;
  playerId?: number;
}
