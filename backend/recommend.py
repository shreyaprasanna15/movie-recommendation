import pickle

similarity, df = pickle.load(open("model/model.pkl", "rb"))

def recommend_movies(movie_name):
    movie = df[df['title'].str.lower() == movie_name.lower()]

    if movie.empty:
        movie = df[df['title'].str.lower().str.contains(movie_name.lower())]

    if movie.empty:
        return ["Movie not found"]

    idx = movie.index[0]

    # Get similarity scores
    scores = list(enumerate(similarity[idx]))

    # Sort by similarity
    scores = sorted(scores, key=lambda x: x[1], reverse=True)

    # Get top 6 similar movies (skip itself)
    movie_indices = [i[0] for i in scores[1:20]]

    return df['title'].iloc[movie_indices].tolist()