import home_styles from "@/app/page.module.css";

type ChildrenProp<P = unknown> = P & { children: React.ReactNode };

export default function Navbar({children}: ChildrenProp){
  return (
    <header className={home_styles.full_content_header}>
      {children}
    </header>
  );
}