import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsComponent } from './components/stats/stats.component';
import { RevenueChartComponent } from './components/revenue-chart/revenue-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GenderChartComponent } from './components/gender-chart/gender-chart.component';

@NgModule({
  declarations: [DashboardComponent, StatsComponent, RevenueChartComponent, GenderChartComponent],
  imports: [CommonModule, DashboardRoutingModule, NgApexchartsModule],
})
export class DashboardModule {}
