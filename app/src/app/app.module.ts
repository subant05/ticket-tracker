// Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from './routes/app-routes.module'
import { GraphQLModule } from './modules/graphql.module';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//Components
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';

// Enviornment Variables
import { environment } from '../environments/environment';

// APOLLO
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { ApolloClientOptions, ApolloLink, InMemoryCache, split } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ApolloModule, APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

// Google OAuth
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { AuthGuardService } from './services/auth/auth-guard.service'

// Material
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import { TopNavigationBarComponent } from './components/navigation/top-navigation-bar/top-navigation-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RulesComponent } from './pages/rules/rules/rules.component';
import { RuleDetailsComponent } from './components/rule-details/rule-details.component';
import { CreateRuleModalComponent } from './components/create-rule-modal/create-rule-modal.component';
import {MatSelectModule} from '@angular/material/select';
import { EditRulesComponent } from './components/edit-rules/edit-rules/edit-rules.component';
import { DeleteRulesComponent } from './components/delete-rules/delete-rules/delete-rules.component';
import { TicketsComponent } from './pages/dashboard/tabs/tickets/tickets.component';
import { BagMonitoringComponent } from './pages/dashboard/tabs/bag-monitoring/bag-monitoring.component';

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
	// React only on graphql errors
	if (graphQLErrors && graphQLErrors.length > 0) {
		if (
			(graphQLErrors[0] as any)?.statusCode >= 400 && 
			(graphQLErrors[0] as any)?.statusCode < 500
		) {
			// handle client side error
			console.error(`[Client side error]: ${graphQLErrors[0].message}`);
		} else {
			// handle server side error
			console.error(`[Server side error]: ${graphQLErrors[0].message}`);
		}
	}
	if (networkError) {
    // handle network error
    console.error(`[Network error]: ${networkError.message}`);
	}
});

const basicContext = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			Accept: 'charset=utf-8',
			authorization: `Bearer random token`,
			'Content-Type': 'application/json',
		},
	};
});

function createDefaultApollo(httpLink: HttpLink): ApolloClientOptions<any> {
	const cache = new InMemoryCache({});

	// create http 
	const http = httpLink.create({
		uri: `${location.protocol}//${location.host}${environment.serviceEndpoint}`,
	});

	return {
		connectToDevTools: !environment.production,
		assumeImmutableResults: true,
		cache,
		link: ApolloLink.from([basicContext, errorLink, http]),
		defaultOptions: {
			watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
			},
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
		},
	};
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LayoutComponent,
    TicketDetailsComponent,
    TopNavigationBarComponent,
    RulesComponent,
    RuleDetailsComponent,
    CreateRuleModalComponent,
    EditRulesComponent,
    DeleteRulesComponent,
    TicketsComponent,
    BagMonitoringComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ApolloModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    // Material
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTableModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule

    // 
  ],
  exports:[
    // Material
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTableModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule
    // 
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.googleAuthClientId
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
    {
			provide: APOLLO_OPTIONS,
			useFactory: createDefaultApollo,
			deps: [HttpLink],
		},
    // HTTP INTERCEPTOR
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
    , AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
