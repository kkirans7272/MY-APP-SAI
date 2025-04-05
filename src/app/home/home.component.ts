import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReportService } from '../services/report-service.service'; // ✅ Add this

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  reportStatus: string = 'Not started';
  reportData: string | null = null;

  constructor(private reportService: ReportService) {}

  generateReport() {
    this.reportStatus = 'Generating report...';

    this.reportService.generateReport().subscribe(jobId => {
      this.reportService.pollReportStatus((status, data) => {
        this.reportStatus = status;
        if (status === 'COMPLETED') {
          this.reportData = data || 'No data available';
        } else if (status === 'FAILED') {
          this.reportStatus = 'Failed to generate report';
        }
      });
    });
  }
}
