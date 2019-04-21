import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableModule } from './data-table';

import { DataTableDemo1 } from './demo1/data-table-demo1';
import { DataTableDemo2 } from './demo2/data-table-demo2';
import { DataTableDemo3 } from './demo3/data-table-demo3';
// import { DataTableDemo1Remote } from './demo1/data-table-demo1-remote';
import { RemoteService } from './demo1/data-table-demo1-remote-service';

@NgModule({
  declarations: [AppComponent, DataTableDemo1, DataTableDemo2, DataTableDemo3],
  imports: [BrowserModule, FormsModule, DataTableModule],
  providers: [RemoteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
