export class CGFS {
    constructor(rxdb_config, seed_phrase){

    }
    /*
    * Features
        * All collections get stored as a single CID hash sign chain
    * To Design
        * How do we deal with migrations?
        * What do we do about collections we migrate from and their refernece
        * What about signing logs with the IPNS key?
        * We should think about how to do DAG / RAG pipelines on data
            * Maybe use S3 storage folders for each step?
        * Log invalid stuff that did not run
        * We need to figure out how to do cross collection references
            * Do we just use the IPNS name, but that is ephemeral
            * Do we use a DID of the user, but that stops forking and requires rerendering
            * The data will be attached to the IPNS name of present, therefore databases need to be aware of the IPNS names that signed everything previously
        * Remember to check the RxDB version
        * Link IPNS names to the collections
        * Track number of record in each index
        * I just learned that rxdb can do [Attachments](https://rxdb.info/rx-attachment.html)
        * The PKI collection should not be shared over RXDB's repplication system
        * The collection should be encrypted before replciation if you want it to be secure in transit
        * Syncing collections across devices
        * We gotta require the rxdb database have a password for replication purposes
    */


    create_cgfs_collection(){
    }
    

    cgfs_upsert(
        APPLICATION_ID,
        APPLICATION_SOURCE_DID,
        COLLECTION_NAME
    ){
    }

    add_cgfs_function(
        APPLICATION_ID,
        APPLICATION_SOURCE_DID,
        FUNCTION_NAME
    ){
    }

    config_cgfs_auth(){
        // Check dd-rbac from the nostr-nip05-server git repo
    }

    setup(){
        // * Create collection for seed phrase
        // * Create root collection
            // * IPNS names and stored the CID chain used logging
        // * Create schema collection
            // * stores the raw schema data fed into add_cgfs_collection
        // * Create Schema Implimented collection that links to schema collection
        // * Create CID collection
        // * Create remote CID collection
        // * Create logging collection
        // * Create PKI collection
        // * Create Application Config Collection
            // * This is where we store the data that creates the collections and functions
        // * Create function collection
        // * Create auth collections
            // Check dd-rbac for schema
            // user-to-role
            // app-name-to-role
    }

    run(
        APPLICATION_ID,
        APPLICATION_SOURCE_DID,
        FUNCTION_NAME,
        PERMISSION_ID,
        SIGNED_PAYLOAD
    ){
    }
}