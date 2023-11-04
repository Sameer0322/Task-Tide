const {Router} = require("express");
const { getToDo, saveTodo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router();

router.get('/',getToDo)
router.post('/save',saveTodo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)


module.exports = router;