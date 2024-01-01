// Step [1] : import React & ReactDOM & CSS Style
import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
// Step [2] : fetch Data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
// App Component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
// Menu Component
function Menu() {
  const pizzaNumber = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaNumber > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObje={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>we still work on it</p>
      )}
    </main>
  );
}
// Pizza Component
function Pizza({ pizzaObje }) {
  return (
    <li className={`pizza ${pizzaObje.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObje.photoName} alt={pizzaObje.name} />
      <div>
        <h3>{pizzaObje.name}</h3>
        <p>{pizzaObje.ingredients}</p>
        <span>{pizzaObje.soldOut ? "SOLD OUT" : pizzaObje.price}</span>
      </div>
    </li>
  );
}
// Footer Component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 4;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return <footer className="footer">{isOpen ? <Order closeHour={closeHour} /> : null}</footer>;

  // without using JSX
  //   return React.createElement("footer", null, "We are Currently Open");
}
// Order Component
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

// Render App component in HTML
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
