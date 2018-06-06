import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  inputs: ['keyPublic', 'keyPrivate']
})
export class TweetComponent implements OnInit {
  title = 'Listado de Tweets!';  
  searchquery = '';
  tweetsdata;
 

  keyPublic:string;
  keyPrivate:string;

  constructor(private http: Http){}
  pedirAutorizacion() {
    var headers = new Headers();
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
    });
  }
  
 
  ngOnInit() {
    this.pedirAutorizacion()
  }

}
