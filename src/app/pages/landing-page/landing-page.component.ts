import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetails } from 'src/app/interfaces/book-details';
import { BooksData } from 'src/app/interfaces/books-data';
import { BookService } from '../../book.service';

interface Search {
  search?: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  searchTerm: string = '';
  latestBooks: BookDetails[] | undefined = [];

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit(): void {
    // Capture the query parameter from the URL
    this.route.queryParams.subscribe((params: Search) => {
      if (params.search) {
        this.searchTerm = params?.search;
        return this.onSearch();
      } else {
        this.getLatestBooks()
      }
    });
  }

  getLatestBooks() {
    this.bookService.getLatestBooks("a").subscribe((booksData: BooksData) => {
      this.latestBooks = booksData.items;
    });
  }

  onSearch() {
    // Update the URL with the search term
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchTerm },
      queryParamsHandling: 'merge',
    });

    if (this.searchTerm === "") {
      this.getLatestBooks();
    } else {
      this.bookService.getLatestBooks(this.searchTerm).subscribe((books: BooksData) => {
        this.latestBooks = books.items;
      });
    }
  }

  clearSearch() {
    // Clearing the search term and remove it from the URL
    this.searchTerm = "";
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: '' },
      queryParamsHandling: 'merge',
    });

    this.getLatestBooks();
  }

  navigateToBookDetails(bookId: string): void {
    this.router.navigate(['/books', bookId]);
  }
}
