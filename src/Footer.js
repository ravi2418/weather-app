import "./App.css";

export default function Footer() {
   return (
      <p className="footer">
         Coded and designed by
         <a
            className="footLink"
            href="https://www.linkedin.com/in/ravi-kant-751496263/"
            target="_blank"
            rel="noopener noreferrer"
         >
            {" "}
            Ravi
         </a>{" "}
         and is open-souced on
         <a
            className="footLink"
            href="https://github.com/ravi2418"
            target="_blank"
            rel="noopener noreferrer"
         >
            {" "}
            GitHub
         </a>
      </p>
   );
}
