from pymongo import MongoClient

client= MongoClient("mongodb+srv://simran:simran12345@todoappdata.wve6xak.mongodb.net/?retryWrites=true&w=majority&appName=TodoAppData")
db=client.todo_db
collection_name=db["todo_collection"]