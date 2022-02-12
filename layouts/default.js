import style from "./default.module.css"

export default function Layout({ children }) {
  return <div className={ style.container }>{ children }</div>
}