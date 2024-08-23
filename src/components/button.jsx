import { Link } from "react-router-dom";

const ButtonComponents = (props) => {
  const {children, style, to} = props;
  return (
    <>
      <Link to={to? to: "/"}
        className= {style ? style: "px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700"}>{children}</Link>
    </>
  )
}

export default ButtonComponents
