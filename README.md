## AngularJS seed app

AngularJS app setup for personal use.

### Includes:

- AngularJS
- UI-Router
- Webpack
- Babel
- TypeScript
- Dart SASS

### TODO:

- Include Linter
- Include PostCSS
- Include Testing environments

### Issues:

- templateUrl doesn't work. Templates must be imported as a string and injected directly

### File Structure

> <pre><code>
> ├───dist                  // Where builds are coming in.
> │
> └───src                   // The root folder of application.
>      │
>      ├───globals.d.ts     // Global types definitions. Includes
>      │                    // definitions for HTML files, images
>      │                    // etc.
>      │
>      ├───index.html       // Root HTML file of the project.
>      │
>      ├───styles.scss      // Global styles.
>      │
>      ├───main.ts          // Root AngularJS module, loads global
>      │                    // styles, polyfills and Angular itself.
>      ├───app              
>      │
>      ├───assets           // Files that would be imported to js.
>      │
>      └───static           // Folder that would be imported  
>                           // directly into the dist folder
> </code></pre>
