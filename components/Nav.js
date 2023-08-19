import Link from "next/link";
import css from "./Nav.module.css"

export default function Nav() {
  return (
    <nav className={css.nav}>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/todolist">To Do List</Link>
        </li>
      </ul>
    </nav>
  );
}
