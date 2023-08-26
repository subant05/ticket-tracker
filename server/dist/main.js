"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'app';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  consts: [[1, "content"], [1, "content__main"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/app-routes.module */ 1364);
/* harmony import */ var _modules_graphql_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/graphql.module */ 2504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.interceptor */ 8000);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @apollo/client/core */ 7156);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @apollo/client/core */ 4000);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @apollo/client/link/context */ 4765);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @apollo/client/link/error */ 609);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! apollo-angular */ 26);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! apollo-angular/http */ 3334);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ 9404);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/layout.component */ 9520);
/* harmony import */ var _components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ticket-details/ticket-details.component */ 1615);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _components_navigation_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navigation/top-navigation-bar/top-navigation-bar.component */ 4948);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _pages_rules_rules_rules_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/rules/rules/rules.component */ 1208);
/* harmony import */ var _components_rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/rule-details/rule-details.component */ 9139);
/* harmony import */ var _components_create_rule_modal_create_rule_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/create-rule-modal/create-rule-modal.component */ 1918);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _components_edit_rules_edit_rules_edit_rules_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/edit-rules/edit-rules/edit-rules.component */ 9486);
/* harmony import */ var _components_delete_rules_delete_rules_delete_rules_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/delete-rules/delete-rules/delete-rules.component */ 4470);
/* harmony import */ var _pages_dashboard_tabs_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/dashboard/tabs/tickets/tickets.component */ 9397);
/* harmony import */ var _pages_dashboard_tabs_bag_monitoring_bag_monitoring_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/dashboard/tabs/bag-monitoring/bag-monitoring.component */ 6264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2560);








//Components



// Enviornment Variables






// Google OAuth



// Material
































const errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_18__.onError)(({
  graphQLErrors,
  networkError,
  response
}) => {
  // React only on graphql errors
  if (graphQLErrors && graphQLErrors.length > 0) {
    if (graphQLErrors[0]?.statusCode >= 400 && graphQLErrors[0]?.statusCode < 500) {
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
const basicContext = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_19__.setContext)((_, {
  headers
}) => {
  return {
    headers: {
      ...headers,
      Accept: 'charset=utf-8',
      authorization: `Bearer random token`,
      'Content-Type': 'application/json'
    }
  };
});
function createDefaultApollo(httpLink) {
  const cache = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_20__.InMemoryCache({});
  // create http 
  const http = httpLink.create({
    uri: `${location.protocol}//${location.host}${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.serviceEndpoint}`
  });
  return {
    connectToDevTools: !_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.production,
    assumeImmutableResults: true,
    cache,
    link: _apollo_client_core__WEBPACK_IMPORTED_MODULE_21__.ApolloLink.from([basicContext, errorLink, http]),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      }
    }
  };
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [{
        id: _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_23__.GoogleLoginProvider.PROVIDER_ID,
        provider: new _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_23__.GoogleLoginProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.googleAuthClientId)
      }]
    }
  }, {
    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_24__.APOLLO_OPTIONS,
    useFactory: createDefaultApollo,
    deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_25__.HttpLink]
  },
  // HTTP INTERCEPTOR
  {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HTTP_INTERCEPTORS,
    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor,
    multi: true
  }, _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__.AuthGuardService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes, apollo_angular__WEBPACK_IMPORTED_MODULE_24__.ApolloModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule, _modules_graphql_module__WEBPACK_IMPORTED_MODULE_1__.GraphQLModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_23__.SocialLoginModule,
  // Material
  _angular_material_list__WEBPACK_IMPORTED_MODULE_30__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__.MatGridListModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinnerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_41__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__.MatTabsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__.MatDialogModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_46__.MatChipsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_48__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_49__.MatSelectModule
  // 
  ,
  // Material
  _angular_material_list__WEBPACK_IMPORTED_MODULE_30__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__.MatGridListModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinnerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_41__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_48__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_49__.MatSelectModule
  // 
  ]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__.LayoutComponent, _components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_9__.TicketDetailsComponent, _components_navigation_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_10__.TopNavigationBarComponent, _pages_rules_rules_rules_component__WEBPACK_IMPORTED_MODULE_11__.RulesComponent, _components_rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_12__.RuleDetailsComponent, _components_create_rule_modal_create_rule_modal_component__WEBPACK_IMPORTED_MODULE_13__.CreateRuleModalComponent, _components_edit_rules_edit_rules_edit_rules_component__WEBPACK_IMPORTED_MODULE_14__.EditRulesComponent, _components_delete_rules_delete_rules_delete_rules_component__WEBPACK_IMPORTED_MODULE_15__.DeleteRulesComponent, _pages_dashboard_tabs_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_16__.TicketsComponent, _pages_dashboard_tabs_bag_monitoring_bag_monitoring_component__WEBPACK_IMPORTED_MODULE_17__.BagMonitoringComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes, apollo_angular__WEBPACK_IMPORTED_MODULE_24__.ApolloModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule, _modules_graphql_module__WEBPACK_IMPORTED_MODULE_1__.GraphQLModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_23__.SocialLoginModule,
    // Material
    _angular_material_list__WEBPACK_IMPORTED_MODULE_30__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__.MatGridListModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinnerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_41__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__.MatTabsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__.MatDialogModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_46__.MatChipsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_48__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_49__.MatSelectModule
    // 
    ],
    exports: [
    // Material
    _angular_material_list__WEBPACK_IMPORTED_MODULE_30__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__.MatGridListModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinnerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_41__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_48__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_49__.MatSelectModule
    // 
    ]
  });
})();

/***/ }),

/***/ 8000:
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);



class AuthInterceptor {
  intercept(req, next) {
    const copiedReq = req.clone({
      headers: req.headers.set("Authorization", src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.requestToken)
    });
    return next.handle(copiedReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      let errorMsg = "";
      if (error.error instanceof ErrorEvent) {
        console.log("This is client side error");
        errorMsg = `Error: ${error.error.message}`;
      } else {
        console.log("This is server side error");
        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
      }
      console.log(errorMsg);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }));
  }
}

/***/ }),

/***/ 1918:
/*!*****************************************************************************!*\
  !*** ./src/app/components/create-rule-modal/create-rule-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateRuleModalComponent": () => (/* binding */ CreateRuleModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_rules_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/rules.service */ 7335);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 9121);















function CreateRuleModalComponent_mat_chip_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " All fields are required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "warn");
  }
}
function CreateRuleModalComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field")(5, "mat-select", 18)(6, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, ">=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "<=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "||");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "<=||>=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, ">=||<=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "<=&&>=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, ">=&&<=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "!=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "!==");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateRuleModalComponent_div_29_Template_button_click_36_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.deleteCondition(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ruleCond_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ruleCond_r2.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ruleCond_r2.operator);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ruleCond_r2.value);
  }
}
class CreateRuleModalComponent {
  constructor(ruleService, _snackBar, dialogRef) {
    this.ruleService = ruleService;
    this._snackBar = _snackBar;
    this.dialogRef = dialogRef;
    this.rule = {
      streamName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
      streamType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("numeric set"),
      conditions: [{
        condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
        operator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
        value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("")
      }]
    };
    this.formError = false;
  }
  isFormValid() {
    this.formError = false;
    const isValid = [this.rule.streamName.invalid, this.rule.streamType.invalid];
    this.rule.conditions.map(item => {
      isValid.push(item.condition.invalid);
      isValid.push(item.operator.invalid);
      isValid.push(item.value.invalid);
    });
    const result = isValid.indexOf(true) === -1;
    if (!result || !this.rule.conditions.length) this.formError = true;
    return result && this.rule.conditions.length;
  }
  addNewCondition() {
    this.rule.conditions.push({
      condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
      operator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
      value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("")
    });
  }
  resetFields() {
    this.rule = {
      streamName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
      streamType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("numeric set"),
      conditions: [{
        condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
        operator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
        value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("")
      }]
    };
    this.dialogRef.close();
  }
  saveRule() {
    if (!this.isFormValid()) {
      return;
    }
    const rule = {
      streamName: this.rule.streamName.value,
      streamType: this.rule.streamType.value,
      rule_conditions: this.rule.conditions.map(item => {
        return {
          condition: item.condition.value,
          operator: item.operator.value,
          value: item.value.value
        };
      }),
      rule_formatting: [],
      associated_streams: []
    };
    this.creatRuleSubscription = this.ruleService.createRule(rule).subscribe(data => {
      this.resetFields();
      this._snackBar.open("Rule saved!", "Dismiss");
    });
  }
  deleteCondition(index) {
    this.rule.conditions.splice(index, 1);
  }
  ngOnDestroy() {
    this.creatRuleSubscription?.unsubscribe();
  }
}
CreateRuleModalComponent.ɵfac = function CreateRuleModalComponent_Factory(t) {
  return new (t || CreateRuleModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_rules_service__WEBPACK_IMPORTED_MODULE_0__.RulesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
};
CreateRuleModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CreateRuleModalComponent,
  selectors: [["app-create-rule-modal"]],
  decls: 38,
  vars: 5,
  consts: [[1, "wrapper"], ["selected", "", 3, "color", 4, "ngIf"], ["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [3, "submit"], [1, "content"], ["matInput", "", "required", "", 3, "formControl"], ["required", "", 3, "formControl"], ["value", ""], ["value", "numeric set"], ["value", "json"], ["class", "conditions", 4, "ngFor", "ngForOf"], [1, "filter-add-rule"], ["mat-fab", "", "matInput", "", "color", "primary", "aria-label", "add rule", 1, "filter-add_rule", 3, "click"], [1, "footer"], ["mat-raised-button", "", "matInput", "", "type", "submit", "color", "primary", "aria-label", "submit rule", 1, "filter-submitrule"], ["selected", "", 3, "color"], [1, "conditions"], ["matInput", "", "placeholder", "condition", "required", "", 3, "formControl"], ["placeholder", "operator", "required", "", 3, "formControl"], ["value", "="], ["value", ">"], ["value", "<"], ["value", ">="], ["value", "<="], ["value", "||"], ["value", "<=||>="], ["value", ">=||<="], ["value", "<=&&>="], ["value", ">=&&<="], ["value", "!="], ["value", "!=="], ["value", "!"], ["value", "!!"], ["matInput", "", "placeholder", "value", "required", "", 3, "formControl"], ["mat-fab", "", "matInput", "", "color", "warn", "aria-label", "delete condition", 1, "filter-add_rule", 3, "click"]],
  template: function CreateRuleModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add Rule ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CreateRuleModalComponent_mat_chip_option_4_Template, 2, 1, "mat-chip-option", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2)(6, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function CreateRuleModalComponent_Template_form_submit_8_listener() {
        return ctx.saveRule();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name & Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field")(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Stream Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field")(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Stream Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-select", 6)(20, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "--");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Numeric");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "JSON");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CreateRuleModalComponent_div_29_Template, 39, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div")(31, "div", 11)(32, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateRuleModalComponent_Template_button_click_32_listener() {
        return ctx.addNewCondition();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13)(36, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formError);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.rule.streamName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.rule.streamType);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rule.conditions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 20px;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .list-item-tags[_ngcontent-%COMP%] {\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  display: inline;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: var(--mdc-typography-button-font-size, 14px);\n  line-height: var(--mdc-typography-button-line-height, 36px);\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: var(--mdc-typography-button-text-transform, none);\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter-add-rule[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: flex-end;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  bottom: 0px;\n  position: absolute;\n  margin-bottom: 30px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  --mat-mdc-form-field-floating-label-scale: 0.75;\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 0;\n  text-align: inherit;\n  margin: 10px;\n}\n\n@media screen and (min-width: 500px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n  }\n}\n@media only screen and (min-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: flex;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n    flex-direction: column;\n  }\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtcnVsZS1tb2RhbC9jcmVhdGUtcnVsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFSTtFQUNFLFlBQUE7QUFBTjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0R0FBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSwwREFBQTtFQUNBLDJFQUFBO0VBQ0EsMkVBQUE7RUFDQSxtRUFBQTtFQUNBLGlFQUFBO0FBRk47QUFLSTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUhOO0FBTUk7RUFDRSxhQUFBO0FBSk47QUFRRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFOSjtBQVFJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFOTjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFSRjs7QUFXQTtFQUNFLCtDQUFBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFSSjs7QUFXQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQ0FBQTtJQUNBLDRDQUFBO0lBQ0EscUJBQUE7SUFDQSxjQUFBO0VBUkY7QUFDRjtBQVdBO0VBRUk7SUFDRSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxrQ0FBQTtJQUNBLDRDQUFBO0lBQ0EscUJBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7RUFWSjtFQVlJO0lBQ0UsZ0JBQUE7RUFWTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBtYXJnaW46IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogYXV0bztcblxuXG4gICAgLmxpc3QtaXRlbS10YWdzIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAudGFnc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tZm9udC1mYW1pbHksIHZhcigtLW1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5LCBSb2JvdG8sIHNhbnMtc2VyaWYpKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWZvbnQtc2l6ZSwgMTRweCk7XG4gICAgICBsaW5lLWhlaWdodDogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWxpbmUtaGVpZ2h0LCAzNnB4KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tZm9udC13ZWlnaHQsIDUwMCk7XG4gICAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWxldHRlci1zcGFjaW5nLCAwLjA4OTI4NTcxNDNlbSk7XG4gICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLXRleHQtZGVjb3JhdGlvbiwgbm9uZSk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi10ZXh0LWRlY29yYXRpb24sIG5vbmUpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi10ZXh0LXRyYW5zZm9ybSwgbm9uZSk7XG4gICAgfVxuXG4gICAgLndyYXAge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5maWx0ZXItYWRkLXJ1bGV7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAuY2xvc2Uge1xuICAgICAgYm90dG9tOiAwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uY2xvc2UtYnV0dG9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xufVxuXG4ubWF0LW1kYy1mb3JtLWZpZWxke1xuICAtLW1hdC1tZGMtZm9ybS1maWVsZC1mbG9hdGluZy1sYWJlbC1zY2FsZTogMC43NTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLW5hdiBtYWluLWNvbnRlbnRcIjtcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpICB7XG4gIC53cmFwcGVye1xuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZS1uYXYgbWFpbi1jb250ZW50XCI7XG4gICAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5tYXQtbWRjLWNhcmQge1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4470:
