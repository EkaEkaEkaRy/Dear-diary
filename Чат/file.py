import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import TruncatedSVD
from sklearn.neighbors import BallTree
from sklearn.base import BaseEstimator
from sklearn.pipeline import make_pipeline

def softmax(x):
    proba = np.exp(-x)
    return proba / sum(proba)

class NeighborSampler(BaseEstimator):
    def __init__(self, k=5, temperature=1.0):
        self.k = k
        self.temperature = temperature

    def fit (self, X, y):
        self.tree_ = BallTree(X)
        self.y_ = np.array(y)

    def predict(self, X, random_state=None):
        distances, indices = self.tree_.query(X, return_distance=True, k=self.k)
        result = []
        for distance, index in zip(distances, indices):
            result.append(np.random.choice(index, p=softmax(distance * self.temperature)))
        return self.y_[result]


good = pd.read_csv('good.tsv', sep='\t')

vectorizer = TfidfVectorizer()
vectorizer.fit(good.context_0)

matrix_big = vectorizer.transform(good.context_0)

svd = TruncatedSVD(n_components=300)
svd.fit(matrix_big)
matrix_small = svd.transform(matrix_big)

ns = NeighborSampler()
ns.fit(matrix_small, good.reply)
pipe = make_pipeline(vectorizer, svd, ns)


while True:
    a = input(">>>\t")
    if a != "0":
        s = pipe.predict([a])[0]
        answer = ''
        for i in range(len(s) - 1):
            if s[i + 1] not in ['.', ',', '!', '?', ':']:
                answer += s[i]
        print(answer)
    else:
        break