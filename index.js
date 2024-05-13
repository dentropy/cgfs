export class CGFS {
    constructor(
        RXDB_CONFIG,
        SEED_PHRASE
    ){
    }


    cgfs_add_app(
        APP_DID,
        APP_DID_CID,
        APP_DID_CONTENT,
        APP_DEPLOY_DID
    ){
    }

    cgfs_create_collection(
        APP_DEPLOY_DID,
        APP_SOURCE_DID
    ){
    }
    

    cgfs_deploy_function(
        APPLICATION_DEPLOY_DID,
        APPLICATION_SOURCE_DID
    ){
    }

    cgfs_config_auth(
        PERMISSION_DID,
        FROM_APP_SOURCE_DID,
        FROM_APP_DEPLOY_DID,
        PERMISSION_TYPE,
        TO_APP_SOURCE_DID,
        TO_APP_DEPLOY_DID
    ){
    }

    cgfs_upsert(
        APP_DEPLOY_DID,
        APP_SOURCE_DID,
        PERMISSION_DID,
        QUERY_CONTENTS
    ){
    }

    cgfs_query(
        APP_SOURCE_DID,
        APP_DEPLOY_DID,
        PERMISSION_DID,
        QUERY_CONTENTS
    ){}

    cgfs_run(
        APP_DEPLOY_DID,
        APP_SOURCE_DID,
        PERMISSION_DID,
        QUERY_CONTENTS 
    ){
    }
}