/*!********************************************************************************!*\
  !*** ./src/app/components/delete-rules/delete-rules/delete-rules.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteRulesComponent": () => (/* binding */ DeleteRulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_rules_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/rules.service */ 7335);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);







class DeleteRulesComponent {
  constructor(ruleService, _snackBar, dialogRef, data) {
    this.ruleService = ruleService;
    this._snackBar = _snackBar;
    this.dialogRef = dialogRef;
    this.data = data;
  }
  delete() {
    this.deleteRuleSubscription = this.ruleService.deleteRule(this.data.id).subscribe(data => {
      this._snackBar.open("Rule deleted!", "Dismiss");
      this.dialogRef.close();
    });
  }
  ngOnDestroy() {
    this.deleteRuleSubscription?.unsubscribe();
  }
}
DeleteRulesComponent.ɵfac = function DeleteRulesComponent_Factory(t) {
  return new (t || DeleteRulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_rules_service__WEBPACK_IMPORTED_MODULE_0__.RulesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};
DeleteRulesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DeleteRulesComponent,
  selectors: [["app-delete-rules"]],
  decls: 15,
  vars: 3,
  consts: [[1, "wrapper"], ["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "content"], [1, "footer"], ["mat-raised-button", "", "matInput", "", "aria-label", "submit rule", 1, "filter-submitrule", 3, "mat-dialog-close"], ["mat-raised-button", "", "matInput", "", "type", "submit", "color", "warn", "aria-label", "submit rule", 1, "filter-submitrule", 3, "click"]],
  template: function DeleteRulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1)(5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2)(8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Are you sure you want to delete this rule?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3)(11, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteRulesComponent_Template_button_click_13_listener() {
        return ctx.delete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Delete ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Delete Rule: ", ctx.data.stream_name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 20px;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .list-item-tags[_ngcontent-%COMP%] {\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  display: inline;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: var(--mdc-typography-button-font-size, 14px);\n  line-height: var(--mdc-typography-button-line-height, 36px);\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: var(--mdc-typography-button-text-transform, none);\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter-add-rule[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: center;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  bottom: 0px;\n  position: absolute;\n  margin-bottom: 30px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  --mat-mdc-form-field-floating-label-scale: 0.75;\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 0;\n  text-align: inherit;\n  margin: 10px;\n}\n\n@media screen and (min-width: 500px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n  }\n}\n@media only screen and (min-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: flex;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n    flex-direction: column;\n  }\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtcnVsZXMvZGVsZXRlLXJ1bGVzL2RlbGV0ZS1ydWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUVJO0VBQ0UsWUFBQTtBQUFOO0FBR0k7RUFDRSxhQUFBO0FBRE47QUFJSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDRHQUFBO0VBQ0EsdURBQUE7RUFDQSwyREFBQTtFQUNBLDBEQUFBO0VBQ0EsMkVBQUE7RUFDQSwyRUFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUFGTjtBQUtJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBSE47QUFNSTtFQUNFLGFBQUE7QUFKTjtBQVFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQU5KO0FBUUk7RUFDRSxZQUFBO0FBTk47QUFTSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUE47O0FBWUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBVEY7O0FBWUE7RUFDRSwrQ0FBQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVEo7O0FBWUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0NBQUE7SUFDQSw0Q0FBQTtJQUNBLHFCQUFBO0lBQ0EsY0FBQTtFQVRGO0FBQ0Y7QUFZQTtFQUVJO0lBQ0UsZ0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0NBQUE7SUFDQSw0Q0FBQTtJQUNBLHFCQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0VBWEo7RUFhSTtJQUNFLGdCQUFBO0VBWE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgcHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxuICAgIC5saXN0LWl0ZW0tdGFncyB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLnRhZ3N7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWZvbnQtZmFtaWx5LCB2YXIoLS1tZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseSwgUm9ib3RvLCBzYW5zLXNlcmlmKSk7XG4gICAgICBmb250LXNpemU6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LXNpemUsIDE0cHgpO1xuICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1saW5lLWhlaWdodCwgMzZweCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWZvbnQtd2VpZ2h0LCA1MDApO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1sZXR0ZXItc3BhY2luZywgMC4wODkyODU3MTQzZW0pO1xuICAgICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi10ZXh0LWRlY29yYXRpb24sIG5vbmUpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC1kZWNvcmF0aW9uLCBub25lKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC10cmFuc2Zvcm0sIG5vbmUpO1xuICAgIH1cblxuICAgIC53cmFwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAuZmlsdGVyLWFkZC1ydWxle1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGJ1dHRvbntcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5cbiAgICAuY2xvc2Uge1xuICAgICAgYm90dG9tOiAwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uY2xvc2UtYnV0dG9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xufVxuXG4ubWF0LW1kYy1mb3JtLWZpZWxke1xuICAtLW1hdC1tZGMtZm9ybS1maWVsZC1mbG9hdGluZy1sYWJlbC1zY2FsZTogMC43NTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLW5hdiBtYWluLWNvbnRlbnRcIjtcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpICB7XG4gIC53cmFwcGVye1xuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZS1uYXYgbWFpbi1jb250ZW50XCI7XG4gICAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5tYXQtbWRjLWNhcmQge1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9486:
/*!**************************************************************************!*\
  !*** ./src/app/components/edit-rules/edit-rules/edit-rules.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRulesComponent": () => (/* binding */ EditRulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_rules_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/rules.service */ 7335);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 9121);
















function EditRulesComponent_mat_chip_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " All fields are required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "warn");
  }
}
function EditRulesComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field")(5, "mat-select", 18)(6, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, ">=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "<=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "||");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "<=||>=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, ">=||<=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "<=&&>=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, ">=&&<=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "!=");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "!==");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditRulesComponent_div_29_Template_button_click_36_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.deleteCondition(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ruleCond_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ruleCond_r2.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ruleCond_r2.operator);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ruleCond_r2.value);
  }
}
class EditRulesComponent {
  constructor(ruleService, _snackBar, dialogRef, data) {
    this.ruleService = ruleService;
    this._snackBar = _snackBar;
    this.dialogRef = dialogRef;
    this.data = data;
    this.formError = false;
    this.rule = {
      streamName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
      streamType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("numeric set"),
      conditions: [{
        condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
        operator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
        value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("")
      }]
    };
    console.log(data);
    this.rule.streamName.setValue(data.stream_name);
    this.rule.streamType.setValue(data.stream_type);
    this.rule.streamType.setValue(data.stream_type);
    this.rule.conditions = data.conditions.map(cond => {
      return {
        condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(cond.condition),
        operator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(cond.operator),
        value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(cond.value)
      };
    });
  }
  isFormValid() {
    this.formError = false;
    const isValid = [this.rule.streamName.invalid, this.rule.streamType.invalid];
    this.rule.conditions.map(item => {
      isValid.push(item.condition.invalid);
      isValid.push(item.operator.invalid);
      isValid.push(item.value.invalid);
    });
    const result = isValid.indexOf(true) === -1;
    if (!result || !this.rule.conditions.length) this.formError = true;
    return result && this.rule.conditions.length;
  }
  addNewCondition() {
    this.rule.conditions.push({
      condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
      operator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
      value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("")
    });
  }
  resetFields() {
    this.rule = {
      streamName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
      streamType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("numeric set"),
      conditions: [{
        condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
        operator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(""),
        value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("")
      }]
    };
    this.dialogRef.close();
  }
  update() {
    if (!this.isFormValid()) return;
    const rule = {
      id: this.data.id,
      streamName: this.rule.streamName.value,
      streamType: this.rule.streamType.value,
      rule_conditions: this.rule.conditions.map(item => {
        return {
          condition: item.condition.value,
          operator: item.operator.value,
          value: item.value.value
        };
      }),
      rule_formatting: [],
      associated_streams: []
    };
    this.editRuleSubscription = this.ruleService.updateRule(rule).subscribe(data => {
      this.resetFields();
      this._snackBar.open("Rule updated!", "Dismiss");
    });
  }
  deleteCondition(index) {
    this.rule.conditions.splice(index, 1);
  }
  ngOnDestroy() {
    this.editRuleSubscription?.unsubscribe();
  }
}
EditRulesComponent.ɵfac = function EditRulesComponent_Factory(t) {
  return new (t || EditRulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_rules_service__WEBPACK_IMPORTED_MODULE_0__.RulesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
};
EditRulesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: EditRulesComponent,
  selectors: [["app-edit-rules"]],
  decls: 38,
  vars: 5,
  consts: [[1, "wrapper"], ["selected", "", 3, "color", 4, "ngIf"], ["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [3, "submit"], [1, "content"], ["matInput", "", "required", "", 3, "formControl"], ["required", "", 3, "formControl"], ["value", ""], ["value", "numeric set"], ["value", "json"], ["class", "conditions", 4, "ngFor", "ngForOf"], [1, "filter-add-rule"], ["mat-fab", "", "matInput", "", "color", "primary", "aria-label", "add rule", 1, "filter-add_rule", 3, "click"], [1, "footer"], ["mat-raised-button", "", "matInput", "", "type", "submit", "color", "primary", "aria-label", "submit rule", 1, "filter-submitrule"], ["selected", "", 3, "color"], [1, "conditions"], ["matInput", "", "placeholder", "condition", "required", "", 3, "formControl"], ["placeholder", "operator", "required", "", 3, "formControl"], ["value", "="], ["value", ">"], ["value", "<"], ["value", ">="], ["value", "<="], ["value", "||"], ["value", "<=||>="], ["value", ">=||<="], ["value", "<=&&>="], ["value", ">=&&<="], ["value", "!="], ["value", "!=="], ["value", "!"], ["value", "!!"], ["matInput", "", "placeholder", "value", "required", "", 3, "formControl"], ["mat-fab", "", "matInput", "", "color", "warn", "aria-label", "delete condition", 1, "filter-add_rule", 3, "click"]],
  template: function EditRulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Edit Rule ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditRulesComponent_mat_chip_option_4_Template, 2, 1, "mat-chip-option", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2)(6, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function EditRulesComponent_Template_form_submit_8_listener() {
        return ctx.update();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name & Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field")(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Stream Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field")(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Stream Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-select", 6)(20, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "--");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Numeric");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "JSON");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, EditRulesComponent_div_29_Template, 39, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div")(31, "div", 11)(32, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditRulesComponent_Template_button_click_32_listener() {
        return ctx.addNewCondition();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13)(36, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Update ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formError);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.rule.streamName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.rule.streamType);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rule.conditions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 20px;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .list-item-tags[_ngcontent-%COMP%] {\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  display: inline;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: var(--mdc-typography-button-font-size, 14px);\n  line-height: var(--mdc-typography-button-line-height, 36px);\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: var(--mdc-typography-button-text-transform, none);\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter-add-rule[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: flex-end;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  bottom: 0px;\n  position: absolute;\n  margin-bottom: 30px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  --mat-mdc-form-field-floating-label-scale: 0.75;\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 0;\n  text-align: inherit;\n  margin: 10px;\n}\n\n@media screen and (min-width: 500px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n  }\n}\n@media only screen and (min-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: flex;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n    flex-direction: column;\n  }\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LXJ1bGVzL2VkaXQtcnVsZXMvZWRpdC1ydWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFSTtFQUNFLFlBQUE7QUFBTjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0R0FBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSwwREFBQTtFQUNBLDJFQUFBO0VBQ0EsMkVBQUE7RUFDQSxtRUFBQTtFQUNBLGlFQUFBO0FBRk47QUFLSTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUhOO0FBTUk7RUFDRSxhQUFBO0FBSk47QUFRRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFOSjtBQVFJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFOTjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFSRjs7QUFXQTtFQUNFLCtDQUFBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFSSjs7QUFXQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQ0FBQTtJQUNBLDRDQUFBO0lBQ0EscUJBQUE7SUFDQSxjQUFBO0VBUkY7QUFDRjtBQVdBO0VBRUk7SUFDRSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxrQ0FBQTtJQUNBLDRDQUFBO0lBQ0EscUJBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7RUFWSjtFQVlJO0lBQ0UsZ0JBQUE7RUFWTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBtYXJnaW46IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogYXV0bztcblxuXG4gICAgLmxpc3QtaXRlbS10YWdzIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAudGFnc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tZm9udC1mYW1pbHksIHZhcigtLW1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5LCBSb2JvdG8sIHNhbnMtc2VyaWYpKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWZvbnQtc2l6ZSwgMTRweCk7XG4gICAgICBsaW5lLWhlaWdodDogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWxpbmUtaGVpZ2h0LCAzNnB4KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tZm9udC13ZWlnaHQsIDUwMCk7XG4gICAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWxldHRlci1zcGFjaW5nLCAwLjA4OTI4NTcxNDNlbSk7XG4gICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLXRleHQtZGVjb3JhdGlvbiwgbm9uZSk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi10ZXh0LWRlY29yYXRpb24sIG5vbmUpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi10ZXh0LXRyYW5zZm9ybSwgbm9uZSk7XG4gICAgfVxuXG4gICAgLndyYXAge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5maWx0ZXItYWRkLXJ1bGV7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAuY2xvc2Uge1xuICAgICAgYm90dG9tOiAwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uY2xvc2UtYnV0dG9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xufVxuXG4ubWF0LW1kYy1mb3JtLWZpZWxke1xuICAtLW1hdC1tZGMtZm9ybS1maWVsZC1mbG9hdGluZy1sYWJlbC1zY2FsZTogMC43NTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLW5hdiBtYWluLWNvbnRlbnRcIjtcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpICB7XG4gIC53cmFwcGVye1xuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZS1uYXYgbWFpbi1jb250ZW50XCI7XG4gICAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5tYXQtbWRjLWNhcmQge1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9520:
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _navigation_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation/top-navigation-bar/top-navigation-bar.component */ 4948);


