import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  navigation = [
    {
      name: 'nav.home', routeLink: '', status: true, classNameForLi: 'nav__li', dropDown: false,
    },
    {
      name: 'nav.aboutAs', routeLink: '/aboutas', status: false, classNameForLi: 'nav__li', dropDown: false,
    },
    {
      name: 'nav.news', routeLink: '/news', status: false, classNameForLi: 'nav__li', dropDown: false,
    },
    {
      name: 'nav.loans', routeLink: '/loans', status: false, classNameForLi: 'nav__li loan__dropdown', dropDown: true,
      dropDownLinks: [
        {
          nameLink: 'nav.DropDownLink.mortgageLoan', routeLink: null,
        },
        {
          nameLink: 'nav.DropDownLink.consumerLoan', routeLink: null,
        },
        {
          nameLink: 'nav.DropDownLink.businessLoan', routeLink: null,
        },
        {
          nameLink: 'nav.DropDownLink.agroLoan', routeLink: null,
        },
        {
          nameLink: 'nav.DropDownLink.autoLoan', routeLink: null,
        },
        {
          nameLink: 'nav.DropDownLink.fastLoan', routeLink: null,
        },
      ],
    },
    {
      name: 'nav.fillApp', routeLink: null, status: false, classNameForLi: 'nav__li loan__dropdown', dropDown: true,
      dropDownLinks: [
        {
          nameLink: 'nav.DropDownLink.autoLoan', routeLink: 'auto-loan',
        },
        {
          nameLink: 'nav.DropDownLink.mortgageLoan', routeLink: null,
        },
        {
          nameLink: 'nav.DropDownLink.consumerLoan', routeLink: null,
        },
        {
          nameLink: 'nav.DropDownLink.businessLoan', routeLink: 'business-loan',
        },
        {
          nameLink: 'nav.DropDownLink.agroLoan', routeLink: null,
        },
        {
          nameLink: 'nav.DropDownLink.fastLoan', routeLink: 'fast-loan',
        },
      ],
    },
    {
      name: 'nav.calculator', routeLink: '/calculator', status: false, classNameForLi: 'nav__li', dropDown: false,
    },
    {
      name: 'nav.contact', routeLink: '/contact', status: false, classNameForLi: 'nav__li', dropDown: false,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
