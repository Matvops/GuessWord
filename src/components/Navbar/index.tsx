import { StarIcon, SunIcon } from "lucide-react";
import { Logo } from "../Logo/indes";
import style from './style.module.css';

export function Navbar() {
  
  return (
    <nav className={style.nav}>

      <div className={style.actions}>
        <div className={`${style.button} ${style.sunIcon}`} title="Authors">
          <StarIcon />
        </div>

        <div className={`${style.button} ${style.question}`} title="How to Play">
          <span>?</span>
        </div>
      </div>

      <Logo />

      <div className={style.button} title="Theme">
        <SunIcon />
      </div>
    </nav>
  );
}