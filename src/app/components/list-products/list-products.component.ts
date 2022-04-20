import { Component, OnInit } from '@angular/core';
import { BookService } from './product-item/product-list.component.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  livros: any;
  bookservice : BookService;
  constructor(bookService : BookService) {
    this.bookservice = bookService;
   }

  ngOnInit(): void {
    this.livros = this.bookservice.getBook().subscribe((data =>{
      this.livros = data;
      console.log(this.livros);
    }))
  }

}
