// npm i mongodb
// run by "cd"ing into the admin folder and running via command "node connection.js"
// Has a list of different functions which can add/update/delete documents in the database
// Each document member must have a unique _id which is usually randomly generated when adding to the collection

const {MongoClient} = require('mongodb');

async function main() {
	const MONGOURI = "mongodb+srv://NicSantiago:lessgo@cluster0.z11sm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const client = new MongoClient(MONGOURI);

    try {
        await client.connect();

        // Call on function to edit database here
        //Example insert Member of name "Jacob" and role "President"
        await insertMember(client, {
            name:"Jacob",
            role: "President"
        });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//Deletes a member found by name
async function deleteMemberByName(client, nameOfMember) {
    const result = await client.db("sample_members").collection("members").deleteOne(
        { name: nameOfMember }
    );

    console.log(`${result.deletedCount}`, 'documents was/were deleted');
}

// Adds a variable "age" to all members if it doesn't exist
async function updateAllMembersToHaveAge(client) {
    const result = await client.db("sample_members").collection("members").updateMany(
        {
            age: {$exists: false}},
            { $set: {age: 'Unknown'}
        }
    );

    console.log(`${result.matchedCount}`, 'documents matched the query criteria');
    console.log(`${result.modifiedCount}`, 'documents was/were updated');
}

// Updates a member if they exist, if not creates it
async function upsertMemberByName(client, nameOfMember, updatedMember) {
    const result = await client.db("sample_members").collection("members").updateOne(
        { name: nameOfMember},
        { $set: updatedMember},
        { upsert: true }
    );

    console.log(`${result.matchedCount}`, 'documents matched the query criteria');
    
    if (result.upsertedCount > 0){
        console.log(`One document was inserted with the id ${result.upsertedId._id}`);
    } else {
        console.log(`${result.modifiedCount}`, 'documents was/were updated');
    }
}

// function to update a member with new information
async function updateMemberByName(client, nameOfMember, updatedMember) {
    const result = await client.db("sample_members").collection("members").updateOne(
        { name: nameOfMember},
        { $set: updatedMember}
    );

    console.log(`${result.matchedCount}`, 'document(s) matched the query criteria');
    console.log(`${result.modifiedCount}`, 'documents was/were updated');
}

// function which returns a member searched for by name
async function findMemberByName(client, nameOfMember) {
    const result = await client.db("sample_members").collection("members").findOne({ name: nameOfMember});

    if (result) {
        console.log(`Found a member in collection with the name: '${nameOfMember}':`)
        console.log(result);
    } else {
        console.log(`No member found with the name '${nameOfMember}'`);
    }
}

// function which inserts an array of members into the db
async function insertManyMembers(client, newMembers) {
    // "sample_members" is the name of the database
    // "members" is the name of the collection
    const result = await client.db("sample_members").collection("members").insertMany(newMembers);

    console.log(`${result.insertedCount}`, 'new members inserted with the following ids')
    console.log(result.insertedIds)

}

// function which inserts member into our db
async function insertMember(client, newMember) {
    const result = await client.db("sample_members").collection("members").insertOne(newMember);

    console.log(`New member created with the following id: ${result.insertedId}`);
}

main().catch(console.error);

// Print out the names of all the databases
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}