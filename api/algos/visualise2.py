import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt

def searchPatterns():
    data = pd.read_csv('./processed_data/search_pattern.csv',comment='#')
    print(data.head())
    plt.plot(data.iloc[:,0],data.iloc[:,1],color='blue',label='Google suggestion')
    plt.plot(data.iloc[:,0],data.iloc[:,3],color='green',label='Through referals/link')
    plt.plot(data.iloc[:,0],data.iloc[:,2],color='red',label='Boolmarks/direct url on to search bar')
    plt.xlabel('Day')
    plt.ylabel('Number of users')
    plt.legend()
    plt.savefig('./static/line.png')