import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { IconsComponent } from 'src/app/pages/icons/icons.component';
import { ModuleComponent } from 'src/app/module/module.component';
import { MatiereComponent } from 'src/app/matiere/matiere.component';
import { ChapitreComponent } from 'src/app/chapitre/chapitre.component';
import { ModuleEleveComponent } from 'src/app/module-eleve/module-eleve.component';
import { MatiereEleveComponent } from 'src/app/matiere-eleve/matiere-eleve.component';
import { ChapitreEleveComponent } from 'src/app/chapitre-eleve/chapitre-eleve.component';
import { AjoutMatiereComponent } from 'src/app/ajout-matiere/ajout-matiere.component';
import { AjoutModuleComponent } from 'src/app/ajout-module/ajout-module.component';
import { AjoutChapitreComponent } from 'src/app/ajout-chapitre/ajout-chapitre.component';
import { ModifModuleComponent } from 'src/app/modif-module/modif-module.component';
import { ModifChapitreComponent } from 'src/app/modif-chapitre/modif-chapitre.component';
import { ModifMatiereComponent } from 'src/app/modif-matiere/modif-matiere.component';
import { AbscenceEnsComponent } from 'src/app/abscence-ens/abscence-ens.component';
import { AbscenceParComponent } from 'src/app/abscence-par/abscence-par.component';
import { JustifAdminComponent } from 'src/app/justif-admin/justif-admin.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },

    { path: 'module',           component: ModuleComponent },
    { path: 'matiere',           component: MatiereComponent },
    { path: 'chapitre',           component: ChapitreComponent },

    { path: 'abscence-ens',           component: AbscenceEnsComponent },
    { path: 'abscence-par',           component: AbscenceParComponent },
    { path: 'justif-admin',           component: JustifAdminComponent },

    { path: 'module-eleve',           component: ModuleEleveComponent },
    { path: 'matiere-eleve',           component: MatiereEleveComponent },
    { path: 'chapitre-eleve',           component: ChapitreEleveComponent },


    { path: 'ajout-module',           component: AjoutModuleComponent },
    { path: 'ajout-matiere',           component: AjoutMatiereComponent },
    { path: 'ajout-chapitre',           component: AjoutChapitreComponent },

    { path: 'modif-module',           component: ModifModuleComponent },
    { path: 'modif-matiere',           component: ModifMatiereComponent },
    { path: 'modif-chapitre',           component: ModifChapitreComponent },


];
