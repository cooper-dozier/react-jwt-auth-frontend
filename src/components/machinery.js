export function bgBlack() {
    let wholePage = document.querySelector('body')
    wholePage.setAttribute('style', 'background-color: #050812;')
    this.setState({
      bgColorPrint: '#050812'
    })
  }
