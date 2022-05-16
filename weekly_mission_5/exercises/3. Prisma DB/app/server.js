const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
//const cors = require('cors');

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

app.get('/explorers/:id', async (req, res) => {
const id = req.params.id;
const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
res.json(explorer);
});

app.post('/explorers', async (req, res) => {
const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
    };
const message = 'Explorer creado.';
await prisma.explorer.create({data: explorer});
return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

// SELECT * FROM "MissionCommander";




app.get('/msCommanders', async (req, res) => {
    const allMC =  await prisma.missionCommander.findMany({});
    res.json(allMC);
  });

app.get('/msCommanders/:id', async (req, res) => {
const id = req.params.id;
const mc = await prisma.missionCommander.findUnique({where: {id: parseInt(id)}});
res.json(mc);
});

app.post('/msCommanders', async (req, res) => {
const mc = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
    };
const message = 'MC creado.';
await prisma.missionCommander.create({data: mc});
return res.json({message});
});

app.put('/msCommanders/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.missionCommander.update({
		where: {
			id: id
		},
		data: {
			missionCommander: req.body.missionCommander
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/msCommanders/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.missionCommander.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

