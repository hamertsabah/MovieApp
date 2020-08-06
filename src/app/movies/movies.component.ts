import { Component } from '@angular/core';

@Component ({
     selector: 'movies', //Burayı diez şeklinde tanımlarsak başka yerden div id şeklinde çağırırız. 'movies' şeklinde tanımlarsak <movies> şeklinde çağırırız. '.movies' dersek de div class movies şeklinde çağırmamız gerekmektedir.
     //template: '<h2>Movies </h2>' //Burada şunu diyoruz ki; kullanıcı movies isimli etiketi çağırdığı zaman içerik olarak ne çıksın.. yani karşısına bir h2 etiketi gelecek demiş oluyoruz. 
     templateUrl: 'movies.component.html' //Bunu diyerek de buradaki içeriği html sayfasına alabiliriz.(Tabiki oluşturduktan sonra...)
}) //Burada yeni componentimizi oluşturmuş olabiliriz ancak bundan app.module.ts'in haberi olması lazım gerekiyor.
//Gidip orada @NgModule declaration altına AppComponent ekli olduğu gibi MoviesComponent'i de eklememiz gerekiyor. 
export class MoviesComponent {

}