import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://192.168.0.20:4000/";
    public ApiUrl: string = "api/v1";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}