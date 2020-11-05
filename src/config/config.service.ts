import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import {parse} from 'dotenv'


@Injectable()
/**
 * Faz a leitura do arquivo .env
 */
export class ConfigService {
    private readonly envConfig: {[key: string]: string};
    public isDevelopmentEnv = true;

    constructor(){
        this.isDevelopmentEnv = process.env.NODE_ENV !== 'production';

        if(this.isDevelopmentEnv){
            const envFilePath = __dirname + '/../../.env';
            const existsPath = fs.existsSync(envFilePath);

            if(!existsPath){
                console.log('.env file não existe');
                process.exit(0);
            }

            this.envConfig = parse(fs.readFileSync(envFilePath));
        }else{
            this.envConfig = {
                PORT: process.env.PORT
            }
        }
    }

    get(key: string): string{
        return this.envConfig[key];
    }
}
