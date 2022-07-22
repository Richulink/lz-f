import { TestBed } from '@angular/core/testing';

import { UsuarioServiceService } from './usuario-service.service';

describe('UsuarioServiceService', () => {
  let service: UsuarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


/*
adUser(user: any): Observable<void> {
  const ref = doc(this.fire, 'notas', user.uid);
 return from(setDoc(ref, user));
}
*/