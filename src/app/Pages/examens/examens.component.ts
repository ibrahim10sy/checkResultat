import { Component, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddexamenComponent } from '../addexamen/addexamen.component';
import { MatPaginator, } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-examens',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconButton,
    MatIconModule
  ],
  templateUrl: './examens.component.html',
  styleUrl: './examens.component.css'
})
export class ExamensComponent {

  readonly dialog = inject(MatDialog);

  displayedColumns: string[] = ['Type d\'examen', 'Description', 'Année','Action'];  
  dataSource = new MatTableDataSource<any>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

  openDialog() {
    const dialogRef = this.dialog.open(AddexamenComponent,{
      width: '400px',
      height: '400px',
      panelClass: 'warning-dialog',
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  constructor(){

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
