A CSS architecture for React projects that aims to solve the following problems:

1. I want to immediately know where the styles are for the component I am looking at.
1. I want to be able to delete a component and know that I'm not leaving any unused styles behind.
1. I don't want to think too much about naming classes and the relationships between them. I want simple names, like .container, .button, .image.
1. I don't want to think about sizes, colors, fonts, etc. I want to use a set of design tokens that are consistent across the project.
1. I don't want to split my styles across different files for desktop, mobile and other form factors.
1. I want to use modern CSS features like nesting and custom properties.

The proposed solution to those problems is a combination of methodologies and tools:

- [CUBE CSS](https://cube.fyi/) as a loose methodology and mental model for organizing styles.
- [CSS Modules](https://github.com/css-modules/css-modules) for scoping styles to specific components.
- A design token system based on CSS custom properties (variables), inspired by [Open Props](https://open-props.style/).
- A tailored set of utility classes, inspired by [Tailwind CSS](https://tailwindcss.com/).

Resources:

- https://frontendmastery.com/posts/the-evolution-of-scalable-css/
- https://piccalil.li/tutorial/build-a-dashboard-with-cube-css/
- https://nerdy.dev/custom-prop-categories
