"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var testing_1=require("@angular/core/testing"),login_component_1=require("./login.component");describe("LoginComponent",function(){var e,n;beforeEach(testing_1.async(function(){testing_1.TestBed.configureTestingModule({declarations:[login_component_1.LoginComponent]}).compileComponents()})),beforeEach(function(){n=testing_1.TestBed.createComponent(login_component_1.LoginComponent),e=n.componentInstance,n.detectChanges()}),it("should create",function(){expect(e).toBeTruthy()})});