const _c0 = ["*"];
class LayoutComponent {
  constructor() {
    this.showRightNav = false;
    this.alertSubscription = null;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'bottom';
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.alertSubscription?.unsubscribe();
  }
  toggleSideNav() {
    this.showRightNav = !this.showRightNav;
  }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)();
};
LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 0,
  consts: [[1, "container__content"], [1, "container__content-main"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-top-navigation-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_navigation_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopNavigationBarComponent],
  styles: [".container__content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n.container__content[_ngcontent-%COMP%]   .container__content-main[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  grid-column: 2;\n  margin-top: 90px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDTiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfX2NvbnRlbnR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7ICAgIFxuXG4gIC5jb250YWluZXJfX2NvbnRlbnQtbWFpbntcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ODAwcHgpIHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4948:
/*!******************************************************************************************!*\
  !*** ./src/app/components/navigation/top-navigation-bar/top-navigation-bar.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopNavigationBarComponent": () => (/* binding */ TopNavigationBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8589);






class TopNavigationBarComponent {
  constructor(router) {
    this.router = router;
  }
  onMenuItemClick(path) {
    console.log(path);
    this.router.navigate(path);
  }
}
TopNavigationBarComponent.ɵfac = function TopNavigationBarComponent_Factory(t) {
  return new (t || TopNavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
TopNavigationBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TopNavigationBarComponent,
  selectors: [["app-top-navigation-bar"]],
  decls: 19,
  vars: 1,
  consts: [[1, "navbar"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "spacer"]],
  template: function TopNavigationBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "button", 1)(2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 2)(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavigationBarComponent_Template_button_click_6_listener() {
        return ctx.onMenuItemClick([""]);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavigationBarComponent_Template_button_click_11_listener() {
        return ctx.onMenuItemClick(["rules"]);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "gavel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Rules");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ticket Tracker");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger],
  styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n  z-index: 1;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL3RvcC1uYXZpZ2F0aW9uLWJhci90b3AtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsMkhBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCA2cHggMTBweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCAxOHB4IDBweCByZ2IoMCAwIDAgLyAxMiUpO1xuICB6LWluZGV4OjE7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9139:
/*!*******************************************************************!*\
  !*** ./src/app/components/rule-details/rule-details.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsComponent": () => (/* binding */ RuleDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);









function RuleDetailsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list")(3, "mat-list-item")(4, "span", 5)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Condition:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item")(9, "span", 5)(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Operator:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item")(14, "span", 5)(15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Values:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const rule_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rule_r1.condition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rule_r1.operator, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rule_r1.value, "");
  }
}
class RuleDetailsComponent {
  constructor(data) {
    this.data = data;
    console.log(data);
  }
}
RuleDetailsComponent.ɵfac = function RuleDetailsComponent_Factory(t) {
  return new (t || RuleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
RuleDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RuleDetailsComponent,
  selectors: [["app-rule-details"]],
  decls: 18,
  vars: 3,
  consts: [[1, "wrapper"], ["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "content"], [4, "ngFor", "ngForOf"], [1, "footer"], ["matListItemLine", ""]],
  template: function RuleDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1)(5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "mat-card")(10, "mat-card-header")(11, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rule");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content")(14, "mat-list")(15, "mat-list-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RuleDetailsComponent_div_16_Template, 18, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.stream_name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.conditions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItemLine, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: block;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .list-item-tags[_ngcontent-%COMP%] {\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  display: inline;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: var(--mdc-typography-button-font-size, 14px);\n  line-height: var(--mdc-typography-button-line-height, 36px);\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: var(--mdc-typography-button-text-transform, none);\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: flex-end;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  bottom: 0px;\n  position: absolute;\n  margin-bottom: 30px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n@media screen and (min-width: 500px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n}\n@media only screen and (min-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ydWxlLWRldGFpbHMvcnVsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFSTtFQUNFLFlBQUE7QUFBTjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0R0FBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSwwREFBQTtFQUNBLDJFQUFBO0VBQ0EsMkVBQUE7RUFDQSxtRUFBQTtFQUNBLGlFQUFBO0FBRk47QUFLSTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUhOO0FBT0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBTEo7QUFPSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTE47O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBUEY7O0FBVUE7RUFDRTtJQUNFLFlBQUE7RUFQRjtBQUNGO0FBZUE7RUFFSTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtFQWRKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIG1hcmdpbjogMjBweDtcblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5saXN0LWl0ZW0tdGFncyB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLnRhZ3N7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWZvbnQtZmFtaWx5LCB2YXIoLS1tZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseSwgUm9ib3RvLCBzYW5zLXNlcmlmKSk7XG4gICAgICBmb250LXNpemU6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LXNpemUsIDE0cHgpO1xuICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1saW5lLWhlaWdodCwgMzZweCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWZvbnQtd2VpZ2h0LCA1MDApO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1sZXR0ZXItc3BhY2luZywgMC4wODkyODU3MTQzZW0pO1xuICAgICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi10ZXh0LWRlY29yYXRpb24sIG5vbmUpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC1kZWNvcmF0aW9uLCBub25lKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC10cmFuc2Zvcm0sIG5vbmUpO1xuICAgIH1cblxuICAgIC53cmFwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLmNsb3NlIHtcbiAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gIH1cbn1cblxuLmNsb3NlLWJ1dHRvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAvLyBkaXNwbGF5OiBncmlkO1xuICAgIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLW5hdiBtYWluLWNvbnRlbnRcIjtcbiAgICAvLyBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgLy8gZ3JpZC1nYXA6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpICB7XG4gIC53cmFwcGVye1xuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC8vIC5tYXQtbWRjLWNhcmQge1xuICAgICAgLy8gICAvLyBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1615:
/*!***********************************************************************!*\
  !*** ./src/app/components/ticket-details/ticket-details.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketDetailsComponent": () => (/* binding */ TicketDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ 1169);










function TicketDetailsComponent_mat_list_item_38_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r2);
  }
}
function TicketDetailsComponent_mat_list_item_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 9)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10)(4, "mat-chip-listbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketDetailsComponent_mat_list_item_38_span_5_Template, 3, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.expertConnectTags.split(","));
  }
}
class TicketDetailsComponent {
  constructor(data) {
    this.data = data;
    this.expertConnectTags = "";
    this.expertConnectLink = "";
    this.formantData = {};
    this.expertConnectTags = this.data.expert_connect_tag_name;
    this.expertConnectLink = this.data.jira_expert_connect_link?.replace(/([\\"]+)/gi, "");
    JSON.parse(this.data.value ? this.data?.value : "{}").filter(point => {
      return ["halt_error_code", "halt_supplemental_error_code", "from_state", "to_state"].indexOf(point.label) > -1;
    }).forEach(pointA => {
      this.formantData[pointA.label] = pointA.value;
    });
    console.log(this.data);
  }
}
TicketDetailsComponent.ɵfac = function TicketDetailsComponent_Factory(t) {
  return new (t || TicketDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
TicketDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TicketDetailsComponent,
  selectors: [["app-ticket-details"]],
  decls: 110,
  vars: 18,
  consts: [[1, "wrapper"], ["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "content"], ["matListItemTitle", ""], ["matListItemLine", "", 1, "wrap"], ["matListItemLine", ""], ["target", "_blank", 3, "href"], ["class", "list-item-tags", 4, "ngIf"], [1, "footer"], [1, "list-item-tags"], [1, "tags"], ["aria-label", "expert-connect-tags"], [4, "ngFor", "ngForOf"]],
  template: function TicketDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1)(5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "mat-card")(10, "mat-card-header")(11, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Expert Connect");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content")(14, "mat-list")(15, "mat-list-item")(16, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item")(21, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Bundle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-list-item")(26, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list-item")(31, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5)(34, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Ticket ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TicketDetailsComponent_mat_list_item_38_Template, 6, 1, "mat-list-item", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card")(40, "mat-card-header")(41, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Jira");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-content")(44, "mat-list")(45, "mat-list-item")(46, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ticket");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-list-item")(51, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Machine Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-list-item")(56, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-list-item")(61, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Requirement");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-list-item")(66, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Roadmap Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card")(71, "mat-card-header")(72, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Formant");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-card-content")(75, "mat-list")(76, "mat-list-item")(77, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 5)(80, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Formant Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-list-item")(85, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-list-item")(90, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "ERC");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-list-item")(95, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "SUP");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-list-item")(100, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-list-item")(105, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.device_name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.expert_connect_title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.expert_connect_bundle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.expert_connect_team_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.expertConnectLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expertConnectTags.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.jira_ticket);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.jira_machine_type);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.jira_priority);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.jira_requirement);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.jira_roadmap_item);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.data.formantUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.formant_time);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formantData.halt_error_code, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formantData.halt_supplemental_error_code, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formantData.from_state, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formantData.to_state, "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItemTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipListbox],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .list-item-tags[_ngcontent-%COMP%] {\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  display: inline;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: var(--mdc-typography-button-font-size, 14px);\n  line-height: var(--mdc-typography-button-line-height, 36px);\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: var(--mdc-typography-button-text-transform, none);\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: flex-end;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  bottom: 0px;\n  position: absolute;\n  margin-bottom: 30px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n@media screen and (min-width: 500px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n  }\n}\n@media only screen and (min-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n    flex-direction: inherit;\n  }\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtZGV0YWlscy90aWNrZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7QUFDTjtBQUVJO0VBQ0UsYUFBQTtBQUFOO0FBR0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0R0FBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSwwREFBQTtFQUNBLDJFQUFBO0VBQ0EsMkVBQUE7RUFDQSxtRUFBQTtFQUNBLGlFQUFBO0FBRE47QUFJSTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUZOO0FBTUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSko7QUFNSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSk47O0FBU0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0NBQUE7SUFDQSw0Q0FBQTtJQUNBLHFCQUFBO0lBQ0EsY0FBQTtFQU5GO0FBQ0Y7QUFTQTtFQUVJO0lBQ0UsZ0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0NBQUE7SUFDQSw0Q0FBQTtJQUNBLHFCQUFBO0lBQ0EsY0FBQTtJQUNBLHVCQUFBO0VBUko7RUFVSTtJQUNFLGdCQUFBO0VBUk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgbWFyZ2luOiAyMHB4O1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAubGlzdC1pdGVtLXRhZ3Mge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC50YWdze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LWZhbWlseSwgdmFyKC0tbWRjLXR5cG9ncmFwaHktZm9udC1mYW1pbHksIFJvYm90bywgc2Fucy1zZXJpZikpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tZm9udC1zaXplLCAxNHB4KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tbGluZS1oZWlnaHQsIDM2cHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LXdlaWdodCwgNTAwKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tbGV0dGVyLXNwYWNpbmcsIDAuMDg5Mjg1NzE0M2VtKTtcbiAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC1kZWNvcmF0aW9uLCBub25lKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLXRleHQtZGVjb3JhdGlvbiwgbm9uZSk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLXRleHQtdHJhbnNmb3JtLCBub25lKTtcbiAgICB9XG5cbiAgICAud3JhcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgIC5jbG9zZSB7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICB9XG59XG5cbi5jbG9zZS1idXR0b257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZS1uYXYgbWFpbi1jb250ZW50XCI7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA1MHB4KSAge1xuICAud3JhcHBlcntcbiAgICAuY29udGVudCB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInNpZGUtbmF2IG1haW4tY29udGVudFwiO1xuICAgICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogaW5oZXJpdDtcblxuICAgICAgLm1hdC1tZGMtY2FyZCB7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5036:
