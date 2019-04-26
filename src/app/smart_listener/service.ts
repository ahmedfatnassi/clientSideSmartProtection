
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Service {

  constructor(private httpClient: HttpClient) {}


   getData(): void {

    this.httpClient.get('http://localhost:8080/jersey_quickstart_webapp_war/webapi/myresource')

      .subscribe(

        data  => {

          console.log('GET Request is successful ', data);

        },

        error  => {

          console.log('Error', error);

        }

      );


  }
}
