import styled from 'styled-components';

export const CommentSection = styled.div`
  margin-top: 5rem;
`;
export const Section = styled.section`
  text-align: justify;
`;
export const Comment = styled.div`
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 90%;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const PostTitle = styled.h2`
  text-align: center;
`;
export const PostTitleHeader = styled.h1`
  text-align: center;
`;
export const CommentTextArea = styled.textarea`
  width: 300px;
  height: 50px;
  font-family: 'Roboto', sans-serif;
  padding: 0.5rem;
`;
export const CommentList = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Avatar = styled.div`
  background: url('https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 70px;
  height: 70px;
`;
export const CommentInfo = styled.div`
  margin-left: 10px;
  max-width: 80%;

  @media (max-widht: 900px) {
    max-width: 100%;
  }
`;
export const Author = styled.div`
  font-size: 12px;
  color: #cccccc;
  margin-bottom: 5px;
`;
export const Head = styled.h2`
  text-align: center;
`;
export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const PostTitleInput = styled.input`
  font-size: 20px;
  border: none;
  padding: 0.5rem 1rem;
  color: #000;
  font-weight: 200;
`;
export const PostBodyTextarea = styled.textarea`
  font-size: 20px;
  width: 60%;
  margin-top: 2rem;
  height: 200px;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }
`;
export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: rgb(30, 77, 34);
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 1rem;
`;
export const ErrorText = styled.p`
  color: #a72b2b;
`;
export const ErrorPageWrapper = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ErrorPageText = styled.h1`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const Separator = styled.span`
  font-size: 80px;
  margin: 0 15px;

  @media (max-width: 500px) {
    display: none;
  }
`;
export const Container = styled.div`
  padding: 5px 20%;

  background-color: ${(props) => props.backgroundColor || ''};
  color: ${(props) => props.color || '#000'};

  @media (max-width: 450px) {
    padding: 5px 5%;
  }
`;
export const Navbar = styled.div`
  background-color: #000;
  color: #fff;
  padding: 1rem 0;
`;
export const NavLink = styled.a`
  transition: color 0.3s;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
export const SeparatorNavbar = styled.span`
  color: #fff;
  margin: 0 1rem;
`;
export const PostWrap = styled.div`
  text-align: center;
  padding: 2rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;
export const PostBody = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;
