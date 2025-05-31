
from routes.route import router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or specify ["http://localhost:3000"] for your React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router)

# from pymongo.mongo_client import MongoClient
# from pymongo.server_api import ServerApi

# uri = "mongodb+srv://simran:simran12345@todoappdata.wve6xak.mongodb.net/?retryWrites=true&w=majority&appName=TodoAppData"

# # Create a new client and connect to the server
# client = MongoClient(uri, server_api=ServerApi('1'))

# # Send a ping to confirm a successful connection
# try:
#     client.admin.command('ping')
#     print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#     print(e)
