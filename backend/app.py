from flask import Flask, request, jsonify
from flask_cors import CORS
from recommend import recommend_movies
import pickle

app = Flask(__name__)
CORS(app)

# Load dataset once (for suggestions)
similarity, df = pickle.load(open("model/model.pkl", "rb"))

# 🔹 Home route
@app.route("/")
def home():
    return "Backend is running"

# 🔹 Recommendation route
@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    movie = data.get("movie", "")

    results = recommend_movies(movie)

    return jsonify({"recommendations": results})

# 🔹 Movie list for search suggestions
@app.route("/movies", methods=["GET"])
def get_movies():
    return jsonify({"movies": df['title'].tolist()})

if __name__ == "__main__":
    app.run(debug=True)