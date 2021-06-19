import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt 
from sklearn.cluster import KMeans


def k_means(i):
    data = pd .read_csv('./processed_data/country.csv',comment='#')
    print(data.iloc[:,-1])
    model = KMeans(n_clusters=5,init='k-means++',random_state=42)
    x = data.loc[:,i].values.reshape(-1,1)
    y = model.fit_predict(x)
    print(y)


if __name__=="__main__":
    i = input()
    k_means(i)