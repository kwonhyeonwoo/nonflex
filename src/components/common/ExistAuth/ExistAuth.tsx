import { Link } from "react-router-dom";
import { Title } from "./style/style"
type Props={
    link:string;
    text:string;
}
const ExistAuth = ({link,text}:Props) => {
  return (
    <Link to={link}>
        <Title>
            {text}
        </Title>
    </Link>
  )
}

export default ExistAuth