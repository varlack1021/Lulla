# Code Reading Guide

:sparkles:**Welcome the source code of the Lula planning app!**:sparkles:

This is small guide on how to read the code, it contains information on naming ...

For Class components the render method is the first method after the constructor. All other methods are written in order of use in render...

Design Inspiration ...

- how code is written (logically)

The exports come first (with the style sheet, and all constants), with helper methods coming second in the order they are called. and constants last.

- naming conventions:
- hierarchy explaining:

components > screens(Components used as screens) > navigation (The navigator pages)
Which are smart and which are dumb.

We use feather through @expo\vector-icons