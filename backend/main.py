from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Review(BaseModel):
    text: str

@app.post("/analyze")
async def analyze_sentiment(review: Review):
    # Dummy sentiment logic (placeholder for real model)
    text = review.text.lower()
    if "good" in text or "love" in text or "great" in text:
        sentiment = "Positive"
    elif "bad" in text or "hate" in text or "terrible" in text:
        sentiment = "Negative"
    else:
        sentiment = "Neutral"
    return {"sentiment": sentiment}
