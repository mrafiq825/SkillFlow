# Example Setup Workflow

Here is a step-by-step example of setting up a React and Next.js project to use these skills.

## Step 1: Install skills-cli globally
Install the CLI utility to validate the skills:
```bash
npm install -g skills-cli
```

## Step 2: Initialize customs
Navigate to your project root and initialize customizations:
```bash
skills init
```

## Step 3: Copy skills
Copy the `react` and `nextjs` skills from this repository into your project's `.agents/skills/` directory:
```bash
cp -r path/to/skillflow/skills/react .agents/skills/
cp -r path/to/skillflow/skills/nextjs .agents/skills/
```

## Step 4: Validate
Validate the copied skills to ensure they are set up properly:
```bash
skills validate
```

Once validated, your coding assistant will read these instructions whenever you ask for React or Next.js code reviews or scaffolding!
