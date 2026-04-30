export interface MyMenu {
  id: string;
  titre: string;
  icon: string;
  url?: string;
  sousMenu?: MyMenu[];

  active?: boolean;
  expanded?: boolean; // 👈 IMPORTANT
}
