import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Inyectar los componentes de formularios
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2'; //Inyectar los componentes de angularfire2
//======================Importar Servicios====================================
import { AuthService} from "./services/auth.service";
import { TiendaService } from './services/tienda.service';
import { CarritoService } from './services/carrito.service'
//======================Importar Componentes====================================
import { AppComponent } from './app.component';
import { TiendaRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DetalleProductoComponent } from './components/tienda/detalle-producto/detalle-producto.component';
//==============================================================================


export const firebaseConfig = {
  apiKey: "AIzaSyA_98aYqdARxgV5J65I2RIeITNaxnxAZjI",
    authDomain: "tienda-96fcc.firebaseapp.com",
    databaseURL: "https://tienda-96fcc.firebaseio.com",
    projectId: "tienda-96fcc",
    storageBucket: "tienda-96fcc.appspot.com",
    messagingSenderId: "126238088131",
    appId: "1:126238088131:web:3044fe70ddf1cb5cbd3b76"
};

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    LoginComponent,
    TiendaComponent,
    CarritoComponent,
    DetalleProductoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule, //Inyectar el módulo ReactiveForms
    TiendaRoutingModule //Agregar el modulo TareasRouting para el manejo de las URL
  ],
  providers: [AuthService, TiendaService, CarritoService], //Inyectar los servicios TiendaDatabaseService y DatabaseService dentro de la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
