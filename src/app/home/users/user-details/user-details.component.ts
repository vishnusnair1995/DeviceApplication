import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  datas:Array<object> =  [
    {id :100,userId: 'admin', operation: "", fullName: 'Administrator', email: 'abc@gmail.com',editOperation: "",deleteOperation:""},
    {id :101,userId: 'demo', operation: "", fullName: 'Demo', email: 'abc@gmail.com',editOperation: "",deleteOperation:""},
    {id:102,userId: 'test', operation: "", fullName: 'Demo', email: 'abc@gmail.com',editOperation: "",deleteOperation:""},

  ];
  index: number;
  id: number;


  dataSource = new MatTableDataSource<any>(this.datas);

  displayedColumns = ['id','userId', 'operation', 'fullName', 'email','editOperation','deleteOperation'];

  exampleDatabase: DataService | null;

  constructor(private router:Router, public dialogService: MatDialog, private dataService: DataService) { }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngOnInit() {
    console.log("userrrrrrrr"+this.router.url)

  }
  addUser()
  {
this.router.navigateByUrl('/home/users/add-users');
  }
  startEdit(i: number, id: number) {
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialogService.open(EditdialogComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id == this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table

      }
    });
  }
  startEditing(index: any)
  {
    this.index = index;
    const dialogRef = this.dialogService.open(EditdialogComponent, {
      width: '250px',
      data: {index: this.index, dataSource: this.dataSource}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataSource.filteredData[this.index].userId = result;
    });
  }
  }











