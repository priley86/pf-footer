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
    <pf-tab title="Tab 1" active="true">
        <p>tab 1 content</p>
    </pf-tab>
    <pf-tab title="Tab 2">
        <p>tab 2 content</p>
    </pf-tab>
    <pf-tab title="Tab 3">
        <p>tab 3 content</p>
    </pf-tab>
</pf-tabs>
```