/*!**********************************!*\
  !*** ./src/app/graphql/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* reexport module object */ _query__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ 3045);



/***/ }),

/***/ 3045:
/*!****************************************!*\
  !*** ./src/app/graphql/query/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rules": () => (/* reexport module object */ _rules__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "Tickets": () => (/* reexport module object */ _tickets__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets */ 5306);
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules */ 7523);




/***/ }),

/***/ 7523:
/*!**********************************************!*\
  !*** ./src/app/graphql/query/rules/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesByStreamName": () => (/* reexport safe */ _rulesByStreamName__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _rulesByStreamName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rulesByStreamName */ 4934);



/***/ }),

/***/ 4934:
/*!**********************************************************!*\
  !*** ./src/app/graphql/query/rules/rulesByStreamName.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rulesByStreamName)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 26);

const rulesByStreamName = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
query Rules (
  $streamName: String = "" 
  $offset:Int = 1
  $limit: Int = 1
) {
  formantRules(
    offset:$offset
    first:$limit
    orderBy: STREAM_NAME_ASC
    filter:{streamName:{startsWithInsensitive:$streamName}}
  ) {
    pageInfo{
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
      __typename
    }
    nodes {
      streamName
      streamType
      fornantRulesConditionsByRuleId {
        nodes {
          value
          ruleId
          operator
          nodeId
          condition
          id
        }
      }
      formantAssociatedStreamsByRuleId {
        nodes {
          streamName
          ruleId
          nodeId
          id
          formantAssocStreamConditionsByAssocId {
            nodes {
              condition
              assocId
              id
              nodeId
              operator
              value
            }
          }
          formantAssociatedStreamFormattingsByAssociatedStreamId {
            nodes {
              value
              key
              associatedStream {
                id
              }
            }
          }
        }
      }
    }
  }
}`;


/***/ }),

/***/ 5306:
/*!************************************************!*\
  !*** ./src/app/graphql/query/tickets/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JoinedTickets": () => (/* reexport safe */ _joined__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "TicketsView": () => (/* reexport safe */ _tickets_view__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _joined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./joined */ 2433);
/* harmony import */ var _tickets_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets-view */ 7876);




/***/ }),

