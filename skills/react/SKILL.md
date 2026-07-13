---
name: react
description: "Review React applications focusing on component structure, custom hooks, state management, render performance, accessibility, and folder layouts."
---

# Purpose

The React skill guides the agent to design and audit client-side React codebases, checking for component purity, state flow, hooks usage, performance, and accessibility.

# When to Use

- When building user interfaces using React.
- When creating custom hooks, component libraries, or context providers.
- When fixing component re-render loops or memory leaks in React.

# When NOT to Use

- For server-side database configuration tasks (use database skill).
- For reviewing Next.js routing patterns (use nextjs skill).

# Inputs

- React source files (`.jsx`, `.tsx`).
- State management setup files (Zustand, Redux, Recoil).

# Expected Outputs

- Optimized React component code.
- Report detailing performance findings, custom hook refactors, and state management improvements.

# Workflow

Step 1
Inspect component files to verify single responsibility and reuse guidelines.

Step 2
Examine hook usage: ensure correct dependency arrays for `useEffect`, `useMemo`, and `useCallback`.

Step 3
Analyze state layout: check for state-hoisting, redundant states, and appropriate state management library usage.

Step 4
Inspect accessibility parameters: verify semantic tags, focus rings, keyboard controls, and ARIA attributes.

Step 5
Check for memory leaks (unsubscribed event listeners, un-cleared timers in `useEffect`).

Step 6
Suggest code refactorings using composition to prevent prop-drilling.

# Best Practices

- Keep components small and focused. Extract business logic into custom hooks.
- Avoid placing too much data in a single global context to prevent wide re-renders.
- Ensure interactive elements are keyboard-accessible (support Enter and Space keys).

# Common Mistakes

- Using index values as `key` properties in dynamic lists.
- Forgetting to return cleanups in `useEffect` (leaving event listeners active).
- Mutating state objects directly rather than calling `setState` functions.

# Validation Checklist

- [ ] Interactive elements have proper focus and keyboard accessibility.
- [ ] List components use unique, stable values for keys.
- [ ] useEffect cleanup handlers are declared.
- [ ] Custom hooks are used to separate logic from UI markup.
