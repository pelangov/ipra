import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {logoComponent} from './logo.component';
import {leftPanelComponent} from './left-panel.component';


@NgModule ({
    imports: [BrowserModule],
    declarations : [AppComponent,
    logoComponent,
    leftPanelComponent],
    bootstrap : [AppComponent]
})
export class AppModule {}