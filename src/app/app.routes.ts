import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginUserComponent } from './login-user/login-user.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: "full",
    },
    {
        path: '',
        component: LoginUserComponent,
        pathMatch: "full",
    },
    // {
    //     path: 'sign-up',
    //     component: SignUpComponent,
    //     pathMatch: "full",
    // },
    {
        path: '**',
        component: NotFoundComponent,
        pathMatch: "full",
    },
];
