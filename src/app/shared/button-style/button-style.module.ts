import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonStyleComponent } from './button-style.component';


@NgModule({
  declarations: [ButtonStyleComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonStyleComponent],
})
export class ButtonStyleModule {}