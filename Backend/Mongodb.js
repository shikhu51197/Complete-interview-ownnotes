// MongoDB
// Q1. What is BSON in MongoDB?
// BSON stands for Binary JSON. It is a binary file format that is used to store serialized JSON documents in a binary-encoded format.The MongoDB database had several scalar data formats that were of special interest only for MongoDB, hence they developed the BSON data format to be used while transferring files over the network.

// Q2. What are Replication and Sharding in MongoDB?
// Replication – is the method of duplication of data across multiple servers. For example, we have an application and it reads and writes data to a database and says this server A has a name and balance which will be copied/replicate to two other servers in two different locations.

// Sharding – is a method for allocating data across multiple machines. MongoDB used sharding to help deployment with very big data sets and large throughput the operation. By sharding, you combine more devices to carry data extension and the needs of read and write operations.

// Q3. When should we embed one document within another in MongoDB?
// MongoDB provides you read operations to retrieve embedded/nested documents from the collection or query a collection for a embedded/nested document. You can perform read operations using the db.collection.find() method.

// Q4. Can you create an index on an array field in MongoDB? If yes, what happens in this case?

// Yes , You can create an index on a field containing an array value to improve performance for queries on that field. When you create an index on a field containing an array value, MongoDB stores that index as a multikey index.
// To create an index, use the db.collection.createIndex() method.

// Syntax:

// db.<collection>.createIndex( { <field>: <sortOrder> } )
// The example uses a students collection that contains these documents:


// db.students.insertMany( [ 
//    { 
//       "name": "Andre Robinson", 
//      "test_scores": [ 88, 97 ] 
//    }, 
//    { 
//       "name": "Wei Zhang", 
//       "test_scores": [ 62, 73 ] 
//    }, 
//    { 
//       "name": "Jacob Meyer", 
//       "test_scores": [ 92, 89 ] 
//     } 
// ] )
// You regularly run a query that returns students with at least one test_score greater than 90. You can create an index on the test_scores field to improve performance for this query.

// Procedure: The following operation creates an ascending multikey index on the test_scores field of the students collection:

// db.students.createIndex( { test_scores: 1 } )
// Because test_scores contains an array value, MongoDB stores this index as a multikey index.
 

// Q5.What is Shard Key in MongoDB and how does it affect development process?
// Shard key, which is a unique identifier that is used to map the data to its corresponding shard. When a query is received, the system uses the shard key to determine which shard contains the required data and then sends the query to the appropriate server or node.

// Q6. What is ObjectId in MongoDB?
// Every document in the collection has an “_id” field that is used to uniquely identify the document in a particular collection it acts as the primary key for the documents in the collection. “_id” field can be used in any format and the default format is ObjectId of the document.

// Format of ObjectId:

// ObjectId(<hexadecimal>)
// Q7. What is a Covered Query in MongoDB?

// A covered query in MongoDB is a type of query where all the fields needed for the query are covered by an index. In other words, MongoDB can fulfill the query entirely using the index without needing to examine the actual documents in the collection. This is advantageous in terms of performance because it reduces the number of document reads necessary to satisfy the query.

// For a query to be considered covered, the following conditions must be met:

// Projection: The query must include a projection that only selects fields covered by the index. A projection specifies which fields to include or exclude in the query results.
// Index: The fields specified in the query’s filter criteria must be part of an index. The fields specified in the projection must be part of the same index.
// No Additional Document Fields: The query should not include additional fields or expressions that are not covered by the index. If additional fields are needed, the index might not cover the entire query.
// Example:
// Consider a collection named employees with the following documents:

//  { "_id": 1, "name": "Alice", "age": 30, "department": "HR" }
//  { "_id": 2, "name": "Bob", "age": 35, "department": "IT" }
//  { "_id": 3, "name": "Charlie", "age": 28, "department": "HR" }
// Let’s say you have an index on the “department” field:

//  db.employees.createIndex({ "department": 1 });
// Now, if you perform a query like this:

// db.employees.find({ "department": "HR" }, { "_id": 0, "name": 1 });
// This query is considered covered because:

// The filter criteria ({ “department”: “HR” }) matches the indexed field.
// The projection ({ “_id”: 0, “name”: 1 }) includes only the “name” field, which is also part of the index.
// As a result, MongoDB can satisfy the query by scanning the index without needing to access the actual documents.

// Keep in mind that covered queries are beneficial for performance because they minimize the amount of data that needs to be read from disk. However, not all queries can be covered, and the decision to create specific indexes should be based on the most common and performance-critical queries in your application.

// Q8. How to Create Relationship in MongoDB?
// In MongoDB, a relationship represents how different types of documents are logically related to each other. Relationships like one-to-one, one-to-many, etc., can be represented by using two different models:

// Embedded document model
// Reference model
// Q9. What is CAP theorem?
// The CAP theorem, originally introduced as the CAP principle, can be used to explain some of the competing requirements in a distributed system with replication. It is a tool used to make system designers aware of the trade-offs while designing networked shared-data systems. 

// Q10. What is Indexing in MongoDB?
// MongoDB uses indexing in order to make the query processing more efficient. If there is no indexing, then the MongoDB must scan every document in the collection and retrieve only those documents that match the query. Indexes are special data structures that stores some information related to the documents such that it becomes easy for MongoDB to find the right data file.