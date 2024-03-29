import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  CollectionReference,
  Query,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FbBaseService<T extends { id?: string }> {
  collection: any;

  constructor(private afs: AngularFirestore) {}

  get(collectionName: string): Observable<T[]> {
    return this.afs
      .collection(collectionName, (ref) => {
        let query: CollectionReference | Query = ref;
        query = query.orderBy('identifier', 'asc').limit(10);
        return query;
      })
      .valueChanges() as Observable<T[]>;
  }

  async add(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  async addAll(collectionName: string, data: T[], id?: string): Promise<void> {
    await this.afs.collection(collectionName).get().toPromise().then(querySnapshot => {
      if (querySnapshot.empty) {
        console.log('No documents found');
        data.forEach((element) => {
          const uid = id ? id : this.afs.createId();
          element.id = uid;
          this.afs.collection(collectionName).doc(uid).set(element);
        });
      }
    });
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

  update(collectionName: string, id: string, data: T): Promise<void> {
    return this.afs
      .collection(collectionName)
      .doc(id)
      .update(data)
      .then(
        (result) => {
          console.log(result);
        },
        (err) => {
          console.log(err);
        }
      )
      .finally(() => {
        console.log('finally');
      });
  }

  delete(collectionName: string, id: string): Promise<void> {
    return this.afs.collection(collectionName).doc(id).delete();
  }
}
