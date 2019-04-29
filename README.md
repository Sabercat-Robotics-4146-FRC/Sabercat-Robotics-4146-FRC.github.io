# Sabercat Robotics Team Website

This repository is a github pages static website that routes to [sabercatrobotics.com](https://www.sabercatrobotics.com/) A sub-component of this website are the curriculum books stored in within the same static website and share a url. All static pages in the `master` branch of this repository will go live to the website. 

## Curriculum Books

Currently, the curriculum book is in the `./learn/book/` directory. This is the hardware specific curriculum and the uri/url will likely be changed when a software and business curriculum are added. 

The books are written in [markdown](https://www.markdownguide.org/) and compiled to a static html website using [mdbook](https://github.com/rust-lang-nursery/mdBook). Installation instructions for mdbook are in the repository's README. You can download the binaries [here](https://github.com/rust-lang-nursery/mdBook/releases), or run `cargo install mdbook`.

To build the book after making changes to the markdown files, make sure you're in the `./learn/` directory and run `mdbook build` and this will regenerate the static book website. For more information on mdbook, visit the [User Guide](https://rust-lang-nursery.github.io/mdBook/).