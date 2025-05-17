import { DataSource } from 'typeorm'
import { AppSystemProp } from '@activepieces/server-shared'
import { system } from '../helper/system/system'
import { commonProperties } from './database-connection'

export const createMongoDataSource = (): DataSource => {
    const url = system.getOrThrow(AppSystemProp.MONGODB_URI)
    return new DataSource({
        type: 'mongodb',
        url,
        useUnifiedTopology: true,
        ...commonProperties,
    })
}
