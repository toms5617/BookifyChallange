// book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

    constructor(private http: HttpClient) { }

    // Fetch the latest 3 books for the landing page
    getLatestBooks(q: string): Observable<any> {
        const url = `${this.apiUrl}?q=${q}&maxResults=3&orderBy=newest&printType=books&langRestrict=en`; // Get the newest books only
        return this.http.get<any[]>(url);
    }

    // Fetch a list of 10 books for the books page
    getBooks(): Observable<any> {
        const url = `${this.apiUrl}?q=""&printType=books`;
        return this.http.get<any[]>(url);
    }

    // Fetch details of a specific book by its ID
    getBookDetails(bookId: string): Observable<any> {
        const url = `${this.apiUrl}/${bookId}`;
        return this.http.get<any>(url);
    }
}
