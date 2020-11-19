import httpServer from '@/api'



export const test1 = () => httpServer.instance({
  method: 'GET',
  url: 'http://127.0.0.1:2000/api/demo',
})