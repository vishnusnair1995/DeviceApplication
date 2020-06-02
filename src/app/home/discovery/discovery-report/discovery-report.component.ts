import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-discovery-report',
  templateUrl: './discovery-report.component.html',
  styleUrls: ['./discovery-report.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DiscoveryReportComponent implements OnInit {
  expandedElement: any;

  datas:Array<object> =  [{operation: '', name: ' Scan Details', startTime: '14/05/2020 05:27 PM',
   endTime: '14/05/2020 05:27 PM',status: 'failed'},{operation: '', name: ' Scan Details', startTime: '14/05/2020 05:27 PM',
   endTime: '14/05/2020 05:27 PM',status: 'failed'},{operation: '', name: ' Scan Details', startTime: '14/05/2020 05:27 PM',
   endTime: '14/05/2020 05:27 PM',status: 'failed'},{operation: '', name: ' Scan Details', startTime: '14/05/2020 05:27 PM',
   endTime: '14/05/2020 05:27 PM',status: 'failed'},{operation: '', name: ' Scan Details', startTime: '14/05/2020 05:27 PM',
   endTime: '14/05/2020 05:27 PM',status: 'failed'},{operation: '', name: ' Scan Details', startTime: '14/05/2020 05:27 PM',
   endTime: '14/05/2020 05:27 PM',status: 'failed'},{operation: '', name: ' Scan Details', startTime: '14/05/2020 05:27 PM',
   endTime: '14/05/2020 05:27 PM',status: 'failed'},{operation: '', name: ' Scan Details', startTime: '14/05/2020 05:27 PM',
   endTime: '14/05/2020 05:27 PM',status: 'failed'}];






  dataSource = new MatTableDataSource<any>(this.datas);

  displayedColumns = ['operation','name', 'startTime', 'endTime', 'status'];


    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSet: any;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
      this.dataSet = data;
    }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngOnInit() {

    this.dataSource.paginator = this.paginator;


    setTimeout(()=>{this.dataSource.sort = this.sort;
    });





  }
  }

