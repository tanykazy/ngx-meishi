# ngx-meishi

ngx-meishi is a Angular component for displaying business cards.

## Installation

Use the package manager [npm](https://nodejs.org/) to install ngx-meishi.

```bash
npm i ngx-meishi
```

## Usage

```typescript
import { MeishiModule } from 'ngx-meishi';
```

```html
<ngx-meishi 
    [size]="{
        width:'350px',
        height:'200px'}" 
    [content]="{
        name:'Full Name', 
        title:'title', 
        logo:'example.png', 
        phone:'123-456-7890', 
        email:'example@email.com', 
        web:'www.example.com', 
        location:'123 Anywhere St.,Any City,ST 12345'}">
</ngx-meishi>
```

or

```html
<ngx-meishi [size]="{width:'350px', height:'200px'}">
    <mat-grid-list cols="2" rowHeight="3.5:2">
        <mat-grid-tile rowspan="2">
            <img src="example.png" width="100%">
        </mat-grid-tile>
        <mat-grid-tile>
            <p>Full Name</p>
            <p>Title</p>
        </mat-grid-tile>
        <mat-grid-tile>
            <p>123-456-7890</p>
            <p>example@email.com</p>
            <p>www.example.com</p>
            <p>123 Anywhere St.,Any City,ST 12345</p>
        </mat-grid-tile>
    </mat-grid-list>
</ngx-meishi>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
