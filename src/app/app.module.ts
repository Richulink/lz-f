import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedRespaldoComponent } from './components/feed-respaldo/feed-respaldo.component';



const firebaseConfig = {
  apiKey: "AIzaSyBomt2PVFLTUMdoVSZ3uxBAGh6gJDi78xw",
  authDomain: "livezenda-7bc02.firebaseapp.com",
  projectId: "livezenda-7bc02",
  storageBucket: "livezenda-7bc02.appspot.com",
  messagingSenderId: "621371470310",
  appId: "1:621371470310:web:c834d2729902e64f3da627",
  measurementId: "G-BFQ4XQGNDP"
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    InicioComponent, 
    RegistroComponent, 
    FeedComponent, FeedRespaldoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
