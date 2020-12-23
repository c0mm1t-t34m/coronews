import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data : any;
  constructor(
    public http : HttpClient
  ) { 
    this.getNews();
  }

  ngOnInit() {
  }

  getNews(){
    let url = 'https://newsapi.org/v2/everything?q=coronavirus&from=2020-11-23&sortBy=publishedAt&apiKey=ca5dcc9b391c47cb9cd78e0a68cf0a7d';
    this.http.get(url).subscribe(data => {
      this.data = data;
    })
  }

}
