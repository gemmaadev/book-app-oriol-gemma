import { createBrowserRouter } from "react-router";
import BookDetailPage from "../../pages/BooksDetailPage";
import BooksPage from "../../pages/BooksPage";
import CartPage from "../../pages/CartPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage";
import ProfilePage from "../../pages/ProfilePage";
import Layout from "../layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "books", Component: BooksPage },
      { path: "books/:bookId", Component: BookDetailPage },
      { path: "cart", Component: CartPage },
      { path: "login", Component: LoginPage },
      { path: "profile", Component: ProfilePage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