/***/ 2433:
/*!*************************************************!*\
  !*** ./src/app/graphql/query/tickets/joined.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JoinedTickets)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 26);

const JoinedTickets = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
query Tickets($offset: Int = 1, $limit: Int = 1) {
  connections(orderBy: ID_DESC, first: $limit, offset: $offset) {
    nodes {
      id
      jira {
        jiraId
        jiraTicket
        machineType
        priority
        project
        requirement
        description
        expertConnectLink
        formantLink
        issueType
        roadmapItem
        summary
        team {
          name
        }
      }
      formant {
        deviceId
        deviceName
        id
        message
        severity
        streamName
        streamType
        tags
        time
        type
        url
        value
      }
      expertConnect {
        expertConnectTicketTagsByTicketId {
          nodes{
            tag{
              name
              id
            }
          }
        }
        bundle
        contactId
        createdAt
        description
        ecId
        id
        machineHours
        misc
        product
        resolution
        serialNumber
        team {
          name
          ecId
          id
        }
        title
        vehicle {
          deviceId
          name
        }
        advisor {
          email
          firstName
          lastName
          phone
        }
      }
    }
    edges {
      node {
        id
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
`;


/***/ }),

/***/ 7876:
/*!*******************************************************!*\
  !*** ./src/app/graphql/query/tickets/tickets-view.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TicketViews)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 26);

const TicketViews = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
query Tickets($offset: Int = 1, $limit: Int = 1 $deviceName:String = "") {
  ticketsViews(
    	offset:$offset 
    	first:$limit 
    	orderBy:FORMANT_ID_DESC 
    	filter:{deviceName:{includesInsensitive:$deviceName}}){
    nodes {
      formantId
      expertConnectId
      jiraId
      deviceName
      formantVehicleId
      deviceId
      message
      severity
      streamName
      streamType
      formantTags
      value
      formantTime
      formantUrl
      type
      formantBundle
      expertConnectVehicleId
  		expertConnectTagName
      expertConnectTitle
      expertConnectDescription
      expertConnectProduct
      expertConnectHours
      expertConnectSerialNumber
      expertConnectMisc
      expertConnectResolution
      expertConnectAdvisorId
      expertConnectTeamId
      expertConnectContactId
      expertConnectBundle
      expertConnectEcId
      expertConnectTeamName
      expertConnectAdvisorFirstName
      expertConnectAdvisorLastName
      expertConnectAdvisorEmail
      expertConnectAdvisorPhone
      expertConnectContactFirstName
      expertConnectContactLastName
      expertConnectContactEmail
      expertConnectContactPhone
      jiraTicket
      jiraProject
      jiraDescription
      jiraSummary
      jiraCategory
      jiraRequirement
      jiraBundle
      jiraMachineType
      jiraRoadmapItem
      jiraFormantLink
      jiraExpertConnectLink
      jiraIssueType
      jiraCreatedAt
      jiraUpdatedAt
      jiraPriority
      jiraTeamId
      jiraBugSource
    }
    pageInfo{
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
      __typename
    }
  }
}
`;


/***/ }),

/***/ 2504:
/*!*******************************************!*\
  !*** ./src/app/modules/graphql.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLModule": () => (/* binding */ GraphQLModule),
/* harmony export */   "createApollo": () => (/* binding */ createApollo)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ 26);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client/core */ 7156);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular/http */ 3334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const uri = 'http://localhost:4000/graphql'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
  return {
    link: httpLink.create({
      uri
    }),
    cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
  };
}
class GraphQLModule {}
GraphQLModule.ɵfac = function GraphQLModule_Factory(t) {
  return new (t || GraphQLModule)();
};
GraphQLModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: GraphQLModule
});
GraphQLModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__.APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__.HttpLink]
  }]
});

/***/ }),

/***/ 4789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/layout/layout.component */ 9520);
/* harmony import */ var _tabs_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/tickets/tickets.component */ 9397);
/* harmony import */ var _tabs_bag_monitoring_bag_monitoring_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/bag-monitoring/bag-monitoring.component */ 6264);





class DashboardComponent {
  constructor() {}
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)();
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 6,
  vars: 0,
  consts: [["label", "Tickets"], ["label", "Bag Monitoring"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-layout")(1, "mat-tab-group")(2, "mat-tab", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-tickets");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-tab", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-bag-monitoring");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _tabs_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_1__.TicketsComponent, _tabs_bag_monitoring_bag_monitoring_component__WEBPACK_IMPORTED_MODULE_2__.BagMonitoringComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6264:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/tabs/bag-monitoring/bag-monitoring.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BagMonitoringComponent": () => (/* binding */ BagMonitoringComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_graphql_gql_query_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/graphql/gql-query.service.service */ 9138);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tickets.service */ 4695);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
















function BagMonitoringComponent_mat_progress_bar_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 39);
  }
}
function BagMonitoringComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BagMonitoringComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r19.id, " ");
  }
}
function BagMonitoringComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BagMonitoringComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, col_r20.time, "medium"), " ");
  }
}
function BagMonitoringComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vehicle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BagMonitoringComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r21.vehicle_name, " ");
  }
}
function BagMonitoringComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BagMonitoringComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r22.error_message, " ");
  }
}
function BagMonitoringComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BagMonitoringComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r23.error_code, " ");
  }
}
function BagMonitoringComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "VPU ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BagMonitoringComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r24.vpu_position, " ");
  }
}
function BagMonitoringComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 42);
  }
}
function BagMonitoringComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 43);
  }
}
function BagMonitoringComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 44)(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class BagMonitoringComponent {
  constructor(gqlQuery, dialog, ticketService) {
    this.gqlQuery = gqlQuery;
    this.dialog = dialog;
    this.ticketService = ticketService;
    // Private
    this.trackedVehicles = [];
    // Public
    this.isLoading = true;
    this.currentOffset = 1;
    this.ticketsList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([]);
    this.currentPageSize = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("10");
    this.filter = {
      device_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
      error_message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
      error_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
      vpu_position: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("")
    };
    this.pageInfo = {
      hasNextPage: false,
      hasPreviousPage: false
    };
    this.columns = ['rule_id', 'time', 'vehicle_name', 'error_message', 'error_code', 'vpu_position'];
    // Events
    this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  requestTickets() {
    this.isLoading = true;
    this.currentOffset = 1;
    this.ticketService.getBagMonitoringTickets({
      offset: this.currentOffset,
      limit: parseInt(this.currentPageSize.value),
      device_name: this.filter.device_name.value,
      error_message: this.filter.error_message.value,
      error_code: this.filter.error_code.value,
      vpu_position: this.filter.vpu_position.value
    }).subscribe(response => {
      console.log(response.tickets.pageInfo);
      this.trackedVehicles = response.tickets.rows;
      console.log(response);
      this.ticketsList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.trackedVehicles);
      this.pageInfo = response.tickets.pageInfo;
      this.isLoading = false;
    }, error => {
      this.trackedVehicles = [];
      this.ticketsList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.trackedVehicles);
      this.pageInfo = {
        hasNextPage: false,
        hasPreviousPage: false
      };
      this.isLoading = false;
    });
  }
  ngOnInit() {
    // Query Ticket
    this.requestTickets();
  }
  ngOnDestroy() {
    this.ticketsQuery?.unsubscribe();
  }
  applyFilter(e) {}
  rowClick(row) {
    // const dialogRef = this.dialog.open(TicketDetailsComponent, {
    //   width: "80%",
    //   height: "625px",
    //   enterAnimationDuration:"200ms",
    //   exitAnimationDuration:"200ms",
    //   data: row
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    // this.onClick.emit(row.vehicle_id || row.id)
  }
  paginationHandler(arg) {
    switch (arg) {
      case "next":
        this.currentOffset = this.currentOffset + parseInt(this.currentPageSize.value);
        break;
      case "previous":
        this.currentOffset = this.currentOffset > 1 ? this.currentOffset - parseInt(this.currentPageSize.value) : 1;
        break;
    }
    this.requestTickets();
  }
  resetResubmit(e) {
    console.log(e);
    this.currentOffset = 1;
    this.requestTickets();
  }
}
BagMonitoringComponent.ɵfac = function BagMonitoringComponent_Factory(t) {
  return new (t || BagMonitoringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_graphql_gql_query_service_service__WEBPACK_IMPORTED_MODULE_0__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_1__.TicketsService));
};
BagMonitoringComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BagMonitoringComponent,
  selectors: [["app-bag-monitoring"]],
  outputs: {
    onUpdate: "onUpdate",
    onClick: "onClick"
  },
  decls: 81,
  vars: 11,
  consts: [[1, "filter-section"], [1, "filter-section_fields"], [1, "filter-section__input"], ["matInput", "", "placeholder", "Vehicle", 3, "formControl", "keyup"], ["input", ""], ["matInput", "", "placeholder", "Error Message", 3, "formControl", "keyup"], ["matInput", "", "placeholder", "Error Code", 3, "formControl", "keyup"], ["matNativeControl", "", 3, "formControl", "keyup"], ["value", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "filter-section__search"], ["mat-fab", "", "matInput", "", "aria-label", "search", 1, "filter-section__search", 3, "click"], ["mode", "indeterminate", 4, "ngIf"], [1, "table-area"], ["mat-table", "", 1, "tickets_table", 3, "dataSource"], ["matColumnDef", "rule_id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "time"], ["matColumnDef", "vehicle_name"], ["matColumnDef", "error_message"], ["matColumnDef", "error_code"], ["matColumnDef", "vpu_position"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "mat-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "footer"], [1, "pagination-row"], [1, "pagination-container"], [1, "pagination-button-container"], ["matNativeControl", "", 3, "formControl", "change"], ["value", "10"], ["value", "25"], ["value", "50"], ["mat-fab", "", "color", "primary", "aria-label", "previous", 3, "disabled", "click"], ["mat-fab", "", "color", "primary", "aria-label", "next", 3, "disabled", "click"], ["mode", "indeterminate"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 1, "mat-row"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function BagMonitoringComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Vehicle");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BagMonitoringComponent_Template_input_keyup_5_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 2)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Error Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 5, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BagMonitoringComponent_Template_input_keyup_10_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 2)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Error Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 6, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BagMonitoringComponent_Template_input_keyup_15_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field", 2)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "VPU Position");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BagMonitoringComponent_Template_select_keyup_20_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13)(31, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BagMonitoringComponent_Template_button_click_31_listener($event) {
        return ctx.resetResubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, BagMonitoringComponent_mat_progress_bar_34_Template, 1, 0, "mat-progress-bar", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "section", 16)(36, "table", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](37, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, BagMonitoringComponent_th_38_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, BagMonitoringComponent_td_39_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](40, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, BagMonitoringComponent_th_41_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, BagMonitoringComponent_td_42_Template, 3, 4, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](43, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, BagMonitoringComponent_th_44_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, BagMonitoringComponent_td_45_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](46, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, BagMonitoringComponent_th_47_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, BagMonitoringComponent_td_48_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](49, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, BagMonitoringComponent_th_50_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, BagMonitoringComponent_td_51_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](52, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, BagMonitoringComponent_th_53_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, BagMonitoringComponent_td_54_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, BagMonitoringComponent_tr_55_Template, 1, 0, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, BagMonitoringComponent_tr_56_Template, 1, 0, "tr", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, BagMonitoringComponent_tr_57_Template, 3, 0, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "section", 29)(60, "div", 30)(61, "div", 31)(62, "div", 32)(63, "mat-form-field")(64, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Page Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "select", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BagMonitoringComponent_Template_select_change_66_listener($event) {
        return ctx.resetResubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 32)(74, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BagMonitoringComponent_Template_button_click_74_listener() {
        return ctx.paginationHandler("previous");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "arrow_back");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 32)(78, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BagMonitoringComponent_Template_button_click_78_listener() {
        return ctx.paginationHandler("next");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "arrow_forward");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.filter.device_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.filter.error_message);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.filter.error_code);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.filter.vpu_position);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.ticketsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.currentPageSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.currentOffset === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.pageInfo.hasNextPage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatFabButton, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatNoDataRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [".filter-section[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: flex;\n  padding: 25px;\n  padding-bottom: 10px;\n  margin-top: 10px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section_fields[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section_fields[_ngcontent-%COMP%]   .filter-section__input[_ngcontent-%COMP%] {\n  min-width: 0;\n  text-align: left;\n  align-self: center;\n  margin-right: 10px;\n  max-width: 150px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section__search[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section__search[_ngcontent-%COMP%]   .mat-mdc-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.table-area[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  border-left: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.table-area[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-area[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n.table-area[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-area[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.table-area[_ngcontent-%COMP%]   th.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n.table-area[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%], .table-area[_ngcontent-%COMP%]   tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-button-container[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RhYnMvYmFnLW1vbml0b3JpbmcvYmFnLW1vbml0b3JpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDTjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRko7QUFLTTtFQUNFLHVCQUFBO0FBSFI7O0FBVUE7RUFDRSwyQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7QUFQRjtBQVNFO0VBQ0UsV0FBQTtBQVBKO0FBVUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0FBVEo7QUFZRTtFQUNFLFVBQUE7QUFWSjtBQWFFO0VBQ0UsWUFBQTtBQVhKO0FBY0U7RUFDRSxlQUFBO0FBWko7QUFnQkU7RUFDRSxlQUFBO0FBZEo7QUFpQkU7RUFDRSxxQ0FBQTtBQWZKOztBQW9CQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQWpCRjtBQW1CRTtFQUNFLFlBQUE7QUFqQkoiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgLmZpbHRlci1zZWN0aW9uX2ZpZWxkc3tcbiAgICB3aWR0aDogODAlO1xuXG4gICAgLmZpbHRlci1zZWN0aW9uX19pbnB1dHtcbiAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgfVxuXG5cbiAgLmZpbHRlci1zZWN0aW9uX19zZWFyY2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcblxuICAgIC5tYXQtbWRjLWZhYntcbiAgICAgICYubWF0LWFjY2VudHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxufVxuXG4udGFibGUtYXJlYXtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIHRkLCB0aCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICBcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICB0ci5tYXQtcm93LCB0ci5tYXQtZm9vdGVyLXJvd3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIFxuICAubWF0LW1kYy1yb3cgLm1hdC1tZGMtY2VsbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAubWF0LW1kYy1yb3c6aG92ZXIgLm1hdC1tZGMtY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMTIpO1xuICB9XG59XG5cblxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAucGFnaW5hdGlvbi1idXR0b24tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9397:
/*!*******************************************************************!*\
  !*** ./src/app/pages/dashboard/tabs/tickets/tickets.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsComponent": () => (/* binding */ TicketsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/ticket-details/ticket-details.component */ 1615);
