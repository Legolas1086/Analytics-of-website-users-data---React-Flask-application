import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt 
from sklearn.cluster import KMeans


def k_means(i):
    data = pd .read_csv('./processed_data/country.csv',comment='#')
    #print(data.loc[:,[i]])
    model = KMeans(n_clusters=5,init='k-means++',random_state=42)
    x = data.loc[:,i].values.reshape(-1,1)
    y = model.fit_predict(x)
    countries = data.iloc[:,0]
    #print(y)
    category1=[]
    category2=[]
    category3=[]
    category4=[]
    category5=[]
    for i in range(len(x)):
        if y[i]==1:
            category1.append({'country':countries[i],'parameter':int(x[i,0])})

        elif y[i]==2:
            category2.append({'country':countries[i],'parameter':int(x[i,0])})   

        elif y[i]==3:
            category3.append({'country':countries[i],'parameter':int(x[i,0])})

        elif y[i]==4:
            category4.append({'country':countries[i],'parameter':int(x[i,0])})

        else:
            category5.append({'country':countries[i],'parameter':int(x[i,0])})   

    result = [{'name':'category1','details':category1},
              {'name':'category2','details':category2},
              {'name':'category3','details':category3},
              {'name':'category4','details':category4},
              {'name':'category5','details':category5}]     

    return result        

   


if __name__=="__main__":
    i = input()
    result = k_means(i)