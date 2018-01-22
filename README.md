#Wymagania do instalacji:
1.Instalacja nodejs
2. Następnie należy zainstalować AngularCLI przy pomocy nodejs (npm install -g @angular/cli)

#Instrukcje:
1. Po pobraniu kodu i zainstalowaniu nodejs oraz AngularCLI nalży przy pomocy konsoli wejsc do folderu z projektem 
(do miejsca w któym znajduje się 'package.json')
2. Przy pomocy 'npm install' należy zainstalować biblioteki
3. Odpalić projekt przy pmocy komendy (ng serve) i wejść w przeglądarce (testowane tylko na Google Chrome) na 'locallhost:4200'
lub użyć komendy 'ng serve --open'

#Błędy
W razie wystąpienia błędu o kodzie '
module.js:540
    throw err;
    ^

Error: Cannot find module '@angular-devkit/core'
    at Function.Module.resolveFilename (module.js:538:15)
    at Function.Module.load (module.js:468:25)
    at Module.require (module.js:587:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (C:\Users\konra\Desktop\Nowy folder\ShopAssistant\node_modules\@angular-devkit\schematics\src\tree\virtual.js:10:16)
    at Module.compile (module.js:643:30)
    at Object.Module.extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
' 

należy wpisać komendę 'npm i --no-save @angular-devkit/core@0.0.28' i jeszcze raz uruchomić projekt.

Podobny błąd: 'https://github.com/angular/angular-cli/issues/9283'

# ShopAssistant

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
