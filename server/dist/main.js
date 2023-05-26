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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/app-routes.module */ 1364);
/* harmony import */ var _modules_graphql_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/graphql.module */ 2504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/client/core */ 7156);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @apollo/client/core */ 4000);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client/link/context */ 4765);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client/link/error */ 609);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! apollo-angular */ 26);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! apollo-angular/http */ 3334);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ 9404);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/layout.component */ 9520);
/* harmony import */ var _components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ticket-details/ticket-details.component */ 610);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/chips */ 169);
/* harmony import */ var _components_navigation_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/top-navigation-bar/top-navigation-bar.component */ 948);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ 543);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/menu */ 589);
/* harmony import */ var _pages_rules_rules_rules_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/rules/rules/rules.component */ 208);
/* harmony import */ var _components_rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/rule-details/rule-details.component */ 139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);







//Components


// Enviornment Variables






// Google OAuth



// Material


























const errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_12__.onError)(({
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
const basicContext = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_13__.setContext)((_, {
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
  const cache = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_14__.InMemoryCache({});
  // create http 
  const http = httpLink.create({
    uri: `${location.protocol}//${location.host}${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.serviceEndpoint}`
  });
  return {
    connectToDevTools: !_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
    assumeImmutableResults: true,
    cache,
    link: _apollo_client_core__WEBPACK_IMPORTED_MODULE_15__.ApolloLink.from([basicContext, errorLink, http]),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all'
      }
    }
  };
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [{
        id: _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_17__.GoogleLoginProvider.PROVIDER_ID,
        provider: new _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_17__.GoogleLoginProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.googleAuthClientId)
      }]
    }
  }, {
    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_18__.APOLLO_OPTIONS,
    useFactory: createDefaultApollo,
    deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_19__.HttpLink]
  }, _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuardService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes, apollo_angular__WEBPACK_IMPORTED_MODULE_18__.ApolloModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _modules_graphql_module__WEBPACK_IMPORTED_MODULE_1__.GraphQLModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_17__.SocialLoginModule,
  // Material
  _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__.MatGridListModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__.MatDialogModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_40__.MatChipsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__.MatMenuModule
  // 
  ,
  // Material
  _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__.MatGridListModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__.MatMenuModule
  // 
  ]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__.LayoutComponent, _components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_8__.TicketDetailsComponent, _components_navigation_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__.TopNavigationBarComponent, _pages_rules_rules_rules_component__WEBPACK_IMPORTED_MODULE_10__.RulesComponent, _components_rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_11__.RuleDetailsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes, apollo_angular__WEBPACK_IMPORTED_MODULE_18__.ApolloModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _modules_graphql_module__WEBPACK_IMPORTED_MODULE_1__.GraphQLModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_17__.SocialLoginModule,
    // Material
    _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__.MatGridListModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__.MatDialogModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_40__.MatChipsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__.MatMenuModule
    // 
    ],
    exports: [
    // Material
    _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__.MatGridListModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__.MatMenuModule
    // 
    ]
  });
})();

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
/* harmony import */ var _navigation_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation/top-navigation-bar/top-navigation-bar.component */ 948);


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

/***/ 948:
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
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 543);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 589);






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

/***/ 139:
/*!*******************************************************************!*\
  !*** ./src/app/components/rule-details/rule-details.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsComponent": () => (/* binding */ RuleDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);








function RuleDetailsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span", 6)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Condition:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Operator:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6)(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Values:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rule_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r2.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r2.operator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r2.value);
  }
}
function RuleDetailsComponent_mat_list_item_25_mat_list_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item")(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Conditions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "span", 6)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Condition:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Operator:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6)(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Values:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const assocCond_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](assocCond_r5.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](assocCond_r5.operator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](assocCond_r5.value);
  }
}
function RuleDetailsComponent_mat_list_item_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item")(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RuleDetailsComponent_mat_list_item_25_mat_list_item_3_Template, 16, 3, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const assocRule_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](assocRule_r3.streamName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForIn", assocRule_r3.formantAssocStreamConditionsByAssocId.node);
  }
}
class RuleDetailsComponent {
  constructor(data) {
    this.data = data;
  }
}
RuleDetailsComponent.ɵfac = function RuleDetailsComponent_Factory(t) {
  return new (t || RuleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
RuleDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RuleDetailsComponent,
  selectors: [["app-rule-details"]],
  decls: 27,
  vars: 4,
  consts: [[1, "wrapper"], ["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "content"], ["matListItemTitle", ""], [4, "ngFor", "ngForIn"], [1, "footer"], ["matListItemLine", ""]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content")(14, "mat-list")(15, "mat-list-item")(16, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RuleDetailsComponent_div_18_Template, 13, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card")(20, "mat-card-header")(21, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Associated Streams");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content")(24, "mat-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RuleDetailsComponent_mat_list_item_25_Template, 4, 2, "mat-list-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.streamName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForIn", ctx.data.fornantRulesConditionsByRuleId.nodes);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForIn", ctx.data.formantAssociatedStreamsByRuleId.nodes);
    }
  },
  dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .list-item-tags[_ngcontent-%COMP%] {\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  display: inline;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: var(--mdc-typography-button-font-size, 14px);\n  line-height: var(--mdc-typography-button-line-height, 36px);\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: var(--mdc-typography-button-text-transform, none);\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: flex-end;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  bottom: 0px;\n  position: absolute;\n  margin-bottom: 30px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n@media screen and (min-width: 500px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n  }\n}\n@media only screen and (min-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n    flex-direction: inherit;\n  }\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ydWxlLWRldGFpbHMvcnVsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBRUk7RUFDRSxhQUFBO0FBQU47QUFHSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDRHQUFBO0VBQ0EsdURBQUE7RUFDQSwyREFBQTtFQUNBLDBEQUFBO0VBQ0EsMkVBQUE7RUFDQSwyRUFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUFETjtBQUlJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBRk47QUFNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU1JO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKTjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFORjs7QUFTQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQ0FBQTtJQUNBLDRDQUFBO0lBQ0EscUJBQUE7SUFDQSxjQUFBO0VBTkY7QUFDRjtBQVNBO0VBRUk7SUFDRSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxrQ0FBQTtJQUNBLDRDQUFBO0lBQ0EscUJBQUE7SUFDQSxjQUFBO0lBQ0EsdUJBQUE7RUFSSjtFQVVJO0lBQ0UsZ0JBQUE7RUFSTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBtYXJnaW46IDIwcHg7XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5saXN0LWl0ZW0tdGFncyB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLnRhZ3N7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWZvbnQtZmFtaWx5LCB2YXIoLS1tZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseSwgUm9ib3RvLCBzYW5zLXNlcmlmKSk7XG4gICAgICBmb250LXNpemU6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LXNpemUsIDE0cHgpO1xuICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1saW5lLWhlaWdodCwgMzZweCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWZvbnQtd2VpZ2h0LCA1MDApO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1sZXR0ZXItc3BhY2luZywgMC4wODkyODU3MTQzZW0pO1xuICAgICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi10ZXh0LWRlY29yYXRpb24sIG5vbmUpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC1kZWNvcmF0aW9uLCBub25lKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC10cmFuc2Zvcm0sIG5vbmUpO1xuICAgIH1cblxuICAgIC53cmFwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLmNsb3NlIHtcbiAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gIH1cbn1cblxuLmNsb3NlLWJ1dHRvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLW5hdiBtYWluLWNvbnRlbnRcIjtcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpICB7XG4gIC53cmFwcGVye1xuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZS1uYXYgbWFpbi1jb250ZW50XCI7XG4gICAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xuXG4gICAgICAubWF0LW1kYy1jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 610:
/*!***********************************************************************!*\
  !*** ./src/app/components/ticket-details/ticket-details.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketDetailsComponent": () => (/* binding */ TicketDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 169);









