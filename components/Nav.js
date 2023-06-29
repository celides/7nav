import Link from "next/link";
import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <div>
        <h1>Navigation Bar.com</h1>
        <h2>Funval inspiration</h2>
      </div>
      <ul>
        <li>
          <Link href={"https://www.fundaciondevalores.org/"}>Funval</Link>
        </li>
        <li>
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSfxctAKAQocGpAGd3Qwmyb52eMKy5yyl8mf7mKfS0gBgB8JOQ/viewform?pli=1"
            }
          >
            Inscripciones
          </Link>
        </li>
        <li>
          <Link href={"https://www.facebook.com/fundet"}>facebook</Link>
        </li>
        <li>
          <Link
            href={"https://www.youtube.com/channel/UC3mlp-KW6mSDrsfsp8OOlIQ"}
          >
            youtube
          </Link>
        </li>
        <li>
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=51950493983&text&type=phone_number&app_absent=0"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
