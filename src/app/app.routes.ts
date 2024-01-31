import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: "full",
    },
    {
        path: 'sign-in',
        component: SignInComponent,
        pathMatch: "full",
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        pathMatch: "full",
    },
    {
        path: '**',
        component: NotFoundComponent,
        pathMatch: "full",
    },
];
