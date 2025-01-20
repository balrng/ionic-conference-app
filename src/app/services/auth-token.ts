
import { DecodedToken } from '../models/generic/decoded-token';
import { jwtDecode, JwtDecodeOptions } from 'jwt-decode';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class JwtTokenHelper {

    private  _token: DecodedToken | null = null;
    //private  _tokenService: TokenService;

    constructor(private tokenService: TokenService) {}
    private  formatDateTime(date: Date): string {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ay 0-indexlidir, bu yüzden 1 ekliyoruz
        const day = date.getDate().toString().padStart(2, '0');
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');

        return `${year}/${month}/${day} ${hour}:${minute}`;


    }

    public  setToken(token: string) {
        const jsonToken = JSON.stringify(token);
        this._token = jwtDecode(token) as DecodedToken;
    }

    public  getToken(): DecodedToken | null {
        
        if(this._token == null){
            
            const token = this.tokenService.getToken();
            this._token = jwtDecode(token) as DecodedToken;
        }
        return this._token;
    }

    public  getExpiryDate(): string {
        if (!this._token) {
            return '';
        }
        const expDate = new Date(this._token.exp * 1000);
        return this.formatDateTime(expDate);
    }

    public  isTokenExpired(): boolean {
        if (!this._token) {
            return true;
        }
        const now = new Date();
        const expDate = new Date(this._token.exp * 1000);
        return now > expDate;
    }
}