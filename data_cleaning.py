import numpy as np 
import pandas as pd



data = pd.read_csv('./processed_data/new_users.csv')
ru = pd.read_csv('./processed_data/returning_users.csv')
ret = ru['Returning users']
print(ret) 


data['Returning users'] = ret
print(data.head())
data.to_csv('users.csv')