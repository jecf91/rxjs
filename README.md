# 🚀 React + RxJS Learning App

This project is a small application I built to **learn and explore the use of RxJS in React**. It uses a modern tech stack including **React 19**, **TypeScript**, **Vite**, and the powerful **RxJS** library for reactive programming.

---

## 📦 Stack

- React 19
- RxJS
- TypeScript
- Vite

---

## 📚 What is RxJS?

**RxJS (Reactive Extensions for JavaScript)** is a library for **reactive programming** using **Observables**, designed to make working with asynchronous or callback-based code easier and more expressive.

If you’ve worked with Angular before, you’ve likely already encountered RxJS — it’s a core part of Angular’s architecture.

### 🌀 What is Reactive Programming?

Reactive programming is a programming paradigm focused on working with **data streams** and the **propagation of change**. It’s particularly useful when dealing with asynchronous events such as user interactions, API requests, timers, etc.

RxJS helps you **compose, filter, transform, and combine data streams** in a clean and functional way, replacing nested callbacks with declarative operators.

---

## 🔑 Core Concepts in RxJS

- **Observables**: Represent a stream of asynchronous data, such as events, values from APIs, or user interactions.
- **Observers**: Consumers of the data emitted by observables. They react to new values or events.
- **Operators**: Functions that allow transformation, filtering, merging, and more on observable streams. Examples: `map`, `filter`, `mergeMap`, `debounceTime`, etc.
- **Subscription**: The process of subscribing an observer to an observable, enabling it to receive emitted values.

---

## 💡 Why Use RxJS?

- **Efficient async handling**: Manage asynchronous logic in a clear and declarative way, avoiding deeply nested callbacks.
- **Composable streams**: Combine multiple data streams or events into one, making it easier to deal with multiple data sources.
- **Elegant event handling**: RxJS provides powerful operators like `debounce`, `throttle`, and `buffer` to control how and when events are handled.
- **Well-documented and widely adopted**: Large community and extensive documentation.
- **Framework-agnostic**: Can be used in any JavaScript environment or library (React, Angular, Vue, etc.).

---

## 🧪 What I Built

In this app, I explored several key RxJS patterns in the context of a React application:

- Created a **store using RxJS observables** (`BehaviorSubject`, `combineLatest`, etc.).
- Used `defer`, `from`, and `mergeMap` to manage **lazy async data fetching**.
- Combined data streams from an API with user state (e.g., selected items).
- Performed **waterfall-style API requests** (e.g., fetching a `homeworld` name after fetching a `person`).
- Subscribed to observables inside React components using `useEffect`.
- Practiced composing streams and enriching data through chaining operators.

---

## ✍️ Final Thoughts

This project served as a hands-on introduction to RxJS inside a React environment. It gave me a deeper understanding of how data can flow reactively through an application, and how observables can be composed, transformed, and managed declaratively.

Whether you're coming from Angular or just curious about handling async data in a more functional style — RxJS is worth learning.

---

## 📁 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔗 Resources

- [RxJS Documentation](https://rxjs.dev)
- [Learn RxJS Operators](https://rxjs.dev/guide/operators)
- [SWAPI (Star Wars API)](https://swapi.dev)
