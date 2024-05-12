export class CGFS {
    constructor(rxdb_config, seed_phrase){

    }

    cgfs_create_collection(
        APPLICATION_ID,
        APPLICATION_SOURCE_DID,
        COLLECTION_NAME
    ){
    }
    

    cgfs_upsert(
        APPLICATION_ID,
        APPLICATION_SOURCE_DID,
        COLLECTION_NAME,
        UPSERT_QUERY
    ){
    }

    cgfs_add_function(
        APPLICATION_ID,
        APPLICATION_SOURCE_DID,
        FUNCTION_NAME
    ){
    }

    cgfs_config_auth(){
        // Check dd-rbac from the nostr-nip05-server git repo
    }

    cgfs_setup(
        ROOT_NOSTR_NPUB,
        RXDB_CONFIG
    ){
    }

    cgfs_run(
        APPLICATION_ID,
        APPLICATION_SOURCE_DID,
        FUNCTION_NAME,
        PERMISSION_ID,
        SIGNED_PAYLOAD
    ){
    }

    cgfs_add_app(
        APP_DID,
        APP_DID_CID,
        APP_DID_CONTENT
    ){
    }
}