class TicketDetailsComponent {
  constructor(data) {
    this.data = data;
    this.expertConnectTags = "";
    this.expertConnectLink = "";
    this.formantData = {};
    this.expertConnectTags = this.data.expertConnectTagName;
    this.expertConnectLink = this.data.jiraExpertConnectLink?.replace(/([\\"]+)/gi, "");
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
  decls: 116,
  vars: 18,
  consts: [[1, "wrapper"], ["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "content"], ["matListItemTitle", ""], ["matListItemLine", "", 1, "wrap"], ["matListItemLine", ""], ["target", "_blank", 3, "href"], [1, "list-item-tags"], [1, "tags"], ["aria-label", "expert-connect-tags"], [1, "footer"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-list-item", 7)(39, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tags");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8)(42, "mat-chip-listbox", 9)(43, "mat-chip");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card")(46, "mat-card-header")(47, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Jira");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-content")(50, "mat-list")(51, "mat-list-item")(52, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Ticket");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-list-item")(57, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Machine Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-list-item")(62, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-list-item")(67, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Requirement");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-list-item")(72, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Roadmap Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card")(77, "mat-card-header")(78, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Formant");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-content")(81, "mat-list")(82, "mat-list-item")(83, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 5)(86, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Formant Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-list-item")(91, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-list-item")(96, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "ERC");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-list-item")(101, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "SUP");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-list-item")(106, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-list-item")(111, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.deviceName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.expertConnectTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.expertConnectBundle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.expertConnectTeamName);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.expertConnectLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.expertConnectTags);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.jiraTicket);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.jiraMachineType);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.jiraPriority);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.jiraRequirement);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.jiraRoadmapItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.data.formantUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.formantTime);
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
  dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItemTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipListbox],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .list-item-tags[_ngcontent-%COMP%] {\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  display: inline;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: var(--mdc-typography-button-font-size, 14px);\n  line-height: var(--mdc-typography-button-line-height, 36px);\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: var(--mdc-typography-button-text-transform, none);\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  height: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: flex-end;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  bottom: 0px;\n  position: absolute;\n  margin-bottom: 30px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n@media screen and (min-width: 500px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n  }\n}\n@media only screen and (min-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 10px;\n    flex-direction: inherit;\n  }\n  .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtZGV0YWlscy90aWNrZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7QUFDTjtBQUVJO0VBQ0UsYUFBQTtBQUFOO0FBR0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0R0FBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSwwREFBQTtFQUNBLDJFQUFBO0VBQ0EsMkVBQUE7RUFDQSxtRUFBQTtFQUNBLGlFQUFBO0FBRE47QUFJSTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUZOO0FBTUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSko7QUFNSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSk47O0FBU0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0NBQUE7SUFDQSw0Q0FBQTtJQUNBLHFCQUFBO0lBQ0EsY0FBQTtFQU5GO0FBQ0Y7QUFTQTtFQUVJO0lBQ0UsZ0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0NBQUE7SUFDQSw0Q0FBQTtJQUNBLHFCQUFBO0lBQ0EsY0FBQTtJQUNBLHVCQUFBO0VBUko7RUFVSTtJQUNFLGdCQUFBO0VBUk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgbWFyZ2luOiAyMHB4O1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAubGlzdC1pdGVtLXRhZ3Mge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC50YWdze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LWZhbWlseSwgdmFyKC0tbWRjLXR5cG9ncmFwaHktZm9udC1mYW1pbHksIFJvYm90bywgc2Fucy1zZXJpZikpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tZm9udC1zaXplLCAxNHB4KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tbGluZS1oZWlnaHQsIDM2cHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LXdlaWdodCwgNTAwKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tbGV0dGVyLXNwYWNpbmcsIDAuMDg5Mjg1NzE0M2VtKTtcbiAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC1kZWNvcmF0aW9uLCBub25lKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLXRleHQtZGVjb3JhdGlvbiwgbm9uZSk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLXRleHQtdHJhbnNmb3JtLCBub25lKTtcbiAgICB9XG5cbiAgICAud3JhcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgIC5jbG9zZSB7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICB9XG59XG5cbi5jbG9zZS1idXR0b257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZS1uYXYgbWFpbi1jb250ZW50XCI7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA1MHB4KSAge1xuICAud3JhcHBlcntcbiAgICAuY29udGVudCB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInNpZGUtbmF2IG1haW4tY29udGVudFwiO1xuICAgICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogaW5oZXJpdDtcblxuICAgICAgLm1hdC1tZGMtY2FyZCB7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 36:
