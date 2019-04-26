
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CreatecitizenComponent} from './createcitizen.component';
import {NgForm} from '@angular/forms';

@Injectable()
export class CreatecittizenService {

  constructor(private httpClient: HttpClient) {
  }


  submitCitizen(values): void {

    this.httpClient.post('http://localhost:8080/jersey_quickstart_webapp_war/webapi/myresource/create', values, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

      .subscribe(

        data  => {

          console.log('GET Request is successful ', values);

        },

        error  => {

          console.log('Error', error);

        }

      );


  }
}