/* harmony import */ var _services_graphql_gql_query_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/graphql/gql-query.service.service */ 9138);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tickets.service */ 4695);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);

















function TicketsComponent_mat_progress_bar_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 30);
  }
}
function TicketsComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TicketsComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, col_r15.formant_time, "medium"), " ");
  }
}
function TicketsComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TicketsComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r16.device_name, " ");
  }
}
function TicketsComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TicketsComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r17.expert_connect_title, " ");
  }
}
function TicketsComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Bundle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TicketsComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r18.expert_connect_bundle, " ");
  }
}
function TicketsComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TicketsComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r19.expert_connect_tag_name, " ");
  }
}
function TicketsComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 33);
  }
}
function TicketsComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketsComponent_tr_30_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const row_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.rowClick(row_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TicketsComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 35)(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class TicketsComponent {
  constructor(gqlQuery, dialog, ticketService) {
    this.gqlQuery = gqlQuery;
    this.dialog = dialog;
    this.ticketService = ticketService;
    // Private
    this.trackedVehicles = [];
    // Public
    this.isLoading = true;
    this.currentOffset = 0;
    this.ticketsList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource([]);
    this.currentPageSize = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("10");
    this.filter = {
      deviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("")
    };
    this.pageInfo = {
      hasNextPage: false,
      hasPreviousPage: false
    };
    this.columns = ['formant_time', 'device_name', 'expert_connect_title', 'expert_connect_bundle', 'expert_connect_tag_name'];
    // Events
    this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  requestTickets() {
    this.isLoading = true;
    this.ticketService.getJoinedTickets({
      offset: this.currentOffset,
      limit: parseInt(this.currentPageSize.value),
      deviceName: this.filter.deviceName.value
    }).subscribe(response => {
      this.trackedVehicles = response.tickets.rows;
      console.log(response);
      this.ticketsList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.trackedVehicles);
      this.pageInfo = response.tickets.pageInfo;
      this.isLoading = false;
    }, error => {
      this.trackedVehicles = [];
      this.ticketsList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.trackedVehicles);
      this.pageInfo = {
        hasNextPage: false,
        hasPreviousPage: false
      };
      this.isLoading = false;
    });
  }
  ngOnInit() {
    // Query Ticket
    this.requestTickets();
  }
  ngOnDestroy() {
    this.ticketsQuery?.unsubscribe();
  }
  applyFilter(e) {}
  rowClick(row) {
    const dialogRef = this.dialog.open(src_app_components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_0__.TicketDetailsComponent, {
      width: "80%",
      height: "625px",
      enterAnimationDuration: "200ms",
      exitAnimationDuration: "200ms",
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.onClick.emit(row.vehicle_id || row.id);
  }
  paginationHandler(arg) {
    switch (arg) {
      case "next":
        this.currentOffset = this.currentOffset + parseInt(this.currentPageSize.value);
        break;
      case "previous":
        this.currentOffset = this.currentOffset > 1 ? this.currentOffset - parseInt(this.currentPageSize.value) : 1;
        break;
    }
    this.requestTickets();
  }
  resetResubmit(e) {
    console.log(e);
    this.currentOffset = 1;
    this.requestTickets();
  }
}
TicketsComponent.ɵfac = function TicketsComponent_Factory(t) {
  return new (t || TicketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_graphql_gql_query_service_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__.TicketsService));
};
TicketsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TicketsComponent,
  selectors: [["app-tickets"]],
  outputs: {
    onUpdate: "onUpdate",
    onClick: "onClick"
  },
  decls: 55,
  vars: 8,
  consts: [[1, "filter-section"], [1, "filter-section_fields"], [1, "filter-section__vehicle"], ["matInput", "", "placeholder", "Vehicle", 3, "formControl", "keyup"], ["input", ""], [1, "filter-section__search"], ["mat-fab", "", "matInput", "", "aria-label", "search", 1, "filter-section__search", 3, "click"], ["mode", "indeterminate", 4, "ngIf"], [1, "table-area"], ["mat-table", "", 1, "tickets_table", 3, "dataSource"], ["matColumnDef", "formant_time"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "device_name"], ["matColumnDef", "expert_connect_title"], ["matColumnDef", "expert_connect_bundle"], ["matColumnDef", "expert_connect_tag_name"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "mat-row", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "footer"], [1, "pagination-row"], [1, "pagination-container"], [1, "pagination-button-container"], ["matNativeControl", "", 3, "formControl", "change"], ["value", "10"], ["value", "25"], ["value", "50"], ["mat-fab", "", "color", "primary", "aria-label", "previous", 3, "disabled", "click"], ["mat-fab", "", "color", "primary", "aria-label", "next", 3, "disabled", "click"], ["mode", "indeterminate"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 1, "mat-row", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function TicketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Vehicle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function TicketsComponent_Template_input_keyup_5_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketsComponent_Template_button_click_8_listener($event) {
        return ctx.resetResubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, TicketsComponent_mat_progress_bar_11_Template, 1, 0, "mat-progress-bar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "section", 8)(13, "table", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, TicketsComponent_th_15_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, TicketsComponent_td_16_Template, 3, 4, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, TicketsComponent_th_18_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, TicketsComponent_td_19_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, TicketsComponent_th_21_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, TicketsComponent_td_22_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](23, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, TicketsComponent_th_24_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, TicketsComponent_td_25_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](26, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, TicketsComponent_th_27_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, TicketsComponent_td_28_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, TicketsComponent_tr_29_Template, 1, 0, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, TicketsComponent_tr_30_Template, 1, 0, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, TicketsComponent_tr_31_Template, 3, 0, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "section", 20)(34, "div", 21)(35, "div", 22)(36, "div", 23)(37, "mat-form-field")(38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Page Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "select", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function TicketsComponent_Template_select_change_40_listener($event) {
        return ctx.resetResubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 23)(48, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketsComponent_Template_button_click_48_listener() {
        return ctx.paginationHandler("previous");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "arrow_back");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 23)(52, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketsComponent_Template_button_click_52_listener() {
        return ctx.paginationHandler("next");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "arrow_forward");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.filter.deviceName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.ticketsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.currentPageSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.currentOffset === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.pageInfo.hasNextPage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatFabButton, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatNoDataRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: [".filter-section[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: flex;\n  padding: 25px;\n  padding-bottom: 10px;\n  margin-top: 10px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section_fields[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section_fields[_ngcontent-%COMP%]   .filter-section__vehicle[_ngcontent-%COMP%] {\n  min-width: 0;\n  text-align: left;\n  align-self: center;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section__search[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section__search[_ngcontent-%COMP%]   .mat-mdc-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.table-area[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  border-left: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.table-area[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-area[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n.table-area[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-area[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.table-area[_ngcontent-%COMP%]   th.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n.table-area[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%], .table-area[_ngcontent-%COMP%]   tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-button-container[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RhYnMvdGlja2V0cy90aWNrZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRko7QUFLTTtFQUNFLHVCQUFBO0FBSFI7O0FBVUE7RUFDRSwyQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7QUFQRjtBQVNFO0VBQ0UsV0FBQTtBQVBKO0FBVUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0FBVEo7QUFZRTtFQUNFLFVBQUE7QUFWSjtBQWFFO0VBQ0UsWUFBQTtBQVhKO0FBY0U7RUFDRSxlQUFBO0FBWko7QUFnQkU7RUFDRSxlQUFBO0FBZEo7QUFpQkU7RUFDRSxxQ0FBQTtBQWZKOztBQW9CQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQWpCRjtBQW1CRTtFQUNFLFlBQUE7QUFqQkoiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgLmZpbHRlci1zZWN0aW9uX2ZpZWxkc3tcbiAgICB3aWR0aDogODAlO1xuXG4gICAgLmZpbHRlci1zZWN0aW9uX192ZWhpY2xle1xuICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuXG4gIC5maWx0ZXItc2VjdGlvbl9fc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG5cbiAgICAubWF0LW1kYy1mYWJ7XG4gICAgICAmLm1hdC1hY2NlbnR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbn1cblxuLnRhYmxlLWFyZWF7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICB0ZCwgdGgge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgdHIubWF0LXJvdywgdHIubWF0LWZvb3Rlci1yb3d7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICBcbiAgLm1hdC1tZGMtcm93IC5tYXQtbWRjLWNlbGwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLm1hdC1tZGMtcm93OmhvdmVyIC5tYXQtbWRjLWNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgfVxufVxuXG5cbi5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgLnBhZ2luYXRpb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);











function LoginComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.loginWithGoogle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login with Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class LoginComponent {
  constructor(socialAuthService, router, route, snackBar) {
    this.socialAuthService = socialAuthService;
    this.router = router;
    this.route = route;
    this.snackBar = snackBar;
    this.isLoggedin = false;
  }
  ngOnInit() {
    this.socialAuthService.authState.subscribe(user => {
      this.googleUser = user;
      this.isLoggedin = user != null;
      if (this.isLoggedin) {
        this.router.navigate(["/"]);
      }
      // else
      //   this.snackBar.open("LogIn Failed");
    });
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.GoogleLoginProvider.PROVIDER_ID);
  }
  logOut() {
    this.socialAuthService.signOut();
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 8,
  vars: 1,
  consts: [[1, "login"], [1, "login__card"], [1, "login__card--logo"], ["src", "/assets/brt-icon-sm.png"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["matSuffix", "", "aria-label", "Log into Google"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_button_7_Template, 4, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedin === false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon],
  styles: [".login[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(100vh - 50px);\n  background-color: var(--blueriver);\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%] {\n  width: 100vw;\n  max-width: 500px;\n  max-height: 700px;\n  margin: auto;\n  align-self: center;\n  justify-self: center;\n  top: 50px;\n  display: flex;\n  flex-direction: column;\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%]   .login__card--logo[_ngcontent-%COMP%] {\n  justify-self: center;\n  align-self: center;\n  margin-bottom: 10px;\n  flex-basis: 1;\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  align-items: center;\n  padding: 20px 0;\n  width: 100%;\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  margin: auto;\n  flex-basis: 1;\n  width: 100%;\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n}\n\n@media screen and (min-width: 800px) {\n  .login[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtBQUNKO0FBR0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURSO0FBR1E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRFo7QUFJUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUZaO0FBS1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSFo7O0FBUUE7RUFDSTtJQUNJLGFBQUE7RUFMTjtFQU9NO0lBQ0ksUUFBQTtFQUxWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlcml2ZXIpO1xuXG5cblxuICAgIC5sb2dpbl9fY2FyZCB7XG4gICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICB0b3A6NTBweDtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5sb2dpbl9fY2FyZC0tbG9nb3tcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgICAgICAgICAgZmxleC1iYXNpczogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgZmxleC1iYXNpczogMTtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNhcmQtYWN0aW9uc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCkge1xuICAgIC5sb2dpbiB7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcblxuICAgICAgICAubG9naW5fX2NhcmQge1xuICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1208:
/*!******************************************************!*\
  !*** ./src/app/pages/rules/rules/rules.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesComponent": () => (/* binding */ RulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_components_rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/rule-details/rule-details.component */ 9139);
/* harmony import */ var src_app_components_create_rule_modal_create_rule_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/create-rule-modal/create-rule-modal.component */ 1918);
/* harmony import */ var src_app_components_edit_rules_edit_rules_edit_rules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/edit-rules/edit-rules/edit-rules.component */ 9486);
/* harmony import */ var src_app_components_delete_rules_delete_rules_delete_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/delete-rules/delete-rules/delete-rules.component */ 4470);
/* harmony import */ var src_app_services_graphql_gql_query_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service.service */ 9138);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tickets.service */ 4695);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/layout/layout.component */ 9520);





















function RulesComponent_mat_progress_bar_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-bar", 21);
  }
}
function RulesComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Stream Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RulesComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r11.stream_name, " ");
  }
}
function RulesComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Stream Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RulesComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r12.stream_type, " ");
  }
}
function RulesComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 22);
  }
}
function RulesComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RulesComponent_td_27_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const col_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.viewClick(col_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RulesComponent_td_27_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const col_r13 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.editClick(col_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RulesComponent_td_27_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const col_r13 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.deleteClick(col_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function RulesComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 28);
  }
}
function RulesComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 29);
  }
}
function RulesComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 30)(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class RulesComponent {
  constructor(gqlQuery, dialog, ticketService) {
    this.gqlQuery = gqlQuery;
    this.dialog = dialog;
    this.ticketService = ticketService;
    // Private
    this.trackedRules = [];
    // Public
    this.isLoading = true;
    this.currentOffset = 1;
    this.rulesList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource([]);
    this.currentPageSize = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("10");
    this.filter = {
      streamName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("")
    };
    this.pageInfo = {
      hasNextPage: false,
      hasPreviousPage: false
    };
    this.columns = ["stream_name", "stream_type", "delete"];
    // Events
    this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  requestRules() {
    this.isLoading = true;
    this.rulesQuery = this.ticketService.getRulesByStreamName({
      offset: this.currentOffset,
      limit: parseInt(this.currentPageSize.value),
      streamName: this.filter.streamName.value
    }).subscribe(response => {
      console.log(response);
      this.trackedRules = response.rows;
      this.rulesList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.trackedRules);
      this.pageInfo = response.pageInfo;
      this.isLoading = false;
    });
  }
  ngOnInit() {
    this.requestRules();
  }
  ngOnDestroy() {
    this.rulesQuery?.unsubscribe();
    this.dialogClosed?.unsubscribe();
  }
  viewClick(row) {
    const dialogRef = this.dialog.open(src_app_components_rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_0__.RuleDetailsComponent, {
      width: "80%",
      height: "625px",
      enterAnimationDuration: "200ms",
      exitAnimationDuration: "200ms",
      data: row
    });
    this.dialogClosed = dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.requestRules();
    });
    this.onClick.emit(row);
  }
  deleteClick(row) {
    const dialogRef = this.dialog.open(src_app_components_delete_rules_delete_rules_delete_rules_component__WEBPACK_IMPORTED_MODULE_3__.DeleteRulesComponent, {
      width: "50%",
      height: "225px",
      enterAnimationDuration: "200ms",
      exitAnimationDuration: "200ms",
      data: row
    });
    this.dialogClosed = dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.requestRules();
    });
    this.onClick.emit(row);
  }
  editClick(row) {
    const dialogRef = this.dialog.open(src_app_components_edit_rules_edit_rules_edit_rules_component__WEBPACK_IMPORTED_MODULE_2__.EditRulesComponent, {
      width: "80%",
      height: "625px",
      enterAnimationDuration: "200ms",
      exitAnimationDuration: "200ms",
      data: row
    });
    this.dialogClosed = dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.requestRules();
    });
    this.onClick.emit(row);
  }
  addRuleButtonHandler(evt) {
    const dialogRef = this.dialog.open(src_app_components_create_rule_modal_create_rule_modal_component__WEBPACK_IMPORTED_MODULE_1__.CreateRuleModalComponent, {
      width: "80%",
      height: "625px",
      enterAnimationDuration: "200ms",
      exitAnimationDuration: "200ms"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.requestRules();
    });
    this.onClick.emit();
  }
  paginationHandler(arg) {
    switch (arg) {
      case "next":
        this.currentOffset = this.currentOffset + parseInt(this.currentPageSize.value);
        break;
      case "previous":
        this.currentOffset = this.currentOffset > 1 ? this.currentOffset - parseInt(this.currentPageSize.value) : 1;
        break;
    }
    this.requestRules();
  }
  resetResubmit(e) {
    console.log(e);
    this.currentOffset = 1;
    this.requestRules();
  }
}
RulesComponent.ɵfac = function RulesComponent_Factory(t) {
  return new (t || RulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service_service__WEBPACK_IMPORTED_MODULE_4__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_5__.TicketsService));
};
RulesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: RulesComponent,
  selectors: [["app-rules"]],
  outputs: {
    onUpdate: "onUpdate",
    onClick: "onClick"
  },
  decls: 32,
  vars: 5,
  consts: [[1, "filter-section"], [1, "filter-section_fields"], [1, "filter-section__vehicle"], ["matInput", "", "placeholder", "Stream Name", 3, "formControl"], ["input", ""], [1, "filter-section__search"], ["mat-fab", "", "matInput", "", "aria-label", "search", 1, "filter-section__search", 3, "click"], [1, "filter-add-rule"], ["mat-fab", "", "matInput", "", "color", "warn", "aria-label", "add rule", 1, "filter-add_rule", 3, "click"], ["mode", "indeterminate", 4, "ngIf"], [1, "table-area"], ["mat-table", "", 1, "tickets_table", 3, "dataSource"], ["matColumnDef", "stream_name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "stream_type"], ["matColumnDef", "delete"], ["mat-cell", "", "class", "last-cell ", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "mat-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mode", "indeterminate"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "last-cell"], ["mat-fab", "", "matInput", "", "color", "basic", "aria-label", "view", 1, "filter-add_rule", 3, "click"], ["mat-fab", "", "matInput", "", "color", "accent", "aria-label", "edit", 1, "filter-add_rule", 3, "click"], ["mat-fab", "", "matInput", "", "color", "warn", "aria-label", "delete", 1, "filter-add_rule", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "mat-row"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function RulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-layout")(1, "section", 0)(2, "div", 1)(3, "mat-form-field", 2)(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Stream");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RulesComponent_Template_button_click_9_listener($event) {
        return ctx.resetResubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7)(13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RulesComponent_Template_button_click_13_listener($event) {
        return ctx.addRuleButtonHandler($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, RulesComponent_mat_progress_bar_16_Template, 1, 0, "mat-progress-bar", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "section", 10)(18, "table", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, RulesComponent_th_20_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, RulesComponent_td_21_Template, 2, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, RulesComponent_th_23_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, RulesComponent_td_24_Template, 2, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RulesComponent_th_26_Template, 1, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, RulesComponent_td_27_Template, 10, 0, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, RulesComponent_tr_28_Template, 1, 0, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, RulesComponent_tr_29_Template, 1, 0, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, RulesComponent_tr_30_Template, 3, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.filter.streamName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.rulesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatFabButton, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatNoDataRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__.LayoutComponent],
  styles: [".filter-section[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: flex;\n  padding: 25px;\n  padding-bottom: 10px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section_fields[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section_fields[_ngcontent-%COMP%]   .filter-section__vehicle[_ngcontent-%COMP%] {\n  min-width: 0;\n  text-align: left;\n  align-self: center;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section__search[_ngcontent-%COMP%]   .mat-mdc-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-add-rule[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-add-rule[_ngcontent-%COMP%]   .mat-mdc-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.table-area[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  border-left: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.table-area[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-area[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n.table-area[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-area[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.table-area[_ngcontent-%COMP%]   th.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n.table-area[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%], .table-area[_ngcontent-%COMP%]   tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-button-container[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.last-cell[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: flex-end !important;\n  width: 100% !important;\n  height: 55px;\n  align-items: center;\n}\n.last-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  max-width: 40px;\n  max-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcnVsZXMvcnVsZXMvcnVsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUtNO0VBQ0UsdUJBQUE7QUFIUjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBTko7QUFTTTtFQUNFLHFCQUFBO0FBUFI7O0FBY0E7RUFDRSwyQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7QUFYRjtBQWFFO0VBQ0UsV0FBQTtBQVhKO0FBY0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVpKO0FBZUU7RUFDRSxlQUFBO0FBYko7QUFnQkU7RUFDRSxVQUFBO0FBZEo7QUFpQkU7RUFDRSxZQUFBO0FBZko7QUFrQkU7RUFDRSxlQUFBO0FBaEJKO0FBb0JFO0VBQ0UsZUFBQTtBQWxCSjtBQXFCRTtFQUNFLHFDQUFBO0FBbkJKOztBQXdCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQXJCRjtBQXVCRTtFQUNFLFlBQUE7QUFyQko7O0FBeUJBO0VBQ0Usd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdEJGO0FBd0JFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXRCSiIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItc2VjdGlvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAuZmlsdGVyLXNlY3Rpb25fZmllbGRze1xuICAgIHdpZHRoOiAyMCU7XG5cbiAgICAuZmlsdGVyLXNlY3Rpb25fX3ZlaGljbGV7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5maWx0ZXItc2VjdGlvbl9fc2VhcmNoe1xuICAgIC5tYXQtbWRjLWZhYntcbiAgICAgICYubWF0LWFjY2VudHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpbHRlci1hZGQtcnVsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG5cbiAgICAubWF0LW1kYy1mYWJ7XG4gICAgICAmLm1hdC1hY2NlbnR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG59XG5cbi50YWJsZS1hcmVhe1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xuXG4gIC5tYXQtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdHIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgdGQsIHRoIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIFxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIHRyLm1hdC1yb3csIHRyLm1hdC1mb290ZXItcm93e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgXG4gIC5tYXQtbWRjLXJvdyAubWF0LW1kYy1jZWxsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5tYXQtbWRjLXJvdzpob3ZlciAubWF0LW1kYy1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xMik7XG4gIH1cbn1cblxuXG4ucGFnaW5hdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gIC5wYWdpbmF0aW9uLWJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxufVxuXG4ubGFzdC1jZWxsIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYnV0dG9ue1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIG1heC13aWR0aDogNDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1364:
/*!*********************************************!*\
  !*** ./src/app/routes/app-routes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/login/login.component */ 4902);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth-guard.service */ 9404);
/* harmony import */ var _pages_rules_rules_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/rules/rules/rules.component */ 1208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: "",
  component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
  canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
  runGuardsAndResolvers: 'always'
}, {
  path: "rules",
  component: _pages_rules_rules_rules_component__WEBPACK_IMPORTED_MODULE_3__.RulesComponent,
  canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
  runGuardsAndResolvers: 'always'
}, {
  path: "login",
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}];
class AppRoutes {}
AppRoutes.ɵfac = function AppRoutes_Factory(t) {
  return new (t || AppRoutes)();
};
AppRoutes.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutes
});
AppRoutes.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutes, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 9404:
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuardService {
  constructor(socialAuthService, router) {
    this.socialAuthService = socialAuthService;
    this.router = router;
  }
  canActivate(route, state) {
    return new Promise(resolve => {
      this.socialAuthService.authState.subscribe(user => {
        if (user != null) resolve(user != null);else this.router.navigate(["/login"]);
      });
    });
  }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
  return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthGuardService,
  factory: AuthGuardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9138:
/*!***************************************************************!*\
  !*** ./src/app/services/graphql/gql-query.service.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GqlQueryService": () => (/* binding */ GqlQueryService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../graphql */ 5036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ 26);




