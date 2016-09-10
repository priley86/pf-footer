# Pf-Tabs Component

This `pf-tabs` component is a modular building block for building tabs with any application. It's been built using the power of [webcomponents](http://webcomponents.org).

You can find examples of how to use this component [here](https://github.com/priley86/patternfly-angular2-component-demo) with Angular2 or [here](https://github.com/priley86/patternfly-react-component-demo) with React.

Hope you enjoy and :heart: webcomponent's as much as us!

### Usage

Import the component in your `<head>`:
```
<link rel="import" href="dist/pf-tabs.html">
```

Reference `pf-tabs` in your DOM (or JSX):

```
<pf-tabs class="nav nav-tabs">
    <pf-tab title="Dashboard" active="true">
        <app-cards></app-cards>
    </pf-tab>
    <pf-tab title="List View">
        <app-list-view></app-list-view>
    </pf-tab>
    <pf-tab title="Empty State">
        <app-empty-state></app-empty-state>
    </pf-tab>
</pf-tabs>
```