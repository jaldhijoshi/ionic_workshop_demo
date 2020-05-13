import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileDAO{

    constructor(private httpClient: HttpClient){}

    public loadData(url, onComplete, onError){
        this.httpClient.get(url).subscribe(
            data =>  onComplete(data),
            error => onError(error)
        );
    }

}