import { Component, OnInit } from '@angular/core';

@Component({ //Buraki işlemimiz CLI kullanarak bu işlemi gerçekleştirmekti. Bunu kullanınca elle yazmamız gereken bazı bağlantılar kendiliğinden gelmiş oldu. Bu komut ise; 'ng generate component movie' şeklindeydi.
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
