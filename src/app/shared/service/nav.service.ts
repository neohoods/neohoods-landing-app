import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

// Menu
export interface IMenu {
  path?: string;
  title?: string;
  type?: string;
  icon?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  megaMenu?: boolean;
  megaMenuType?: string; // small, medium, large
  bookmark?: boolean;
  children?: IMenu[];
}

@Injectable({
  providedIn: "root",
})
export class NavService {
  constructor() { }

  MENUITEMS: IMenu[] = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Demos",
      type: "sub",
      children: [
        {
          path: "/portal",
          title: "Portal",
          type: "link",
        },
        {
          path: "/chat",
          title: "Chat",
          type: "link",
        },
        {
          path: "/oshelf",
          title: "OShelf",
          type: "link",
        },
      ],
    }
  ];

  // Array
  items = new BehaviorSubject<IMenu[]>(this.MENUITEMS);
}
