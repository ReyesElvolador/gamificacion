module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate(null, function(err) {
    if (err) throw err;

    app.models.Juego.create([{
      nombre: 'tennis',
     
    }, {
      nombre: 'baloncesto',
   
    }, {
      nombre: 'pccomponentes',
     
    }], function(err, Juegos) {
      if (err) throw err;

      console.log('Models created: \n', Juegos);
    });
  });
};
