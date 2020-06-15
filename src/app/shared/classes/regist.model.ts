
// Regist
export class Regist {
  id: number;
  idregist: string;
  firstname: string;
  lastname: string;
  alias: string;
  accessCode: string;
  email: string;
  phone: string;
  dob: Date;
  city: string;
  robotType: string;
  purchDate: Date;
  shopName: string;
  location: string;
  photoID: File;
  purchRecpt: File;
  password: string;
  imgvar: number;

  clear() {
    this.id = undefined;
    this.idregist = '';
    this.firstname = '';
    this.lastname = '';
    this.alias = '';
    this.accessCode = 'access-member-' + Math.random();
    this.email = '';
    this.phone = '';
    this.dob = new Date;
    this.city = '';
    this.robotType = '';
    this.purchDate = new Date;
    this.shopName = '';
    this.location = '';
    this.imgvar = 0;
    }
}
