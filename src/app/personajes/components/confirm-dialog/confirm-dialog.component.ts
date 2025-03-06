import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MgsPersonaje } from '../../../interfaces/mgs-personaje';

@Component({
  selector: 'app-confirm-dialog',
  standalone: false,
  templateUrl: './confirm-dialog.component.html',
  styles: ``
})
export class ConfirmDialogComponent {

  readonly dialogReg = inject(MatDialogRef<ConfirmDialogComponent>);
  readonly data = inject<MgsPersonaje>(MAT_DIALOG_DATA);

  onNoClick(){
    this.dialogReg.close(false);
  }

  onConfirm(){
    this.dialogReg.close(true);
  }

}
