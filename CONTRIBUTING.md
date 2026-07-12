# Contributing to skills-cli

First off, thank you for taking the time to contribute! Contributions make the open-source community an amazing place to learn, inspire, and create.

---

## Code of Conduct
Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) to help us maintain a respectful and welcoming community.

---

## Getting Started

1. **Fork the Repository**
   Fork the repository to your own GitHub account.

2. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/skills-cli.git
   cd skills-cli
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

---

## Development Workflow

### Branch Naming Conventions
Create a branch named after the type of change you are making:
- **Feature changes**: `feat/description-of-feature`
- **Bug fixes**: `fix/description-of-bug`
- **Docs**: `docs/topic-of-change`
- **Refactoring**: `refactor/area-of-change`

### Coding Standards
- Write clean, documented JavaScript utilizing ES Modules.
- Use JSDoc format for all public function documentation.
- Maintain a zero external dependencies footprint for the core application.

### Commit Guidelines
We use **Conventional Commits** format for version control history:
- `feat(cmd): add search flag to list`
- `fix(validate): fix line count boundaries`
- `docs(readme): add install instructions`
- `test(parser): add frontmatter test cases`

### Running Tests
Make sure all tests pass before making a Pull Request:
```bash
npm test
```

---

## Pull Request Process

1. Commit your changes and push them to your fork.
2. Open a Pull Request from your branch to `skills-cli:main`.
3. Provide a clear description of the problem solved and links to any related issues.
4. Ensure CI runs and passes all integration tests successfully.
