import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { GigDetailsComponent } from './gig-details/gig-details.component';
import { SellerComponent } from './seller/seller.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { BecomeAnAuthorComponent } from './become-an-author/become-an-author.component';
import { CreateGigComponent } from './create-gig/create-gig.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageSalesComponent } from './manage-sales/manage-sales.component';
import { PaymentsComponent } from './payments/payments.component';
import { WithdrawlsComponent } from './withdrawls/withdrawls.component';
import { MyGigsComponent } from './my-gigs/my-gigs.component';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { AccountComponent } from './account/account.component';
import { AccountDeletedComponent } from './account-deleted/account-deleted.component';
import { EmailNotificationsComponent } from './email-notifications/email-notifications.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { PressComponent } from './press/press.component';
import { WhenAuthorSelectedComponent } from './when-author-selected/when-author-selected.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FinanceComponent } from './finance/finance.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'gig-details',
    component: GigDetailsComponent
  },
  {
    path: 'seller',
    component: SellerComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'press',
    component: PressComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'author-selected',
    component: WhenAuthorSelectedComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'become-an-author',
    component: BecomeAnAuthorComponent
  },
  {
    path: 'create-gig',
    component: CreateGigComponent
  },
  {
    path: 'manage-orders',
    component: ManageOrdersComponent
  },
  {
    path: 'manage-sales',
    component: ManageSalesComponent
  },
  {
    path: 'payments',
    component: PaymentsComponent
  },
  {
    path: 'withdrawals',
    component: WithdrawlsComponent
  },
  {
    path: 'my-gigs',
    component: MyGigsComponent
  },
  {
    path: 'inbox',
    component: InboxComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'order-details',
    component: OrderDetailsComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'account-deleted',
    component: AccountDeletedComponent
  },
  
  {
    path: 'admin',
    component: AdminComponent
  },


  {
    path: 'settings',
    component: SettingsComponent,
    // canActivate: [AuthGuard],
    children: [
        {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full',
        },
        {
            path: 'account',
            component: AccountComponent,
            
        },
        {
            path: 'profile',
            component: ProfileComponent,
            
        },
        {
            path: 'password',
            component: PasswordComponent,
            
        },
        {
            path: 'finance',
            component: FinanceComponent,
            
        },
        {
            path: 'email-notifications',
            component: EmailNotificationsComponent,
           
        },
    ]
},

  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    GigDetailsComponent,
    SellerComponent,
    CheckoutComponent,
    HowItWorksComponent,
    BecomeAnAuthorComponent,
    CreateGigComponent,
    DashboardComponent,
    ManageOrdersComponent,
    ManageSalesComponent,
    PaymentsComponent,
    WithdrawlsComponent,
    MyGigsComponent,
    InboxComponent,
    NotificationsComponent,
    OrderDetailsComponent,
    FavoritesComponent,
    ProfileComponent,
    PasswordComponent,
    AccountComponent,
    AccountDeletedComponent,
    EmailNotificationsComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    AboutComponent,
    CareersComponent,
    PressComponent,
    WhenAuthorSelectedComponent,
    FeedbackComponent,
    FinanceComponent,
    SettingsComponent,
    ErrorComponent,
    HeaderComponent,
    SettingsProfileComponent,
    Header1Component,
    Header2Component,
    AdminComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
