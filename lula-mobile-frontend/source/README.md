# Code Reading Guide

:sparkles:**Welcome the source code of the Lula planning app!**:sparkles:

This is small guide on how to read the code, it contains information on naming conventions, how the file system works, & how to read the code. Before we start I'll define some terms often used in this document.

`component`- a single or partial UI element.

`screen`- a full-screen component, composed of other `components`, that serves a single or partial function in the app.

`navigator`- a component that coordinates movement between screens.

`header`- a `component` that is vertically above the `screen`, often passed into the `navigator` separately.

`strong header`- A header that:

1. Is prominent in the visual design of the screen.
2. Can be multi-purposed.

`weak header`- A header that:

1. Is not prominent in the visual design of the screen.
2. Can only serve a single function or single set of highly related functions.

`process`- a set of steps taken to complete some functionality in the app.

## The File System

The Following are descriptions of the kinds of files in the various directories in this Code base.

_./components/_- Contains all the individual UI components that makeup the screens, and navigators.

_./components/*Components/_- Contains all the `components` that make a large UI component. The Component named whatever term is represented by `*` is the component that will be directly used.

_./screens/_- Contains all the individual components that are used as full-screen that makeup in the navigators.

_./components/*Process/_- Contains all the `screens` that work together to serve a single purpose in the app.

_./navigators/_- Contains all the `navigators` components that orchestrate in app navigation.

## Naming Conventions

### Files Names

_*Navigator.js_- a `navigator` component.

_*Screen.js_- a `screen` component.

_*Tab.js_- a Screen with a Tab navigator styled as Tab

Components that Represent a single or partial UI Component have no special File name ending.

## How to Read the Code

### import order

Imports are ordered as follows: node modules, assets, and custom components.

### Reading Classes

The code is written such the developer reading the code can first get all learn how the component behaves, and then better understand the fine details in further reading.

Order of functions:

1. constructor
2. render method
3. All other React Component LifeCycle methods
4. All other methods in the order of the LifeCycle method they're called in
    - Any helper methods of a non-LifeCycle method are written directly below that method

---
## **Note to Author(Yes you @Dreamy_Jy)**

Consider Adding Docs on:

- Component Type Hierarchy
- Component Data Flow.