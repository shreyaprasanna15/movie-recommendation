import pandas as pd
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load data
df = pd.read_csv("data/movies.csv").head(5000)

# Fill missing values
df['genres'] = df['genres'].fillna('')
df['overview'] = df['overview'].fillna('')
df['keywords'] = df['keywords'].fillna('')

# Combine features
df['combined'] = df['genres'] + " " + df['overview'] + " " + df['keywords']

# TF-IDF
tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(df['combined'])

# Compute similarity matrix
similarity = cosine_similarity(tfidf_matrix)

# Save everything
pickle.dump((similarity, df), open("model/model.pkl", "wb"))

print("Model trained successfully!")