import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'stack'
  });
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to MySQL database!');
})
function findOne(email){
    connection.query('SELECT * FROM users where email="s"', (error, results, fields) => {
        if (error) {
          console.error('Error performing query:', error);
          return;
        }
        else {
            return 1;
        }
    })
    
    
}