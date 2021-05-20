import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private service:GiphyService, ) { }

  ngOnInit(): void {
    const giphys = this.service.getGiphyByCategory('Batman');

    giphys.subscribe(({data})=>{
      console.log(data);
    });

    const giphysAsync = this.service.getGiphyByCategoryAsync('Batman')
    .then( ({ data }) =>{
      console.log(data);
    });
    
  }

}
