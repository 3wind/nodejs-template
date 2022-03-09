const mysql = require('mysql');
const data = require('./data.js');

const connection = mysql.createConnection({
  host: 'ip',
  port: 'port',
  user: 'user',
  password: 'password',
  database: '数据库名称',
});

connection.connect();
const addSql = 'INSERT INTO route SET ?';

function handleBackendRoutes(routes) {
  for (let i = 0; i < routes.length; i++) {
    const addSqlParams = {
      id: routes[i].id || 0,
      name: routes[i].name || '',
      icon: routes[i].icon || '',
      path: routes[i].path || '',
      exact: routes[i].exact || false,
      key: routes[i].key || '',
      level: routes[i].level,
      component_id: routes[i].componentId,
      parent_com_id: routes[i].parentComId || '',
      module_type: routes[i].moduleType,
      component_path: routes[i].componentPath || '',
      bread_crumbs: routes[i].breadCrumbs || '',
      hide_in_menu: routes[i].hideInMenu || '',
    };
    connection.query(addSql, addSqlParams, function (err, result) {
      if (err) {
        console.log('[INSERT ERROR] ------ ', err.message);
        return;
      }
      // console.log('--------------------------INSERT----------------------------');
      // console.log('INSERT ID:', result);
      // console.log('-----------------------------------------------------------------\n\n');
    });
    if (!routes[i].children || routes[i].children.length === 0) {
      continue;
    }
    handleBackendRoutes(routes[i].children);
  }
}

handleBackendRoutes(data.backendRoutes);

//增
// connection.query(addSql, addSqlParams, function (err, result) {
//   if (err) {
//     console.log('[INSERT ERROR] - ', err.message);
//     return;
//   }

//   console.log('--------------------------INSERT----------------------------');
//   //console.log('INSERT ID:',result.insertId);
//   console.log('INSERT ID:', result);
//   console.log('-----------------------------------------------------------------\n\n');
// });
// // connection.query('SELECT * FROM `route`', function (error, results, fields) {
// //   if (error) throw error;
// //   console.log('The solution is: ', results, results[0]);
// // });
connection.end();
