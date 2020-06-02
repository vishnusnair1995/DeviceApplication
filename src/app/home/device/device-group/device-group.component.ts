import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../users/data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddDeviceComponent } from '../add-device/add-device.component';

@Component({
  selector: 'app-device-group',
  templateUrl: './device-group.component.html',
  styleUrls: ['./device-group.component.scss']
})
export class DeviceGroupComponent implements OnInit {

  datas:Array<object> =  [
    {groupName :'Default', location: "" , deviceNo: 0,deleteOperation:""},
   {groupName :'Default', location: "" , deviceNo: 0,deleteOperation:""},
   {groupName :'Default', location: "" , deviceNo: 0,deleteOperation:""},
   {groupName :'Default', location: "" , deviceNo: 0,deleteOperation:""},
   {groupName :'Default', location: "" , deviceNo: 0,deleteOperation:""},
   {groupName :'Default', location: "" , deviceNo: 0,deleteOperation:""}
  ];
  index: number;
  id: number;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource = new MatTableDataSource<any>(this.datas);

  displayedColumns = ['groupName','location', 'deviceNo','deleteOperation'];

  exampleDatabase: DataService | null;

  constructor(private router:Router, public dialogService: MatDialog) { }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    console.log("userrrrrrrr"+this.router.url)


  }

  addDevice()
  {



    const dialogRef = this.dialogService.open(AddDeviceComponent, {
      width: '60%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  }
