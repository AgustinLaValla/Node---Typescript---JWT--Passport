import mongoose from 'mongoose';
import colors from 'colors';
import config from './config/config'

async function connect(): Promise<void> {
    await mongoose.connect( config.DB.URI, {
        useCreateIndex:true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log(`${colors.yellow('DATABSE IS CONNECTED')}`))
      .catch((error) => {
          console.log(`${colors.blue(error)}`);
          process.exit(0);
    });
}

export default connect;