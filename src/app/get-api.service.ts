import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  )
   { }

   apiCall()
   {
    return this.http.get('https://api.spacexdata.com/v5/launches/latest');
   }

   
}
