import os
import pandas

data = pandas.read_csv('./api/processed_data/users.csv')
print(data.head())