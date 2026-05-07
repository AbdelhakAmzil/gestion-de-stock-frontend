/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface EntrepriseDto {
  id?: number;
  nom?: string;
  description?: string;
  adresse?: AdresseDto;
  password?:String;
  codeFiscal?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  steWeb?: string;
}
