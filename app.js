const Koa = require("koa");
const Router = require("koa-router");
const render = require("koa-ejs");
const path = require("path");

const app = new Koa();
const router = new Router();

render(app, {
  root: path.join(__dirname, "views"),
  layout: "template",
  viewExt: "html",
  cache: false,
  debug: false,
  async: true
});

const users = ["Virat", "Sachin", "Rohit", "Dhoni"];

router.get("/users", async ctx => {
  await ctx.render("index", {
    users: users
  });
});

router.post("/pk/:id", ctx => {
  ctx.body = ctx.request.req;
  return (ctx.status = 201);
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
