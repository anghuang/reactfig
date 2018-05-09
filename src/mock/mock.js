import Mock from 'mockjs';
import fetchMock from 'fetch-mock'
Mock.setup({timeout:'1200-2600'})
var data=Mock.mock({
    'code': 0,
    'data': {
        'list|1-10': [{
// 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'title': '前端人人@id',
            'status': 1
        }]
    },
    'message': '操作成功',
    'systemDate': new Date().getTime()
});
fetchMock.post('/todoList.mock',()=>{
    return data
})
