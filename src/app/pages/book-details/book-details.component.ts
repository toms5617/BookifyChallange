import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../book.service';
import { BookDetails } from 'src/app/interfaces/book-details';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId: string | undefined;
  bookDetails: BookDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
      this.fetchBookDetails();
    });
  }

  fetchBookDetails() {
    if (this.bookId === undefined) { return }
    this.bookService.getBookDetails(this.bookId).subscribe((book: BookDetails) => {
      this.bookDetails = book;
    });
  }
}
