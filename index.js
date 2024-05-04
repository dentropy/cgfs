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
        // DO NOT USE FOR CORE COLLECTIONS root, logs, CID, PKI, etc. etc.
        // Check if schema name is already in root collection
        // Check JSON Schema is valid
        // Create IPNS name (optionally from seed phrase)
        // Store IPNS keys in PKI collection
        // Create collection
        // Save collection metadata to root collection
    }
    

    cgfs_upsert(function_name, function_hash, ){
        // Get collection metadata from root collection
        // Set default previous hash
        // Check if ID is already in rxdb
            // If ID exists, update previous hash
        // Upsert into data
        // Add CID to CID store
        // Update root collection metadata CID log

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

    add_cgfs_collection(){
        // * Check valid jsonSchema
        // * Store in schema collection
        // * Create IPNS Name
        // * Create collection
        // * Store IPNS key in PKI
        // * Generate JSON to store in new collection metadata in root collection
        // * Generate CID of new collection metadata in root collection
        // * Store CID in CID collection
        // * Store collection metadata in root collection
    }

    add_cgfs_function(){
        // * We store functions which are raw strings of javascript
          // * [How to turn a String into a JavaScript function call? - Stack Overflow](https://stackoverflow.com/questions/912596/how-to-turn-a-string-into-a-javascript-function-call)
          // * [String to Function: NodeJS](https://chatgpt.com/share/797e0fd8-41a7-4f71-bd36-e207bfcabe21?oai-dm=1)
        // 
    }

    config_cgfs_auth(){
        // Check dd-rbac from the nostr-nip05-server git repo
    }

    run(){
        // Check if function exists
        // Check if signature on nostr event is configured to run function
        // Try running the functions
            // MAKE SURE FUNCTIONS CHECK EVERYTHING, WE DON't WANT SOME COLLECTIONS UPDATED AND NOT ALL OF THEM
            // Return error if not sucessful
        // Get the previous log state of the function
        // Produce a new log
        // Generate CID of new log
        // Store CID of log
        // Store the new log
    }
}