import Link from "next/link";
import css from "./Nav.module.css";

const pages = [
  { href: "/home", name: "Home" },
  { href: "/todolist", name: "To Do List" },
  { href: "/table", name: "Table users" },
];

export default function Nav() {
  return (
    <nav className={css.nav}>
      <ul>
        {pages.map(({ href, name }) => (
          <li>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
