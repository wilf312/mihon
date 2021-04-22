if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', {scope: '/'})
  .then((reg) => {
    console.log(`registration succceeded. scope is ${reg.scope}`)
  })
  .catch((error) => {
    console.log(`Registration failed with ${error}`)
  })
}


fetch('/test.json')
  .then(res => {
    console.log(res)
    return res.json()
  })
  // .then(json => json())
  .then(d => console.log(d))
  fetch('http://localhost:3000/test2.json', {
    mode: 'cors'
  })
    .then(res => {
      // console.log(res)
      return res.json()
    })
    // .then(json => json())
    .then(d => console.log(d))