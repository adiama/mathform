<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
add version shield
add tests shield -->

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Mathform</h3>

  <p align="center">
    A collection of mathematical formulas, constants and algorithms
    <br />
    <a href="https://adiama.github.io/mathform/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/adiama/mathform/issues">Report Bug</a>
    ·
    <a href="https://github.com/adiama/mathform/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Mathform is a collection of mathematical formulas and various algorithms that I have been using over the time. The purpose of this repo is **NOT** to provide an optimized math library as the scope of the modules and the features is not defined.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/adiama/mathform.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### cdn
```html
<script src="https://combinatronics.com/adiama/mathform/main/dist/mathform.umd.js"></script>

<script type="text/javascript">
    console.log(mathform.geometry.Circle.area(5));
</script>
```

### es5
```javascript
const mathform = require('mathform');
console.log(mathform.geometry.Circle.area(5));
```

### es6
```javascript
import * as mathform from "mathform";
console.log(mathform.geometry.Circle.area(5));
```
or import specific modules
```javascript
import { helpers, geometry } from "mathform";
console.log(helpers.format(geometry.Circle.area(5)));
```

_For more examples, please refer to the [Documentation](https://adiama.github.io/mathform/)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/adiama/mathform/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Email: asdiamantonis@gmail.com

Project Link: [https://github.com/adiama/mathform](https://github.com/adiama/mathform)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* README [template](https://github.com/othneildrew/Best-README-Template)
* some repo structure influenced by [glMatrix](https://github.com/toji/gl-matrix)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/adiama/mathform.svg?style=for-the-badge
[contributors-url]: https://github.com/adiama/mathform/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/adiama/mathform.svg?style=for-the-badge
[forks-url]: https://github.com/adiama/mathform/network/members
[stars-shield]: https://img.shields.io/github/stars/adiama/mathform.svg?style=for-the-badge
[stars-url]: https://github.com/adiama/mathform/stargazers
[issues-shield]: https://img.shields.io/github/issues/adiama/mathform.svg?style=for-the-badge
[issues-url]: https://github.com/adiama/mathform/issues
[license-shield]: https://img.shields.io/github/license/adiama/mathform.svg?style=for-the-badge
[license-url]: https://github.com/adiama/mathform/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/asdiamantonis
[product-screenshot]: images/screenshot.png
