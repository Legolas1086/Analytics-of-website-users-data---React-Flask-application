from fbprophet.plot import add_changepoints_to_plot
from matplotlib.pyplot import plot
import numpy as np 
import pandas as pd 
import matplotlib.pylab as plt
from pandas.core.indexes import period
from fbprophet import Prophet
from fbprophet.plot import add_changepoints_to_plot

def prepare_data(i):
    data = pd.read_csv('./processed_data/users.csv',comment='#')
    #print(data.head())
    train_data=pd.DataFrame()
    train_data['ds'] = pd.to_datetime(data['Day'])
    train_data['y'] = data[i]
    return train_data


def timeSeries(i):
    train_data = prepare_data(i)
    prophecy = Prophet()
    prophecy.fit(train_data)
    future_dates = prophecy.make_future_dataframe(periods=100)
    #print(future_dates.tail())
    future = prophecy.predict(future_dates)
    fig1 = prophecy.plot(future)
    plt.savefig('./static/phrophecy.png')
    #plt.show()
    fig2 = add_changepoints_to_plot(fig1.gca(),prophecy,future)
    plt.savefig('./static/changepoints.png')
    #plt.show()
    fig3 = prophecy.plot_components(future).savefig('./static/plots.png')
    #plt.show()

if __name__=="__main__":
    i = input()
    timeSeries(i)    