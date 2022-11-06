const Koa = require("koa");
const koaBody = require('koa-body')
const koaStatic = require('koa-static')
const path = require('path')
const router = require("./routes/index.js");
const app = new Koa();

// 访问服务器静态资源
app.use(koaStatic(path.join(__dirname, 'public')))

// 使用ctx.body解析中间件
// app.use(bodyParser());

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 500 * 1024 * 1024, // 设置上传文件大小最大限制，默认
    // 保留文件扩展名
    keepExtensions: true,
  }
}));


// 路由映射
app.use(router.routes(), router.allowedMethods());
app.listen(3301, () => {
  console.log("server runing at http://localhost:3301");
});