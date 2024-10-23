import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatPaginator,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatMenuModule,
    CommonModule,
  ],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'subject', 'status', 'priority', 'branch', 'initiatedBy', 'dueDate', 'assignedTo','createdDate', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { 
    
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Open':
        return '#6A9FEF';
      case 'Closed':
        return '#F9859C';
      case 'In Progress':
        return '#F69E17';
      case 'Success':
        return '#22BBA0';
      case 'Answered':
        return '#FFC107';
      case 'Waiting':
        return '#FF7512';
      default:
        return '#F9859C';
    }
  }

  getStatusTextColor(status: string): string {
    switch (status) {
      case 'Open':
        return '#635AC1';
      case 'Closed':
        return '#D87185';
      case 'In Progress':
        return '#D17029';
      case 'Success':
        return '#358A62';
      case 'Answered':
        return '#FFC107';
      case 'Waiting':
        return '#D15143';
      default:
        return '#D87185';
    }
  }

  getPriorityImage(priority: string): string {
    switch (priority) {
      case 'High':
        return '../../../assets/img/highPriority.svg';
      case 'Low':
        return '../../../assets/img/lowPriority.svg';
      case 'Medium':
        return '../../../assets/img/mediumPriority.svg';
      default:
        return '';
    }
  }
}

export interface PeriodicElement {
  id: string;
  subject: string;
  status: string;
  priority: string;
  branch: string;
  initiatedBy: string;
  dueDate: string;
  assignedTo: string;
  createdDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1432', subject: 'Request for Pateint', status: 'Closed', priority:'Medium',branch:'Suwaidi',initiatedBy:'Syed Shehbaz',dueDate:'2023-10-23',assignedTo:'Lekshmanan',createdDate:'15-Sep-2023 19:40:12'},
  {id: '2765', subject: 'Request for Pateint', status: 'Open', priority:'High',branch:'Suwaidi',initiatedBy:'Syed Shehbaz',dueDate:'2023-10-23',assignedTo:'Lekshmanan',createdDate:'15-Sep-2023 19:40:12'},
  {id: '3324', subject: 'Request for Pateint', status: 'Success', priority:'Low',branch:'Suwaidi',initiatedBy:'Syed Shehbaz',dueDate:'2023-10-23',assignedTo:'Lekshmanan',createdDate:'15-Sep-2023 19:40:12'},
  {id: '54434', subject: 'Request for Pateint', status: 'Answered', priority:'High',branch:'Suwaidi',initiatedBy:'Syed Shehbaz',dueDate:'2023-10-23',assignedTo:'Lekshmanan',createdDate:'15-Sep-2023 19:40:12'},
  {id: '1235', subject: 'Request for Pateint', status: 'In Progress', priority:'Medium',branch:'Suwaidi',initiatedBy:'Syed Shehbaz',dueDate:'2023-10-23',assignedTo:'Lekshmanan',createdDate:'15-Sep-2023 19:40:12'},
  {id: '6756', subject: 'Request for Pateint', status: 'Waiting', priority:'Low',branch:'Suwaidi',initiatedBy:'Syed Shehbaz',dueDate:'2023-10-23',assignedTo:'Lekshmanan',createdDate:'15-Sep-2023 19:40:12'},
  {id: '7098', subject: 'Request for Pateint', status: 'Open', priority:'Low',branch:'Suwaidi',initiatedBy:'Syed Shehbaz',dueDate:'2023-10-23',assignedTo:'Lekshmanan',createdDate:'15-Sep-2023 19:40:12'},
  {id: '8754', subject: 'Request for Pateint', status: 'Closed', priority:'High',branch:'Suwaidi',initiatedBy:'Syed Shehbaz',dueDate:'2023-10-23',assignedTo:'Lekshmanan',createdDate:'15-Sep-2023 19:40:12'},
];
