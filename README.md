# `react-bootstrap-responsive-grid-and-utilities`

A lightweight and customizable React component library providing a robust, Bootstrap-inspired responsive grid system and essential utility classes for rapid UI development.

[![npm version](https://badge.fury.io/js/react-bootstrap-responsive-grid-and-utilities.svg)](https://www.npmjs.com/package/react-bootstrap-responsive-grid-and-utilities)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
---

## Table of Contents

* [What is it?](#what-is-it)
* [Features](#features)
* [Why use this package?](#why-use-this-package)
* [Installation](#installation)
* [Usage](#usage)
* [Customization](#customization)
* [Contributing](#contributing)
* [License](#license)

---

## What is it?

`react-bootstrap-responsive-grid-and-utilities` offers a foundational set of responsive layout components and utility classes designed for React applications. If you appreciate **Bootstrap's intuitive 12-column grid** and powerful **spacing/flexbox utilities** but prefer a lean, framework-agnostic solution, this package is for you.

---

## Features

* **Responsive 12-Column Grid:** Implement complex layouts with ease, leveraging a familiar `Container`, `Row`, and `Col` component structure. It supports a full range of customizable breakpoints (`xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`).
* **Comprehensive Spacing Utilities:** Apply margins and paddings effortlessly with intuitive classes like `m-3`, `px-auto`, `pt-md-4`, and even negative margins, mirroring Bootstrap's popular spacing API.
* **Flexible Flexbox Utilities:** Utilize essential flexbox helpers (e.g., `d-flex`, `justify-content-center`, `align-items-end`, `gap-*`) to precisely control the alignment and distribution of content.
* **Bootstrap-like Naming Conventions:** Built with familiarity in mind, allowing developers accustomed to Bootstrap's utility classes to quickly integrate and use this package.
* **Lightweight & Performant:** Includes only the grid and utility styles you need, reducing bundle size compared to full-fledged CSS frameworks.
* **React-First Design:** Seamlessly integrates into any React project, providing components as your building blocks and classes for styling.
* **Designed for Internationalization (i18n):** Spacing utilities use logical properties (`s` for start, `e` for end) to automatically adapt for Right-to-Left (RTL) languages when configured.

---

## Why use this package?

* **Rapid Prototyping & Development:** Quickly build responsive layouts and apply consistent spacing without writing custom CSS for every element.
* **Familiar Workflow:** Leverage your existing knowledge of Bootstrap's grid and utility class system directly within your React components.
* **Maintainable Codebase:** Utility-first classes promote consistency and reduce CSS bloat.
* **Component Reusability:** Provides a solid styling foundation for your reusable React components.

---

## Installation

```bash
npm install react-bootstrap-responsive-grid-and-utilities
# or
yarn add react-bootstrap-responsive-grid-and-utilities
```

---

## Usage

1. Import Components and Styles:
```
// In your main App.tsx or a relevant component file
import { Container, Row, Col } from 'react-bootstrap-responsive-grid-and-utilities';
import 'react-bootstrap-responsive-grid-and-utilities/dist/index.css'; // Don't forget to import the CSS!
```

2. Example - Responsive Grid and Spacing:
```
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap-responsive-grid-and-utilities';
import 'react-bootstrap-responsive-grid-and-utilities/dist/index.css'; // Make sure to import the CSS once in your app

function MyPage() {
  return (
    <Container className="my-5"> {/* Applies margin-top and margin-bottom */}
      <Row className="justify-content-center gap-3"> {/* Uses flexbox and gap utility */}
        <Col xs={12} sm={6} lg={4} className="p-4 bg-light border"> {/* Responsive column width and padding */}
          <h3>Section A</h3>
          <p className="mb-2">Content for section A.</p> {/* Margin-bottom */}
          <button className="btn btn-primary mt-3">Learn More</button> {/* Margin-top */}
        </Col>
        <Col xs={12} sm={6} lg={4} className="py-4 bg-info border"> {/* Vertical padding */}
          <h3>Section B</h3>
          <p className="mx-auto text-center" style={{ maxWidth: '300px' }}> {/* Horizontal auto margin and text align */}
            Content for section B, with centered text.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MyPage;
```

---

## Customization
This library is built with Sass. You can customize the breakpoints, spacer values, and more by overriding the default Sass variables and compiling your own CSS. Refer to the source SCSS files (_grid.scss, _utilityClasses.scss) for available variables.

---

## Contributing
We welcome contributions! If you have suggestions, bug reports, or want to contribute code, please check out our Contributing Guidelines on GitHub.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.
