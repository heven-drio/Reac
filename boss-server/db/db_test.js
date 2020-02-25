const md5 = require("blueimp-md5")   //md5加密函数

/*
    测试使用mongoose 操作mongodb 数据库

1.连接数据库
1.1.入mongoose
1.2.连接指定数据库(URL只有数据库是变化的)
1.3.获取连接对象
1.4.绑定连接完成的监听(用来提示连接成功)
2.得到对应特定集合的ModeL
2.1.字义Schema(描述文档结构)
2.2.定义ModeL(与集合对应，可以操作集合)
3.通过Model或其实例对集合数据进行CRUD操作
3.1.通过ModeL实例的save()添加数据
3.2.通过Model的find()/find0ne()查询多个或- - 个数据
3.3.通过Model的findByI dAndUpdate()更新某个数据
3.4.通过Model的remove( )删除匹配的数据
*/

/*1.连接数据库*/
//1.1 引入mongoose
const mongoose =  require ("mongoose")
// 1.2.连接指定数据库(URL只有数据库是变化的)
mongoose.connect("mongodb://127.0.0.1:27017/boss_test")
// 1.3.获取连接对象
const conn = mongoose.connection
// 1.4.绑定连接完成的监听(用来提示连接成功)
conn.on("connected",function(){   //连接成功回调
    console.log("数据库连接成功!!!")
})

// 2.得到对应特定集合的Model
// 2.1. 字义Schema(描述文档结构)
const userSchema = mongoose.Schema({  //指定文档的结构: 属性名/属性值的类型,是否是必须的，默认值
    username:{type:String ,require:true}, //用户名
    password:{type:String ,require:true}, //密码
    type:{type:String ,require:true}, //用户类型: dashen/laoban
    hreader:{type:String}
})
// 2.2. 定义Model(与集合对应， 可以操作集合)
const UserModel = mongoose.model("user",userSchema)  //集合名:users

/*3.通过Model或其实例对集合数据进行CRUD操作*/
// 3.1.通过ModeL实例的save()添加数据
// function testSave(){
    //创建UserModel的实例
//    const userModel = new UserModel({username:"Bob",password:md5("234"),type:"laoban"})
   //调用save()保存
//    userModel.save(function(error,user ){
//     console.log("save()",error,user)
//    })
// }
// testSave()


// 3.2.通过Model的find()/find0ne()查询多个或一个数据
// function testFind(){
    //查询多个:  得到是包含所有匹配的文档对象的数组,如果没有匹配的就是[]
    // UserModel.find({_id:"5e5378cef9968b4c3033adf8"},function(error,users){  
    //     console.log("find()",error,users)
    // })

    //查询一个: 得到是匹配的文档对象，如果没有匹配的就是null
//     UserModel.findOne({_id:"5e5378cef9968b4c3033adf8"},function(error,users){
//         console.log("findOne()",error,users)
//     })
// }
// testFind()
// 3.3.通过Model的findByIdAndUpdate()更新某个数据
    // function testUpdate(){
    //     UserModel.findByIdAndUpdate({_id:"5e5378cef9968b4c3033adf8"},{username:"Jack"},function(error,oldUser){
    //         console.log("findByIdAndUpdate()",error,oldUser)
    //     })
    // }
    // testUpdate()
// 3.4.通过Model的remove( )删除匹配的数据
function testDelete(){
    UserModel.remove({_id:"5e5378cef9968b4c3033adf8"},function(error,doc){
        console.log("remove()",error,doc)
    })
}
testDelete()