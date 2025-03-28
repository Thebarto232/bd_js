import express from "express"; /**importamos  */
import bodyParser from "body-parser";
import routerCategorias from "./rutas/categorias.js";
const app = express();

app.use(bodyParser.json()); /**metodo use (dependenia accede al body) */

app.use(express.urlencoded({ extended: true })); /** */
// app.get("/johan", (req, res) => {
//   /**ruta n /johan y eso va en posman localhost/johan */
//   console.log(req.body); /**imprime el cuerpo con req */
//   res.json("hola");
// });

// /**peticion 1 */
// app.post("/johan", (req, res) => {
//   console.log(req.body);
// });
// /**actulizar peteicion */
// app.put("/johan", (req, res) => {
//   console.log(req.body);
// });
app.use("/categorias", routerCategorias);

app.listen(3000, () => {
  /**puerto 3000 */
  console.log("hola mundo");
});
