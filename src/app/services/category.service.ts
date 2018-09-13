import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Cat } from '../models/Cat';

@Injectable()
export class CategoryService {
  private CatCollection: AngularFirestoreCollection<Cat>;
  private catList: Observable<Cat[]>;

  constructor(private afs: AngularFirestore) {
     // Collection of categories
     this.CatCollection = this.afs.collection('category', ref => ref.orderBy('cat_name', 'asc') );
  }

   // Get list of categories
   getCategories(): Observable<Cat[]> {
    this.catList = this.CatCollection.valueChanges();
    return this.catList;
   }
}
