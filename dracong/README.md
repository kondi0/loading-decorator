# Dracong Loading decorator


## Description
An Angular decorator which listens to rxjs observable changes and shows/hides loading animation

## Donating

You can also help me and the project out by contributing through a donation on PayPal.
<p>
    <a href="https://paypal.me/konradczerw?country.x=ES&locale.x=es_ES" target="_blank">
        <img src="https://img.shields.io/badge/paypal-Konrad%20Czerwinski-blue.svg?logo=paypal&logoWidth=30&logoColor=00457C&style=popout-square" alt="PayPal"/>
    </a>
</p>

## Installation

1. __npm install @dracong/loading-decorator --save__

2. Add __LoadingDecoratorModule__ import to your __@NgModule__ like example below
    ```ts
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { MyTestApp } from './my-test-app';
    import { LoadingDecoratorModule } from 'ng4-intl-phone';
    @NgModule({
        imports:      [ BrowserModule, LoadingDecoratorModule ],
        declarations: [ MyTestApp ],
        bootstrap:    [ MyTestApp ]
    })
    export class MyTestAppModule {}
    ```

## Usage

### 1. Import the module

Add __LoadingDecoratorModule__ import to your __@NgModule__ like example below
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyTestApp } from './my-test-app';
import { LoadingDecoratorModule } from 'ng4-intl-phone';
@NgModule({
imports:      [ BrowserModule, LoadingDecoratorModule ],
declarations: [ MyTestApp ],
bootstrap:    [ MyTestApp ]
})
export class MyTestAppModule {}
```


### 2. Add the directive to your app component
In order to use the decorator we need to add the directive to some higher level component in our app. It has to be done only once in the whole app

    <div dracongLoading>
      <router-outlet></router-outlet>
    </div>

### 2. Add decorator

Add the decorator to any method which returns an Observable and it will take care of showing and hiding the animation
 ```ts
    
    export class MyTestApp implements OnInit {
    
      @DracongLoading
      save$(object: Data): Observable<Response> {
        return this.http.post<Response>(`${apiurl}${this.path}`, object);
      }
    }
   ```

## License
* License: MIT

## Author
* Author: kondi0

## Mail
* Mail: kondi.czerwinski@gmail.com


