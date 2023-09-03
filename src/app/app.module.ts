import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent }, // Default route to LandingPageComponent
  { path: 'books', component: BooksPageComponent },
  { path: 'books/:bookId', component: BookDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BooksPageComponent,
    BookDetailsComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
