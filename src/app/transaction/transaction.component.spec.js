"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var testing_1=require("@angular/core/testing"),transaction_component_1=require("./transaction.component");describe("TransactionComponent",function(){var n,e;beforeEach(testing_1.async(function(){testing_1.TestBed.configureTestingModule({declarations:[transaction_component_1.TransactionComponent]}).compileComponents()})),beforeEach(function(){e=testing_1.TestBed.createComponent(transaction_component_1.TransactionComponent),n=e.componentInstance,e.detectChanges()}),it("should create",function(){expect(n).toBeTruthy()})});