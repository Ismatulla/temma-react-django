const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Custom routes for clubs
router.get('/clubs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const club = router.db.get('clubs').find({ id: id }).value();
  res.json(club);
  console.log(club);
});

router.get('/clubs/:id/questions', (req, res) => {
  const id = parseInt(req.params.id);
  const questions = router.db.get('clubs').find({ id: id }).get('questions').value();
  res.json(questions);
  console.log(questions);
});

router.post('/clubs/:id/questions', (req, res) => {
  const id = parseInt(req.params.id);
  const question = req.body;

  router.db.get('clubs').find({ id: id }).get('questions').push(question).write();

  res.json(question);
});

router.get('/clubs/:id/questions/:questionId/answers', (req, res) => {
  const id = parseInt(req.params.id);
  const questionId = parseInt(req.params.questionId);
  const answers = router.db.get('clubs').find({ id: id }).get('questions').find({ id: questionId }).get('answers').value();

  res.json(answers);
});

router.post('/clubs/:id/questions/:questionId/answers', (req, res) => {
  const id = parseInt(req.params.id);
  const questionId = parseInt(req.params.questionId);
  const answer = req.body;

  router.db.get('clubs').find({ id: id }).get('questions').find({ id: questionId }).get('answers').push(answer).write();

  res.json(answer);
});

router.patch('/clubs/:id/questions/:questionId/answers/:answerId/likes', (req, res) => {
  const id = parseInt(req.params.id);
  const questionId = parseInt(req.params.questionId);
  const answerId = parseInt(req.params.answerId);
  const likes = req.body.likes;

  router.db.get('clubs').find({ id: id }).get('questions').find({ id: questionId }).get('answers').find({ id: answerId }).assign({ likes: likes }).write();

  res.json({ success: true });
});

// Middlewares
server.use(jsonServer.bodyParser);
server.use('/', router);

// Start server
let port = 3001
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
