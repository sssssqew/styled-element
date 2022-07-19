import styled, { css } from "./styled.js";

const theme = { // font color
  brandColor1: "#BE2525",
  brandColor2: "#BE0000",
};
const backcolor = { // background color
  bgColor1: '#eee',
  bgColor2: '#bbb'
}

const buildDiv = styled.div`
  width: 100%;
  height: 500px;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.themeColor || 'red' };
  background: ${props => props.bgColor || 'orange' };
  
  ${props => 
    props.inverted && css`
        background: black;
        color: #eee;
      `
  }
`
const Container = buildDiv({ themeColor: theme.brandColor2, bgColor: backcolor.bgColor1, inverted: false })
console.log(Container)

const buildButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 10px;
  outline: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${props => props.color || 'black' };
  background: ${props => props.bgColor || 'green' };
`
const Button = buildButton({ bgColor: backcolor.bgColor2, color: '#eee' })
console.log(Button)
Button.innerText = "home"
Button.addEventListener('click', (e) => alert("you clicked this button !"))

const Button2 = buildButton({ bgColor: "peru" })
Button2.innerText = "about"

const buildInput = styled.input`
  width: 500px;
  height: 50px;
  outline: none;
  border: 2px solid #bbb;
  border-radius: 20px;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 1.5rem;
  
  ${props => {
    if(props.themeColor && props.bgColor){
      return css`
        color: ${() => props.themeColor};
        background: ${() => props.bgColor};
      `
    }
  }}

  @media (max-width: 768px){
    .email-input{
        max-width: 50%;
    }
  }
`
const Input = buildInput({ themeColor: theme.brandColor1, bgColor: backcolor.bgColor1 })
console.log(Input)
Input.autofocus = true 
Input.className = 'email-input'
Input.placeholder = "Type something..."

document.body.appendChild(Container)
Container.append(Button, Button2, Input)
