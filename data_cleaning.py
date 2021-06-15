import numpy as np 
import pandas as pd
import csv

def get_headers():
    fp = open('./unprocessed_data/acquisition.csv')
    rdr = csv.DictReader(filter(lambda row:row[0]!='#',fp))
    for i in rdr:
        print(i)

    fp.close()    
    


#def remove_comment():
 #   data = pd.read_csv('./unprocessed_data/acquisition.csv',comment='#',chunksize=20)
  #  for i in data:
   
   #     print(i)


if __name__=="__main__":
    get_headers()