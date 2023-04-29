const right = document.querySelector('.right');
const iframe = document.createElement('iframe');
right.appendChild(iframe);

const run = () =>{
  const htmlCode = document.getElementById('html-code').value;
  const cssCode = document.getElementById('css-code').value;
  const jsCode = document.getElementById('js-code').value;
  iframe.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
  iframe.contentDocument.body.innerHTML = htmlCode;
  iframe.contentWindow.eval(jsCode);
}
