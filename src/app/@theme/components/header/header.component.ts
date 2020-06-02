import { Component, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  @Output()
  collapseEvent = new EventEmitter<any>()
  collapseFlag : boolean;
  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              public commonService : CommonService) {
  }

  ngOnInit() {
    this.collapseFlag = true;
    this.layoutService.collapseSideBar = true;
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);

    // const { xl } = this.breakpointService.getBreakpointsMap();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }



  toggleSidebar(): boolean {
    this.collapseFlag = !this.collapseFlag;
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    // this.layoutService.collapseSideBar = !this.layoutService.collapseSideBar;
    this.collapseEvent.emit(this.collapseFlag);


    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
  passedHeaderEvent(event: any)
  {
    console.log("header event is"+event)
  }
}
