function onElementClick() {
    let number = this.getAttribute('data-number')
    let element = window.tableData[number - 1]
    window.location = element.url
  
    return false
  }
  
  const colors = {
    404: '#ffffff',
    200: '#003262',
  }
  
  function addElementToTable(data, tableDiv) {
    let elDiv = document.createElement('div')
    let symbol = document.createTextNode(data.symbol)
  
    elDiv.appendChild(symbol)
    elDiv.setAttribute('class', 'table-element')
    elDiv.setAttribute('style', `grid-column:${data.col}; grid-row:${data.row};`)
    elDiv.setAttribute('data-number', data.number)
    elDiv.setAttribute('href', data.url)
    tableDiv.appendChild(elDiv)
    elDiv.addEventListener('click', onElementClick)
  }
  
  window.onload = () => {
    let tableDiv = document.querySelector('#periodic-table')
    let loader = document.querySelector("#loader")
  
    window.tableData.forEach((e) => {
      addElementToTable(e, tableDiv)
    })
  }
  