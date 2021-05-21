const app = require("./app")
const port = process.env.PORT || 8000;

app.set(port, 8000);
app.listen(app.get('port'), () => {
  console.log(`App is running on http://localhost:${app.get('port')}`)
});

