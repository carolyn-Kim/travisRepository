const koa=require('koa2');
const app = new koa();

app.use(async(ctx,next)=>{
    ctx.body ="hello koa2 emmmm......"
});

app.listen(3000,()=>{
    console.log('server is running...');
})