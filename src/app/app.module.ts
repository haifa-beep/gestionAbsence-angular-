import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ModuleComponent } from './module/module.component';
import { MatiereComponent } from './matiere/matiere.component';
import { ChapitreComponent } from './chapitre/chapitre.component';
import { ModuleEleveComponent } from './module-eleve/module-eleve.component';
import { MatiereEleveComponent } from './matiere-eleve/matiere-eleve.component';
import { ChapitreEleveComponent } from './chapitre-eleve/chapitre-eleve.component';
import { AjoutModuleComponent } from './ajout-module/ajout-module.component';
import { AjoutMatiereComponent } from './ajout-matiere/ajout-matiere.component';
import { AjoutChapitreComponent } from './ajout-chapitre/ajout-chapitre.component';
import { ModifModuleComponent } from './modif-module/modif-module.component';
import { ModifMatiereComponent } from './modif-matiere/modif-matiere.component';
import { ModifChapitreComponent } from './modif-chapitre/modif-chapitre.component';
import { AbscenceEnsComponent } from './abscence-ens/abscence-ens.component';
import { AjoutAbscenceComponent } from './ajout-abscence/ajout-abscence.component';
import { ModifAbscenceComponent } from './modif-abscence/modif-abscence.component';
import { DetailAbscenceComponent } from './detail-abscence/detail-abscence.component';
import { AbscenceParComponent } from './abscence-par/abscence-par.component';
import { AjoutJustifComponent } from './ajout-justif/ajout-justif.component';
import { ModifJustifComponent } from './modif-justif/modif-justif.component';
import { DetailJustifComponent } from './detail-justif/detail-justif.component';
import { JustifAdminComponent } from './justif-admin/justif-admin.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ModuleComponent,
    MatiereComponent,
    ChapitreComponent,
    ModuleEleveComponent,
    MatiereEleveComponent,
    ChapitreEleveComponent,
    AjoutModuleComponent,
    AjoutMatiereComponent,
    AjoutChapitreComponent,
    ModifModuleComponent,
    ModifMatiereComponent,
    ModifChapitreComponent,
    AbscenceEnsComponent,
    AjoutAbscenceComponent,
    ModifAbscenceComponent,
    DetailAbscenceComponent,
    AbscenceParComponent,
    AjoutJustifComponent,
    ModifJustifComponent,
    DetailJustifComponent,
    JustifAdminComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
