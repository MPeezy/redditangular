import { Component } from '@angular/core';
import { Convert, ChildData} from './Model';
import { ModelService } from './model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ModelService]
})

export class AppComponent {
  title = 'shop';
  model?: ChildData;
  constructor(private redditAPI: ModelService) { }

  GetPost() {
    let id: string = (<HTMLInputElement>document.getElementById("Id")).value;
    this.redditAPI.GetPost(id).subscribe(
      (result: any) => {
        console.log(result);
        //Take a JS 
        let json: string = Convert.childdataToJson(result);
        let model: ChildData = Convert.toChildData(json);
        console.log(model);
        this.model = model;
      }
    );
  }
}

