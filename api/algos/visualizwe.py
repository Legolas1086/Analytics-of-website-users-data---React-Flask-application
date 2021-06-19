import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt


def users_by_browser():
    parameter = input()
    i = 1
    if parameter == "users":
        i = 1
    elif parameter == "new users":
        i = 2

    elif parameter == "engaged sessions":
        i = 3       

    data = pd.read_csv('./processed_data/browser_aggregate.csv',comment='#')
    labels = ['Chrome','Firefox','Safari','Android','Edge','Others']
    x = [data.iloc[0,i],data.iloc[1,i],data.iloc[2,i],data.iloc[5,i]+data.iloc[6,i]+data.iloc[7,i],data.iloc[3,i],data.iloc[8,i]+data.iloc[9,i]+
        data.iloc[10,i]+data.iloc[11,i]+data.iloc[4,i]]

    explode = [0.2,0.2,0.2,0.2,0.2,0.2]    
    plt.pie(x,labels=labels,explode=explode,autopct='%1.0f%%',pctdistance=1.1,labeldistance=1.3,shadow=True)
    plt.legend()
    plt.show()
    


def searchPatterns():
    data = pd.read_csv('./processed_data/search_pattern.csv',comment='#')
    print(data.head())
    plt.plot(data.iloc[:,0],data.iloc[:,1],color='blue',label='Google suggestion')
    plt.plot(data.iloc[:,0],data.iloc[:,3],color='green',label='Through referals/link')
    plt.plot(data.iloc[:,0],data.iloc[:,2],color='red',label='Boolmarks/direct url on to search bar')
    plt.xlabel('Day')
    plt.ylabel('Number of users')
    plt.legend()
    plt.show()



if __name__=="__main__":
    #searchPatterns()
    users_by_browser()