const { exec } = require('child_process');
require('dotenv').config();

const API_KEY = process.env.TYPESENSE_ADMIN_API_KEY;
const PORT = 8108;

const command = `docker run -i -p ${PORT}:8108 -v E:\\Internship\\Learning\\Typesense\\Projects\\moviesta\\typesense-server-data:/data typesense/typesense:26.0 --data-dir /data --api-key=${API_KEY} --listen-port ${PORT} --enable-cors`;

exec(command, (err, stdout, stderr) => {
  if (!err && !stderr) {
    console.log('Typesense Server is running...');
  }
  if (err) {
    console.log('Error running server: ', err);
  }

  if (stderr) {
    console.log('Error running server: ', stderr);
  }

  if (stdout) {
    console.log('Server output: ', stdout);
  }
});
