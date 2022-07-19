const styled = {}
const tags = [
  "div", "h1", "h2", "h3", "h4", "h5", "h6",
  "a", "p", "button", "input", "span", "img",
]

export function css(strings, ...values) {
  return strings.reduce((res, str, i) => {
    return res + str + (values[i] ? values[i]() : ""); // 문자열이 있는 부분은 그냥 연결하고 함수나 객체가 있는 부분은 함수를 실행해서 얻은 반환값이나 객체의 프로퍼티 값을 연결함
  }, "");
}

function buildElement(tag, style){
  const el = document.createElement(tag)
  el.style = style
  return el 
}

function buildStyledElement(tag, props, strings, ...values) { 
  const style = strings.reduce((res, str, i) => {  
                  return res + (str.includes('@media') && document.styleSheets[0] ? document.styleSheets[0].insertRule(str) : str) + (values[i] ? values[i](props || {}) : "");  // props: { theme, backcolor }
                }, "");
  
  return buildElement(tag, style)
}

function setPropertiesOfStyledObject(styled, tags, buildStyledElement){
  for(let tag of tags){
    styled[tag] = (strings, ...values) => (props) => buildStyledElement(tag, props, strings, ...values) // closure: wrapping with tag and props
  }
}

setPropertiesOfStyledObject(styled, tags, buildStyledElement)

export default styled
