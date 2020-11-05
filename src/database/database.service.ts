import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from '../config/config.keys';


export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService){
            const obj = {
                ssl: !config.isDevelopmentEnv,
                type: 'postgres',
                port: Number(config.get(Configuration.DB_PORT)),
                host: config.get(Configuration.DB_HOST),
                username: config.get(Configuration.DB_USERNAME),
                password: config.get(Configuration.DB_PASSWORD),
                database: config.get(Configuration.DB_DATABASE),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
                sincronize: false
            };

            return obj as ConnectionOptions
        }
    })
]