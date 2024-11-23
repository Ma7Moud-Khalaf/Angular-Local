import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Localizatioin';
  constructor(private translate: TranslateService) {
    // Set the default language
    translate.setDefaultLang('en');
   // Subscribe to language change events
   this.translate.onLangChange.subscribe((event) => {
    // Log the current language when it changes
    //console.warn('Language changed to:', event.lang);
  });
  }
  // Method to switch the language dynamically
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
