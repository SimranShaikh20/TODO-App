from fastapi import APIRouter
from model.todos import Todo
from config.database import collection_name
from schema.schemas import list_serial, individual_serial
from bson import ObjectId

router = APIRouter()    
@router.get("/todos")
async def get_todos():
    todos = list(collection_name.find())  # <--- convert cursor to list
    return list_serial(todos)

@router.post("/todos")
async def post_todo(todo: Todo):
   collection_name.insert_one(dict(todo))
   return {"message": "Todo added successfully"}

@router.put("/todos/{id}")
async def put_todo(id: str, todo: Todo):
    collection_name.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(todo)})
    return {"message": "Todo updated successfully"}

@router.delete("/todos/{id}")
async def delete_todo(id: str):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})
    return {"message": "Todo deleted successfully"}   