#  Movie Recommendation System (Unsupervised Learning)

##  Project Overview

This project is a **Movie Recommendation System** built using **Unsupervised Learning techniques**. It suggests similar movies based on content such as genres, overview, keywords, and tagline.

The system was initially built using clustering (K-Means) and later improved using **Cosine Similarity**, which provides more accurate and ranked recommendations.

---

## Concepts Used

* Unsupervised Learning : Learning patterns from unlabeled data
* Content-Based Filtering : Recommending items based on their features
* TF-IDF Vectorization : Converts text into weighted numerical vectors
* Cosine Similarity : Measures similarity between vectors

---

## Dataset

* Source: Kaggle (TMDB Movies Dataset)
* Features used:

  * Title
  * Genres
  * Overview
  * Keywords
  * Tagline

The dataset is preprocessed by combining these features into a single textual representation.

---

##  Tech Stack

### Backend

* Python
* Flask
* Pandas
* Scikit-learn
* NumPy

### Frontend

* React.js
* Axios
* CSS (Baby Pink Netflix-style UI)

---

## 📁 Project Structure

```id="a7j3dl"
movie-recommendation/
│
├── backend/
│   ├── data/
│   │   └── movies.csv
│   ├── model/
│   │   └── model.pkl
│   ├── app.py
│   ├── train_model.py
│   ├── recommend.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── components/
│   │   │   ├── SearchBar.js
│   │   │   ├── Recommendations.js
│   ├── package.json
```

---

##  How to Run the Project

###  Step 1: Backend Setup

```bash id="c3q4yk"
cd backend
pip install -r requirements.txt
```


### Step 2: Train the Model

```bash id="c3q4yl"
python train_model.py
```

---

### Step 3: Run Backend

```bash id="c3q4ym"
python app.py
```

Backend will run at:

```id="c3q4yn"
http://127.0.0.1:5000
```

---

###  Step 4: Frontend Setup

```bash id="c3q4yo"
cd frontend
npm install
npm start
```

Frontend will run at:

```id="c3q4yp"
http://localhost:3000
```

---

## How It Works

1. User types a movie name in the search bar
2. Search suggestions appear dynamically
3. User selects or searches a movie
4. Frontend sends request to backend API
5. Backend:

   * Finds the closest matching movie (exact + partial match)
   * Converts features into vectors using TF-IDF
   * Computes similarity using cosine similarity
6. Returns top similar movies
7. Frontend displays results in a card-based UI

---

## Features

*  Smart search with suggestions
*  Content-based movie recommendations
*  Real-time API communication
*  Baby pink Netflix-style UI
*  Loading states and empty states
*  Ranked recommendations (based on similarity)

---

## Smart Recommendation Logic

* Exact match prioritized
* Partial match fallback
* Short queries act as search (not recommendation)
* Top similar movies are ranked using cosine similarity

---

## Limitations

* No user-based personalization
* Recommendations depend only on content
* Large datasets may increase computation time

---

## Future Enhancements

* Add movie posters using APIs
* Add filters (genre, year, rating)
* Improve recommendation using hybrid models
* Add user login & personalization
* Deploy the project online

---

## Conclusion

This project demonstrates how **unsupervised learning** can be used to build a real-world recommendation system.

By combining **machine learning + full-stack development**, it provides an interactive and intelligent movie recommendation experience.

---

## Author

Developed as part of an academic project on **Unsupervised Learning**

---

## Acknowledgement

* Dataset from Kaggle
* Libraries: Scikit-learn, Flask, React
