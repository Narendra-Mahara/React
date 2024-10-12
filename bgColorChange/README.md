### Description

#### This project is a simple project that changes the background color of the page when you click on the buttons. The project uses Tailwind CSS to style the buttons and the page. The project consists of two components: App and Button. The App component is the main component that renders the page and the buttons. The Button component is a simple button component that takes props for the background color, text, and a function to set the background color. The App component uses the useState hook to manage the background color state. When you click on a button, the setBgColor function is called with the background color of the button as an argument, which changes the background color of the page. The project demonstrates how to use Tailwind CSS with React to style components and create a simple interactive application.

## Notes:
```
- Don’t use props to build class names dynamically

function Button({ color, children }) {
    
  return (
    <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>
      {children}
    </button>
  )
}  

- Always map props to static class names

function Button({ color, children }) {
  const colorVariants = {
    blue: 'bg-blue-600 hover:bg-blue-500',
    red: 'bg-red-600 hover:bg-red-500',
  }

  return (
    <button className={`${colorVariants[color]} ...`}>
      {children}
    </button>
  )
}