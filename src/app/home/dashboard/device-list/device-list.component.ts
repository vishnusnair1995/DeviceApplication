import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { of } from 'rxjs';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  datas:Array<object> =  [
    {devicename: 'atlas-lte', devicegroup: 'Tvm', cloudconnector: 'Trivandrum', syslocation: 'Trivandrum',status: 'up'},
    {devicename: 'atlas-lte', devicegroup: 'Trivandrum', cloudconnector: 'Trivandrum', syslocation: 'Trivandrum',status: 'up'},
    {devicename: 'atlas-lte', devicegroup: 'Ekm', cloudconnector: 'Trivandrum', syslocation: 'Trivandrum',status: 'up'},
    {devicename: 'atlas-lte', devicegroup: 'Trivandrum', cloudconnector: 'Trivandrum', syslocation: 'Trivandrum',status: 'up'},
    {devicename: 'atlas-lte', devicegroup: 'Trivandrum', cloudconnector: 'Trivandrum', syslocation: 'Trivandrum',status: 'up'}

  ];



  dataSource = new MatTableDataSource<any>(this.datas);

  displayedColumns = ['devicename', 'devicegroup', 'cloudconnector', 'syslocation','status'];


    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

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