class GqlQueryService {
  constructor(graphService) {
    this.graphService = graphService;
  }
  basicFilteredQuery(Query, variables = {}) {
    return this.graphService.watchQuery({
      query: Query,
      variables
    }).valueChanges;
  }
  getJoinedTickets(variables = {
    offset: 1,
    limit: 10
  }) {
    return this.basicFilteredQuery(_graphql__WEBPACK_IMPORTED_MODULE_0__.Query.Tickets.JoinedTickets, variables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      return {
        data: response.data.connections.nodes,
        pageInfo: response.data.connections.pageInfo
      };
    }));
  }
  getTicketsView(variables = {
    offset: 1,
    limit: 10,
    deviceName: ""
  }) {
    return this.basicFilteredQuery(_graphql__WEBPACK_IMPORTED_MODULE_0__.Query.Tickets.TicketsView, variables);
  }
  getRulesByStreamName(variables = {
    offset: 1,
    limit: 10,
    streamName: ""
  }) {
    return this.basicFilteredQuery(_graphql__WEBPACK_IMPORTED_MODULE_0__.Query.Rules.RulesByStreamName, variables);
  }
}
GqlQueryService.ɵfac = function GqlQueryService_Factory(t) {
  return new (t || GqlQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__.Apollo));
};
GqlQueryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: GqlQueryService,
  factory: GqlQueryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7335:
