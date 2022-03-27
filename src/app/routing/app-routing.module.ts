import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from '../../assets/template-elements/dashboarddemo.component';
import {FormLayoutDemoComponent} from '../../assets/template-elements/formlayoutdemo.component';
import {InvalidStateDemoComponent} from '../../assets/template-elements/invalidstatedemo.component';
import {FloatLabelDemoComponent} from '../../assets/template-elements/floatlabeldemo.component';
import {PanelsDemoComponent} from '../../assets/template-elements/panelsdemo.component';
import {OverlaysDemoComponent} from '../../assets/template-elements/overlaysdemo.component';
import {MediaDemoComponent} from '../../assets/template-elements/mediademo.component';
import {MessagesDemoComponent} from '../../assets/template-elements/messagesdemo.component';
import {MiscDemoComponent} from '../../assets/template-elements/miscdemo.component';
import {EmptyDemoComponent} from '../../assets/template-elements/emptydemo.component';
import {ChartsDemoComponent} from '../../assets/template-elements/chartsdemo.component';
import {FileDemoComponent} from '../../assets/template-elements/filedemo.component';
import {DocumentationComponent} from '../../assets/template-elements/documentation.component';
import {AppMainComponent} from '../app.main.component';
import {AppNotfoundComponent} from '../../assets/template-pages/app.notfound.component';
import {AppErrorComponent} from '../../assets/template-pages/app.error.component';
import {AppAccessdeniedComponent} from '../../assets/template-pages/app.accessdenied.component';
import {AppLoginComponent} from '../../assets/template-pages/app.login.component';
import {InputDemoComponent} from '../../assets/template-elements/inputdemo.component';
import {ButtonDemoComponent} from '../../assets/template-elements/buttondemo.component';
import {TableDemoComponent} from '../../assets/template-elements/tabledemo.component';
import {ListDemoComponent} from '../../assets/template-elements/listdemo.component';
import {TreeDemoComponent} from '../../assets/template-elements/treedemo.component';
import {IconsComponent} from '../../assets/template-elements/icons.component';
import {AppCrudComponent} from '../../assets/template-pages/app.crud.component';
import {AppCalendarComponent} from '../../assets/template-pages/app.calendar.component';
import {AppTimelineDemoComponent} from '../../assets/template-pages/app.timelinedemo.component';
import {AppInvoiceComponent} from '../../assets/template-pages/app.invoice.component';
import {AppHelpComponent} from '../../assets/template-pages/app.help.component';
import { BlocksComponent } from '../../assets/template-blocks/blocks/blocks.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [


                    {path: 'dashboard', component: DashboardComponent},







                    ///////////////////////////////////////////
                    // Template Components
                    ///////////////////////////////////////////
                    {path: 'template-dashboard', component: DashboardDemoComponent},
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/menu', loadChildren: () => import('../components/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/invoice', component: AppInvoiceComponent},
                    {path: 'pages/help', component: AppHelpComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    {path: 'blocks', component: BlocksComponent}
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
