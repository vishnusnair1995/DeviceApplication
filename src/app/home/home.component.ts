import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HOME_MENU_ITEMS } from './homemenu';
import { NbIconLibraries } from '@nebular/theme';
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
    menu = HOME_MENU_ITEMS;
   @Output() headerEvent =new EventEmitter<any>()
    constructor(private iconLibraries: NbIconLibraries,private commonService: CommonService) {
      this.iconLibraries.registerFontPack('font-awesome',{packClass :'fa'});

    }
    sample(event:any)
    {
      if(event!=null)
      {
        this.commonService.headerTitle=event.path[1].text
      this.headerEvent.emit(event.path[1].text)
       console.log(event);
      console.log(event.path[1].text);
      }
    }

  }


