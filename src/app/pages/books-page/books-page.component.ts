import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { Router } from '@angular/router';
import { BookDetails } from 'src/app/interfaces/book-details';
import { BooksData } from 'src/app/interfaces/books-data'

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {
  books: BookDetails[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: BooksData) => {
      this.books = data.items;
    });
  }

  navigateToDetailsPage(bookId: string) {
    this.router.navigate(['/books', bookId]);
  }
}
