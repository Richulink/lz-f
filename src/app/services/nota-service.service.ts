import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, Firestore } from 'firebase/firestore';
import { from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Nota } from '../interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaServiceService {

  constructor(private fire:Firestore) {
   }


 addNota(nota: Nota) {
  const notaRef = collection(this.fire, 'nota');
  return addDoc(notaRef, nota);
}

getNota(): Observable<Nota[]> {
  const notaRef = collection(this.fire, 'nota');
  return collectionData(notaRef, { idField: 'idNota' }) as Observable<Nota[]>;
}

deleteNota(nota: Nota) {
  const notaDocRef = doc(this.fire, `nota/${nota.idNota}`);
  return deleteDoc(notaDocRef);
}
}
