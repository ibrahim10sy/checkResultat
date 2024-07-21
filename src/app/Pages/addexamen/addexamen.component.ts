import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addexamen',
  standalone: true,
  imports: [],
  templateUrl: './addexamen.component.html',
  styleUrl: './addexamen.component.css'
})
export class AddexamenComponent {


  constructor(
    private dialogRef: MatDialogRef<AddexamenComponent>,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
   }


  annuler(): void {
    this.dialogRef.close('annuler');
  }
}
