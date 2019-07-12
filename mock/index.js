import Mock from 'mockjs'

const user = {
  data: {
    roles: ['editor'],
    access_token: 'dfoajfjdfsjfajdfajfe',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

const info = {
  data: {
    roles: ['editor'],
    permissions: ['a', 'b'],
    sysUser: {
      username: 'daf',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    }
  }
}

const menu = {
  data: [{
    'path': '/nested',
    'component': 'Layout',
    'redirect': '',
    'alwaysShow': true,
    'name': '一级菜单',
    'icon': 'lock',
    'children': [{
      'path': 'menu1',
      'component': 'Layout',
      'alwaysShow': true,
      'name': '二级菜单1',
      'icon': 'lock',
      'children': [{
        'path': 'menu1-1',
        'component': 'views/nested/menu1/menu1-1/index',
        'name': '三级菜单1',
        'icon': 'lock'
      }, {
        'path': 'menu1-2',
        'component': 'views/nested/menu1/menu1-2/index',
        'name': '三级菜单2',
        'icon': 'lock'
      }]
    }, {
      'path': 'menu2',
      'component': 'views/nested/menu2/index',
      'name': '二级菜单2',
      'icon': 'lock'
    }]
  }]
}

Mock.mock('http://127.0.0.1:2004/login', 'post', user)
Mock.mock('http://127.0.0.1:2004/info', 'post', info)
Mock.mock('http://127.0.0.1:2004/menu', 'post', menu)
// import { param2Obj } from '../src/utils'

// import user from './user'
// import role from './role'
// import article from './article'
// import search from './remote-search'

// const mocks = [
//   ...user,
//   ...role,
//   ...article,
//   ...search
// ]

// // for front mock
// // please use it cautiously, it will redefine XMLHttpRequest,
// // which will cause many of your third-party libraries to be invalidated(like progress event).
// export function mockXHR() {
//   // mock patch
//   // https://github.com/nuysoft/Mock/issues/300
//   Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
//   Mock.XHR.prototype.send = function() {
//     if (this.custom.xhr) {
//       this.custom.xhr.withCredentials = this.withCredentials || false

//       if (this.responseType) {
//         this.custom.xhr.responseType = this.responseType
//       }
//     }
//     this.proxy_send(...arguments)
//   }

//   function XHR2ExpressReqWrap(respond) {
//     return function(options) {
//       let result = null
//       if (respond instanceof Function) {
//         const { body, type, url } = options
//         // https://expressjs.com/en/4x/api.html#req
//         result = respond({
//           method: type,
//           body: JSON.parse(body),
//           query: param2Obj(url)
//         })
//       } else {
//         result = respond
//       }
//       return Mock.mock(result)
//     }
//   }

//   for (const i of mocks) {
//     Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
//   }
// }

// // for mock server
// const responseFake = (url, type, respond) => {
//   return {
//     url: new RegExp(`/mock${url}`),
//     type: type || 'get',
//     response(req, res) {
//       res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
//     }
//   }
// }

// export default mocks.map(route => {
//   return responseFake(route.url, route.type, route.response)
// })
