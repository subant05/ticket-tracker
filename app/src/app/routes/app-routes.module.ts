import { RouterModule, Routes } from "@angular/router"
import { NgModule } from "@angular/core"
import { AppComponent } from '../app.component'
import { LoginComponent } from "../pages/login/login.component"
import { DashboardComponent } from "../pages/dashboard/dashboard.component"
import { LayoutComponent } from "../components/layout/layout.component"
import { AuthGuardService } from "../services/auth/auth-guard.service"
import { RulesComponent } from "../pages/rules/rules/rules.component"

const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        runGuardsAndResolvers: 'always',
    },
    {
        path: "rules",
        component: RulesComponent,
        canActivate: [AuthGuardService],
        runGuardsAndResolvers: 'always',
    },
    {
        path: "login",
        component: LoginComponent
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutes { }