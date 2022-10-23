import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Hashtag = styled.span`
  font-weight: 700;
  margin: 0 3px;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

const HashtagComponent = ({hashtag}) => {
  const navigate = useNavigate()

  return (
    <Hashtag onClick={() => {navigate(`/hashtag/${hashtag.replace("#", "")}`); window.location.reload()}}> {hashtag} </Hashtag>
  )
}

export default HashtagComponent;