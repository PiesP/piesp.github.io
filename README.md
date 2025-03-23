# PiesP's Blog

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen)](https://piesp.github.io/)
[![Hugo](https://img.shields.io/badge/powered%20by-Hugo-ff4088)](https://gohugo.io/)
[![Theme](https://img.shields.io/badge/theme-PaperMod-blue)](https://github.com/adityatelange/hugo-PaperMod)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A personal blog built with Hugo and deployed on GitHub Pages. Features a clean, responsive design with support for dark mode and multiple content types including blog posts and YouTube video archives.

## Features

- Responsive design that works on mobile and desktop
- Dark/light mode theme switching
- Fast loading times with optimized static site generation
- Content categories for easy navigation
- Search functionality for finding specific content
- YouTube video archive with automatic content updates
- Markdown-based content creation workflow
- Integrated with GitHub Actions for automatic deployment

## Visit the Blog

[Visit PiesP's Blog](https://piesp.github.io/)

## Technology Stack

- **Framework**: [Hugo](https://gohugo.io/) - A fast and modern static site generator
- **Theme**: [PaperMod](https://github.com/adityatelange/hugo-PaperMod) - A clean, responsive theme
- **Deployment**: GitHub Pages with GitHub Actions workflow
- **Content Management**: Markdown files with YAML front matter
- **Automation**: Python scripts for YouTube content integration

## Local Development Setup

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (v0.123.6 or higher recommended)
- Git

### Running Locally

```bash
# Clone the repository
git clone https://github.com/PiesP/piesp.github.io.git
cd piesp.github.io

# Initialize submodules
git submodule update --init --recursive

# Start Hugo development server
cd piesp-blog
hugo server -D
```

## Creating New Content

```bash
cd piesp-blog
hugo new content posts/new-post-title.md
```

Edit the generated file in your favorite text editor, adding your content in Markdown format.

## Deployment

The blog is automatically deployed when changes are pushed to the master branch. The GitHub Actions workflow:

1. Builds the site with Hugo
2. Deploys the generated static files to GitHub Pages
3. Updates any YouTube content via scheduled workflows

## Content Organization

- `/piesp-blog/content/posts/` - Blog articles
- `/piesp-blog/content/videos/` - YouTube video archive
- `/piesp-blog/content/about/` - About page information

## YouTube Content Integration

The blog features an integrated YouTube video archive that is automatically updated using GitHub Actions and Python scripts:

1. The workflow runs on a schedule
2. It fetches new videos from specified YouTube channels
3. Generates Markdown files with embedded videos and metadata
4. Commits changes to the repository

## Contributing

Suggestions and feedback are welcome! Please open an issue if you have ideas for improvements.

## Acknowledgements

This project was developed in collaboration with AI.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
