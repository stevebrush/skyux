import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

import {
  SkyAutocompleteSearchFunctionFilter
} from '@skyux/lookup';

@Component({
  selector: 'app-lookup-docs',
  templateUrl: './lookup-docs.component.html'
})
export class LookupDocsComponent implements OnInit {

  public friends: any[] = [
    { name: 'Shirley' }
  ];

  public myForm: FormGroup;

  public people: any[] = [
    { name: 'Abed' },
    { name: 'Alex' },
    { name: 'Ben' },
    { name: 'Britta' },
    { name: 'Buzz' },
    { name: 'Craig' },
    { name: 'Elroy' },
    { name: 'Garrett' },
    { name: 'Ian' },
    { name: 'Jeff' },
    { name: 'Leonard' },
    { name: 'Neil' },
    { name: 'Pierce' },
    { name: 'Preston' },
    { name: 'Rachel' },
    { name: 'Shirley' },
    { name: 'Todd' },
    { name: 'Troy' },
    { name: 'Vaughn' },
    { name: 'Vicki' }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.createForm();
  }

  // Only show people in the search results that have not been chosen already.
  public getSearchFilters(): SkyAutocompleteSearchFunctionFilter[] {
    const friends: any[] = this.myForm.controls.friends.value;
    return [
      (searchText: string, item: any): boolean => {
        const found = friends.find(friend => friend.name === item.name);
        return !found;
      }
    ];
  }

  private createForm(): void {
    this.myForm = this.formBuilder.group({
      friends: new FormControl(this.friends)
    });
  }
}