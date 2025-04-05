import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  generateReport(): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}/test`, {});
  }

  getReportStatus(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getUserName/1`);
  }

  pollReportStatus(callback: (status: string, data?: string) => void) {
    interval(5000)
      .pipe(
        switchMap(() => this.getReportStatus()),
        takeWhile(response => response.status === 'IN_PROGRESS', true)
      )
      .subscribe(response => {
        callback(response.status, response.result);
      });
  }
}
