import {createServer} from 'http'
import {on} from 'events'

let todos = [
  {
    name: 'first',
    done: false,
  }
]


const port = 3000

const reqs = on(
  createServer().listen(port),
  'request'
)


for await(const [_, res] of reqs) {
  console.log(_.url)
  console.log(_.method)
  console.log(_.statusCode)
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,HEAD,OPTIONS')

  res.end(JSON.stringify(todos, null, 2))


}
