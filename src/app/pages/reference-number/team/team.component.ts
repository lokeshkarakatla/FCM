import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  // Search filters
  availableSearch: string = '';
  assignedSearch: string = '';

  // Available members for the left box (from Image 2)
  availableMembers: string[] = [
    'Alex Johnson',
    'Samantha Carter',
    'Michael Chen',
    'Sarah Williams',
    'David Rodriguez',
    'Emily Davis',
    'James Wilson',
    'Olivia Martinez',
    'William Taylor',
    'Sophia Anderson',
    'Daniel Thomas'
  ];

  // Assigned members for the right box (from Image 2)
  assignedMembers: string[] = [
    'Liam White',
    'Emma Harris',
    'Noah Martin',
    'Ava Jackson',
    'Ethan Moore'
  ];

  // Track active selections
  selectedAvailable: string[] = [];
  selectedAssigned: string[] = [];

  savedSuccess: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Filtered members based on search
  get filteredAvailable(): string[] {
    if (!this.availableSearch.trim()) return this.availableMembers;
    const term = this.availableSearch.toLowerCase();
    return this.availableMembers.filter(m => m.toLowerCase().includes(term));
  }

  get filteredAssigned(): string[] {
    if (!this.assignedSearch.trim()) return this.assignedMembers;
    const term = this.assignedSearch.toLowerCase();
    return this.assignedMembers.filter(m => m.toLowerCase().includes(term));
  }

  // Extracts initials (e.g., "Alex Johnson" -> "AJ")
  getInitials(name: string): string {
    if (!name) return '';
    const nameParts = name.trim().split(' ');
    if (nameParts.length >= 2) {
      return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  // Toggle selection for list item
  toggleSelection(member: string, list: string[]): void {
    const index = list.indexOf(member);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(member);
    }
  }

  isAvailableSelected(member: string): boolean {
    return this.selectedAvailable.includes(member);
  }

  isAssignedSelected(member: string): boolean {
    return this.selectedAssigned.includes(member);
  }

  // Move items from Left (Available) to Right (Assigned)
  addMembers(): void {
    if (this.selectedAvailable.length > 0) {
      this.assignedMembers.push(...this.selectedAvailable);
      this.availableMembers = this.availableMembers.filter(
        m => !this.selectedAvailable.includes(m)
      );
      this.selectedAvailable = [];
    }
  }

  // Move items from Right (Assigned) to Left (Available)
  removeMembers(): void {
    if (this.selectedAssigned.length > 0) {
      this.availableMembers.push(...this.selectedAssigned);
      this.assignedMembers = this.assignedMembers.filter(
        m => !this.selectedAssigned.includes(m)
      );
      this.selectedAssigned = [];
    }
  }

  // Select all helpers
  toggleSelectAllAvailable(): void {
    const visible = this.filteredAvailable;
    const allSelected = visible.length > 0 && visible.every(m => this.selectedAvailable.includes(m));
    if (allSelected) {
      this.selectedAvailable = this.selectedAvailable.filter(m => !visible.includes(m));
    } else {
      visible.forEach(m => {
        if (!this.selectedAvailable.includes(m)) {
          this.selectedAvailable.push(m);
        }
      });
    }
  }

  toggleSelectAllAssigned(): void {
    const visible = this.filteredAssigned;
    const allSelected = visible.length > 0 && visible.every(m => this.selectedAssigned.includes(m));
    if (allSelected) {
      this.selectedAssigned = this.selectedAssigned.filter(m => !visible.includes(m));
    } else {
      visible.forEach(m => {
        if (!this.selectedAssigned.includes(m)) {
          this.selectedAssigned.push(m);
        }
      });
    }
  }

  save(): void {
    this.savedSuccess = true;
    setTimeout(() => {
      this.savedSuccess = false;
    }, 2500);
  }
}