/*!**********************************!*\
  !*** ./src/app/graphql/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* reexport module object */ _query__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ 45);



/***/ }),

/***/ 45:
/*!****************************************!*\
  !*** ./src/app/graphql/query/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rules": () => (/* reexport module object */ _rules__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "Tickets": () => (/* reexport module object */ _tickets__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets */ 306);
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules */ 523);




/***/ }),

/***/ 523:
/*!**********************************************!*\
  !*** ./src/app/graphql/query/rules/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesByStreamName": () => (/* reexport safe */ _rulesByStreamName__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _rulesByStreamName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rulesByStreamName */ 993);



/***/ }),

/***/ 993:
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

/***/ 306:
/*!************************************************!*\
  !*** ./src/app/graphql/query/tickets/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JoinedTickets": () => (/* reexport safe */ _joined__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "TicketsView": () => (/* reexport safe */ _tickets_view__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _joined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./joined */ 433);
/* harmony import */ var _tickets_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets-view */ 876);




/***/ }),

/***/ 433:
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

/***/ 876:
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_components_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/ticket-details/ticket-details.component */ 610);
/* harmony import */ var _services_graphql_gql_query_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/graphql/gql-query.service.service */ 138);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/layout.component */ 9520);

















function DashboardComponent_mat_progress_bar_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 31);
  }
}
function DashboardComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Formant ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r17.formantId, " ");
  }
}
function DashboardComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r18.deviceName, " ");
  }
}
function DashboardComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r19.expertConnectTitle, " ");
  }
}
function DashboardComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Bundle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r20.expertConnectBundle, " ");
  }
}
function DashboardComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r21.formantTime, " ");
  }
}
function DashboardComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r22.expertConnectTagName, " ");
  }
}
function DashboardComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 34);
  }
}
function DashboardComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_tr_34_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const row_r23 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.rowClick(row_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 36)(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class DashboardComponent {
  constructor(gqlQuery, dialog) {
    this.gqlQuery = gqlQuery;
    this.dialog = dialog;
    // Private
    this.trackedVehicles = [];
    // Public
    this.isLoading = true;
    this.currentOffset = 1;
    this.ticketsList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource([]);
    this.currentPageSize = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("10");
    this.filter = {
      deviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("")
    };
    this.pageInfo = {
      hasNextPage: false,
      hasPreviousPage: false
    };
    this.columns = ['formantId', 'deviceName', 'expertConnectTitle', 'expertConnectBundle', 'formantTime', 'expertConnectTagName'];
    // Events
    this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  requestTickets() {
    this.isLoading = true;
    this.ticketsQuery = this.gqlQuery.getTicketsView({
      offset: this.currentOffset,
      limit: parseInt(this.currentPageSize.value),
      deviceName: this.filter.deviceName.value
    }).subscribe(response => {
      this.trackedVehicles = response.data.ticketsViews.nodes;
      console.log(response);
      this.ticketsList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.trackedVehicles);
      this.pageInfo = response.data.ticketsViews.pageInfo;
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
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_graphql_gql_query_service_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  outputs: {
    onUpdate: "onUpdate",
    onClick: "onClick"
  },
  decls: 59,
  vars: 8,
  consts: [[1, "filter-section"], [1, "filter-section_fields"], [1, "filter-section__vehicle"], ["matInput", "", "placeholder", "Vehicle", 3, "formControl", "keyup"], ["input", ""], [1, "filter-section__search"], ["mat-fab", "", "matInput", "", "aria-label", "search", 1, "filter-section__search", 3, "click"], ["mode", "indeterminate", 4, "ngIf"], [1, "table-area"], ["mat-table", "", 1, "tickets_table", 3, "dataSource"], ["matColumnDef", "formantId"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "deviceName"], ["matColumnDef", "expertConnectTitle"], ["matColumnDef", "expertConnectBundle"], ["matColumnDef", "formantTime"], ["matColumnDef", "expertConnectTagName"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "mat-row", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "footer"], [1, "pagination-row"], [1, "pagination-container"], [1, "pagination-button-container"], ["matNativeControl", "", 3, "formControl", "change"], ["value", "10"], ["value", "25"], ["value", "50"], ["mat-fab", "", "color", "primary", "aria-label", "previous", 3, "disabled", "click"], ["mat-fab", "", "color", "primary", "aria-label", "next", 3, "disabled", "click"], ["mode", "indeterminate"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 1, "mat-row", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-layout")(1, "section", 0)(2, "div", 1)(3, "mat-form-field", 2)(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Vehicle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function DashboardComponent_Template_input_keyup_6_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_9_listener($event) {
        return ctx.resetResubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DashboardComponent_mat_progress_bar_12_Template, 1, 0, "mat-progress-bar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "section", 8)(14, "table", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DashboardComponent_th_16_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, DashboardComponent_td_17_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DashboardComponent_th_19_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, DashboardComponent_td_20_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, DashboardComponent_th_22_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, DashboardComponent_td_23_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, DashboardComponent_th_25_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, DashboardComponent_td_26_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, DashboardComponent_th_28_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, DashboardComponent_td_29_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, DashboardComponent_th_31_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, DashboardComponent_td_32_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, DashboardComponent_tr_33_Template, 1, 0, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, DashboardComponent_tr_34_Template, 1, 0, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, DashboardComponent_tr_35_Template, 3, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "section", 21)(38, "div", 22)(39, "div", 23)(40, "div", 24)(41, "mat-form-field")(42, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Page Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "select", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DashboardComponent_Template_select_change_44_listener($event) {
        return ctx.resetResubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 24)(52, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_52_listener() {
        return ctx.paginationHandler("previous");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "arrow_back");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 24)(56, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_56_listener() {
        return ctx.paginationHandler("next");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "arrow_forward");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.filter.deviceName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.ticketsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatFabButton, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatNoDataRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent],
  styles: [".filter-section[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: flex;\n  padding: 25px;\n  padding-bottom: 10px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section_fields[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section_fields[_ngcontent-%COMP%]   .filter-section__vehicle[_ngcontent-%COMP%] {\n  min-width: 0;\n  text-align: left;\n  align-self: center;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section__search[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section__search[_ngcontent-%COMP%]   .mat-mdc-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.table-area[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  border-left: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.table-area[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-area[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n.table-area[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-area[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.table-area[_ngcontent-%COMP%]   th.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n.table-area[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%], .table-area[_ngcontent-%COMP%]   tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-button-container[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNOO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFGSjtBQUtNO0VBQ0UsdUJBQUE7QUFIUjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsMENBQUE7RUFDQSw0Q0FBQTtBQVBGO0FBU0U7RUFDRSxXQUFBO0FBUEo7QUFVRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBUko7QUFXRTtFQUNFLGVBQUE7QUFUSjtBQVlFO0VBQ0UsVUFBQTtBQVZKO0FBYUU7RUFDRSxZQUFBO0FBWEo7QUFjRTtFQUNFLGVBQUE7QUFaSjtBQWdCRTtFQUNFLGVBQUE7QUFkSjtBQWlCRTtFQUNFLHFDQUFBO0FBZko7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBakJGO0FBbUJFO0VBQ0UsWUFBQTtBQWpCSiIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItc2VjdGlvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAuZmlsdGVyLXNlY3Rpb25fZmllbGRze1xuICAgIHdpZHRoOiA4MCU7XG5cbiAgICAuZmlsdGVyLXNlY3Rpb25fX3ZlaGljbGV7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG5cbiAgLmZpbHRlci1zZWN0aW9uX19zZWFyY2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcblxuICAgIC5tYXQtbWRjLWZhYntcbiAgICAgICYubWF0LWFjY2VudHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxufVxuXG4udGFibGUtYXJlYXtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIHRkLCB0aCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICBcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICB0ci5tYXQtcm93LCB0ci5tYXQtZm9vdGVyLXJvd3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIFxuICAubWF0LW1kYy1yb3cgLm1hdC1tZGMtY2VsbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAubWF0LW1kYy1yb3c6aG92ZXIgLm1hdC1tZGMtY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMTIpO1xuICB9XG59XG5cblxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAucGFnaW5hdGlvbi1idXR0b24tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ 208:
/*!******************************************************!*\
  !*** ./src/app/pages/rules/rules/rules.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesComponent": () => (/* binding */ RulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_components_rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/rule-details/rule-details.component */ 139);
/* harmony import */ var src_app_services_graphql_gql_query_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service.service */ 138);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout/layout.component */ 9520);

















function RulesComponent_mat_progress_bar_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 27);
  }
}
function RulesComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Stream Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RulesComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r9.streamName, " ");
  }
}
function RulesComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Stream Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RulesComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r10.streamType, " ");
  }
}
function RulesComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 30);
  }
}
function RulesComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RulesComponent_tr_22_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const row_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.rowClick(row_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RulesComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 32)(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class RulesComponent {
  constructor(gqlQuery, dialog) {
    this.gqlQuery = gqlQuery;
    this.dialog = dialog;
    // Private
    this.trackedRules = [];
    // Public
    this.isLoading = true;
    this.currentOffset = 1;
    this.rulesList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource([]);
    this.currentPageSize = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("10");
    this.filter = {
      streamName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("")
    };
    this.pageInfo = {
      hasNextPage: false,
      hasPreviousPage: false
    };
    this.columns = ["streamName", "streamType"];
    // Events
    this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  requestRules() {
    this.isLoading = true;
    this.rulesQuery = this.gqlQuery.getRulesByStreamName({
      offset: this.currentOffset,
      limit: parseInt(this.currentPageSize.value),
      streamName: this.filter.streamName.value
    }).subscribe(response => {
      console.log(response);
      this.trackedRules = response.data.formantRules.nodes;
      this.rulesList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.trackedRules);
      this.pageInfo = response.data.formantRules.pageInfo;
      this.isLoading = false;
    });
  }
  ngOnInit() {
    this.requestRules();
  }
  ngOnDestroy() {
    this.rulesQuery?.unsubscribe();
  }
  rowClick(row) {
    const dialogRef = this.dialog.open(src_app_components_rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_0__.RuleDetailsComponent, {
      width: "80%",
      height: "625px",
      enterAnimationDuration: "200ms",
      exitAnimationDuration: "200ms",
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.onClick.emit(row);
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
  return new (t || RulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
};
RulesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RulesComponent,
  selectors: [["app-rules"]],
  outputs: {
    onUpdate: "onUpdate",
    onClick: "onClick"
  },
  decls: 47,
  vars: 8,
  consts: [[1, "filter-section"], [1, "filter-section_fields"], [1, "filter-section__vehicle"], ["matInput", "", "placeholder", "Stream Name", 3, "formControl"], ["input", ""], [1, "filter-section__search"], ["mat-fab", "", "matInput", "", "aria-label", "search", 1, "filter-section__search", 3, "click"], ["mode", "indeterminate", 4, "ngIf"], [1, "table-area"], ["mat-table", "", 1, "tickets_table", 3, "dataSource"], ["matColumnDef", "streamName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "streamType"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "mat-row", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "footer"], [1, "pagination-row"], [1, "pagination-container"], [1, "pagination-button-container"], ["matNativeControl", "", 3, "formControl", "change"], ["value", "10"], ["value", "25"], ["value", "50"], ["mat-fab", "", "color", "primary", "aria-label", "previous", 3, "disabled", "click"], ["mat-fab", "", "color", "primary", "aria-label", "next", 3, "disabled", "click"], ["mode", "indeterminate"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 1, "mat-row", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function RulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-layout")(1, "section", 0)(2, "div", 1)(3, "mat-form-field", 2)(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Stream");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RulesComponent_Template_button_click_9_listener($event) {
        return ctx.resetResubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, RulesComponent_mat_progress_bar_12_Template, 1, 0, "mat-progress-bar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "section", 8)(14, "table", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, RulesComponent_th_16_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, RulesComponent_td_17_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, RulesComponent_th_19_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, RulesComponent_td_20_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, RulesComponent_tr_21_Template, 1, 0, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, RulesComponent_tr_22_Template, 1, 0, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, RulesComponent_tr_23_Template, 3, 0, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "section", 17)(26, "div", 18)(27, "div", 19)(28, "div", 20)(29, "mat-form-field")(30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Page Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RulesComponent_Template_select_change_32_listener($event) {
        return ctx.resetResubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 20)(40, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RulesComponent_Template_button_click_40_listener() {
        return ctx.paginationHandler("previous");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "arrow_back");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 20)(44, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RulesComponent_Template_button_click_44_listener() {
        return ctx.paginationHandler("next");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "arrow_forward");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.filter.streamName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.rulesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatFabButton, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatNoDataRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent],
  styles: [".filter-section[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: flex;\n  padding: 25px;\n  padding-bottom: 10px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section_fields[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section_fields[_ngcontent-%COMP%]   .filter-section__vehicle[_ngcontent-%COMP%] {\n  min-width: 0;\n  text-align: left;\n  align-self: center;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section__search[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-section__search[_ngcontent-%COMP%]   .mat-mdc-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.table-area[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  border-left: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.table-area[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-area[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n.table-area[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-area[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.table-area[_ngcontent-%COMP%]   th.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n.table-area[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%], .table-area[_ngcontent-%COMP%]   tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-area[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-button-container[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcnVsZXMvcnVsZXMvcnVsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRko7QUFLTTtFQUNFLHVCQUFBO0FBSFI7O0FBVUE7RUFDRSwyQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7QUFQRjtBQVNFO0VBQ0UsV0FBQTtBQVBKO0FBVUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0FBVEo7QUFZRTtFQUNFLFVBQUE7QUFWSjtBQWFFO0VBQ0UsWUFBQTtBQVhKO0FBY0U7RUFDRSxlQUFBO0FBWko7QUFnQkU7RUFDRSxlQUFBO0FBZEo7QUFpQkU7RUFDRSxxQ0FBQTtBQWZKOztBQW9CQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQWpCRjtBQW1CRTtFQUNFLFlBQUE7QUFqQkoiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgLmZpbHRlci1zZWN0aW9uX2ZpZWxkc3tcbiAgICB3aWR0aDogODAlO1xuXG4gICAgLmZpbHRlci1zZWN0aW9uX192ZWhpY2xle1xuICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuXG4gIC5maWx0ZXItc2VjdGlvbl9fc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG5cbiAgICAubWF0LW1kYy1mYWJ7XG4gICAgICAmLm1hdC1hY2NlbnR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbn1cblxuLnRhYmxlLWFyZWF7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICB0ZCwgdGgge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgdHIubWF0LXJvdywgdHIubWF0LWZvb3Rlci1yb3d7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICBcbiAgLm1hdC1tZGMtcm93IC5tYXQtbWRjLWNlbGwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLm1hdC1tZGMtcm93OmhvdmVyIC5tYXQtbWRjLWNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgfVxufVxuXG5cbi5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgLnBhZ2luYXRpb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _pages_rules_rules_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/rules/rules/rules.component */ 208);
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

/***/ 138:
/*!***************************************************************!*\
  !*** ./src/app/services/graphql/gql-query.service.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GqlQueryService": () => (/* binding */ GqlQueryService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../graphql */ 36);
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

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _shared_confg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.confg */ 3029);
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

/***/ 3029:
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
  serviceEndpoint: "/graphql"
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