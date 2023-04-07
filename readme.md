# Midjourney API Demo Application with The Next Leg

This is a rudimentary demo application for [The Next Leg](https://thenextleg.io) that supplements the [YouTube Video Here](https://youtu.be/dMv6sLIuMOM). Please note that The Next Leg is an unofficial Midjourney API and is not affiliated with Midjourney.

# Technologies Used

- [Next.js](https://nextjs.org/)
- [Firebase/Firestore](https://firebase.google.com/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Midjourney](https://midjourney.com/)
- [TypeScript](https://www.typescriptlang.org/)

# Project Description

This project showcases how to integrate Midjourney's AI-generated images into a Next.js application. The demo takes a simple prompt and generates several images using the Next Leg API. The generated images are then displayed on the screen using Firestore. The images are received via a webhook URL which is configured in Next.js.

# Getting Started

To get started with this demo application, follow these steps:

1. Fork the repository to your own repo.
2. Clone your forked repository to your local machine.
3. `cd hosting` and install the dependencies using `npm install`.
4. Create a Firebase project and Firestore database.
5. Set up your Vercel Project for automated deploys.
6. Add your Firebase project credentials to `hosting/src/db.ts`
7. Add your Next Leg AUTH_TOKEN to `hosting/src/pages/index.ts`
8. Start the development server for the hosting app using `npm run dev`.
9. Open http://localhost:3000 in your browser to view the application.

## Benefits of Using Next.js

- **Automatic deploys:** Next.js makes it easy to deploy your application to the cloud with automatic deployment capabilities. This means that you can quickly and easily update your application without having to worry about manually deploying changes.
- **Great framework:** Next.js is a popular and well-supported framework for building React applications. It comes with many built-in features and optimizations that make it easier and faster to develop applications.
- **Server-side rendering:** Next.js supports server-side rendering, which can improve the performance and SEO of your application by pre-rendering pages on the server.

## Benefits of Using Firestore

- **Real-time updates:** Firestore provides real-time updates that enable your application to respond to changes in the database as they happen.
- **Scalability:** Firestore is a highly scalable database that can handle large amounts of data and concurrent users.
- **Ease of use:** Firestore is easy to use and requires minimal setup. You can quickly and easily create a new database and start storing and retrieving data.

## Benefits of Using Tailwind CSS

- **Rapid development:** Tailwind CSS provides a set of pre-defined utility classes that make it easy to style your application without having to write custom CSS.
- **Consistency:** Tailwind CSS promotes consistency in your styling by providing a standardized set of class names and styles.
- **Customizability:** Tailwind CSS is highly customizable and allows you to create your own utility classes or modify existing ones

## Benefits of Using TypeScript

- **Type safety:** TypeScript adds type safety to your JavaScript code, which can help catch errors at compile-time and make your code more robust.
- **Better tooling:** TypeScript provides better tooling support compared to JavaScript, including improved auto-completion and error messages.
- **Compatibility with JavaScript:** TypeScript is a superset of JavaScript, which means that you can use existing JavaScript code in your TypeScript application.

# Conclusion

This demo application shows how to integrate Midjourney's AI-generated images into a Next.js application using Firestore and The Next Leg. The combination of Next.js and Firestore provides a powerful and scalable platform for building modern web applications.
