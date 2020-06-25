import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateUserName } from './user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent { 
    name$: Observable<string>;

constructor(private store: Store<{ name: string }>) {
    this.name$ = store.pipe(select('name'));
  }
  updateName(){
    this.store.dispatch(updateUserName({name: "My Name is Kate Sky"}));
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/