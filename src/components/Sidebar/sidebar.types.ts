export interface ISidebarItem {
  parent: Iitems;
  children?: Iitems[];
}

export interface Iitems {
  label: string;
  link: string;
}