/*!*******************************************!*\
  !*** ./src/app/services/rules.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesService": () => (/* binding */ RulesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class RulesService {
  constructor(http) {
    this.http = http;
  }
  createRule(rule) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.enpoints.post.rules}`, rule);
  }
  updateRule(rule) {
    return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.enpoints.post.rules}`, rule);
  }
  deleteRule(id = 0) {
    return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.enpoints.post.rules}?id=${id}`);
  }
}
RulesService.ɵfac = function RulesService_Factory(t) {
  return new (t || RulesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
RulesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RulesService,
  factory: RulesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4695:
/*!*********************************************!*\
  !*** ./src/app/services/tickets.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsService": () => (/* binding */ TicketsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class TicketsService {
  constructor(http) {
    this.http = http;
  }
  getJoinedTickets(params = {
    offset: 1,
    limit: 10,
    deviceName: ""
  }) {
    const {
      offset,
      limit,
      deviceName
    } = params;
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.enpoints.get.tickets.all}?offset=${offset}&limit=${limit}&device_name=${deviceName}`);
  }
  getTicketsView(variables = {
    offset: 1,
    limit: 10,
    deviceName: ""
  }) {}
  getRulesByStreamName(params = {
    offset: 1,
    limit: 10,
    streamName: ""
  }) {
    const {
      offset = 1,
      limit = 10,
      streamName = ""
    } = params;
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.enpoints.get.rules.all}?offset=${offset}&limit=${limit}&stream_name=${streamName}`);
  }
  getBagMonitoringTickets(params = {
    offset: 1,
    limit: 10,
    device_name: "",
    error_message: "",
    error_code: "",
    vpu_position: ""
  }) {
    const {
      offset = 1,
      limit = 10,
      device_name = "",
      error_message = "",
      error_code = "",
      vpu_position = ""
    } = params;
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.enpoints.get.tickets.bagMonitoring}?offset=${offset}&limit=${limit}&device_name=${device_name}&error_message=${error_message}&error_code=${error_code}&vpu_position=${vpu_position}`);
  }
}
TicketsService.ɵfac = function TicketsService_Factory(t) {
  return new (t || TicketsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
TicketsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TicketsService,
  factory: TicketsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _shared_confg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.confg */ 3500);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
  production: false,
  ..._shared_confg__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 3500:
/*!******************************************!*\
  !*** ./src/environments/shared.confg.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sharedConfig)
/* harmony export */ });
const sharedConfig = {
  googleAuthClientId: '1068443878218-kk375e4311cc3r2rk3b0hn9ukm900tjo.apps.googleusercontent.com',
  mapboxAPIKey: "pk.eyJ1IjoiYW50Ymx1ZXJpdmVydGVjaCIsImEiOiJja295a3IwemowbjMwMndwZ2RkdHY2bmJjIn0.xpY0kRQNFTeFgc5l6hqRtQ",
  serviceEndpoint: "/graphql",
  requestToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.MAtt7IgMfvx0f9pPkez_vMfxAcylTD4w0OC0H_V6cnE',
  enpoints: {
    post: {
      rules: "/api/rules/formant"
    },
    put: {
      rules: "/api/rules/formant"
    },
    delete: {
      rules: "/api/rules/formant"
    },
    get: {
      tickets: {
        all: "/api/tickets/all",
        bagMonitoring: "/api/tickets/bag-monitoring"
      },
      rules: {
        all: "/api/rules/formant"
      }
    }
  }
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map