const fastify = require('fastify')();
const path = require('path');

// Registrar plugin para servir arquivos estáticos do diretório "public"
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public')
});

// Registrar plugin para servir arquivos estáticos do diretório "assets"
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public', 'assets'),
  prefix: '/assets/'
});

// Rota para renderizar a página principal
fastify.get('/', (request, reply) => {
  reply.sendFile('index.html');
});

// Iniciar o servidor
fastify.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server running on port 3000');
});