export interface MyMenu {
  id?: string;
  titre?: string;
  icon?: string;
  url?: string;
  active?: boolean;
  expanded?: boolean;
  sousMenu?: MyMenu[];
}
