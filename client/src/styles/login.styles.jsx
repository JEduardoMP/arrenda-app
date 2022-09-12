import styled from 'styled-components'

export const LoginSt = styled.section`
  width: 30%;
  margin: 0 auto;
  background: #f1f1f1;
  padding: 4rem 0;
  .login-title {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    margin-top: 1rem;
    gap: 2rem;
    p {
      color: red;
    }
  }
`