import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './header/components/navbar/navbar.component';
import { FooterComponent } from './footer/components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
