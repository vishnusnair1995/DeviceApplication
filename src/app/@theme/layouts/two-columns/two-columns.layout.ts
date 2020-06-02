import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/@core/utils';

@Component({
  selector: 'ngx-two-columns-layout',
  styleUrls: ['./two-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
    <nb-layout-header [ngClass] ="(this.colalpsedValue)?'changeWidth':'staticWidth'" fixed>
        <ngx-header (headerEvent) ="passedEvent($event)" (collapseEvent)= passedEvent($event)></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
})
export class TwoColumnsLayoutComponent implements OnInit {
colalpsedValue:boolean = true;

constructor(public layoutService:LayoutService)
{

}
passedEvent(event : any)
{

 this.colalpsedValue = event;

console.log("event is "+event);
}
ngOnInit(){
console.log("inside init"+this.layoutService.collapseSideBar);
}
ngOnChanges()
{
console.log("inside change"+this.layoutService.collapseSideBar);
}
passedHeaderEvent(event:any)
{
console.log("header event is "+event);
}
}

