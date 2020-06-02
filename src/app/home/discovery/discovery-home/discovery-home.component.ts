import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DiscoveryReportComponent } from '../discovery-report/discovery-report.component';
import { NewDiscoveryFormComponent } from '../new-discovery-form/new-discovery-form.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-discovery-home',
  templateUrl: './discovery-home.component.html',
  styleUrls: ['./discovery-home.component.scss']
})
export class DiscoveryHomeComponent implements OnInit {

  datas:Array<object> =  [
    {name: 'Tvm-Scan', operation: '', mode: 'Scheduled', frequency: 'Minutely' ,lastRunAt:'12/10/2020',lastStatus:"",activate:"",nextrunAt:"",runStatus:""},
    {name: 'Kochi-scan', operation: '', mode: 'Scheduled', frequency: 'Minutely',lastRunAt:'12/10/2020',lastStatus:"",activate:"",nextrunAt:"",runStatus:""},
    {name: 'Tvm Scan', opertaion: '', mode: 'Manual', frequency: 'Minutely',lastRunAt:'12/10/2020',lastStatus:"",activate:"",nextrunAt:"",runStatus:""}

  ];


  index: number;
  id: number;
  isChecked: boolean[]=[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  dataSource = new MatTableDataSource<any>(this.datas);

  displayedColumns: string[] = ['select', 'name','operation', 'mode', 'frequency','lastRunAt','lastStatus','activate','nextrunAt','runStatus'];

  selection = new SelectionModel<any>(true, []);

  constructor(public dialogService: MatDialog,private router:Router) { }


  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    console.log(this.router.url)

  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  // @HostListener('document:click', ['$event'])
  // onClickEvent(event: MouseEvent) {
  //   var target = event.target || event.srcElement;
  //   var id = target['id']
  //   alert(id);

  // }
  rowEvent(record:any,index:any)
  {

var record =record;
var index = index;
      const dialogRef = this.dialogService.open(DiscoveryReportComponent, {
        width: '250px',
        data: {index: index, record: record}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });

  }
//   toggleEvent(i:any)
//   {
//     this.isChecked[i] = !this.isChecked[i];
// alert( this.isChecked);

  // }
editEvent()
{
  alert("editEvent")
}
addDiscovery()
{
  const dialogRef = this.dialogService.open(NewDiscoveryFormComponent, {
    width: '250px',



  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}
}

















